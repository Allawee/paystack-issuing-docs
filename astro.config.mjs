// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://allawee.github.io',
	base: '/paystack-issuing-docs',
	integrations: [
		starlight({
			title: 'Paystack Issuing',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{
					label: 'Guides',
					items: [
						{ label: 'Pagination & Filtering', slug: 'guides/pagination-and-filtering' },
						{ label: 'Card Authorization Webhooks', slug: 'guides/card-authorization-webhooks' },
						{ label: 'Guaranteed Request Processing', slug: 'guides/guaranteed-request-processing' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Accounts', slug: 'api/accounts' },
						{ label: 'Customers', slug: 'api/customers' },
						{ label: 'Card Programs', slug: 'api/card-programs' },
						{ label: 'Card Bins', slug: 'api/card-bins' },
						{ label: 'Cards', slug: 'api/cards' },
						{ label: 'Card Authorizations', slug: 'api/card-authorizations' },
						{ label: 'Card Transactions', slug: 'api/card-transactions' },
						{ label: 'Payments', slug: 'api/payments' },
						{ label: 'Payment Requests', slug: 'api/payment-requests' },
						{ label: 'Payment Authorizations', slug: 'api/payment-authorizations' },
						{ label: 'Disputes', slug: 'api/disputes' },
						{ label: 'Fees', slug: 'api/fees' },
						{ label: 'Webhooks', slug: 'api/webhooks' },
						{ label: 'Events', slug: 'api/events' },
						{ label: 'Billings', slug: 'api/billings' },
						{ label: 'API Logs', slug: 'api/api-logs' },
					],
				},
				{
					label: 'Tools',
					items: [
						{ label: 'Banks', slug: 'tools/banks' },
						{ label: 'Bills', slug: 'tools/bills' },
						{ label: 'Merchants', slug: 'tools/merchants' },
						{ label: 'FX Rates & Quotes', slug: 'tools/fx' },
						{ label: 'Configuration', slug: 'tools/configuration' },
					],
				},
				{ label: 'Sandbox & Testing', slug: 'sandbox' },
				{ label: 'Dashboard', slug: 'dashboard' },
			],
		}),
	],
});
