 // emailjs_integration.js
(function() {
    emailjs.init("NYbPkqYkMwQVudhX2"); // Your EmailJS user ID
})();

window.onload = function() {
    var contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_jgm2scc', 'template_im2h9ir', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Your message has been sent!');
                contactForm.reset(); // Reset the form fields
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message, please try again.');
            });
    });
};
