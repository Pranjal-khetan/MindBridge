// Psychiatrist booking functionality

// Open booking modal
function openBookingModal(doctorName) {
    const modal = document.getElementById('bookingModal');
    const doctorNameInput = document.getElementById('doctorName');
    
    doctorNameInput.value = doctorName;
    modal.style.display = 'block';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('preferredDate').setAttribute('min', today);
}

// Close booking modal
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.getElementById('bookingForm').reset();
}

// Close success modal
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

// Handle booking form submission
function handleBooking(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        doctor: document.getElementById('doctorName').value,
        patientName: document.getElementById('patientName').value,
        email: document.getElementById('patientEmail').value,
        phone: document.getElementById('patientPhone').value,
        date: document.getElementById('preferredDate').value,
        time: document.getElementById('preferredTime').value,
        sessionType: document.getElementById('sessionType').value,
        notes: document.getElementById('notes').value,
        timestamp: new Date().toISOString()
    };
    
    // Here you would typically send this data to Firebase or your backend
    // For now, we'll just log it and show success message
    console.log('Booking Data:', formData);
    
    // Store in localStorage as a temporary solution
    storeBooking(formData);
    
    // Close booking modal
    closeBookingModal();
    
    // Show success modal
    showSuccessModal();
    
    // Optional: Send confirmation email (would require backend integration)
    // sendConfirmationEmail(formData);
}

// Store booking in localStorage
function storeBooking(bookingData) {
    let bookings = JSON.parse(localStorage.getItem('mindBridgeBookings') || '[]');
    bookings.push(bookingData);
    localStorage.setItem('mindBridgeBookings', JSON.stringify(bookings));
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        closeSuccessModal();
    }, 5000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const bookingModal = document.getElementById('bookingModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target === bookingModal) {
        closeBookingModal();
    }
    if (event.target === successModal) {
        closeSuccessModal();
    }
}

// Optional: Function to retrieve all bookings (for admin panel)
function getAllBookings() {
    return JSON.parse(localStorage.getItem('mindBridgeBookings') || '[]');
}

// Optional: Function to integrate with Firebase
// Uncomment and configure when Firebase is set up
/*
async function saveBookingToFirebase(bookingData) {
    try {
        // Import Firebase functions
        const { collection, addDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        // Assuming db is exported from firebase-config.js
        // const docRef = await addDoc(collection(db, 'bookings'), bookingData);
        // console.log('Booking saved with ID:', docRef.id);
        
        return true;
    } catch (error) {
        console.error('Error saving booking:', error);
        return false;
    }
}
*/

// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('patientPhone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9+\-() ]/g, '');
        });
    }
    
    // Email validation
    const emailInput = document.getElementById('patientEmail');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.setCustomValidity('Please enter a valid email address');
            } else {
                this.setCustomValidity('');
            }
        });
    }
});
