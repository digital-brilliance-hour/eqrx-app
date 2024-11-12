import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { Link } from 'react-router-dom'

// components
import WorldVectorMap from '../../../../components/VectorMap/WorldMap'
import { PopoverLayout } from '../../../../components/HeadlessUI'

const SessionsByCountry = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	const apexOpts: ApexOptions = {
		chart: {
			height: 332,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
		colors: ['#16a7e9'],
		dataLabels: {
			enabled: false,
		},
		series: [
			{
				name: 'Sessions',
				data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12],
			},
		],
		xaxis: {
			categories: ['India', 'China', 'United States', 'Japan', 'France', 'Italy', 'Netherlands', 'United Kingdom', 'Canada', 'South Korea'],
			axisBorder: {
				show: false,
			},
			labels: {
				formatter: function (val: any) {
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
		series: {
			regions: [
				{
					attribute: 'fill',
					scale: {
						ScaleKR: '#e6ebff',
						ScaleCA: '#b3c3ff',
						ScaleGB: '#809bfe',
						ScaleNL: '#4d73fe',
						ScaleIT: '#1b4cfe',
						ScaleFR: '#727cf5',
						ScaleJP: '#e7fef7',
						ScaleUS: '#e7e9fd',
						ScaleCN: '#8890f7',
						ScaleIN: '#727cf5',
					},
					values: {
						KR: 'ScaleKR',
						CA: 'ScaleCA',
						GB: 'ScaleGB',
						NL: 'ScaleNL',
						IT: 'ScaleIT',
						FR: 'ScaleFR',
						JP: 'ScaleJP',
						US: 'ScaleUS',
						CN: 'ScaleCN',
						IN: 'ScaleIN',
					},
				},
			],
		},
	}

	return (
		<div className="card">
			<div className="flex card-header justify-between items-center !border-0">
				<h4 className="card-title">Sessions by country</h4>
				<PopoverLayout placement="bottom-end" togglerClass="text-gray-600 dark:text-gray-400" toggler={<PopoverToggle />}>
					<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1">
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Sales Report
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Export Report
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Profit
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
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
						<ReactApexCharts className="apex-charts" options={apexOpts} height={400} series={apexOpts.series} type="bar" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SessionsByCountry
