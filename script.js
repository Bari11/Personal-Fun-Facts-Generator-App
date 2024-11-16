document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('fact-text');
    const generateBtn = document.getElementById('generate-btn');

    // Array of personal fun facts
    const funFacts = [
        "I am Bareena Deshmukh.",
        "I am in Second Year of Engineering.",
        "I am an introvert.",
        "I am a Junior Council member of IEEE.",
        "My favorite colour is red.",
    ];

    // Array of colors for facts
    const colors = [
        '#FF6B6B',  // Bright red for your name
        '#4ECDC4',  // Teal for education
        '#9B59B6',  // Purple for personality
        '#3498DB',  // Blue for IEEE membership
        '#E74C3C'   // Red for favorite color fact
    ];

    function generateFact() {
        factText.classList.remove('fade-in');
        void factText.offsetWidth;
        
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        const fact = funFacts[randomIndex];
        
        // Add random color to fact text
        factText.style.color = colors[randomIndex];
        
        factText.classList.add('fade-in');
        factText.textContent = fact;
    }

    generateBtn.addEventListener('click', generateFact);
    generateFact();
});
