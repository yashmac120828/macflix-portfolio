# Testimonial Popup Setup Instructions

## Overview
I've successfully implemented a testimonial popup system that appears to first-time visitors and integrates with your existing Google Sheets testimonial system.

## What's Been Implemented

### 1. TestimonialPopup Component (`src/components/TestimonialPopup.jsx`)
- **Interactive star rating system** (1-5 stars)
- **Form fields**: Name (required), Role/Company (optional), Testimonial (required)
- **Success animation** with auto-close after submission
- **Responsive design** with Framer Motion animations
- **Close button** for users who don't want to submit

### 2. App Integration (`src/App.jsx`)
- **First-visit detection** using localStorage
- **3-second delay** before showing popup (better UX)
- **One-time display** per visitor
- **Proper state management** for popup visibility

### 3. Google Sheets Integration
- Uses your existing **VITE_API_KEY**, **VITE_SHEET_ID**, and **VITE_FORM_URL**
- **Primary method**: Direct form submission via Google Forms API
- **Fallback method**: Opens pre-filled Google Form in new tab
- **Error handling**: If submission fails, falls back to opening form

## Setup Required

### 1. Environment Configuration
Create a `.env` file in your project root with:
```
VITE_API_KEY=your_google_api_key_here
VITE_SHEET_ID=your_google_sheet_id_here
VITE_FORM_URL=your_google_form_url_here
```

### 2. Google Form Field Mapping
The popup uses these field entry IDs (you may need to adjust them):
- `entry.2005620554` - Name field
- `entry.1045781291` - Role field
- `entry.1277348907` - Content field
- `entry.1166974658` - Rating field
- `entry.1351049321` - Date field

**To find correct field IDs:**
1. Open your Google Form
2. Right-click on each form field
3. Select "Inspect Element"
4. Look for `name="entry.XXXXXXXX"` in the HTML
5. Update the field IDs in `TestimonialPopup.jsx`

## User Experience Flow

1. **First Visit**: User arrives on your website
2. **3-Second Delay**: Popup appears after page loads completely
3. **Interaction Options**:
   - Fill form and submit testimonial
   - Close popup (won't show again)
4. **After Submission**: Success message displays, popup auto-closes
5. **Future Visits**: Popup won't appear again (localStorage tracking)

## Features

### Design Features
- **Beautiful animations** using Framer Motion
- **Interactive star ratings** with hover effects
- **Gradient backgrounds** matching your site theme
- **Responsive layout** works on all devices
- **Success state** with checkmark animation

### Technical Features
- **localStorage persistence** - shows only once per visitor
- **Form validation** - requires name, testimonial, and rating
- **Error handling** - graceful fallbacks if submission fails
- **Character counter** - helps users stay within limits
- **Auto-close timer** - popup closes automatically after success

### Integration Features
- **Google Sheets sync** - testimonials go to your existing sheet
- **Approval workflow** - works with your existing approval system
- **Dual submission** - tries direct submission first, falls back to form opening

## Testing the Popup

1. **Clear localStorage** to test first-visit experience:
   - Open browser DevTools (F12)
   - Go to Application/Storage tab
   - Find localStorage for your domain
   - Delete `hasSeenTestimonialPopup` key
   - Refresh page

2. **Test form submission**:
   - Fill out all required fields
   - Submit and verify data appears in Google Sheets
   - Check both success and error scenarios

## Customization Options

### Timing Adjustments
In `App.jsx`, change the delay time:
```jsx
setTimeout(() => {
  setShowTestimonialPopup(true)
}, 3000) // Change 3000 to desired milliseconds
```

### Styling Modifications
The popup uses Tailwind CSS classes and can be customized in:
- Colors: Update gradient classes
- Sizes: Modify `max-w-md` and padding classes
- Animations: Adjust Framer Motion properties

### Content Updates
Update text, placeholders, and labels in `TestimonialPopup.jsx`

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled
- Uses modern CSS features (Grid, Flexbox, Backdrop-filter)

The testimonial popup is now ready and integrated with your existing system! 🎉