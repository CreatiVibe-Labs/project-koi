'use client';

import { useEffect } from 'react';
import jQuery from 'jquery';

export default function RipplesBackground() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$ = jQuery;
      window.jQuery = jQuery;

      const script = document.createElement('script');
      script.src = '/jquery.ripples-min.js';

      script.onload = () => {
        const $ = jQuery;

        // Init ripples on the target
        $('.transition-opacity').ripples({
          resolution: 256,
          dropRadius: 20,
          perturbance: 0.02,
          interactive: true,
          crossOrigin: ''
        });

        // 📱 Add touch support manually
        $('.transition-opacity').on('touchstart', function (e) {
          const touch = e.originalEvent.touches[0];
          const offset = $(this).offset();
          const x = touch.pageX - offset.left;
          const y = touch.pageY - offset.top;

          try {
            $(this).ripples('drop', x, y, 20, 0.04);
          } catch (err) {
            console.error('Ripples drop error:', err);
          }
        });
      };

      document.body.appendChild(script);
    }
  }, []);

  return null;
}
