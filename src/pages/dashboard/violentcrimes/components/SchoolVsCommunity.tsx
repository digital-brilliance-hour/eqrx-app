import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const RevenueChart = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
	const colors1 = ['#3e60d5', '#6c757d']

 const simplePieOpts: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [44, 55],
	labels: ['School Related', 'Community Incidents'],
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
						<h4 className="card-title mb-4">School Related VS Out Of School 
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={simplePieOpts} height={320} series={simplePieOpts.series} type="pie" />
						</div>
						<br/>The pie chart illustrates the distribution of incidents categorized into two segments: "School Related" and "Community Incidents." The blue segment, representing "School Related" incidents, accounts for 44.4% of the total, while the gray segment, representing "Community Incidents," makes up 55.6%. This visual comparison underscores that a slightly higher proportion of incidents occur within the community compared to the school environment.
					</div>
				</div>
				</div>
				
				
)
}
export default RevenueChart