import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

export const shopLift: ApexOptions = {
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
	colors: ['#3e60d5','#eb1e1e'],
	stroke: {
		show: true,
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
		  name: 'Black',
		  data: [41],
		},
		{
		  name: 'White',
		  data: [9],
		},
	  ],
	xaxis: {
		categories: ['SHOPLIFTING'],
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

const Shoplifting = () => {

	return (
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="p-6">
                            <h4 className="card-title mb-4">Shoplifting Black vs White</h4>
                            <div dir="ltr">
                            <ReactApexChart
                                    className="apex-charts"
                                    options={shopLift}
                                    series={shopLift.series}
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

export default Shoplifting
