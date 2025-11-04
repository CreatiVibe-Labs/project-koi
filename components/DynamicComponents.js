// Optimized dynamic imports for heavy components
import dynamic from 'next/dynamic';

// Lazy load Swiper components
export const DynamicSwiper = dynamic(
  () => import('swiper/react').then(mod => mod.Swiper),
  { ssr: false }
);

export const DynamicSwiperSlide = dynamic(
  () => import('swiper/react').then(mod => mod.SwiperSlide),
  { ssr: false }
);

// Lazy load react-select
export const DynamicSelect = dynamic(
  () => import('react-select'),
  { ssr: false }
);

// Lazy load tooltip
export const DynamicTooltip = dynamic(
  () => import('react-tooltip').then(mod => mod.Tooltip),
  { ssr: false }
);

export default {
  DynamicSwiper,
  DynamicSwiperSlide,
  DynamicSelect,
  DynamicTooltip,
};
