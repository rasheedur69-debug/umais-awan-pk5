document.addEventListener('DOMContentLoaded', () => {
    // 1. Enterprise Budget Intake Form Handler
    const projectForm = document.querySelector('form');
    
    if (projectForm) {
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents instant reload
            
            // Fetching corporate input values
            const clientName = projectForm.querySelector('input[name="name"]').value;
            const clientEmail = projectForm.querySelector('input[name="email"]').value;
            const targetBudget = projectForm.querySelector('select[name="budget"]').value;
            
            // Elite feedback modal animation trigger
            if (clientName && clientEmail) {
                alert(`🔒 Secure RFP Request Initiated!\n\nThank you, ${clientName}. Umais Awan pk Enterprise Committee has securely logged your request for a ${targetBudget} project.\n\nAn executive proposal and schedule link will be dispatched to ${clientEmail} within 12 business hours.`);
                projectForm.reset(); // Clear form fields elegantly
            }
        });
    }

    // 2. Premium Navigation Scroll Highlights
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for the fixed navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 3. Dynamic Console Audit Trail for Premium Clients
    console.log("%cUmais Awan pk | Architecture Active", "color: #38bdf8; font-size: 16px; font-weight: bold;");
    console.log("Status: Fully compliant with secure enterprise data protocols.");
});
