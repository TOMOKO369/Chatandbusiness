document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const chatContent = document.getElementById('chat-content');
    const businessContent = document.getElementById('business-content');
    const chatText = document.querySelector('.chat-text');
    const businessText = document.querySelector('.business-text');

    // Function to update the UI based on the toggle state
    function updateMode() {
        if (modeToggle.checked) {
            // Business Mode
            body.classList.remove('mode-chat');
            body.classList.add('mode-business');
            
            chatContent.classList.remove('active');
            setTimeout(() => {
                chatContent.style.display = 'none';
                businessContent.style.display = 'block';
                // Small delay to allow display:block to apply before opacity transition if we were doing complex pure CSS transitions,
                // but here we just toggle the class for the fade animation.
                setTimeout(() => businessContent.classList.add('active'), 10);
            }, 300); // Wait for fade out
            
        } else {
            // Chat Mode
            body.classList.remove('mode-business');
            body.classList.add('mode-chat');
            
            businessContent.classList.remove('active');
            setTimeout(() => {
                businessContent.style.display = 'none';
                chatContent.style.display = 'block';
                setTimeout(() => chatContent.classList.add('active'), 10);
            }, 300);
        }
    }

    // Initial check (default is Chat mode, so unchecked)
    // If the checkbox interacts weirdly on reload, this ensures sync
    if (modeToggle.checked) {
        body.classList.add('mode-business');
        body.classList.remove('mode-chat');
        chatContent.style.display = 'none';
        businessContent.style.display = 'block';
        businessContent.classList.add('active');
    } else {
        body.classList.add('mode-chat');
        body.classList.remove('mode-business');
        businessContent.style.display = 'none';
        chatContent.style.display = 'block';
        chatContent.classList.add('active');
    }

    // Event Listener
    modeToggle.addEventListener('change', updateMode);
});
