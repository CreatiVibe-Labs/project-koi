'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only in development
    if (process.env.NODE_ENV === 'development') {
      // Monitor Core Web Vitals
      if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      // Log performance metrics
      if (window.performance) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('%c⚡ Performance Metrics', 'color: #39ff14; font-weight: bold; font-size: 14px');
            console.table({
              'Page Load Time': `${pageLoadTime}ms`,
              'Server Response': `${connectTime}ms`,
              'DOM Render': `${renderTime}ms`,
            });
          }, 0);
        });
      }
    }
  }, []);

  return null;
}
