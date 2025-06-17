import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {

const gender: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
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
			name: 'Male',
			data: [39,45,72,49,28],
		},
		{
			name: 'Female',
			data: [17,17,17,12,9],
		},
	],
	xaxis: {	
		categories: ['2014', '2015','2016','2017','2018'],
	},
	colors: [ '#26bfc7','#f5bf38'],
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
							<h4 className="card-title mb-4">Interactions by Year and Gender</h4>
							<div dir="ltr">
								<ReactApexCharts className="apex-charts" options={gender} height={350} series={gender.series} type="bar" />
							</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							 This trend suggests a gender disparity in interactions, with male interactions being more frequent and showing greater fluctuation over time. <br/>
							 The decline from 2016 onward for both genders could indicate changes in policy, reporting practices, or underlying social factors affecting interaction rates.
							</div>
						</div>
					</div>
			</div>
    )

}

export default RevenueChart
