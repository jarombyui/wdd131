// DOM interaction - change text color on button click
document.getElementById('colorBtn').addEventListener('click', function() {
    document.getElementById('text').style.color = 'blue';
});

// Form submission - save name and email to localStorage
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Alert user
    alert('Contact information saved!');
});
