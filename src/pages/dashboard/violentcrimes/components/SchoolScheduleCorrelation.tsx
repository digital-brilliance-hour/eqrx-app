import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	const apexOpts: ApexOptions = {
		series: [
			{
				name: 'During Break',
				type: 'column',
				data: [440, 505, 375, 200, 300, 412, 351, 51, 260, 81, 45, 321],
			},
			{
				name: 'During School',
				type: 'column',
				data: [10, 20, 5, 12 ,30, 41, 35, 51, 60, 31, 70, 60,],
			},
		],
		chart: {
			height: 374,
			type: 'line',
			offsetY: 10,
		},
		stroke: {
			width: [2, 3],
		},
		plotOptions: {
			bar: {
				columnWidth: '50%',
			},
		},
		colors: ['#3e60d5', '#47ad77'],
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
		legend: {
			offsetY: 7,
		},
		grid: {
			padding: {
				bottom: 20,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				type: 'horizontal',
				shadeIntensity: 0.25,
				gradientToColors: undefined,
				inverseColors: true,
				opacityFrom: 0.75,
				opacityTo: 0.75,
				stops: [0, 0, 0],
			},
		},
		yaxis: [
			{
				title: {
					text: 'Juvenile Offenses',
				},
			},
		],
	}

	const series = [
		{
			name: 'During Break',
			type: 'line',
			data: [440, 505, 375, 200, 300, 412, 351, 51, 260, 31, 45, 321],
		},
		{
			name: 'During School',
			type: 'line',
			data: [10, 20, 5, 12 ,30, 41, 35, 51, 60, 31, 70, 60,],
		},
	]

	return (
		<div className="lg:col-span-2">
			<div className="card">
				<div className="flex card-header justify-between items-center">
					<h4 className="card-title">School Schedule Correlation</h4>
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
				<div className="bg-light/40 border-b border-gray-100 dark:bg-light/5 dark:border-b-gray-700">
					<div className="flex flex-wrap justify-around items-center text-center">
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> Current Week
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>15</span>
							</h3>
						</div>
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> Previous Week
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>
									20 <i className="ri-corner-right-down-line text-success"></i>
								</span>
							</h3>
						</div>
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> In School
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>
									16.20% <i className="ri-corner-right-up-line text-success"></i>
								</span>
							</h3>
						</div>
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> During Break
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>
									10 <i className="ri-corner-right-up-line text-danger"></i>
								</span>
							</h3>
						</div>
					</div>
				</div>
				<div className="p-6">
					<div dir="ltr">
						<ReactApexCharts options={apexOpts} series={series} type="line" height={380} className="apex-charts mt-3" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RevenueChart
