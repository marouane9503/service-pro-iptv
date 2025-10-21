# Service Pro IPTV - Local Deployment Guide

## 🎉 SUCCESS! Your Website is Running

Your Service Pro IPTV website has been successfully rebranded and deployed locally!

---

## 🌐 Access Your Website

**Local Development URL:** http://localhost:3000

Open your web browser and visit the URL above to see your rebranded website.

---

## ✅ What Has Been Completed

### **1. Complete Rebranding**
- ✅ All "IPTV ONLINE UK" → "Service Pro IPTV"
- ✅ All "iptvonlineuk.com" → "serviceproiptv.com"
- ✅ Email updated: contact@serviceproiptv.com
- ✅ Social media handle: @serviceproiptv

### **2. Sitemap Fixed**
- ✅ All URLs updated to serviceproiptv.com
- ✅ Proper priority structure (Homepage: 1.0, Pricing: 0.95)
- ✅ WordPress blog integration configured
- ✅ Dynamic blog post sitemaps
- ✅ Robots.txt updated

### **3. SEO Optimized**
- ✅ Meta tags updated
- ✅ OpenGraph tags with new domain
- ✅ Twitter cards updated
- ✅ JSON-LD structured data
- ✅ All canonical URLs point to serviceproiptv.com

### **4. Files Updated**
- ✅ 20+ files modified
- ✅ 80+ brand name replacements
- ✅ 30+ domain URL updates
- ✅ All pages, components, and config files

---

## 🎯 Pages to Verify

Visit these pages to verify the rebranding:

1. **Homepage**
   - http://localhost:3000
   - Check: Hero says "Service Pro IPTV"

2. **About Page**
   - http://localhost:3000/about
   - Check: All company references say "Service Pro IPTV"

3. **Contact Page**
   - http://localhost:3000/contact
   - Check: Email is contact@serviceproiptv.com

4. **Pricing Page**
   - http://localhost:3000/pricing
   - Check: All subscription plans reference "Service Pro IPTV"

5. **Blog Page**
   - http://localhost:3000/blog
   - Check: Brand name correct throughout

---

## 🔧 Development Commands

### **Currently Running:**
```bash
npm run dev
```
**Status:** ✅ Running on http://localhost:3000

### **To Stop the Server:**
Press `Ctrl + C` in the terminal

### **To Start Again:**
```bash
cd /Users/abdelilahzahouani/Desktop/IPTV/serviceproiptv
npm run dev
```

### **To Build for Production:**
```bash
npm run build
npm start
```

---

## ⚠️ IMPORTANT: Before Going Live

### **1. Logo & Branding Assets** (REQUIRED)

You need to replace these image files with your Service Pro IPTV branding:

```bash
/public/images/LOGO.webp     # Main logo (currently shows old logo)
/public/images/ICON.ico      # Site icon
/public/favicon.ico          # Browser favicon
```

**How to Replace:**
1. Create your Service Pro IPTV logo
2. Save as LOGO.webp (recommended: 300x300px)
3. Create favicon: ICON.ico and favicon.ico (recommended: 32x32px or 64x64px)
4. Copy files to the paths above

### **2. Domain Configuration** (REQUIRED for live deployment)

**Current Status:** Running locally only

**To Deploy Live:**
1. Purchase domain: serviceproiptv.com
2. Point domain to your hosting server
3. Configure SSL certificate (HTTPS)
4. Update environment variables if needed

### **3. WordPress Blog** (Optional)

**Current Configuration:** blog.serviceproiptv.com

**Options:**
- Set up WordPress at blog.serviceproiptv.com
- Update WordPress API URL in `/lib/wordpress.ts`
- Or disable blog functionality

### **4. Google Services** (Recommended)

**Google Analytics:**
- Current ID: G-HDHHD12SGJ
- Update in `/app/layout.tsx` if needed

**Google Search Console:**
- Verify ownership of serviceproiptv.com
- Submit sitemap: https://serviceproiptv.com/sitemap.xml

### **5. Live Chat** (Optional)

**Tawk.to Chat:**
- Current embed ID: 68f21d5c6a1b1c195189998d/1j7os5c92
- Update in `/app/layout.tsx` if you want different chat

---

## 📱 Testing Checklist

After replacing logos, test the following:

- [ ] Logo displays correctly on all pages
- [ ] Favicon shows in browser tab
- [ ] Mobile responsive design works
- [ ] All links work correctly
- [ ] WhatsApp contact button works (+44 7956 154482)
- [ ] Email links work (contact@serviceproiptv.com)
- [ ] Forms submit correctly (if any)
- [ ] Footer displays correct information
- [ ] Meta tags in view-source are correct

---

## 🔍 SEO Verification

Check in browser (View Page Source):

```html
<title>Service Pro IPTV - Premium IPTV Streaming Service | 25,000+ Channels</title>
<meta name="description" content="Service Pro IPTV offers premium IPTV streaming..." />
<meta property="og:url" content="https://serviceproiptv.com" />
<link rel="canonical" href="https://serviceproiptv.com" />
```

All should reference "Service Pro IPTV" and "serviceproiptv.com"

---

## 📊 Sitemap Structure

Your sitemaps are properly configured:

**Main Sitemap:** http://localhost:3000/sitemap.xml
- Homepage (Priority: 1.0)
- Pricing (Priority: 0.95)
- Contact (Priority: 0.85)
- Blog (Priority: 0.9)
- About (Priority: 0.8)

**Individual Sitemaps:**
- Pages: /sitemap-pages.xml
- Posts: /sitemap-posts.xml
- Index: /sitemap_index.xml

**Robots.txt:** http://localhost:3000/robots.txt
- Properly configured
- Points to sitemap.xml

---

## 🚀 Deployment Options

### **Option 1: Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Option 2: Netlify**
```bash
# Build
npm run build

# Upload to Netlify
# Or connect GitHub repository
```

### **Option 3: Traditional Hosting**
```bash
# Build static files
npm run build

# Output will be in .next folder
# Upload to your hosting provider
```

---

## 📞 Contact Information

**All updated to:**
- **Email:** contact@serviceproiptv.com
- **Phone:** +44 7956 154482
- **WhatsApp:** https://wa.me/447956154482
- **Domain:** serviceproiptv.com

---

## 🎨 Color Scheme

The website uses these primary colors:
- **Primary Blue:** #2563eb
- **Dark Background:** #1f2937
- **Accent Blue:** Various shades

These are defined in Tailwind CSS configuration.

---

## 📝 Additional Notes

### **Package Name Updated**
- Old: "iptv-online-uk"
- New: "service-pro-iptv"

### **WordPress Integration**
- Configured for blog.serviceproiptv.com
- Fetches posts via REST API
- 100 posts per page
- Daily revalidation (86400 seconds)

### **Analytics Tracking**
- Google Analytics 4 configured
- Property ID: G-HDHHD12SGJ
- Update if needed in layout.tsx

---

## ✨ Summary

**✅ REBRANDING: COMPLETE**
**✅ SITEMAP: FIXED**
**✅ LOCAL DEPLOYMENT: RUNNING**

Your Service Pro IPTV website is now:
- Fully rebranded from IPTV ONLINE UK
- Running locally on http://localhost:3000
- Ready for testing and customization
- Prepared for production deployment

**Next Steps:**
1. Test all pages at http://localhost:3000
2. Replace logo files with your Service Pro IPTV branding
3. Configure domain when ready to go live
4. Deploy to production hosting

---

## 🆘 Need Help?

**Common Issues:**

**Port 3000 already in use?**
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clear cache
rm -rf .next
npm run build
```

**Module not found?**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

**🎉 Congratulations!**

Your Service Pro IPTV website is successfully rebranded and running locally!

Visit http://localhost:3000 to see your website in action.

---

**Created:** October 21, 2025
**Status:** ✅ COMPLETE & DEPLOYED LOCALLY
