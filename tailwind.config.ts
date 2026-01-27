import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            colors: {
                // Modern Educational Dark Theme (Slate & Indigo)
                space: {
                    950: '#0f172a', // Main Background: Slate 900 - Professional Deep Blue-Grey
                    900: '#1e293b', // Card Background: Slate 800 - Comfortable contrast
                    800: '#334155', // Border / Hover: Slate 700 - Subtle definition
                    700: '#475569', // Additional shade for better gradients
                    100: '#f8fafc'  // Text: Slate 50 - High readability
                },
                primary: {
                    500: '#a855f7', // Purple 500 - Creative, Regal, The user's choice
                    400: '#c084fc', // Purple 400 - Light text highlight
                    600: '#9333ea', // Purple 600 - Deep interaction
                    100: '#f3e8ff'  // Purple 100 - Soft tint
                },
                accent: {
                    cyan: '#06b6d4',   // Cyan 500 - Tech/Future
                    purple: '#a855f7', // Purple 500 - Creative/Science
                    pink: '#ec4899',   // Pink 500 - Arts/Expressive
                    teal: '#14b8a6',   // Teal 500 - Growth/Biology
                    amber: '#f59e0b',  // Amber 500 - Energy/Engineering
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        }
    },
    plugins: [] // No plugins initially
}
