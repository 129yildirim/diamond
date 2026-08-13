const diamondText = document.getElementById('diamond-text');

// Add glow effect on mouse hover
diamondText.addEventListener('mouseover', () => {
    diamondText.classList.add('glow');
});

// Remove glow effect when mouse leaves
diamondText.addEventListener('mouseout', () => {
    diamondText.classList.remove('glow');
});

// Add a subtle click interaction
diamondText.addEventListener('mousedown', () => {
    diamondText.style.transform = 'scale(0.95)';
});

diamondText.addEventListener('mouseup', () => {
    diamondText.style.transform = 'scale(1.05)';
});