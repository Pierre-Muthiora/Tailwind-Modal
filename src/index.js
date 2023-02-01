let openBtn = document.getElementById('open-modal');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-modal');



openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

/* Function for closing the modal, other than the close button, upon clicking anywhere outside the modal box
 */
window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});