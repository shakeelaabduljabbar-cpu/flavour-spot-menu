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
 * Simple animation for page elements on scroll
 */
document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll('.category-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    categories.forEach(cat => {
        cat.style.opacity = '0';
        cat.style.transform = 'translateY(20px)';
        cat.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(cat);
    });
});
