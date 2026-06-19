/**
 * Handles custom header scroll transformations
 */
export function initNavbar() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.add('header--scrolled'); // Force consistency check
            header.classList.remove('header--scrolled');
        }
    };

    // Run once on load to verify current scroll offset
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
}