export default {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
			center: true,
      padding: '1rem',
			screens: {
				xl: '1024px'
			}
		},
		extend: {
      colors: {
        console: {
          bg: 'var(--bg-console)',
          card: 'var(--bg-card)',
          border: 'var(--border-console)',
          text: 'var(--text-console)',
          muted: 'var(--text-muted)',
        },
        accent: {
          primary: '#00f0ff', // Cyber blue
          secondary: '#7000ff', // Cyber purple
          success: '#00ff9d',
          error: '#ff0055',
          warning: '#ffbe00',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#e5e5e5',
            a: {
              color: '#00f0ff',
              '&:hover': {
                color: '#00ff9d',
              },
            },
            h1: { color: '#ffffff' },
            h2: { color: '#ffffff' },
            h3: { color: '#ffffff' },
            h4: { color: '#ffffff' },
            code: { color: '#00ff9d' },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          }
        }
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
}
