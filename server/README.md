# 🚀 Macflix Backend Server

Premium lead generation backend for Macflix with automatic PDF quotation generation and email automation.

## Features

✅ Lead Management (Create, Read, Update, Track)
✅ Auto-generated PDF Quotations
✅ Email Automation with Attachments
✅ Consultation Booking System
✅ Admin Analytics Dashboard
✅ MongoDB Database Integration

## Tech Stack

- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Email**: Nodemailer (Gmail SMTP)
- **PDF**: PDFKit
- **Validation**: Built-in validation
- **ID Generation**: UUID

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the server directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/macflix
EMAIL_USER=yashmachhi1408@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
```

### Get Gmail App Password

1. Enable 2-Factor Authentication on Gmail
2. Visit: https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer"
4. Copy the 16-character password
5. Add to `.env` as `EMAIL_PASS`

## Running

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Leads

**POST /api/leads** - Create new lead & auto-generate quotation
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "whatsapp": "9876543210",
  "businessName": "Acme Corp",
  "businessType": "Startup",
  "selectedServices": ["Design & Branding"],
  "budget": "5k-20k",
  "timeline": "1-2 weeks",
  "goals": ["Branding", "Growth"],
  "requirements": "Need brand identity kit"
}
```

**GET /api/leads** - Get all leads (admin)

**GET /api/leads/:id** - Get specific lead

### Quotations

Quotations are auto-generated when a lead is created. They include:
- Client information
- Selected services
- Estimated price range
- Deliverables list
- Timeline information
- PDF document
- Email notification

### Bookings

**POST /api/bookings** - Create consultation booking
```json
{
  "name": "John Doe",
  "date": "2024-05-25",
  "time": "2:00 PM"
}
```

### Analytics

**GET /api/analytics** - Get dashboard analytics
```json
{
  "totalLeads": 25,
  "quotedLeads": 18,
  "bookedConsultations": 8,
  "conversionRate": "72%",
  "leadsWithoutQuotation": 7
}
```

## Database Schema

### Leads Collection
```javascript
{
  id: String (unique),
  name: String,
  email: String,
  phone: String,
  whatsapp: String,
  businessName: String,
  businessType: String,
  selectedServices: [String],
  budget: String,
  timeline: String,
  goals: [String],
  requirements: String,
  stage: String (new|quoted|consultation|negotiation|closed),
  quotationGenerated: Boolean,
  quotationId: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Quotations Collection
```javascript
{
  id: String (unique),
  leadId: String,
  clientName: String,
  clientEmail: String,
  clientPhone: String,
  services: [String],
  estimatedRange: String,
  deliverables: [String],
  timeline: String,
  pdfPath: String,
  emailSent: Boolean,
  createdAt: Date
}
```

### Bookings Collection
```javascript
{
  id: String (unique),
  name: String,
  date: Date,
  time: String,
  type: String,
  whatsappSent: Boolean,
  createdAt: Date
}
```

## PDF Generation

PDFs are automatically generated for each quotation with:
- Professional Macflix branding
- Client details
- Services list
- Deliverables
- Price range
- Timeline
- Why Macflix section
- Next steps

PDFs are stored in `./quotations/` directory.

## Email Automation

When a lead is created:
1. Lead is saved to MongoDB
2. Quotation is generated
3. PDF is created
4. Email is sent with:
   - Personalized greeting
   - Quotation summary
   - PDF attachment
   - WhatsApp CTA
   - Next steps

## Error Handling

Server includes error handling for:
- MongoDB connection failures
- Email sending failures
- PDF generation errors
- Invalid input data
- Missing environment variables

## Deployment

### Render.com (Recommended - Free)

1. Push code to GitHub
2. Connect Render.com
3. Add environment variables
4. Auto-deploy on push

### Railway

1. Connect GitHub account
2. Select repository
3. Add environment variables
4. Deploy

### Heroku (Paid)

```bash
heroku login
heroku create macflix-backend
heroku config:set MONGODB_URI=...
heroku config:set EMAIL_USER=...
heroku config:set EMAIL_PASS=...
git push heroku main
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| **MongoDB not connecting** | Check MONGODB_URI, ensure network access is allowed |
| **Emails not sending** | Verify app password (not Gmail password), enable 2FA |
| **Port 5000 in use** | Change PORT in .env or kill process using port |
| **PDF not generating** | Ensure `quotations` directory is writable |

## File Structure

```
server/
├── index.js           # Main server file
├── package.json       # Dependencies
├── .env.example       # Environment template
├── .env               # Environment variables (create this)
├── .gitignore         # Git ignore rules
├── quotations/        # Generated PDFs (created automatically)
└── README.md          # This file
```

## Next Steps

- [ ] Deploy backend to production
- [ ] Setup MongoDB Atlas
- [ ] Configure Gmail app password
- [ ] Test all API endpoints
- [ ] Integrate with frontend
- [ ] Monitor analytics
- [ ] Setup admin authentication
- [ ] Add WhatsApp API integration

## Support

Email: yashmachhi1408@gmail.com
Phone: 8780364562

---

Built with ❤️ for Macflix
