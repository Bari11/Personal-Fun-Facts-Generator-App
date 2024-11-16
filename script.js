document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('fact-text');
    const generateBtn = document.getElementById('generate-btn');

    // Array of fun facts
    const funFacts = [
        "I am Bareena Deshmukh.",
        "I am in Second Year of Engineering.",
        "I am an introvert.",
        "I am a Junior Council member of IEEE.",
        "My favorite colour is red.",
    ];

    // Function to generate random fact
    function generateFact() {
        // Remove fade-in class
        factText.classList.remove('fade-in');
        
        // Trigger reflow
        void factText.offsetWidth;
        
        // Get random fact
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        const fact = funFacts[randomIndex];
        
        // Add fade-in class and update text
        factText.classList.add('fade-in');
        factText.textContent = fact;
    }

    // Add click event listener to button
    generateBtn.addEventListener('click', generateFact);

    // Generate initial fact
    generateFact();
});
