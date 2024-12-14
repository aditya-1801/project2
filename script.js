document.addEventListener('DOMContentLoaded', () => {
    const introSection = document.querySelector('#intro');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    introSection.innerHTML = `<h2>${greeting} I'm [Your Name]</h2><p>Welcome to my personal website...</p>`;
});
