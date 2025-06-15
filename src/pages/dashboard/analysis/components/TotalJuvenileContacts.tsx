import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

const totaljuvcont: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stacked: true,
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
		},
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
			name: 'B',
			data: [37,60,89,61,55],
		},

	],
	xaxis: {
		categories: ['2018', '2017', '2016', '2015', '2014'],
	},
	colors: ['#3e60d5'],
	// tooltip: {
	// 	y: {
	// 		formatter: function (val) {
	// 			return val + 'K'
	// 		},
	// 	},
	// },
	fill: {
		opacity: 1,
	},
	states: {
		// hover: {
		//     filter: 'none'
		// }
	},
	legend: {
		position: 'top',
		horizontalAlign: 'center',
		offsetY: 10,
	},
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
		},
	},

}
	return (
<div className="xl:col-span-3">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Total Juvenile Contacts</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={totaljuvcont} height={350} series={totaljuvcont.series} type="bar" />
						</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						 The data on Black juvenile contacts from 2014 to 2018 reveals a peak in 2016, with 89 reported contacts. There was a steady increase from 55 in 2014 to 61 in 2015, followed by the 2016 spike. However, the numbers declined to 60 in 2017 and dropped further to 37 in 2018. This pattern may indicate a shift in enforcement priorities, policy changes, or the impact of community intervention strategies during and after the 2016 peak in contacts.
						</div>
					</div>
				</div>
		</div>
	)
}
export default RevenueChart
