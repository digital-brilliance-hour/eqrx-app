import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// components
import WorldVectorMap from '../../../../components/VectorMap/WorldMap'
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueByLocation = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

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
		  name: 'Black Male',
		  data: [218],
		},
		{
		  name: 'Black Female',
		  data: [67],
		},
		{
		  name: 'White Male',
		  data: [15],
		},
		{
		  name: 'White Female',
		  data: [5],
		},
	  ],
	xaxis: {	
		categories: ['Genders'],
	},
	colors: ['#3e60d5','#eb1e1e','#26bfc7','#f5bf38'],	fill: {
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
							</div>
						</div>
					</div>
			</div>
	)
}

export default RevenueByLocation
