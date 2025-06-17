import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const RevenueChart = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
	const colors1 = ['#EE4B2B', '#3e60d5']

 const officerTyePie: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [13.5, 86.9],
	labels: ['SRO', 'NO'],
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
						<h4 className="card-title mb-4">Contact Officer Type
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={officerTyePie} height={320} series={officerTyePie.series} type="pie" />
						</div>
						<br/>The data shows that 86.9% of juvenile contacts were made by officers who are not School Resource Officers (SROs), while only 13.5% of contacts involved SROs. This large difference suggests that most juvenile interactions with law enforcement occur outside of school environments or that SROs play a limited role in overall youth-related policing. The disparity may also reflect staffing patterns, deployment priorities, or specific responsibilities assigned to SROs compared to other officers.
					</div>
				</div>
				</div>
				
				
)
}
export default RevenueChart