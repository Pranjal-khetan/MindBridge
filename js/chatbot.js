// Chatbot functionality with Gemini API integration

let apiKey = '';
let conversationHistory = [];

// Check if API key is already saved
window.addEventListener('DOMContentLoaded', () => {
    const savedApiKey = localStorage.getItem('geminiApiKey');
    if (savedApiKey) {
        apiKey = savedApiKey;
        enableChat();
    }
});

// Save API key
function saveApiKey() {
    const apiKeyInput = document.getElementById('apiKeyInput');
    const key = apiKeyInput.value.trim();
    
    if (!key) {
        alert('Please enter a valid API key');
        return;
    }
    
    apiKey = key;
    localStorage.setItem('geminiApiKey', key);
    enableChat();
    
    // Hide API key section
    document.getElementById('apiKeySection').style.display = 'none';
}

// Enable chat interface
function enableChat() {
    document.getElementById('userInput').disabled = false;
    document.getElementById('sendButton').disabled = false;
    
    // Hide API key section if visible
    const apiKeySection = document.getElementById('apiKeySection');
    if (apiKeySection) {
        apiKeySection.style.display = 'none';
    }
}

// Send message
async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    
    // Auto-resize textarea
    userInput.style.height = 'auto';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Get bot response
    try {
        const response = await getBotResponse(message);
        removeTypingIndicator();
        addMessage(response, 'bot');
    } catch (error) {
        removeTypingIndicator();
        addMessage('I apologize, but I encountered an error. Please try again or check your API key.', 'bot');
        console.error('Error:', error);
    }
}

// Add message to chat
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${escapeHtml(text)}</p>
        </div>
        <span class="message-time">${timeString}</span>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Add to conversation history
    conversationHistory.push({
        role: sender === 'user' ? 'user' : 'model',
        parts: [{ text: text }]
    });
}

// Show typing indicator
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Get bot response from Gemini API
async function getBotResponse(userMessage) {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
    
    // Create a mental health support context
    const systemContext = `You are a compassionate and empathetic mental health support chatbot. Your role is to:
- Listen actively and validate the user's feelings
- Provide emotional support and encouragement
- Suggest healthy coping strategies when appropriate
- Be non-judgmental and understanding
- Recognize when someone might need professional help and gently encourage them to seek it
- Never provide medical diagnoses or prescribe treatments
- Be warm, caring, and supportive in your responses

Keep your responses concise but meaningful. Show empathy and understanding.`;

    // Prepare the conversation for the API
    const contents = [
        {
            role: 'user',
            parts: [{ text: systemContext }]
        },
        {
            role: 'model',
            parts: [{ text: 'I understand. I will provide compassionate, empathetic support while being mindful of my limitations and encouraging professional help when needed.' }]
        },
        ...conversationHistory.slice(-10) // Keep last 10 messages for context
    ];

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: contents,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 500,
                }
            })
        });

        if (!response.ok) {
            if (response.status === 400) {
                throw new Error('Invalid API key or request. Please check your API key.');
            }
            throw new Error('Failed to get response from AI');
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Handle Enter key press
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    
    if (userInput) {
        userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        // Auto-resize textarea
        userInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });
    }
});
