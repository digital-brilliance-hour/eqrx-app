import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const TotalSalesChart = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	const apexOpts: ApexOptions = {
		chart: {
			height: 286,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				dataLabels: {
					name: {
						fontSize: '14px',
						color: undefined,
						offsetY: 100,
					},
					value: {
						offsetY: 55,
						fontSize: '24px',
						color: undefined,
						formatter: function (val) {
							return val + '%'
						},
					},
				},
				track: {
					background: 'rgba(170,184,197, 0.2)',
					margin: 0,
				},
			},
		},
		fill: {
			gradient: {
				// enabled: true,
				shade: 'dark',
				shadeIntensity: 0.2,
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 65, 91],
			},
		},
		stroke: {
			dashArray: 4,
		},
		colors: ['#3e60d5', '#47ad77', '#fa5c7c', '#16a7e9'],
		series: [67],
		labels: ['Returning Customer'],
		responsive: [
			{
				breakpoint: 380,
				options: {
					chart: {
						height: 180,
					},
				},
			},
		],
		grid: {
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
		},
	}

	const apexData = [67]

	return (
		<div className="col-lg-4">
			<div className="card">
				<div className="flex px-6 py-3 justify-between items-center">
					<h4 className="card-title">Total Sales</h4>
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

				<div className="px-5 py-3.5 bg-warning/10 text-warning border-y border-warning/20">
					Something went wrong. Please{' '}
					<strong>
						<Link to="#" className="font-bold underline">
							refresh
						</Link>
					</strong>{' '}
					to get new data!
				</div>

				<div className="p-6 pt-0">
					<ReactApexCharts options={apexOpts} series={apexData} type="radialBar" height={286} className="apex-charts mb-3" />
					<div className="mb-1.5">
						<h5 className="text-base font-medium mb-2.5">Brooklyn, New York</h5>
						<div className="flex items-center gap-2">
							<div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
								<div className="flex flex-col justify-center overflow-hidden bg-primary w-3/4" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
							</div>
							<span className="font-bold">72k </span>
						</div>
					</div>

					<div className="mb-1.5">
						<h5 className="text-base font-medium mb-2.5">The Castro, San Francisco</h5>
						<div className="flex items-center gap-2">
							<div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
								<div className="flex flex-col justify-center overflow-hidden bg-primary w-1/3" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
							</div>
							<span className="font-bold">39k</span>
						</div>
					</div>

					<div className="mb-1.5">
						<h5 className="text-base font-medium mb-2.5">Kovan, Singapore</h5>
						<div className="flex items-center gap-2">
							<div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
								<div className="flex flex-col justify-center overflow-hidden bg-primary w-3/5" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
							</div>
							<span className="font-bold">61k </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TotalSalesChart
