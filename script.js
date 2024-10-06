document.querySelectorAll('button[data-section]').forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = document.querySelector(button.getAttribute('data-section'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
