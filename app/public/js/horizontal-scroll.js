document.addEventListener('DOMContentLoaded', () => {
    const scientificSection = document.querySelector('#scientific-backing');
    const cardContainer = scientificSection.querySelector('.information-section');

    cardContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        cardContainer.scrollLeft += e.deltaY;
    });
});
