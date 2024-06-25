import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://Programming-0101.github.com/TheCuratedGuideToJavaScript',
	base: 'TheCuratedGuideToJavaScript',
	integrations: [
		starlight({
			title: 'Your JS Guide',
			social: {
				github: 'https://github.com/Programming-0101/TheCuratedGuideToJavaScript',
			},
			sidebar: [
				{
					label: 'Learning',
					autogenerate: { directory: 'learn' },
				},
				{
					label: 'Reference',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Start Here', link: '/reference/readme/' },
					],
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
