import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Change font back to 'Styrene B'
        sans: ['Styrene B', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tangerine: '#F28500',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            code: {
              color: 'var(--tw-prose-code)',
              fontWeight: '400',
            },
            pre: {
              color: 'var(--tw-prose-pre-code)',
              backgroundColor: 'var(--tw-prose-pre-bg)',
            },
          },
        },
        note: {
          css: {
            h1: {
              fontSize: '1.6em',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '1em',
            },
            h2: {
              fontSize: '1.1em',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h3: {
              fontSize: '1em',
              fontWeight: '600',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            }
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 