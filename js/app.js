/**
 * ==========================================================================
 * Netflix Clone - Core Application Architecture Orchestrator
 * Entry Point: Handles native module initialization lifecycle pipelines.
 * ==========================================================================
 */

import { initNavbar } from './navbar.js';
import { movieCategories } from './data.js';
import { createSection, initAccessibilityHooks } from './utils.js';
import { initCarousels } from './carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        // 1. Initialize Global Navigation Dynamic Styling Engine
        initNavbar();
        
        // 2. Execute Dynamic Category Row Pipeline Render
        const container = document.getElementById('dynamic-rows-container');
        if (container) {
            // Transform structured JSON objects directly into semantic HTML template fragments
            const fullMarkup = movieCategories.map(category => createSection(category)).join('');
            container.innerHTML = fullMarkup;
            console.log('Dynamic Content Layout: Render Complete.');
        } else {
            console.warn('Target DOM container "#dynamic-rows-container" was not resolved.');
        }

        // 3. Bind Core Horizontal Interaction Carousel Engine
        initCarousels();

        // 4. Attach Accessible Keyboard Focus Trap and Event Hooks
        initAccessibilityHooks();
        
        console.log('Production Environment Ready: Application Lifecycle Stack Fully Operational.');
    } catch (error) {
        console.error('Fatal initialization error detected during core boot sequencing:', error);
    }
});