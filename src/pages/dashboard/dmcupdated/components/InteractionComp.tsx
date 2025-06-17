import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const InteractionComp = () => {

const raceIntComp: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stacked: false,
		stackType: '100%',
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
			data: [107,108],
		},
		{
			name: 'W',
			data: [10,10],
		},
	],
	xaxis: {
		categories: ['Referred to the Juvenile Authorities', 'Handled within the Department and Released'],
	},
	colors: [ '#3e60d5','#eb1e1e'],
	tooltip: {
		y: {
			formatter: function (val) {
				return val + 'K'
			},
		},
	},
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
							<h4 className="card-title mb-4">Comparison of Interaction Outcomes by Race</h4>
							<div dir="ltr">
								<ReactApexCharts className="apex-charts" options={raceIntComp} height={350} series={raceIntComp.series} type="bar" />
							</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							The data suggests racial disparities in referral outcomes, with Black individuals more often referred to formal judicial authorities and handled by non-SROs. <br/>
							In contrast, White individuals are more frequently directed to alternative resolutions like Teen Court or receive no formal referral, managed exclusively by SROs. <br/>
							This may indicate systemic differences in how student behavior is addressed based on race and officer type.
							</div>
						</div>
					</div>
			</div>
	
                
	)
}

export default InteractionComp
