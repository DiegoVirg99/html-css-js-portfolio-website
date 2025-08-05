function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


document.querySelectorAll('.description-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const container = btn.closest('.color-container');
        const img = container.querySelector('.article-container');
        const title = container.querySelector('.project-title');
        const desc = container.querySelector('.project-description');
        const isOpen = desc.style.display === 'block';

        if (!isOpen) {
            img.style.display = 'none';
            title.style.display = 'none';
            desc.style.display = 'block';
            btn.textContent = 'Back';
        } else {
            img.style.display = '';
            title.style.display = '';
            desc.style.display = 'none';
            btn.textContent = 'Description';
        }
    });
});