import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const OfficerInteractions = () => {

const officerInt: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stackType: '100%',
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
			name: 'NO',
			data: [148,114,0,0,0],
		},
		{
			name: 'SRO',
			data: [32,4,0,1,3],
		},
	],
	xaxis: {	
		categories: ['Refer to Juvenile Auth', 'Handle in Dept and released', 'Social Services', 'Teen Court', 'None'],
	},
	colors: [ '#3e60d5','#eb1e1e'],
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
							<h4 className="card-title mb-4">Officer Interactions by Officer Type and Referral</h4>
							<div dir="ltr">
								<ReactApexCharts className="apex-charts" options={officerInt} height={350} series={officerInt.series} type="bar" />
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

export default OfficerInteractions
