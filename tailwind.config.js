/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

const px0_200 = Array.from({ length: 201 }, (_, i) => `${i}px`);
const px0_20 = Array.from({ length: 21 }, (_, i) => `${i}px`);

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      spacing: {
        ...px0_200,
      },
      borderWidth: {
        ...px0_20,
      },
      borderRadius: {
        ...px0_20,
      },
      fontSize: {
        ...px0_200,
      },
      colors: {
        primary: '#C9C9FF',
        secondary: '#9393FF',
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeOut: {
          '0%': { transform: 'translateY(100%)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease forwards',
        fadeOut: 'fadeOut 0.3s ease forwards',
      },
    },
  },
  plugins: [typography],
};

export default config;
