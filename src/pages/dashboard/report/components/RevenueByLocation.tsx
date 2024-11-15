import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// components
import WorldVectorMap from '../../../../components/VectorMap/WorldMap'
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueByLocation = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	const apexOpts: ApexOptions = {
		chart: {
			height: 320,
			type: 'bar',
		},
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
		colors: ['#47ad77'],
		dataLabels: {
			enabled: false,
		},
		series: [
			{
				name: 'Orders',
				data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12],
			},
		],
		xaxis: {
			categories: ['India', 'China', 'United States', 'Japan', 'France', 'Italy', 'Netherlands', 'United Kingdom', 'Canada', 'South Korea'],
			axisBorder: {
				show: false,
			},
			labels: {
				formatter: function (val) {
					return val + '%'
				},
			},
		},
		grid: {
			strokeDashArray: 5,
		},
	}

	// vector map config
	const vectorOptions = {
		normalizeFunction: 'polynomial',
		markers: [
			{
				coords: [40.71, -74.0],
				name: 'New York',
			},
			{
				coords: [37.77, -122.41],
				name: 'San Francisco',
			},
			{
				coords: [-33.86, 151.2],
				name: 'Sydney',
			},
			{
				coords: [1.3, 103.8],
				name: 'Singapore',
			},
		],
		markerStyle: {
			initial: {
				r: 9,
				fill: '#6658dd',
				'fill-opacity': 0.9,
				stroke: '#fff',
				'stroke-width': 7,
				'stroke-opacity': 0.4,
			},

			hover: {
				stroke: '#fff',
				'fill-opacity': 1,
				'stroke-width': 1.5,
			},
		},
		backgroundColor: 'transparent',
		hoverOpacity: 0.7,
		hoverColor: false,
		regionStyle: {
			initial: {
				fill: 'rgba(145,166,189,.25)',
			},
		},
		zoomOnScroll: false,
	}

	return (
		<div className="card h-full">
			<div className="flex card-header justify-between items-center !border-0">
				<h4 className="card-title">Revenue By Locations</h4>
				<PopoverLayout placement="bottom-end" togglerClass="text-gray-600 dark:text-gray-400" toggler={<PopoverToggle />}>
					<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1">
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
							Sales Report
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
							Export Report
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
							Profit
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
							Action
						</Link>
					</div>
				</PopoverLayout>
			</div>

			<div className="p-6">
				<div className="grid lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2">
						<WorldVectorMap height="298px" width="100%" options={vectorOptions} />
					</div>
					<div dir="ltr">
						<ReactApexCharts className="apex-charts" options={apexOpts} height={320} series={apexOpts.series} type="bar" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RevenueByLocation
