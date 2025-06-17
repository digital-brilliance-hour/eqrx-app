import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const ContactRace = () => {

const contactByRace: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [6.6, 93.4],
	labels: ['W', 'B'],
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
				<h4 className="card-title mb-4">Contacts by Race</h4>
				<div dir="ltr">
					<ReactApexChart className="apex-charts" options={contactByRace} height={442} series={contactByRace.series} type="pie" />
				</div>
				<div className='mt-6'>
					<h3>Implications:</h3>
					<ul>
						<li>Disproportionate reporting suggests differences in community interactions with authorities.</li>
						<li>Further investigation needed into enforcement, policy, or societal factors influencing reporting trends.</li>
					</ul>
				</div>
			</div>
		</div>
                
	)
}

export default ContactRace
