import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {

const unique: ApexOptions = {
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
			name: 'Black',
			data: [260,20],
		},
		{
			name: 'White',
			data: [25,0],
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
                                <h4 className="card-title mb-4">Unique Contacts by Race</h4>
                                <div dir="ltr">
                                    <ReactApexCharts className="apex-charts" options={unique} height={350} series={unique.series} type="bar" />
                                </div>
                                <div className="pt-6">
                                <h3>Implications:</h3>
                                The data highlights racial disparities in referral outcomes, with Black individuals experiencing a significantly higher number of both unique and non-unique contacts.<br/>
    This trend may suggest systemic biases or unequal treatment in the processes leading to referrals.<br/>
    The concentration of non-unique contacts among Black individuals could indicate repeated interactions with the system, raising concerns about potential over-surveillance or lack of effective resolution mechanisms.
    
                                </div>
                            </div>
                        </div>
                </div>
    
	)
}

export default RevenueChart
