
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! We will contact you soon.');
            form.reset();
        });
    }
});
              
                  
