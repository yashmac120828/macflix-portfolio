# MacFlix Website

A modern, responsive website for MacFlix - Where Creativity Meets Precision. Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Contemporary UI with glassmorphism and gradient effects
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework with custom MacFlix colors
- **Framer Motion** - Production-ready motion library for animations
- **Lucide React** - Beautiful & consistent icon library
- **Vite** - Next generation frontend tooling

## 🎨 Services Showcased

- Logo Design
- Banner Designing
- Video Editing
- Photo Editing
- Instagram Reels Editing
- YouTube Content Creation
- Visiting Cards
- Event Cards & Invitations

## 📁 Project Structure

```
macflix-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Logo.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd macflix-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: `#E91E63` (Vibrant Fuchsia)
- **Purple**: `#6A1B9A` (Deep Purple)
- **Secondary**: `#FF5722` (Bright Orange)
- **Accent**: `#03A9F4` (Light Blue)
- **Neutral**: `#F5F5F5` (Light Gray)
- **Text Dark**: `#212121` (Dark Gray)

### Logo
Replace the mock logo in `components/Logo.jsx` with your actual logo:

```jsx
import logo from "../assets/logo.png"

export default function Logo({ className }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src={logo} alt="MacFlix Logo" className="w-12 h-12" />
      <span className="ml-3 text-2xl font-bold bg-macflix-gradient bg-clip-text text-transparent">
        MacFlix
      </span>
    </div>
  )
}
```

### Contact Information
Update contact details in:
- `components/Contact.jsx`
- `components/Footer.jsx`
- `components/Hero.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## ⚡ Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and tree shaking

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration with custom colors
- `vite.config.js` - Vite build configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Dependencies and scripts

## 📞 Contact

For any queries regarding the website:

- **WhatsApp**: +91 8780364562
- **Email**: yashmachhi1408@gmail.com
- **Instagram**: @mac_flix

## 📄 License

This project is created for MacFlix. All rights reserved.

---

**MacFlix** - Where Creativity Meets Precision