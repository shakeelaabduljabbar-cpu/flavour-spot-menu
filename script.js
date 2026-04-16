// WhatsApp Integration Script

const WHATSAPP_NUMBER = "923350968410";

/**
 * Triggers a WhatsApp order click for a specific item
 * @param {string} itemName - Processed item name
 * @param {number} price - Item price
 */
function orderItem(itemName, price) {
    const text = `Hi Flavor Spot! I would like to order: \n\n*${itemName}* (Rs. ${price})\n\nPlease let me know the estimated time!`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    // Open in a new tab
    window.open(waUrl, "_blank");
}

/**
 * Fast & Smooth Animation for all page elements on scroll
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Select all the elements we want to animate
    const elementsToAnimate = document.querySelectorAll(
        '.category-title, .promo-banner, .menu-item, .deal-card, .footer'
    );
    
    // 2. Add the animation base class to them immediately
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // 3. Create the observer to trigger the fade-in when scrolling
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting) {
                // Add a tiny staggered delay based on the item's index in the triggered batch
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 100); 
                
                // Stop observing once it has animated in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Start observing each element
    elementsToAnimate.forEach(cat => {
        observer.observe(cat);
    });
});
