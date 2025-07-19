# 📧 Contact Form Email Setup Guide

## 🎯 Overview
The contact form now sends emails using **Resend** - a modern, reliable email API service. Here's how to set it up:

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Resend Package
```bash
npm install resend
```

### Step 2: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. **Free tier includes**: 3,000 emails/month, 100 emails/day

### Step 3: Get API Key
1. Go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it "Contact Form"
4. Copy the API key (starts with `re_`)

### Step 4: Add Domain (Optional but Recommended)
1. Go to [Domains](https://resend.com/domains)
2. Add your domain (e.g., `yourdomain.com`)
3. Add the DNS records they provide
4. Wait for verification (usually 5-10 minutes)

### Step 5: Environment Variables
Create `.env.local` file in your project root:

```env
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Email addresses
FROM_EMAIL=noreply@yourdomain.com
OWNER_EMAIL=your-actual-email@gmail.com
```

### Step 6: Update Email Addresses
Edit `src/app/api/contact/route.ts`:

```typescript
// Line 47: Replace with your verified domain
from: 'Phuket Child Seat <noreply@yourdomain.com>',

// Line 48: Replace with owner's actual email
to: ['owner@gmail.com'],
```

## 🎨 What Happens When Form is Submitted

### 1. **Owner Receives Professional Email**
- ✅ **Beautiful HTML format** with customer details
- ✅ **Direct reply functionality** (replies go to customer)
- ✅ **Clickable phone numbers** and email addresses
- ✅ **Thailand timezone** timestamps
- ✅ **Professional branding**

### 2. **Customer Receives Confirmation**
- ✅ **Thank you message** with their original inquiry
- ✅ **Professional branding**
- ✅ **Response time expectations**

### 3. **Form Behavior**
- ✅ **Loading state** while sending
- ✅ **Success/error messages**
- ✅ **Form resets** on successful submission
- ✅ **Validation** for required fields

## 🔧 Alternative Solutions

### Option 2: EmailJS (Client-side, No Backend)
If you prefer a simpler setup without API routes:

1. **Install EmailJS**:
```bash
npm install @emailjs/browser
```

2. **Setup**: Go to [emailjs.com](https://emailjs.com), create account, get service ID

3. **Implementation**: Replace the API route with EmailJS client-side calls

### Option 3: Nodemailer with Gmail
For using Gmail SMTP directly:

1. **Enable 2FA** on Gmail account
2. **Generate App Password** in Google Account settings
3. **Use SMTP settings** with Nodemailer

## 📊 Email Templates

The current setup includes:

### **Owner Email Template**
- Professional table layout
- Customer contact details
- Clickable phone/email links
- Message content with formatting
- Thailand timezone timestamp

### **Customer Confirmation Template**
- Thank you message
- Copy of their inquiry
- Response time expectations
- Professional branding

## 🛠️ Customization

### Change Email Design
Edit the HTML templates in `src/app/api/contact/route.ts`:
- **Lines 20-65**: Owner email template
- **Lines 80-110**: Customer confirmation template

### Add More Fields
1. Update form in `src/app/contact/page.tsx`
2. Add fields to email templates
3. Update validation in API route

### Change Response Times
Update the response time message in both:
- Email templates
- Form success message

## 🔍 Testing

### Test the Form
1. Fill out the contact form
2. Check owner email inbox
3. Check customer email inbox
4. Verify all links work (phone, email, reply)

### Debug Issues
- Check browser console for errors
- Check Vercel/hosting logs for API errors
- Verify environment variables are set
- Check Resend dashboard for delivery status

## 📈 Monitoring

### Resend Dashboard
- View sent emails
- Check delivery status
- Monitor usage limits
- See bounce/complaint rates

### Analytics
- Track form submissions
- Monitor success/error rates
- Analyze customer inquiries

## 🎯 Production Checklist

- [ ] Resend account created
- [ ] API key added to environment variables
- [ ] Domain verified (if using custom domain)
- [ ] Owner email address updated
- [ ] From email address updated
- [ ] Form tested end-to-end
- [ ] Email templates customized
- [ ] Response time expectations set

## 💡 Pro Tips

1. **Use your own domain** for better deliverability
2. **Test with different email providers** (Gmail, Outlook, etc.)
3. **Monitor bounce rates** in Resend dashboard
4. **Keep templates mobile-friendly**
5. **Set up email forwarding** if needed

## 🆘 Support

If you need help:
1. Check Resend documentation: [resend.com/docs](https://resend.com/docs)
2. Test API endpoint directly: `/api/contact`
3. Check environment variables are loaded
4. Verify DNS records for custom domain

---

**Ready to go!** 🚀 Your contact form will now send professional emails to both you and your customers.
