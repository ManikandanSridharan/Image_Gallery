const galleryImages = document.querySelectorAll('.gallery-img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.close');

// Open the popup with the clicked image
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImg.src = image.src;
    });
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the popup when clicking outside the image
popup.addEventListener('click', (event) => {
    //console.log(event.target);
    if (event.target === popup) {
        popup.style.display = 'none';
    }

});