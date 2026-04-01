/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Outfit', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
	],
	daisyui: {
		themes: [
			{
				studyhub: {
					"primary": "#9f1239",       /* Bordó (Rose-800) para elementos principales */
					"primary-content": "#ffffff",
					"secondary": "#e11d48",     /* Rojo vivo para detalles */
					"secondary-content": "#ffffff",
					"accent": "#fb7185",        /* Rosa claro/coral para botones secundarios */
					"accent-content": "#4c0519",
					"neutral": "#171717",       /* Negro claro para capas neutrales */
					"neutral-content": "#e5e5e5",
					"base-100": "#000000",      /* Negro puro para el fondo principal */
					"base-200": "#0a0a0a",      /* Negro ligeramente elevado para tarjetas/navbar */
					"base-300": "#171717",      /* Gris muy oscuro para bordes y detalles */
					"base-content": "#f5f5f5",  /* Blanco humo para los textos */
					"info": "#3b82f6",
					"success": "#22c55e",
					"warning": "#f59e0b",
					"error": "#ef4444",
				},
			},
		],
	},
}
