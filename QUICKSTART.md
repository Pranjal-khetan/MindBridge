# MindBridge Quick Reference

## 🚀 Quick Start
```bash
# Open in browser - no installation needed
open index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

## 🔑 Get Gemini API Key
1. Visit: https://makersuite.google.com/app/apikey
2. Sign in → Create API Key
3. Copy and paste in chatbot interface

## 📱 Main Features

### Landing Page (/)
- Choose support option
- View emergency resources
- Learn about the platform

### AI Chatbot (/chatbot.html)
- 24/7 AI support
- Context-aware conversations
- Crisis resources in sidebar
- **Required**: Gemini API key

### Psychiatrist Booking (/psychiatrist.html)
- 4 licensed professionals
- Book video or in-person sessions
- View specializations
- Fill booking form

## 🎨 Psychiatrist Specializations

| Doctor | Specialization | Experience |
|--------|---------------|------------|
| Dr. Sarah Johnson | Depression & Anxiety | 15+ years |
| Dr. Michael Chen | Stress Management | 12+ years |
| Dr. Emily Rodriguez | Teen Mental Health | 10+ years |
| Dr. James Wilson | Trauma & PTSD | 18+ years |

## 🆘 Emergency Contacts

**In Crisis? Call Immediately:**
- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **Emergency**: 911

## 💾 Data Storage

### What's Stored Locally:
- Gemini API key (encrypted)
- Booking information
- Chat session (temporary)

### What's NOT Stored:
- Personal conversations (unless you enable Firebase)
- Credit card info
- Medical records

## ⚙️ Configuration

### Firebase Setup (Optional)
Edit `js/firebase-config.js`:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    // ... other config
};
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Chatbot not working | Check API key, internet connection |
| Styles missing | Use local server, not file:// |
| Form won't submit | Fill all required fields |
| Modal won't close | Click X or outside modal |

## 🔧 Browser Console

Press `F12` to open developer tools:
- **Console tab**: View errors and logs
- **Network tab**: Check API requests
- **Application tab**: View localStorage

## 📊 Project Stats

- **3 HTML pages** (index, chatbot, psychiatrist)
- **3 CSS stylesheets** (responsive design)
- **3 JavaScript modules** (chatbot, booking, Firebase)
- **1700+ lines of code**
- **100% client-side** (no backend required to start)

## 🎯 User Flow

```
Landing Page → Choose Option
    ↓
    ├─→ AI Chatbot → Enter API Key → Chat
    │
    └─→ Psychiatrist → Browse Doctors → Book Session → Confirm
```

## 🔒 Privacy Features

✅ Local API key storage
✅ No tracking/analytics
✅ No data sent to external servers (except Gemini API)
✅ No cookies
✅ No user accounts required

## 📝 Form Fields (Booking)

**Required:**
- Name
- Email
- Phone
- Preferred Date
- Preferred Time
- Session Type

**Optional:**
- Additional Notes

## 🌐 Supported Browsers

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Opera 76+

## 📚 Additional Resources

- [README.md](README.md) - Full project documentation
- [SETUP.md](SETUP.md) - Detailed setup guide
- [Gemini API Docs](https://ai.google.dev/tutorials/web_quickstart)
- [Firebase Docs](https://firebase.google.com/docs)

## 💡 Tips

1. **First time?** Start with the chatbot to get familiar
2. **Testing?** Use fake data in booking form
3. **Developing?** Use browser dev tools (F12)
4. **Deploying?** Use GitHub Pages, Netlify, or Vercel
5. **Stuck?** Check browser console for errors

## 🤝 Support

- Open an issue on GitHub
- Check documentation files
- Review code comments

---

**Made with ❤️ for Google TechSprint Hackathon**

**Remember**: This is a support tool. In emergencies, always call crisis services.
