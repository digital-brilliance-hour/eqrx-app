export interface MenuItemTypes {
	key: string
	label: string
	isTitle?: boolean
	icon?: string
	url?: string
	badge?: {
		variant: string
		text: string
	}
	parentKey?: string
	target?: string
	children?: MenuItemTypes[]
}

const MENU_ITEMS: MenuItemTypes[] = [
	{
		key: 'navigation',
		label: 'Navigation',
		isTitle: true,
	},
	{
		key: 'dashboard',
		label: 'Dashboards',
		isTitle: false,
		icon: 'ri-home-4-line',
		badge: {
			variant: 'bg-success rounded-full',
			text: '2',
		},
		children: [
			{
				key: 'dashboard-analytics',
				label: 'Analytics',
				url: '/analytics',
				parentKey: 'dashboard',
			},
			{
				key: 'dashboard-ecommerce',
				label: 'Ecommerce',
				url: '/ecommerce',
				parentKey: 'dashboard',
			},
		],
	},
	{
		key: 'apps',
		label: 'Apps',
		isTitle: true,
	},
	{
		key: 'apps-calendar',
		label: 'Calendar',
		isTitle: false,
		icon: 'ri-calendar-event-line',
		url: '/apps/calendar',
	},
	{
		key: 'apps-chat',
		label: 'Chat',
		isTitle: false,
		icon: 'ri-message-3-line',
		url: '/apps/chat',
	},
	{
		key: 'apps-email',
		label: 'Email',
		isTitle: false,
		icon: 'ri-mail-line',
		children: [
			{
				key: 'email-inbox',
				label: 'Inbox',
				url: '/apps/email/inbox',
				parentKey: 'apps-email',
			},
			{
				key: 'email-read',
				label: 'Read Email',
				url: '/apps/email/read',
				parentKey: 'apps-email',
			},
		],
	},
	{
		key: 'apps-tasks',
		label: 'Tasks',
		isTitle: false,
		icon: 'ri-task-line',
		children: [
			{
				key: 'tasks-list',
				label: 'List',
				url: '/apps/tasks/list',
				parentKey: 'apps-tasks',
			},
			{
				key: 'tasks-details',
				label: 'Details',
				url: '/apps/tasks/details',
				parentKey: 'apps-tasks',
			},
		],
	},
	{
		key: 'apps-kanban',
		label: 'Kanban Board',
		isTitle: false,
		icon: 'ri-list-check-3',
		url: '/apps/kanban',
	},
	{
		key: 'apps-file-manager',
		label: 'File Manager',
		isTitle: false,
		icon: 'ri-folder-2-line',
		url: '/apps/file-manager',
	},
	{
		key: 'custom',
		label: 'Custom',
		isTitle: true,
	},
	{
		key: 'pages',
		label: 'Pages',
		isTitle: false,
		icon: 'ri-pages-line',
		children: [
			{
				key: 'pages-starter',
				label: 'Starter Page',
				url: '/pages/starter',
				parentKey: 'pages',
			},
			{
				key: 'pages-profile',
				label: 'Profile',
				url: '/pages/profile',
				parentKey: 'pages',
			},
			{
				key: 'pages-timeline',
				label: 'Timeline',
				url: '/pages/timeline',
				parentKey: 'pages',
			},
			{
				key: 'pages-invoice',
				label: 'Invoice',
				url: '/pages/invoice',
				parentKey: 'pages',
			},
			{
				key: 'pages-faq',
				label: 'FAQ',
				url: '/pages/faq',
				parentKey: 'pages',
			},
			{
				key: 'pages-pricing',
				label: 'Pricing',
				url: '/pages/pricing',
				parentKey: 'pages',
			},
			{
				key: 'pages-maintenance',
				label: 'Maintenance',
				url: '/pages/maintenance',
				parentKey: 'pages',
			},
		],
	},
	{
		key: 'auth',
		label: 'Auth Pages',
		isTitle: false,
		icon: 'ri-shield-user-line',
		children: [
			{
				key: 'auth-login',
				label: 'Login',
				url: '/auth/login',
				parentKey: 'auth',
			},
			{
				key: 'auth-login2',
				label: 'Login 2',
				url: '/auth/login2',
				parentKey: 'auth',
			},
			{
				key: 'auth-register',
				label: 'Register',
				url: '/auth/register',
				parentKey: 'auth',
			},
			{
				key: 'auth-register2',
				label: 'Register 2',
				url: '/auth/register2',
				parentKey: 'auth',
			},
			{
				key: 'auth-logout',
				label: 'Logout',
				url: '/auth/logout',
				parentKey: 'auth',
			},
			{
				key: 'auth-logout2',
				label: 'Logout 2',
				url: '/auth/logout2',
				parentKey: 'auth',
			},
			{
				key: 'auth-recover-password',
				label: 'Recover Password',
				url: '/auth/recover-password',
				parentKey: 'auth',
			},
			{
				key: 'auth-recover-password2',
				label: 'Recover Password 2',
				url: '/auth/recover-password2',
				parentKey: 'auth',
			},
			{
				key: 'auth-lock-screen',
				label: 'Lock Screen',
				url: '/auth/lock-screen',
				parentKey: 'auth',
			},
			{
				key: 'auth-lock-screen2',
				label: 'Lock Screen 2',
				url: '/auth/lock-screen2',
				parentKey: 'auth',
			},
			{
				key: 'auth-confirm-mail',
				label: 'Confirm Mail',
				url: '/auth/confirm-mail',
				parentKey: 'auth',
			},
			{
				key: 'auth-confirm-mail2',
				label: 'Confirm Mail 2',
				url: '/auth/confirm-mail2',
				parentKey: 'auth',
			},
		],
	},
	{
		key: 'error',
		label: 'Error Pages',
		isTitle: false,
		icon: 'ri-error-warning-line',
		children: [
			{
				key: 'error-404',
				label: 'Error 404',
				url: '/error-404',
				parentKey: 'pages-error',
			},
			{
				key: 'error-404-alt',
				label: 'Error 404-alt',
				url: '/error-404-alt',
				parentKey: 'pages-error',
			},
			{
				key: 'error-500',
				label: 'Error 500',
				url: '/error-500',
				parentKey: 'pages-error',
			},
		],
	},
	{
		key: 'components',
		label: 'Components',
		isTitle: true,
	},
	{
		key: 'base-ui',
		label: 'Base UI',
		isTitle: false,
		icon: 'ri-briefcase-line',
		children: [
			{
				key: 'ui-accordions',
				label: 'Accordions',
				url: '/ui/accordions',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-alerts',
				label: 'Alerts',
				url: '/ui/alerts',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-avatars',
				label: 'Avatars',
				url: '/ui/avatars',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-buttons',
				label: 'Buttons',
				url: '/ui/buttons',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-badges',
				label: 'Badges',
				url: '/ui/badges',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-breadcrumb',
				label: 'Breadcrumb',
				url: '/ui/breadcrumb',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-cards',
				label: 'Cards',
				url: '/ui/cards',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-collapse',
				label: 'Collapse',
				url: '/ui/collapse',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-dismissible',
				label: 'Dismissible',
				url: '/ui/dismissible',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-dropdowns',
				label: 'Dropdowns',
				url: '/ui/dropdowns',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-progress',
				label: 'Progress',
				url: '/ui/progress',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-skeleton',
				label: 'Skeleton',
				url: '/ui/skeleton',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-spinners',
				label: 'Spinners',
				url: '/ui/spinners',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-list-group',
				label: 'List Group',
				url: '/ui/list-group',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-ratio',
				label: 'Ratio',
				url: '/ui/ratio',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-tabs',
				label: 'Tabs',
				url: '/ui/tabs',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-modals',
				label: 'Modals',
				url: '/ui/modals',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-offcanvas',
				label: 'Offcanvas',
				url: '/ui/offcanvas',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-popovers',
				label: 'Popovers',
				url: '/ui/popovers',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-tooltips',
				label: 'Tooltips',
				url: '/ui/tooltips',
				parentKey: 'base-ui',
			},
			{
				key: 'ui-typography',
				label: 'Typography',
				url: '/ui/typography',
				parentKey: 'base-ui',
			},
		],
	},
	{
		key: 'extended',
		label: 'Extended UI',
		isTitle: false,
		icon: 'ri-stack-line',
		children: [
			{
				key: 'extended-swiper',
				label: 'Swiper',
				url: '/extended-ui/swiper',
				parentKey: 'extended',
			},
			{
				key: 'extended-nestable-list',
				label: 'Nestable List',
				url: '/extended-ui/nestable-list',
				parentKey: 'extended',
			},
			{
				key: 'extended-ratings',
				label: 'Ratings',
				url: '/extended-ui/ratings',
				parentKey: 'extended',
			},
			{
				key: 'extended-player',
				label: 'Player',
				url: '/extended-ui/player',
				parentKey: 'extended',
			},
			{
				key: 'extended-scrollbar',
				label: 'Scrollbar',
				url: '/extended-ui/scrollbar',
				parentKey: 'extended',
			},
			{
				key: 'extended-tooltip',
				label: 'Tippy Tooltip',
				url: '/extended-ui/tooltip',
				parentKey: 'extended',
			},
		],
	},
	{
		key: 'icons',
		label: 'Icons',
		isTitle: false,
		icon: 'ri-service-line',
		children: [
			{
				key: 'icons-remix',
				label: 'Remix icons',
				url: '/ui/icons/remix-icons',
				parentKey: 'icons',
			},
		],
	},
	{
		key: 'forms',
		label: 'Forms',
		isTitle: false,
		icon: 'ri-survey-line',
		children: [
			{
				key: 'forms-basic-elements',
				label: 'Basic Elements',
				url: '/ui/forms/basic-elements',
				parentKey: 'forms',
			},
			{
				key: 'forms-form-advanced',
				label: 'Form Advanced',
				url: '/ui/forms/form-advanced',
				parentKey: 'forms',
			},
			{
				key: 'forms-editors',
				label: 'Editors',
				url: '/ui/forms/editors',
				parentKey: 'forms',
			},
			{
				key: 'forms-file-uploads',
				label: 'File Uploads',
				url: '/ui/forms/file-uploads',
				parentKey: 'forms',
			},
			{
				key: 'forms-validation',
				label: 'Validation',
				url: '/ui/forms/validation',
				parentKey: 'forms',
			},
			{
				key: 'forms-layout',
				label: 'Form Layout',
				url: '/ui/forms/layout',
				parentKey: 'forms',
			},
		],
	},
	{
		key: 'tables',
		label: 'Tables',
		isTitle: false,
		icon: 'ri-table-line',
		children: [
			{
				key: 'tables-basic',
				label: 'Basic Tables',
				url: '/ui/tables/basic-tables',
				parentKey: 'tables',
			},
			{
				key: 'tables-data',
				label: 'Data Tables',
				url: '/ui/tables/data-tables',
				parentKey: 'tables',
			},
		],
	},
	{
		key: 'apex-charts',
		label: 'Apex Charts',
		isTitle: false,
		icon: 'ri-bar-chart-line',
		children: [
			{
				key: 'area-apex',
				label: 'Area',
				url: '/ui/apex/area',
				parentKey: 'apex-charts',
			},
			{
				key: 'bar-apex',
				label: 'Bar',
				url: '/ui/apex/bar',
				parentKey: 'apex-charts',
			},
			{
				key: 'bubble-apex',
				label: 'Bubble',
				url: '/ui/apex/bubble',
				parentKey: 'apex-charts',
			},
			{
				key: 'candlestick-apex',
				label: 'Candlestick',
				url: '/ui/apex/candlestick',
				parentKey: 'apex-charts',
			},
			{
				key: 'column-apex',
				label: 'Column',
				url: '/ui/apex/column',
				parentKey: 'apex-charts',
			},
			{
				key: 'heatmap-apex',
				label: 'Heatmap',
				url: '/ui/apex/heatmap',
				parentKey: 'apex-charts',
			},
			{
				key: 'line-apex',
				label: 'Line',
				url: '/ui/apex/line',
				parentKey: 'apex-charts',
			},
			{
				key: 'mixed-apex',
				label: 'Mixed',
				url: '/ui/apex/mixed',
				parentKey: 'apex-charts',
			},
			{
				key: 'timeline-apex',
				label: 'Timeline',
				url: '/ui/apex/timeline',
				parentKey: 'apex-charts',
			},
			{
				key: 'boxplot-apex',
				label: 'Boxplot',
				url: '/ui/apex/boxplot',
				parentKey: 'apex-charts',
			},
			{
				key: 'treemap-apex',
				label: 'Treemap',
				url: '/ui/apex/treemap',
				parentKey: 'apex-charts',
			},
			{
				key: 'pie-apex',
				label: 'Pie',
				url: '/ui/apex/pie',
				parentKey: 'apex-charts',
			},
			{
				key: 'radar-apex',
				label: 'Radar',
				url: '/ui/apex/radar',
				parentKey: 'apex-charts',
			},
			{
				key: 'radialbar-apex',
				label: 'RadialBar',
				url: '/ui/apex/radialbar',
				parentKey: 'apex-charts',
			},
			{
				key: 'scatter-apex',
				label: 'Scatter',
				url: '/ui/apex/scatter',
				parentKey: 'apex-charts',
			},
			{
				key: 'polararea-apex',
				label: 'Polar Area',
				url: '/ui/apex/polararea',
				parentKey: 'apex-charts',
			},
			{
				key: 'sparklines-apex',
				label: 'Sparklines',
				url: '/ui/apex/sparklines',
				parentKey: 'apex-charts',
			},
		],
	},
	{
		key: 'chartjs-charts',
		label: 'ChartJS',
		isTitle: false,
		icon: 'ri-pie-chart-line',
		children: [
			{
				key: 'area-chartjs',
				label: 'Area',
				url: '/ui/chartjs/area',
				parentKey: 'chartjs-charts',
			},
			{
				key: 'bar-chartjs',
				label: 'Bar',
				url: '/ui/chartjs/bar',
				parentKey: 'chartjs-charts',
			},
			{
				key: 'line-chartjs',
				label: 'Line',
				url: '/ui/chartjs/line',
				parentKey: 'chartjs-charts',
			},
			{
				key: 'other-chartjs',
				label: 'Other',
				url: '/ui/chartjs/other',
				parentKey: 'chartjs-charts',
			},
		],
	},
	{
		key: 'maps',
		label: 'Maps',
		isTitle: false,
		icon: 'ri-treasure-map-line',
		children: [
			{
				key: 'maps-google-maps',
				label: 'Google maps',
				url: '/ui/maps/google-maps',
				parentKey: 'maps',
			},
			{
				key: 'maps-vector-maps',
				label: 'Vector maps',
				url: '/ui/maps/vector-maps',
				parentKey: 'maps',
			},
		],
	},
	{
		key: 'badge-items',
		label: 'Badge Items',
		isTitle: false,
		icon: 'ri-flag-2-line',
		url: '',
		badge: {
			variant: 'bg-danger rounded-md',
			text: 'Hot',
		},
	},
]

export { MENU_ITEMS }
