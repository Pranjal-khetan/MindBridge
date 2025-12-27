# MindBridge 🌉

## Mental Health Support Platform

MindBridge is a comprehensive mental health support platform built for the Google TechSprint Hackathon. It provides accessible mental health support for teenagers, working professionals, and individuals struggling with depression and mental wellness challenges.

## 🎯 Features

### 1. AI Chatbot Support
- 24/7 availability for immediate emotional support
- Powered by Google's Gemini API
- Empathetic and non-judgmental conversations
- Context-aware responses
- Privacy-focused design

### 2. Professional Psychiatrist Booking
- Connect with licensed mental health professionals
- Easy online booking system
- Multiple specialists available
- Video call and in-person session options
- Detailed psychiatrist profiles

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI Integration**: Google Gemini API
- **Backend** (Future): Firebase
  - Authentication
  - Firestore Database
  - Cloud Functions
- **Design**: Responsive, mobile-first design
- **Security**: Client-side validation, secure data handling

## 📋 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A Google Gemini API key (for chatbot functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Pranjal-khetan/MindBridge.git
cd MindBridge
```

2. Open the project:
   - Simply open `index.html` in your web browser
   - Or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Get your Gemini API key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Enter it in the chatbot interface when prompted

### Firebase Setup (Optional)

To enable backend features:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Update `js/firebase-config.js` with your project credentials
3. Enable required Firebase services (Authentication, Firestore)
4. Add Firebase SDK scripts to HTML files

## 📁 Project Structure

```
MindBridge/
├── index.html              # Landing page
├── chatbot.html           # AI chatbot interface
├── psychiatrist.html      # Psychiatrist booking page
├── css/
│   ├── style.css         # Main styles
│   ├── chatbot.css       # Chatbot-specific styles
│   └── psychiatrist.css  # Psychiatrist page styles
├── js/
│   ├── firebase-config.js # Firebase configuration
│   ├── chatbot.js        # Chatbot functionality
│   └── psychiatrist.js   # Booking system logic
└── README.md             # Project documentation
```

## 🚀 Usage

### Using the AI Chatbot

1. Navigate to the chatbot page from the home page
2. Enter your Gemini API key (first time only)
3. Start chatting with the AI support bot
4. Share your feelings and receive empathetic responses

### Booking a Psychiatrist

1. Go to the Professional Psychiatrist section
2. Browse available psychiatrists
3. Select a psychiatrist based on their specialization
4. Fill out the booking form with your details
5. Choose your preferred date, time, and session type
6. Submit your booking

## 🔒 Privacy & Security

- All conversations are private and confidential
- API keys are stored locally in your browser
- No chat data is sent to external servers (except Gemini API)
- Booking data is stored securely
- HTTPS recommended for production deployment

## ⚠️ Disclaimer

MindBridge is a support platform and **not a substitute for professional mental health care**. If you're experiencing a mental health crisis:

- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **Emergency Services**: 911

## 🤝 Contributing

This is a hackathon project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] User authentication system
- [ ] Chat history persistence
- [ ] Real-time psychiatrist availability
- [ ] Payment integration
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Resource library (articles, videos, exercises)
- [ ] Progress tracking dashboard
- [ ] Group support sessions
- [ ] Emergency alert system

## 👨‍💻 Author

**Pranjal Khetan**
- GitHub: [@Pranjal-khetan](https://github.com/Pranjal-khetan)

## 📄 License

This project is created for the Google TechSprint Hackathon.

## 🙏 Acknowledgments

- Google TechSprint Hackathon for the inspiration
- Google Gemini API for AI capabilities
- The mental health community for guidance
- All those working to destigmatize mental health support

---

**Made with ❤️ for mental health awareness**