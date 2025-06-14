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
						<br/>The pie chart illustrates the distribution of incidents categorized into two segments: "School Related" and "Community Incidents." The blue segment, representing "School Related" incidents, accounts for 44.4% of the total, while the gray segment, representing "Community Incidents," makes up 55.6%. This visual comparison underscores that a slightly higher proportion of incidents occur within the community compared to the school environment.
					</div>
				</div>
				</div>
				
				
)
}
export default RevenueChart