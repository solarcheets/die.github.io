document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Die.lol";
    const textElement = document.getElementById('animated-text');
    let index = 0;
    let forward = true;

    function typeLetter() {
        textElement.innerHTML = text.substring(0, index);

        if (forward) {
            if (index < text.length) {
                index++;
            } else {
                forward = false;
                setTimeout(typeLetter, 300); // Pause before starting to delete
                return;
            }
        } else {
            if (index > 0) {
                index--;
            } else {
                forward = true;
                setTimeout(typeLetter, 300); // Pause before starting to type again
                return;
            }
        }
        setTimeout(typeLetter, 300);
    }

    typeLetter();

    const purchaseButton = document.getElementById('purchase-button');
    const popup = document.getElementById('popup');
    const closeButton = popup.querySelector('.popup-close');
    const buyNowButton = popup.querySelector('.buy-now-button');

    purchaseButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    buyNowButton.addEventListener('click', () => {
        window.location.href = "https://sate.mysellix.io/product/63a11548a86bf";
    });
});
