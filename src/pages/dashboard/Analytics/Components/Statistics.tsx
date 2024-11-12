import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

//image
import email from '@/assets/images/svg/email-campaign.svg'

const Statistics = () => {
	/**
	 * Live count generator
	 */
	const liveCountGenerator = () => {
		setInterval(function () {
			const activeUsersCount = Math.floor(Math.random() * 600 + 150)

			const activeUserElement = document.getElementById('active-users-count')
			if (activeUserElement) {
				activeUserElement.innerHTML = activeUsersCount.toString()
			}

			const activeViewsElement = document.getElementById('active-views-count')
			if (activeViewsElement) {
				activeViewsElement.innerHTML = Math.floor(Math.random() * activeUsersCount + 200).toString()
			}
		}, 2000)
	}
	liveCountGenerator()

	const userApexOpts: ApexOptions = {
		chart: {
			height: 60,
			type: 'bar',
			sparkline: {
				enabled: true,
			},
		},
		plotOptions: {
			bar: {
				columnWidth: '60%',
			},
		},
		colors: ['#16a7e9'],
		series: [
			{
				data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
			},
		],
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
		xaxis: {
			crosshairs: {
				width: 1,
			},
		},
		tooltip: {
			fixed: {
				enabled: false,
			},
			x: {
				show: false,
			},
			y: {
				title: {
					formatter: function () {
						return ''
					},
				},
			},
			marker: {
				show: false,
			},
		},
	}

	const viewsApexOpts: ApexOptions = {
		chart: {
			type: 'line',
			height: 60,
			sparkline: {
				enabled: true,
			},
		},
		series: [
			{
				data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
			},
		],
		stroke: {
			width: 2,
			curve: 'smooth',
		},
		markers: {
			size: 0,
		},
		colors: ['#47ad77'],
		tooltip: {
			fixed: {
				enabled: false,
			},
			x: {
				show: false,
			},
			y: {
				title: {
					formatter: function () {
						return ''
					},
				},
			},
			marker: {
				show: false,
			},
		},
	}

	return (
		<>
			<div className="card cta-box overflow-hidden">
				<div className="p-6">
					<div className="flex items-center">
						<div>
							<h3 className="text-xl/7 font-normal mb-6">
								Enhance your <strong>Campaign</strong> for better outreach
							</h3>
							<Link to="#" className="text-success font-bold">
								Go Premium <i className="ri-arrow-right-line"></i>
							</Link>
						</div>
						<img className="ms-3" src={email} width="92" alt="Generic placeholder image" />
					</div>
				</div>
			</div>

			<div className="card">
				<div className="p-6">
					<div className="flex items-center">
						<div className="w-1/2">
							<h5 className="uppercase text-sm mt-0 truncate" title="Active Users">
								Active Users
							</h5>
							<h2 className="text-3xl my-3 py-0.5" id="active-users-count">
								825
							</h2>
							<p className="text-gray-400 truncate">
								<span className="text-success me-3">
									<i className="ri-arrow-up-line"></i> 3.27%
								</span>
								<span className="whitespace-nowrap">Since previous week</span>
							</p>
						</div>
						<div className="w-1/2">
							<div className="text-end">
								<ReactApexCharts className="apex-charts" options={userApexOpts} series={userApexOpts.series} type="bar" height={60} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="p-6">
					<div className="flex items-center">
						<div className="w-1/2">
							<h5 className="uppercase text-sm mt-0 truncate" title="Views per minute">
								Views per minute
							</h5>
							<h2 className="text-3xl my-3 py-0.5" id="active-views-count">
								589
							</h2>
							<p className="mb-0 text-muted text-truncate">
								<span className="text-danger me-3">
									<i className="ri-arrow-down-line"></i> 2.66%
								</span>
								<span className="whitespace-nowrap">Since previous week</span>
							</p>
						</div>
						<div className="w-1/2">
							<div className="text-end">
								<ReactApexCharts className="apex-charts" options={viewsApexOpts} series={viewsApexOpts.series} type="line" height={60} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Statistics
