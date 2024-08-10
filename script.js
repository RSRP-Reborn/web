document.querySelectorAll('.image-item img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const enlargedImg = document.createElement('img');
        enlargedImg.src = img.src;
        enlargedImg.classList.add('enlarged');

        overlay.appendChild(enlargedImg);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
