import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const CountRef = () => {

const CountRef: ApexOptions = {
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
		  name: 'Count of Referral Primary',
		  data: [180,118,1,0,3,2],
		},
	  ],
	xaxis: {
		categories: ['Referred to the juvenile Authorities', 'Handled withing the Department and released', 'Social Services', 'Teen Court', 'None', 'Referred to another Police'],
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
						<h4 className="card-title mb-4">Count of Referral Primary</h4>
						<div dir="ltr">
						<ReactApexChart
								className="apex-charts"
								options={CountRef}
								series={CountRef.series}
								type="bar"
								height={500}
							/>					</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							 The data suggests a strong preference for formal interventions over alternative or community-based referrals. <br/>
							 This pattern could indicate limited use of diversion programs, potentially increasing juvenile system <br/>
							 involvement and contributing to cumulative disadvantages for youth.
							</div>
					</div>
				</div>
			</div>
	
	)
}

export default CountRef
