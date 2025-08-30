document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ppt-form');
    const generateBtn = document.getElementById('generate-btn');
    const loadingIndicator = document.getElementById('loading-indicator');

    form.addEventListener('submit', function(event) {
        // Basic validation
        const text = document.getElementById('text').value;
        const template = document.getElementById('template').value;

        if (!text.trim() || !template) {
            alert('Please provide text and upload a template file.');
            event.preventDefault(); // Stop form submission
            return;
        }

        // Show loading indicator
        generateBtn.disabled = true;
        generateBtn.textContent = 'Generating...';
        loadingIndicator.classList.remove('hidden');
    });
});
