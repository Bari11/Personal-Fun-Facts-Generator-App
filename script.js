document.addEventListener('DOMContentLoaded', () => {
    const factText = document.getElementById('fact-text');
    const generateBtn = document.getElementById('generate-btn');

    // Array of fun facts
    const funFacts = [
        "A computer mouse moves an average of 1.5 miles in a working day.",
        "The first computer virus was created in 1983.",
        "The first computer password was created in 1961 at MIT.",
        "The first website is still online: http://info.cern.ch",
        "About 90% of the world's currency is digital.",
        "The first computer programmer was a woman - Ada Lovelace.",
        "The first computer game was created in 1961 - Spacewar!",
        "The QWERTY keyboard layout was designed to slow typing speed.",
        "The first computer bug was an actual bug - a moth.",
        "More than 90% of the world's data was created in the last two years.",
        "The first YouTube video was uploaded on April 23, 2005.",
        "An iPhone has more computing power than all of NASA had in 1969.",
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
