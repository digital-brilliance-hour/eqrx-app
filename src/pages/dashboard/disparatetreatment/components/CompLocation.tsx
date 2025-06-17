import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {

const compLocation: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [31.5, 68.5],
	labels: ['Not-Unique', 'Unique'],
	colors: [ '#eb1e1e','#3e60d5'],
	legend: {
		show: true,
		position: 'bottom',
		horizontalAlign: 'center',
		// verticalAlign: "middle",
		floating: false,
		fontSize: '14px',
		offsetX: 0,
		offsetY: 7,
	},
	responsive: [
		{
			breakpoint: 600,
			options: {
				chart: {
					height: 240,
				},
				legend: {
					show: false,
				},
			},
		},
	],
}

	return (
                <div className="card xl:col-span-3">
                    <div className="p-6">
                        <h4 className="card-title mb-4">Comparison of Contacts at 1 or More Locations</h4>
                        <div dir="ltr">
                            <ReactApexChart className="apex-charts" options={compLocation} height={400} series={compLocation.series} type="pie" />
                        </div>
                        <div className='mt-6'>
                            <h3>Implications:</h3>
                            <ul>
                                <li>The disproportion in reporting suggests potential differences in community interactions with authorities.</li>
                                <li>This may be influenced by variations in enforcement practices, policies, or societal factors.</li>
                                <li>Further investigation is needed to understand the underlying causes of these reporting trends and to identify any systemic issues affecting community-authority relationships.</li>
                            </ul>
                        </div>
                    </div>
                </div>
        
	)
}

export default RevenueChart
