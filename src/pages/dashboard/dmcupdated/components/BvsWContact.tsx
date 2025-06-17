import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const BvsWContacts = () => {

	
const contactBW: ApexOptions = {
	chart: {
		height: 380,
		type: 'line',
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: [3, 3],
		curve: 'straight',
		dashArray: [0, 0],
	},
	series: [
		{
			name: 'B',
			data: [51, 59, 82, 56, 34],
		},
		{
			name: 'W',
			data: [4, 3, 5, 5, 3],
		},
	],

	markers: {
		size: 0,
		// style: 'hollow', // full, hollow, inverted
	},
	xaxis: {
		categories: ['2014', '2015', '2016', '2017', '2018',],
	},
	colors: ['#3e60d5', '#eb1e1e'],
	tooltip: {
		y: {
			title: {
				formatter: function (val) {
					if (val === 'Session Duration') return val + ' (mins)'
					else if (val === 'Page Views') return val + ' per session'
					return val
				},
			},
		},
	},
	grid: {
		borderColor: '#f1f3fa',
	},
	legend: {
		position: 'top',
		offsetY: 7,
	},
}


	return (
                <div className="xl:col-span-3">
                    <div className="card">
                            <div className="p-6">
                                <h4 className="card-title">B and W Contacts</h4>
                                <div dir="ltr">
                                    <ReactApexChart className="apex-charts" options={contactBW} height={365} series={contactBW.series} type="line" />
                                </div>
                                <div className="pt-6">
                                <h3>Implications:</h3>
                                The fluctuating trend for Black individuals may indicate changes in policies, enforcement practices, or community dynamics affecting contact rates.<br/>
                                The stable trend for White individuals suggests consistent contact rates, possibly reflecting less variation in influencing factors.<br/>
                                The disparity in trends may highlight systemic issues or differences in how policies impact different racial groups, warranting further analysis to understand underlying causes
                                </div>
                            </div>
                        </div>
                </div>
                    
	)
}

export default BvsWContacts
