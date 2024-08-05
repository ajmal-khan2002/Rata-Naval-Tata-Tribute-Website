document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    
    // Your form submission logic here, e.g., sending data to the server
    
    // Show the pop-up message
    alert('Thank you for contacting us! We will get back to you shortly.');
    
    // Optionally, reset the form after submission
    this.reset();
});

