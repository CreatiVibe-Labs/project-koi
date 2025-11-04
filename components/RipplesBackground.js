'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load jQuery only when needed
const loadRipples = async () => {
  if (typeof window === 'undefined') return;
  
  // Check if user prefers reduced motion (accessibility)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Check if device is mobile or has low performance
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  // Skip ripples on mobile or low-end devices
  if (isMobile || isLowEnd) return;

  const jQuery = (await import('jquery')).default;
  window.$ = jQuery;
  window.jQuery = jQuery;

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = '/jquery.ripples-min.js';
    script.async = true;

    script.onload = () => {
      const $ = jQuery;

      try {
        // Reduced resolution for better performance
        $('.transition-opacity').ripples({
          resolution: 256, // Reduced from 256
          dropRadius: 20,  // Reduced from 20
          perturbance: 0.02, // Reduced from 0.02
          interactive: false, // Disable for performance
          crossOrigin: ''
        });

        // Only enable interaction after idle
        setTimeout(() => {
          $('.transition-opacity').ripples('set', 'interactive', true);
        }, 2000);

        resolve();
      } catch (err) {
        console.error('Ripples initialization error:', err);
        resolve();
      }
    };

    script.onerror = () => {
      console.error('Failed to load ripples script');
      resolve();
    };

    document.body.appendChild(script);
  });
};

export default function RipplesBackground() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Delay ripples initialization until after initial render
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        loadRipples();
      });
    } else {
      setTimeout(() => {
        loadRipples();
      }, 500);
    }
  }, [isReady]);

  return null;
}
