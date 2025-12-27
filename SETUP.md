# MindBridge Setup Guide

## Quick Start

### Option 1: Open Directly in Browser
1. Download or clone the repository
2. Navigate to the project folder
3. Double-click `index.html` to open in your default browser

### Option 2: Use a Local Server (Recommended)

#### Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

#### Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server
```

#### Using PHP
```bash
php -S localhost:8000
```

## Getting Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key
5. Enter it in the chatbot interface when prompted

**Note**: The API key is stored locally in your browser and never sent to any server except Google's Gemini API.

## Setting Up Firebase (Optional)

To enable advanced features like user authentication and data persistence:

1. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard

2. Get your Firebase configuration:
   - In your Firebase project, click the gear icon → Project settings
   - Scroll down to "Your apps" section
   - Click the web icon (</>) to add a web app
   - Copy the configuration object

3. Update `js/firebase-config.js`:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

4. Enable Firebase services:
   - **Authentication**: For user login
   - **Firestore**: For storing bookings and chat history
   - **Cloud Functions**: For backend logic

5. Add Firebase SDK to HTML files:
   ```html
   <script type="module">
     import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
     import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
     // Initialize Firebase here
   </script>
   ```

## Features Overview

### 1. Landing Page (index.html)
- Welcome message and mission statement
- Two main support options
- About section
- Emergency resources

### 2. AI Chatbot (chatbot.html)
- Requires Gemini API key
- Real-time conversational AI
- Context-aware responses
- Crisis resource sidebar
- Chat history in session

### 3. Psychiatrist Booking (psychiatrist.html)
- 4 psychiatrist profiles with specializations
- Interactive booking form
- Date/time selection
- Session type (video/in-person)
- Booking confirmation

## Browser Compatibility

MindBridge works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

**Minimum versions**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Issue: Chatbot not responding
**Solution**: 
- Verify your Gemini API key is correct
- Check browser console for errors (F12)
- Ensure you have internet connection

### Issue: Styles not loading
**Solution**:
- Use a local server instead of opening HTML directly
- Check that all CSS files are in the `css/` folder
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Booking form not submitting
**Solution**:
- Fill all required fields
- Ensure date is in the future
- Check browser console for validation errors

## Privacy & Data Storage

### Local Storage Usage
MindBridge uses browser localStorage for:
- Gemini API key (encrypted)
- Booking data (until Firebase is configured)
- User preferences

### Data Security
- No server-side storage (until Firebase is configured)
- API key never leaves your browser
- Chat conversations not saved by default
- HTTPS recommended for production

## Production Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Your site will be live at `username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Configure build settings (none needed for static site)
3. Deploy

### Vercel
1. Import your GitHub repository
2. Configure project (auto-detected)
3. Deploy

## Getting Help

- Check the [README.md](README.md) for general information
- Review code comments in JavaScript files
- Open an issue on GitHub
- Consult the [Gemini API Documentation](https://ai.google.dev/tutorials/web_quickstart)

## Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project was created for the Google TechSprint Hackathon.

---

**Remember**: This is a support tool, not a replacement for professional mental health care. In crisis situations, always call emergency services or crisis hotlines.
