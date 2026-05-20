import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
import PDFDocument from 'pdfkit'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import path from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/macflix'

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

// ============ SCHEMAS ============

const LeadSchema = new mongoose.Schema({
  id: { type: String, unique: true, default: () => uuidv4() },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  whatsapp: { type: String, required: true },
  businessName: { type: String, required: true },
  businessType: { type: String },
  selectedServices: [String],
  budget: String,
  timeline: String,
  goals: [String],
  requirements: String,
  stage: { type: String, default: 'new' },
  quotationGenerated: { type: Boolean, default: false },
  quotationId: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const QuotationSchema = new mongoose.Schema({
  id: { type: String, unique: true, default: () => uuidv4() },
  leadId: String,
  clientName: String,
  clientEmail: String,
  clientPhone: String,
  services: [String],
  estimatedRange: String,
  deliverables: [String],
  timeline: String,
  pdfPath: String,
  emailSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

const BookingSchema = new mongoose.Schema({
  id: { type: String, unique: true, default: () => uuidv4() },
  name: String,
  date: Date,
  time: String,
  type: { type: String, default: 'consultation' },
  whatsappSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

const Lead = mongoose.model('Lead', LeadSchema)
const Quotation = mongoose.model('Quotation', QuotationSchema)
const Booking = mongoose.model('Booking', BookingSchema)

// ============ EMAIL CONFIGURATION ============

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Test email configuration
console.log('📧 Email Configuration:')
console.log('  User:', process.env.EMAIL_USER)
console.log('  Pass:', process.env.EMAIL_PASS ? '✓ SET' : '❌ NOT SET')

// Verify email transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error)
  } else {
    console.log('✓ Email transporter is ready')
  }
})

// ============ PDF GENERATION ============

async function generateQuotationPDF(lead, quotation) {
  return new Promise((resolve, reject) => {
    try {
      const fileName = `quotation_${quotation.id}.pdf`
      const filePath = path.join(process.cwd(), 'quotations', fileName)

      // Ensure directory exists
      if (!fs.existsSync(path.join(process.cwd(), 'quotations'))) {
        fs.mkdirSync(path.join(process.cwd(), 'quotations'), { recursive: true })
      }

      const doc = new PDFDocument({ margin: 50 })
      const stream = fs.createWriteStream(filePath)

      doc.pipe(stream)

      // Header
      doc.fontSize(24).font('Helvetica-Bold').text('MACFLIX', 50, 50)
      doc.fontSize(10).font('Helvetica').text('Premium Digital Solutions', 50, 80)
      doc.fontSize(9).fillColor('#999').text('Email: yashmachhi1408@gmail.com | Phone: 8780364562', 50, 95)

      // Quotation Title
      doc.moveTo(50, 110).lineTo(550, 110).stroke()
      doc.fontSize(16).font('Helvetica-Bold').fillColor('#000').text('QUOTATION', 300, 130)
      doc.fontSize(9).font('Helvetica').text(`Quotation ID: ${quotation.id}`, 50, 160)
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 50, 175)

      // Client Info
      doc.fontSize(11).font('Helvetica-Bold').text('BILL TO:', 50, 210)
      doc.fontSize(10).font('Helvetica').text(lead.name, 50, 230)
      doc.text(`${lead.businessName} (${lead.businessType})`, 50, 245)
      doc.text(`Email: ${lead.email}`, 50, 260)
      doc.text(`Phone: ${lead.phone}`, 50, 275)

      // Services Section
      doc.fontSize(11).font('Helvetica-Bold').text('SERVICES & DELIVERABLES:', 50, 310)
      let yPos = 330
      quotation.deliverables.forEach((deliverable, idx) => {
        doc.fontSize(10).font('Helvetica').text(`${idx + 1}. ${deliverable}`, 70, yPos)
        yPos += 20
      })

      // Pricing Section
      yPos += 10
      doc.fontSize(11).font('Helvetica-Bold').text('ESTIMATED INVESTMENT:', 50, yPos)
      yPos += 20
      doc.fontSize(10).font('Helvetica').text(`Price Range: ${quotation.estimatedRange}`, 70, yPos)
      yPos += 20
      doc.fillColor('#666').text(`(Exact pricing after detailed discussion)`, 70, yPos)

      // Timeline
      yPos += 20
      doc.fillColor('#000').fontSize(11).font('Helvetica-Bold').text('TIMELINE:', 50, yPos)
      doc.fontSize(10).font('Helvetica').text(`Estimated: ${quotation.timeline}`, 70, yPos + 20)

      // Why Macflix Section
      yPos += 50
      doc.fontSize(11).font('Helvetica-Bold').text('WHY CHOOSE MACFLIX:', 50, yPos)
      const whyPoints = [
        '✓ Brand-focused execution with strategy',
        '✓ AI-powered workflows for better efficiency',
        '✓ Multiple revisions and consultation support',
        '✓ Cross-platform expertise and scalable systems'
      ]
      yPos += 20
      whyPoints.forEach(point => {
        doc.fontSize(9).font('Helvetica').text(point, 70, yPos)
        yPos += 15
      })

      // Next Steps
      yPos += 15
      doc.fontSize(11).font('Helvetica-Bold').text('NEXT STEPS:', 50, yPos)
      yPos += 20
      doc.fontSize(9).font('Helvetica').text('1. Review this quotation', 70, yPos)
      doc.text('2. Schedule a free consultation call', 70, yPos + 15)
      doc.text('3. Finalize project details and timeline', 70, yPos + 30)
      doc.text('4. Project kickoff', 70, yPos + 45)

      // Footer
      doc.fontSize(8).fillColor('#999').text('This quotation is valid for 7 days from the date above.', 50, 700)
      doc.text('For questions or clarifications, contact us at yashmachhi1408@gmail.com or 8780364562', 50, 715)

      doc.end()

      stream.on('finish', () => {
        resolve(filePath)
      })

      stream.on('error', (err) => {
        reject(err)
      })
    } catch (error) {
      reject(error)
    }
  })
}

// ============ ROUTES ============

// Create Lead & Generate Quotation
app.post('/api/leads', async (req, res) => {
  try {
    console.log('\n================================')
    console.log('📝 NEW LEAD SUBMISSION')
    console.log('================================')
    console.log('Received data:', JSON.stringify(req.body, null, 2))

    const leadData = req.body

    // Create lead
    console.log('💾 Creating lead in database...')
    const lead = new Lead({
      ...leadData,
      stage: 'new'
    })

    await lead.save()
    console.log('✅ Lead saved:', lead.id)

    // Generate quotation
    console.log('📋 Creating quotation...')
    const quotation = new Quotation({
      leadId: lead.id,
      clientName: lead.name,
      clientEmail: lead.email,
      clientPhone: lead.phone,
      services: lead.selectedServices,
      estimatedRange: getPriceRange(lead.budget),
      deliverables: generateDeliverables(lead.businessType, lead.selectedServices),
      timeline: lead.timeline || '1-2 weeks'
    })

    await quotation.save()
    console.log('✅ Quotation created:', quotation.id)

    // Generate PDF
    console.log('📄 Generating PDF...')
    const pdfPath = await generateQuotationPDF(lead, quotation)
    console.log('✅ PDF generated:', pdfPath)

    quotation.pdfPath = pdfPath
    await quotation.save()

    // Send Email with PDF
    console.log('📧 Initiating email send...')
    await sendQuotationEmail(lead, quotation, pdfPath)

    // Update lead
    lead.quotationGenerated = true
    lead.quotationId = quotation.id
    lead.stage = 'quoted'
    await lead.save()

    console.log('✅ All operations completed successfully!')
    console.log('================================\n')

    res.json({
      success: true,
      leadId: lead.id,
      quotationId: quotation.id,
      message: 'Lead created and quotation sent successfully'
    })
  } catch (error) {
    console.error('❌ Error creating lead:', error)
    console.error('  Stack:', error.stack)
    res.status(500).json({ success: false, error: error.message })
  }
})

// Send Quotation Email
async function sendQuotationEmail(lead, quotation, pdfPath) {
  try {
    console.log('\n📧 Starting email send process...')
    console.log('  To:', lead.email)
    console.log('  Lead:', lead.name)
    console.log('  PDF Path:', pdfPath)
    console.log('  PDF Exists:', fs.existsSync(pdfPath))

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: lead.email,
      subject: 'Your Macflix Proposal Is Ready',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hi ${lead.name},</h2>
          
          <p style="color: #666; line-height: 1.6;">
            Thank you for choosing Macflix! Your customized quotation is attached below.
          </p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">[Quotation Summary]</h3>
            <p style="color: #666;"><strong>Services:</strong> ${quotation.services.join(', ')}</p>
            <p style="color: #666;"><strong>Estimated Range:</strong> ${quotation.estimatedRange}</p>
            <p style="color: #666;"><strong>Timeline:</strong> ${quotation.timeline}</p>
          </div>
          
          <h3 style="color: #333;">Next Steps:</h3>
          <ol style="color: #666; line-height: 1.8;">
            <li>Review your customized proposal</li>
            <li>Schedule your free consultation call</li>
            <li>We'll discuss details and lock in the timeline</li>
            <li>Project kickoff within 24-48 hours of confirmation</li>
          </ol>
          
          <p style="color: #666; margin: 20px 0;">
            <strong>Let's chat on WhatsApp:</strong>
            <a href="https://wa.me/918780364562?text=Hi%20Macflix%2C%20I%20received%20my%20quotation%20and%20want%20to%20discuss" 
               style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; margin-left: 10px;">
              Message on WhatsApp
            </a>
          </p>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
            Questions? Reach out anytime:<br>
            Email: yashmachhi1408@gmail.com<br>
            Phone: 8780364562
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `quotation_${quotation.id}.pdf`,
          path: pdfPath
        }
      ]
    }

    console.log('📤 Sending email with transporter.sendMail()...')
    const result = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully!')
    console.log('  Response:', result.response)
    
    quotation.emailSent = true
    await quotation.save()
    console.log('✅ Quotation marked as emailed in database')
  } catch (error) {
    console.error('❌ Error sending email:', error)
    console.error('  Error code:', error.code)
    console.error('  Error message:', error.message)
  }
}

// Get all leads (Admin Dashboard)
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 })
    res.json(leads)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get lead details
app.get('/api/leads/:id', async (req, res) => {
  try {
    const lead = await Lead.findOne({ id: req.params.id })
    if (!lead) return res.status(404).json({ error: 'Lead not found' })
    res.json(lead)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Book consultation
app.post('/api/bookings', async (req, res) => {
  try {
    const booking = new Booking({
      name: req.body.name,
      date: new Date(req.body.date),
      time: req.body.time
    })

    await booking.save()

    // Send WhatsApp notification
    const whatsappMessage = `Hi! 🎉 ${req.body.name} has booked a consultation for ${new Date(req.body.date).toLocaleDateString()} at ${req.body.time}`
    
    res.json({
      success: true,
      bookingId: booking.id,
      message: 'Booking confirmed'
    })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

// Analytics
app.get('/api/analytics', async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments()
    const quotedLeads = await Lead.countDocuments({ stage: 'quoted' })
    const bookedConsultations = await Booking.countDocuments()
    const conversionRate = totalLeads > 0 ? ((quotedLeads / totalLeads) * 100).toFixed(2) : 0

    res.json({
      totalLeads,
      quotedLeads,
      bookedConsultations,
      conversionRate: `${conversionRate}%`,
      leadsWithoutQuotation: totalLeads - quotedLeads
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// ============ HELPER FUNCTIONS ============

function getPriceRange(budget) {
  const ranges = {
    '<5k': '₹2,999–5,999',
    '5k-20k': '₹7,999–20,000',
    '20k-50k': '₹24,999–50,000',
    '50k+': '₹50,000 and above'
  }
  return ranges[budget] || 'Custom pricing'
}

function generateDeliverables(businessType, services) {
  const deliverables = []

  if (services.includes('Design & Branding')) {
    deliverables.push('Brand Identity Kit with logo variations')
    deliverables.push('Color palette and typography system')
    deliverables.push('Social media templates')
  }

  if (services.includes('Video Editing')) {
    deliverables.push('Professional video editing')
    deliverables.push('Multiple format exports (1080p, 4K)')
    deliverables.push('Thumbnails and promotional materials')
  }

  if (services.includes('Websites')) {
    deliverables.push('Fully responsive website design')
    deliverables.push('Mobile optimization')
    deliverables.push('SEO basics setup')
  }

  if (services.includes('AI Services')) {
    deliverables.push('AI-powered creative generation')
    deliverables.push('Automation workflow setup')
    deliverables.push('Integration and testing')
  }

  if (services.includes('Social Media Management')) {
    deliverables.push('Monthly content calendar')
    deliverables.push('Custom designs and captions')
    deliverables.push('Analytics and reporting')
  }

  return deliverables.length > 0 ? deliverables : ['Custom deliverables as discussed']
}

// ============ TEST ENDPOINTS ============

// Health check
app.get('/api/test', (req, res) => {
  console.log('📌 Health check endpoint called')
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    message: 'Server is running!',
    mongodbStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected',
    emailConfigured: !!process.env.EMAIL_USER
  })
})

// Test email send
app.post('/api/test/send-email', async (req, res) => {
  console.log('\n🧪 TEST EMAIL ENDPOINT CALLED')
  console.log('Email config:', {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ? '****' : 'NOT SET'
  })

  const { testEmail } = req.body

  if (!testEmail) {
    return res.status(400).json({ error: 'Please provide testEmail parameter' })
  }

  try {
    console.log('Sending test email to:', testEmail)
    const result = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: testEmail,
      subject: '🧪 Macflix Email Test',
      html: '<h2>Hello!</h2><p>This is a test email from your Macflix backend server.</p><p>If you received this, email is working correctly!</p>'
    })

    console.log('✅ Test email sent successfully!')
    console.log('Result:', result.response)

    res.json({
      success: true,
      message: 'Test email sent successfully!',
      result: result.response
    })
  } catch (error) {
    console.error('❌ Test email error:', error)
    res.status(500).json({
      success: false,
      error: error.message,
      details: {
        code: error.code,
        message: error.message
      }
    })
  }
})

// ============ START SERVER ============

app.listen(PORT, () => {
  console.log('\n================================')
  console.log(`✅ Macflix Server running on port ${PORT}`)
  console.log('================================')
  console.log('\n🧪 TEST ENDPOINTS:')
  console.log(`  1. Health Check:`)
  console.log(`     GET http://localhost:${PORT}/api/test`)
  console.log(`\n  2. Test Email Send:`)
  console.log(`     POST http://localhost:${PORT}/api/test/send-email`)
  console.log(`     Body: { "testEmail": "your-email@example.com" }`)
  console.log('\n================================\n')
})
