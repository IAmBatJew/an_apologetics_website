document.addEventListener('DOMContentLoaded', () => {
<<<<<<< Updated upstream
=======
    let isScrollingHorizontally = false;
    let scrollTimeout;

>>>>>>> Stashed changes
    function handleScroll(e, container) {
        const isAtRightEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;
        const isAtLeftEnd = container.scrollLeft <= 0;

<<<<<<< Updated upstream
        // If scrolling up/down at the horizontal limits, allow normal vertical scroll
        if ((e.deltaY > 0 && isAtRightEnd) || (e.deltaY < 0 && isAtLeftEnd)) {
=======
        // If we hit the limits, set a timer before allowing vertical scroll
        if ((e.deltaY > 0 && isAtRightEnd) || (e.deltaY < 0 && isAtLeftEnd)) {
            if (!isScrollingHorizontally) {
                return;
            }
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrollingHorizontally = false;
            }, 300); // 500ms buffer
            
            e.preventDefault();
>>>>>>> Stashed changes
            return;
        }

        // Otherwise, convert to horizontal scroll
<<<<<<< Updated upstream
=======
        isScrollingHorizontally = true;
>>>>>>> Stashed changes
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    }

    const scientificSection = document.querySelector('#scientific-backing');
    const cardContainer = scientificSection.querySelector('.information-section');
    cardContainer.addEventListener('wheel', (e) => handleScroll(e, cardContainer));

    const biblicalSection = document.querySelector('#scripture');
    const biblicalCardContainer = biblicalSection.querySelector('.information-section');
    biblicalCardContainer.addEventListener('wheel', (e) => handleScroll(e, biblicalCardContainer));
});
