import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const AgeRaceInteraction = () => {

const ageRaceInt: ApexOptions = {
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
			data: [192, 87,10,2,291],
		},
		{
			name: 'W',
			data: [15,5,0,0,20],
		},
	],
	xaxis: {
		categories: ['Teen 14-16', 'Pre-Teen 11-13', 'Child 10-8', 'Young child 4-7', 'Total'],
	},
	colors: ['#3e60d5', '#eb1e1e'],
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
							<h4 className="card-title mb-4">Age and Race of Interactions with KPD 2014-2018</h4>
							<div dir="ltr">
								<ReactApexChart className="apex-charts" options={ageRaceInt} height={390} series={ageRaceInt.series} type="bar" />
							</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							The data indicates that Black youth had significantly more interactions than White youth across all age groups.<br/>
							This disparity may reflect broader systemic issues, such as racial profiling, socio-economic factors, or differences in community-police relationships.
							</div>
						</div>
					</div>
			</div>
	)
}

export default AgeRaceInteraction
