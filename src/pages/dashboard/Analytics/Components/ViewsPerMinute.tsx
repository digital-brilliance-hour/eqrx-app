import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const ViewsPerMinute = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	function getRandomData(length: number) {
		const dataArray = []
		for (let idx = 0; idx < length; idx++) {
			dataArray.push(Math.floor(Math.random() * 90) + 10)
		}
		return dataArray
	}

	const apexOpts: ApexOptions = {
		chart: {
			height: 216,
			type: 'bar',
			stacked: true,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '22%',
				dataLabels: {
					position: 'top', // top, center, bottom
				},
			},
		},
		dataLabels: {
			enabled: true,
			offsetY: -24,
			style: {
				fontSize: '12px',
				colors: ['#8a969c'],
			},
		},
		series: [
			{
				name: 'Views',
				data: getRandomData(10),
			},
		],
		legend: {
			show: false,
		},
		colors: ['#16a7e9'],
		xaxis: {
			labels: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				inverseColors: !0,
				shade: 'light',
				type: 'horizontal',
				shadeIntensity: 0.25,
				gradientToColors: void 0,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100, 100, 100],
			},
		},
		tooltip: {
			y: {
				formatter: function (val: any) {
					return val
				},
			},
		},
	}

	return (
		<div className="card">
			<div className="card-header flex justify-between items-center">
				<h4 className="card-title">Views Per Minute</h4>
				<PopoverLayout placement="bottom-end" toggler={<PopoverToggle />} togglerClass="text-gray-600 dark:text-gray-400">
					<div className="w-36 z-50 mt-2 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2">
						<Link className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" to="">
							Sales Report
						</Link>
						<Link className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" to="">
							Export Report
						</Link>
						<Link className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Profit
						</Link>
						<Link className="flex items-center gap-1.5 py-1.5 px-3.5 rounded text-sm transition-all duration-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Action
						</Link>
					</div>
				</PopoverLayout>
			</div>

			<div className="p-6 pt-0">
				<ReactApexCharts className="apex-charts" options={apexOpts} series={apexOpts.series} type="bar" height={216} />

				<div className="overflow-x-auto mt-6">
					<table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead>
							<tr>
								<th className="p-2 text-start">Page</th>
								<th className="p-2 text-start">Views</th>
								<th className="p-2 text-start">Bounce Rate</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
							<tr>
								<td className="p-2">
									<Link to="" className="text-muted">
										/adminto/dashboard-analytics
									</Link>
								</td>
								<td className="p-2">25</td>
								<td className="p-2">87.5%</td>
							</tr>
							<tr>
								<td className="p-2">
									<Link to="" className="text-muted">
										/attex/dashboard-crm
									</Link>
								</td>
								<td className="p-2">15</td>
								<td className="p-2">21.48%</td>
							</tr>
							<tr>
								<td className="p-2">
									<Link to="" className="text-muted">
										/attex/dashboard
									</Link>
								</td>
								<td className="p-2">10</td>
								<td className="p-2">63.59%</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default ViewsPerMinute
