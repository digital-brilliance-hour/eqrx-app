import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const FirstChargeGroupe1Chart = () => {

	const uniqueContact: ApexOptions = {
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
			name: 'Black',
			data: [6,1,2,1],
		},
		{
			name: 'White',
			data: [0,1,0,1],
		},
	],
	xaxis: {	
		categories: ['All Other Larceny', 'All Other Sex Offenses', 'All Other Simple Assault','All Traffic'],
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
		<div className="xl:col-span-6">
                        <div className="card">
                                <div className="p-6">
                                    <h4 className="card-title mb-4">1st Charge Groupe 1</h4>
                                    <div dir="ltr">
                                        <ReactApexCharts className="apex-charts" options={uniqueContact} height={350} series={uniqueContact.series} type="bar" />
                                    </div>
                                    <div className="pt-6">
                                    <h3>Implications:</h3>
                                    The significantly higher number of unique contacts among Black individuals execpt for Traffic charges may suggest disparities in interactions, reporting, or enforcement practices.<br/>
                                    This data could warrant further investigation into potential systemic factors, such as differences in community engagement, law enforcement practices, or societal influences affecting these contact rates.<br/>
                                    </div>
                                </div>
                            </div>
                    </div>
	)
}

export default FirstChargeGroupe1Chart
