import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'
import ReactApexChart from 'react-apexcharts'

const RevenueChart = () => {

const simple: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		stacked: true,
		stackType: '100%',
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
	colors: ['#3e60d5','#eb1e1e','#26bfc7','#f5bf38'],
	stroke: {
		show: true,
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
		  name: 'Black Male',
		  data: [25,47,68,42,36],
		},
		{
		  name: 'Black Female',
		  data: [9,9,16,17,16],
		},
		{
		  name: 'White Male',
		  data: [3,2,4,3,3,],
		},
		{
		  name: 'White Female',
		  data: [0,3,1,0,1],
		},
	  ],
	xaxis: {
		categories: ['2018','2017','2016','2015','2014'],
	},
	yaxis: {
		title: {
			text: '1st CHARGE',
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
<div className="xl:col-span-3">
                <div className="card">
                    <div className="p-6">
                        <h4 className="card-title mb-4">Simple Charges Recieved Black vs White</h4>
                        <div dir="ltr">
                        <ReactApexChart
                                className="apex-charts"
                                options={simple}
                                series={simple.series}
                                type="bar"
                                height={400}
                            />					</div>
                            <div className="pt-6">
                            <h3>Implications:</h3>
                                It may reflect potential biases in law enforcement, judicial processes, or reporting practices.<br/>
Further analysis is needed to understand the underlying causes, including socioeconomic factors, policing patterns, and systemic inequalities.<br/>
It highlights the importance of examining justice system practices to ensure fairness and equity.

                            </div>
                    </div>
                </div>
            </div>
	)
}

export default RevenueChart
