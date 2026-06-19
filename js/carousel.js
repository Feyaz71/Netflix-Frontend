/**
 * Production Carousel Interaction Engine
 * Implements Pointer Dragging, Touch Swiping, and Viewport Skip Control Math
 */

export function initCarousels() {
    const tracks = document.querySelectorAll('.carousel-row__track');
    const buttons = document.querySelectorAll('.carousel-row__btn');

    // --- Arrow Click Navigation Math ---
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const track = document.getElementById(targetId);
            if (!track) return;

            // Compute exact visible viewport frame width
            const viewportWidth = track.clientWidth;
            // Determine structural skip direction matrix
            const isRight = button.classList.contains('carousel-row__btn--right');
            const scrollAmount = isRight ? viewportWidth * 0.85 : -viewportWidth * 0.85;

            track.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });

    // --- Unified Drag & Swipe Mechanics ---
    tracks.forEach(track => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let velocityX = 0;
        let lastX = 0;

        // Pointer Press Initializer
        const startDrag = (e) => {
            isDown = true;
            track.classList.add('carousel-row__track--dragging');
            // Support both standard mouse pointer and touch event points
            startX = (e.pageX || e.touches[0].pageX) - track.offsetLeft;
            scrollLeft = track.scrollLeft;
            lastX = e.pageX || e.touches[0].pageX;
            velocityX = 0;
        };

        // Pointer Release Cleanup
        const stopDrag = () => {
            if (!isDown) return;
            isDown = false;
            track.classList.remove('carousel-row__track--dragging');

            // Apply inertia decay effect on release for organic feel
            if (Math.abs(velocityX) > 2) {
                track.scrollBy({
                    left: velocityX * 4,
                    behavior: 'smooth'
                });
            }
        };

        // Execution Move Tracker Math
        const moveDrag = (e) => {
            if (!isDown) return;
            // Prevent text highlights or native bounces while executing
            e.preventDefault(); 
            
            const currentX = e.pageX || e.touches[0].pageX;
            const x = currentX - track.offsetLeft;
            const walk = (x - startX) * 1.5; // Drag Multiplier / Sensitivity Matrix
            
            track.scrollLeft = scrollLeft - walk;
            
            // Calculate rapid delta trajectory for inertia
            velocityX = lastX - currentX;
            lastX = currentX;
        };

        // Mouse Interface Hooks
        track.addEventListener('mousedown', startDrag);
        track.addEventListener('mouseleave', stopDrag);
        track.addEventListener('mouseup', stopDrag);
        track.addEventListener('mousemove', moveDrag);

        // Touch Interface Hooks (Mobile Devices)
        track.addEventListener('touchstart', startDrag, { passive: true });
        track.addEventListener('touchend', stopDrag, { passive: true });
        track.addEventListener('touchmove', moveDrag, { passive: false });
    });
}