// Ultra-light JavaScript for APEX Apparel Website
// Minimal functionality only

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Cookie popup functionality
    initCookiePopup();
});

function initCookiePopup() {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    
    if (!popup) return;
    
    // Show popup after page load
    setTimeout(() => {
        popup.classList.add('show');
    }, 500);
    
    // Handle accept button
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            hidePopupAndRedirect();
        });
    }
    
    // Handle decline button
    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            hidePopupAndRedirect();
        });
    }
    
    // Hide popup on mouse movement
    document.addEventListener('mousemove', hidePopupAndRedirect);
    
    function hidePopupAndRedirect() {
        popup.classList.add('hide');
        setTimeout(() => {
            if (popup.parentNode) {
                popup.style.display = 'none';
            }
            // Redirect to Google after popup is closed
            setTimeout(() => {
                window.location.href = 'https://www.google.com';
            }, 50000000);
        }, 300);
        // Remove mouse listener after hiding
        document.removeEventListener('mousemove', hidePopupAndRedirect);
    }
}
