import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {

const uniqueLo: ApexOptions = {
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
			data: [191,20],
		},
		{
			name: 'White',
			data: [20,0],
		},
	],
	xaxis: {	
		categories: ['Unique', 'Not Uniuqe'],
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
                                <h4 className="card-title mb-4">Unique Location of Contacts by Race</h4>
                                <div dir="ltr">
                                    <ReactApexCharts className="apex-charts" options={uniqueLo} height={350} series={uniqueLo.series} type="bar" />
                                </div>
                                <div className="pt-6">
                                <h3>Implications:</h3>
                                The significantly higher number of unique contacts among Black individuals may suggest disparities in interactions, reporting, or enforcement practices.<br/>
                                This data could warrant further investigation into potential systemic factors, such as differences in community engagement, law enforcement practices, or societal influences affecting these contact rates.<br/>
                                </div>
                            </div>
                        </div>
                </div>
                
	)
}

export default RevenueChart
