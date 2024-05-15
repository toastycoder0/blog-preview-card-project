/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      yellow: 'hsl(47,88%,63%)',
      white: 'hsl(0,0%,100%)',
      grey: 'hsl(0,0%,50%)',
      black: 'hsl(0, 0%, 7%)'
    },
    fontFamily: {
      figtree: 'Figtree, sans-serif'
    }
  }
}
