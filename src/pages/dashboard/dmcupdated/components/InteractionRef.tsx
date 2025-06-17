import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const InteractionRef= () => {

const intReferral: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			dataLabels: {
				position: 'center',
			},
		},
	},
	colors: ['#3e60d5','#eb1e1e'],
	stroke: {
		show: true,
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
		  name: 'B',
		  data: [107,92,1,1,3],
		},
		{
		  name: 'W',
		  data: [7,10,0,0,0],
		},
	  ],
	xaxis: {
		categories: ['Referred to the juvenile Authorities', 'Handled withing the Department and released', 'Social Services', 'Teen Court', 'None'],
	},
	legend: {
		position: 'top',
		offsetY: 5,
	},
	// states: {
	//     hover: {
	//         filter: 'none'
	//     }
	// },
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			bottom: 5,
		},
	},
}

	return (
			<div className="xl:col-span-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Interaction Referral by Race and 1 Count</h4>
						<div dir="ltr">
						<ReactApexChart
								className="apex-charts"
								options={intReferral}
								series={intReferral.series}
								type="bar"
								height={500}
							/>					</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							This disparity suggests that Black youth are more frequently funneled into the juvenile justice system, <br/>
							raising concerns about over-policing, differential treatment, and long-term systemic impacts on communities of color. <br/>
							Even at low offense levels, unequal referral patterns may contribute to cumulative disadvantage.
							</div>
					</div>
				</div>
			</div>
			
	)
}

export default InteractionRef
