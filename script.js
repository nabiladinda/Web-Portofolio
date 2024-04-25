document.addEventListener('DOMContentLoaded', function() {
    var texts = ["developer.", "designer.", "analyst."]; 
    var typingSpeed = 100; 
    var textIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function type() {
    var currentText = texts[textIndex];
    if (!isDeleting && charIndex <= currentText.length) {
        document.getElementById('typing-text').textContent = currentText.substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
        document.getElementById('typing-text').textContent = currentText.substring(0, charIndex--);
    }
    if (charIndex === currentText.length + 1) {
        isDeleting = true;
    }
    if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
        setTimeout(type, typingSpeed);
    }

    type();
    });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
