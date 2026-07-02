(function() {
    if (!('IntersectionObserver' in window)) return;

    const initAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                const isOnce = el.getAttribute('data-wm-once') !== 'false';
                const isMirror = el.getAttribute('data-wm-mirror') === 'true';

                if (entry.isIntersecting) {
                    el.classList.add('wm-is-visible');
                    // Stop observing if it only happens once
                    if (isOnce) observer.unobserve(el);
                } else {
                    // Remove class if mirror is true (so it animates again when scrolling back)
                    if (isMirror) el.classList.remove('wm-is-visible');
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -100px 0px', // Global offset (100px before bottom)
            threshold: 0
        });

        const animatedElements = document.querySelectorAll('[data-wm]');
        
        animatedElements.forEach(el => {
            if (el.getAttribute('data-wm') === 'none') return;

            // Apply specific CSS properties dynamically based on user settings
            const duration = el.getAttribute('data-wm-duration') || '400';
            const delay = el.getAttribute('data-wm-delay') || '0';
            const easing = el.getAttribute('data-wm-easing') || 'ease';

            el.style.transitionDuration = `${duration}ms`;
            el.style.transitionDelay = `${delay}ms`;
            el.style.transitionTimingFunction = getEasing(easing);
            el.style.willChange = 'opacity, transform'; // GPU acceleration

            observer.observe(el);
        });
    };

    // Easing Dictionary mapper
    const getEasing = (easeString) => {
        const easings = {
            'linear': 'linear',
            'ease': 'ease',
            'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
            'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
            'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
            'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            // You can add your cubic-bezier math for quad, cubic, quart here
        };
        return easings[easeString] || 'ease';
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
    } else {
        initAnimations();
    }
})();