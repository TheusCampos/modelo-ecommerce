import { initAnimations } from './global/animations.js';
import { initNavigation } from './global/navigation.js';
import { initHeroAnimations } from './pages/partials/hero-animations.js';
import { initScrollEffects } from './pages/partials/scroll-effects.js';
import { initFormValidation } from './pages/partials/form-validation.js';
import { initCart } from './pages/partials/cart.js';

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initNavigation();
    initHeroAnimations();
    initScrollEffects();
    initFormValidation();
    initCart();
    
    initSizeSelector();
});

function initSizeSelector() {
    const sizes = document.querySelectorAll('.size-btn');
    if (sizes.length === 0) return;
    
    sizes.forEach(size => {
        size.addEventListener('click', () => {
            sizes.forEach(s => s.classList.remove('active'));
            size.classList.add('active');
        });
    });
}
