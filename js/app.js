import { initNavbar } from './navbar.js';
import { movieCategories } from './data.js';
import { createSection, initAccessibilityHooks } from './utils.js';
import { initCarousels } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    // Phase 1 Global Initializations
    initNavbar();
    
    // Phase 2 Dynamic Rendering Pipeline Execution
    const container = document.getElementById('dynamic-rows-container');
    if (container) {
        const fullMarkup = movieCategories.map(cat => createSection(cat)).join('');
        container.innerHTML = fullMarkup;
    }

    // Phase 3 Control Engine Activation
    initCarousels();

    // Phase 5 Optimization & Accessibility Attachment
    initAccessibilityHooks();
    
    console.log('Production Environment Ready: Phase 5 Final Delivery Complete.');
});