import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const RevenueChart = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
	const colors1 = ['#EE4B2B','#FFC300','#3e60d5']

 const contactOriginPie: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [2.6,3.0,94.4],
	labels: ['Juvenile Court', 'Temporary', 'On-View'],
	colors: colors1,
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


return(

	<div className="lg:col-span-3">
	<div className="card">
			<div className="p-6">
						<h4 className="card-title mb-4">Count of Contact Origin
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={contactOriginPie} height={320} series={contactOriginPie.series} type="pie" />
						</div>
						<br/>The data indicates that 94.4% of juvenile contacts resulted in an on-view disposition, meaning immediate action was taken at the scene. In contrast, only 3.0% were given a temporary status and 2.6% were referred to juvenile court. This overwhelming reliance on on-view actions suggests that most cases are being addressed in real time rather than through formal court referrals or temporary holding, which may reflect departmental procedures, urgency of situations, or limited use of court-based interventions.
					</div>
				</div>
				</div>
				
				
)
}
export default RevenueChart