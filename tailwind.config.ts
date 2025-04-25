import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#2FBCFE',
          600: '#279DD4',
        },
        sidebar: {
          bg: '#11455D',
          text: {
            active: '#FFFFFF',
            inactive: 'rgba(255, 255, 255, 0.6)',
            muted: 'rgba(255, 255, 255, 0.5)',
          },
          highlight: 'rgba(255, 255, 255, 0.1)',
        },
        badge: {
          bg: '#F9FAFB',
          border: '#EAECF0',
          text: '#344054',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#EAECF0',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        success: {
          50: '#ECFDF3',
          500: '#12B76A',
        },
        blue: {
          50: '#EFF6FF',
          500: '#2FBCFE',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      boxShadow: {
        'sidebar': '0px 0px 5px rgba(0, 0, 0, 0.12)',
        'card': '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      },
      borderRadius: {
        'card': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
