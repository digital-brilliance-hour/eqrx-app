import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { Link } from 'react-router-dom'

//image
import chrom from '@/assets/images/browsers/chrome.png'
import fireFox from '@/assets/images/browsers/firefox.png'
import safari from '@/assets/images/browsers/safari.png'
import web from '@/assets/images/browsers/web.png'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const SessionsByBrowser = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	const apexOpts: ApexOptions = {
		chart: {
			height: 364,
			type: 'radar',
			toolbar: {
				show: false,
			},
		},
		series: [
			{
				name: 'Usage',
				data: [80, 50, 30, 40, 60, 20],
			},
		],
		labels: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge', 'Explorer'],
		plotOptions: {
			radar: {
				size: 130,
				polygons: {
					strokeColors: '#e9e9e9',
					fill: {
						colors: ['#f8f8f8', '#fff'],
					},
				},
			},
		},
		colors: ['#16a7e9'],
		yaxis: {
			labels: {
				formatter: function (val: any) {
					return val + '%'
				},
			},
		},
		dataLabels: {
			enabled: true,
		},
		markers: {
			size: 4,
			colors: ['#fff'],
			strokeColors: '#16a7e9',
			strokeWidth: 2,
		},
	}

	return (
		<div className="card">
			<div className="card-header !border-0 flex justify-between items-center">
				<h4 className="card-title">Sessions by Browser</h4>
				<PopoverLayout toggler={<PopoverToggle />} placement="bottom-end" togglerClass="text-gray-600 dark:text-gray-400">
					<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1">
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Refresh Report
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Export Report
						</Link>
					</div>
				</PopoverLayout>
			</div>

			<div className="p-6 pt-0">
				<ReactApexCharts className="apex-charts" options={apexOpts} series={apexOpts.series} type="radar" height={364} />

				<div className="mt-1 text-center">
					<ul className="flex items-center justify-around">
						<li className="flex items-center">
							<img className="ms-3 pe-1 h-5" src={chrom} alt="chrome" />
							<span className="align-middle">45.87%</span>
						</li>
						<li className="flex items-center">
							<img className="ms-3 pe-1 h-5" src={fireFox} alt="chrome" />
							<span className="align-middle">3.25%</span>
						</li>
						<li className="flex items-center">
							<img className="ms-3 pe-1 h-5" src={safari} alt="chrome" />
							<span className="align-middle">9.68%</span>
						</li>
						<li className="flex items-center">
							<img className="ms-3 pe-1 h-5" src={web} alt="chrome" />
							<span className="align-middle">36.87%</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SessionsByBrowser
