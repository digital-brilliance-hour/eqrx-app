import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'
import { Link } from 'react-router-dom'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const SessionsByOS = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	const apexOpts: ApexOptions = {
		chart: {
			height: 315,
			type: 'radialBar',
		},
		plotOptions: {
			radialBar: {
				dataLabels: {
					name: {
						fontSize: '22px',
					},
					value: {
						fontSize: '16px',
					},
					total: {
						show: true,
						label: 'OS',
						formatter: function () {
							// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
							return '8541'
						},
					},
				},
			},
		},
		colors: ['#16a7e9', '#47ad77', '#ffc35a', '#f15776'],
		series: [44, 55, 67, 83],
		labels: ['Windows', 'Macintosh', 'Linux', 'Android'],
	}

	return (
		<div className="card">
			<div className="card-header flex justify-between items-center !border-0">
				<h4 className="card-title">Sessions by Operating System</h4>
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
				<ReactApexCharts className="apex-charts" options={apexOpts} series={apexOpts.series} type="radialBar" height={350} />
				<div className="flex text-center mt-2">
					<div className="w-1/2">
						<h4 className="text-lg font-normal mb-2.5">
							<span>8,285</span>
						</h4>
						<p className="text-muted mb-0">Online System</p>
					</div>
					<div className="w-1/2">
						<h4 className="text-lg font-normal mb-2.5">
							<span>3,534</span>
						</h4>
						<p className="text-muted mb-0">Offline System</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SessionsByOS
