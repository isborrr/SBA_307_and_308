// Select all service elements
const serviceClass = document.querySelectorAll('.service');

// Add event listeners to each sevice element
serviceClass.forEach(service => {
    service.addEventListener('mouseenter', (event) => {
        const orderDisplay = event.currentTarget.querySelector('.orderService');
        if (orderDisplay) {
           orderDisplay.style.display = 'block';
        }
    });

    service.addEventListener('mouseleave', (event) => {
        const orderDisplay = event.currentTarget.querySelector('.orderService');
        if (orderDisplay) {
           orderDisplay.style.display = 'none';
        }
    });
});
