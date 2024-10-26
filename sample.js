const popup = document.getElementById('popup');
const submitBtn = document.getElementById('submitBtn');

function showPopup() {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable scrolling
}

function hidePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = ''; // Enable scrolling
}

submitBtn.addEventListener('click', function() {
    // Handle form submission here
    // For example, you could validate the email and submit it to a server
    hidePopup();
});

// Prevent closing with backdrop click or ESC key
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        hidePopup();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hidePopup();
    }
});

// Show the popup initially
showPopup();