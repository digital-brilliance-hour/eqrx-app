import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const TotalCountRace = () => {

const totalCountRace: ApexOptions = {
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
		  data: [1,3,2,2,17,54,206],
		},
		{
		  name: 'W',
		  data: [0,0,0,1,1,1,17],
		},
	  ],
	xaxis: {
		categories: ['7', '6', '5', '4', '3', '2', '1'],
	},
	yaxis: {
		title: {
			text: 'NUMBER OF COUNTS PER INTERACTION',
		},
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
						<h4 className="card-title mb-4">Total Counts by Race</h4>
						<div dir="ltr">
						<ReactApexChart
								className="apex-charts"
								options={totalCountRace}
								series={totalCountRace.series}
								type="bar"
								height={500}
							/>
							</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							This chart reinforces racial disparity in enforcement outcomes. <br/>
							Black individuals not only experience more frequent interactions, <br/>
							but they also tend to receive more charges per interaction than White individuals.
							</div>
					</div>
				</div>
			</div>
			
	)
}

export default TotalCountRace
