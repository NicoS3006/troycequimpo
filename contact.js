// Select all input fields and textarea within the form
const inputs = document.querySelectorAll('#contactForm .js-form-input');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.add('focused'); // Add a class on focus
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.classList.remove('focused'); // Remove class if empty on blur
        }
    });
});