/**
 * Component Generator Utilities
 * Production Grade: Incorporates Native ARIA Matrix Specifications
 */

/**
 * Generates an individual movie card shell.
 * Implements structural BEM layouts and strict keyboard accessibility controls.
 */
export function createMovieCard(movie) {
    return `
        <div class="movie-card" 
             data-movie-id="${movie.id}" 
             role="button" 
             tabindex="0"
             aria-haspopup="true"
             aria-label="${movie.title} (${movie.year}, Rating: ${movie.rating})">
            <img src="${movie.image}" 
                 alt="${movie.title} Poster" 
                 class="movie-card__image" 
                 loading="lazy">
            <div class="movie-card__metadata" aria-hidden="true">
                <h4 class="movie-card__title">${movie.title}</h4>
                <div class="movie-card__info-row">
                    <span class="movie-card__badge">${movie.rating}</span>
                    <span class="movie-card__year">${movie.year}</span>
                </div>
            </div>
        </div>
    `;
}

/**
 * Generates a complete carousel row structural section shell.
 * Includes precise label relationships for responsive screen readers.
 */
export function createSection(category) {
    const cardsMarkup = category.movies.map(movie => createMovieCard(movie)).join('');
    
    return `
        <section class="carousel-row" aria-labelledby="heading-${category.id}">
            <h2 class="carousel-row__title" id="heading-${category.id}">${category.title}</h2>
            
            <div class="carousel-row__wrapper">
                <button class="carousel-row__btn carousel-row__btn--left" 
                        aria-label="Slide Left inside ${category.title}" 
                        data-target="${category.id}"
                        tabindex="0">
                    <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                </button>
                
                <div class="carousel-row__track" id="${category.id}" role="region" aria-live="polymorphic">
                    ${cardsMarkup}
                </div>
                
                <button class="carousel-row__btn carousel-row__btn--right" 
                        aria-label="Slide Right inside ${category.title}" 
                        data-target="${category.id}"
                        tabindex="0">
                    <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                </button>
            </div>
        </section>
    `;
}

/**
 * Enables advanced keyboard accessibility mappings for custom components
 */
export function initAccessibilityHooks() {
    const cards = document.querySelectorAll('.movie-card');
    
    cards.forEach(card => {
        // Intercept enter/space triggers to match standard system buttons
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log(`Action executed for Content Payload ID: ${card.getAttribute('data-movie-id')}`);
                // Future expansion point: Open media player modal view layers
            }
        });
    });
}