import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const SessionsOverview = () => {
	function getDaysInMonth(month: number, year: number) {
		const date = new Date(year, month, 1)
		const days = []
		let idx = 0
		while (date.getMonth() === month && idx < 15) {
			const d = new Date(date)
			days.push(d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' }))
			date.setDate(date.getDate() + 1)
			idx += 1
		}
		return days
	}

	const labels = getDaysInMonth(new Date().getMonth() + 1, new Date().getFullYear())

	const apexOpts: ApexOptions = {
		chart: {
			height: 240,
			type: 'area',
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
			width: 4,
		},
		series: [
			{
				name: 'Sessions',
				data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
			},
		],
		legend: {
			show: false,
		},
		colors: ['#47ad77'],
		xaxis: {
			// type: 'string',
			categories: labels,
			tooltip: {
				enabled: false,
			},
			axisBorder: {
				show: false,
			},
			labels: {},
		},
		yaxis: {
			labels: {
				formatter: function (val: any) {
					return val + 'k'
				},
				offsetX: -15,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				type: 'vertical',
				shadeIntensity: 1,
				inverseColors: false,
				opacityFrom: 0.45,
				opacityTo: 0.05,
				stops: [45, 100],
			},
		},
	}

	return (
		<div className="card">
			<div className="card-header flex justify-between items-center">
				<h4 className="card-title">Sessions Overview</h4>
				<ul className="hidden lg:flex">
					<li className="px-4 py-2">
						<Link className="block text-sm text-gray-400" to="#">
							Today
						</Link>
					</li>
					<li className="px-4 py-2">
						<Link className="block text-sm text-gray-400" to="#">
							7d
						</Link>
					</li>
					<li className="px-4 py-2">
						<Link className="block text-sm text-primary" to="#">
							15d
						</Link>
					</li>
					<li className="px-4 py-2">
						<Link className="block text-sm text-gray-400" to="#">
							1m
						</Link>
					</li>
					<li className="px-4 py-2">
						<Link className="block text-sm text-gray-400" to="#">
							1y
						</Link>
					</li>
				</ul>
			</div>
			<div className="p-6">
				<div className="bg-light-subtle border-top border-bottom border-light">
					<div className="flex flex-wrap items-center text-center">
						<div className="lg:w-1/4 w-1/2">
							<p className="text-gray-400 mt-6 mb-4 text-base">
								<i className="ri-donut-chart-fill"></i> Direct
							</p>
							<h3 className="font-normal text-2xl text-gray-500 mb-6">
								<span>170k</span>
							</h3>
						</div>
						<div className="lg:w-1/4 w-1/2">
							<p className="text-gray-400 mt-6 mb-4 text-base">
								<i className="ri-donut-chart-fill"></i> Organic Search
							</p>
							<h3 className="font-normal text-2xl text-gray-500 mb-6">
								<span>
									12M <i className="ri-corner-right-up-fill text-success"></i>
								</span>
							</h3>
						</div>
						<div className="lg:w-1/4 w-1/2">
							<p className="text-gray-400 mt-6 mb-4 text-base">
								<i className="ri-donut-chart-fill"></i> Refferal
							</p>
							<h3 className="font-normal text-2xl text-gray-500 mb-6">
								<span>8.27%</span>
							</h3>
						</div>
						<div className="lg:w-1/4 w-1/2">
							<p className="text-gray-400 mt-6 mb-4 text-base">
								<i className="ri-donut-chart-fill"></i> Social
							</p>
							<h3 className="font-normal text-2xl text-gray-500 mb-6">
								<span>
									69k <i className="ri-corner-right-down-line text-danger"></i>
								</span>
							</h3>
						</div>
					</div>
				</div>
			</div>

			<div className="p-6">
				<div dir="ltr">
					<ReactApexChart className="apex-charts" options={apexOpts} height={220} series={apexOpts.series} type="area" />
				</div>
			</div>
		</div>
	)
}

export default SessionsOverview
