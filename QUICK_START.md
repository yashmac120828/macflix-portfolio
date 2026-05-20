# ⚡ Quick Start Guide - Macflix Lead Funnel

## 🎯 5-Minute Setup

### Step 1: Install Dependencies
```bash
# Frontend
npm install

# Backend  
cd server
npm install
cd ..
```

### Step 2: Setup MongoDB
- Use MongoDB Atlas (free cloud): https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get connection string

### Step 3: Setup Email (Gmail)
1. Enable 2-Factor Authentication
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" → "Windows Computer"
4. Copy the 16-char password

### Step 4: Create Backend .env
```bash
cd server
# Copy example and fill in values
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/macflix
EMAIL_USER=yashmachhi1408@gmail.com
EMAIL_PASS=your_16_char_app_password
FRONTEND_URL=http://localhost:5173
```

### Step 5: Start Everything

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Visit `http://localhost:5173` 🎉

## 🔗 Key URLs

| What | URL |
|------|-----|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:5000 |
| API | http://localhost:5000/api |
| Admin Dashboard | http://localhost:5000/admin |

## 📧 Test Email

Fill the lead form with:
- **Email**: your_email@gmail.com (or any test email)
- All other fields required

Check email for automated quotation PDF!

## 🚀 API Endpoints (Test with Postman)

### Create Lead
```
POST http://localhost:5000/api/leads
Content-Type: application/json

{
  "name": "Test User",
  "email": "test@example.com",
  "phone": "9876543210",
  "whatsapp": "9876543210",
  "businessName": "Test Biz",
  "businessType": "Startup",
  "selectedServices": ["Design & Branding"],
  "budget": "5k-20k",
  "timeline": "1-2 weeks",
  "goals": ["Branding"],
  "requirements": "Test requirements"
}
```

### Get All Leads
```
GET http://localhost:5000/api/leads
```

### Get Analytics
```
GET http://localhost:5000/api/analytics
```

## ❌ Common Issues

| Issue | Solution |
|-------|----------|
| **MongoDB connection failed** | Check MongoDB is running & connection string correct |
| **Email not sending** | Verify app password (not regular Gmail password), enable 2FA |
| **Vite proxy not working** | Check vite.config.js has proxy config, restart dev server |
| **CORS errors** | Backend CORS middleware should handle it, check console |

## 📊 Access Admin Dashboard

Create a route to view admin data:
```
GET http://localhost:5000/api/analytics
GET http://localhost:5000/api/leads
```

Or use the AdminDashboard.jsx component (integrate into App.jsx as needed)

## 🎨 Customize

- **Colors**: Update tailwind classes in components
- **Pricing**: Edit `pricingEngine` in `server/index.js`
- **Email Template**: Modify `sendQuotationEmail()` in `server/index.js`
- **PDF Design**: Edit `generateQuotationPDF()` in `server/index.js`

## 🚀 Deploy

### Frontend to Vercel
```bash
npm run build
# Auto-deployed, set API_URL environment variable
```

### Backend to Render/Railway
1. Push to GitHub
2. Connect Render/Railway
3. Add environment variables
4. Deploy

## 📞 Support

Email: yashmachhi1408@gmail.com
Phone: 8780364562

---

**🎉 You're ready! Start converting leads!**
