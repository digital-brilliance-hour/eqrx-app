import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const RevenueChart = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
	const colors1 = ['#EE4B2B','#FFC300','#3e60d5','#4BC0C0','#9966FF','#FF9F40','#C9CBCF','#00A896','#F67280','#6A0572','#2C3E50','#E67E22','#1ABC9C','#9B59B6','#34495E','#95A5A6','#F1C40F']

 const contactOriginPie: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [5.9,2.3,1.6,3.9,4.3,3.9,2.0,5.6,2.0,2.0,6.6,0.3,6.2,3.0,2.0,3.6,2.0],
	labels: ['UNKNOWN','WILLIAMS RJ','WEST SA','WEAVER JM','WALKER J','SIMMONS LJ','ROYER KS','MANNING JD','LEWIS JG','ARD CJ','BROCK RC','CONNER DA','CORBITT AF','COULOMBE CA','FREEMAN GS','HILL JB','INGRAM TJ'],
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
						<h4 className="card-title mb-4">Contact By Officer Name
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={contactOriginPie} height={320} series={contactOriginPie.series} type="pie" />
						</div>
						<br/>The pie chart illustrates the distribution of incidents categorized into two segments: "School Related" and "Community Incidents." The blue segment, representing "School Related" incidents, accounts for 44.4% of the total, while the gray segment, representing "Community Incidents," makes up 55.6%. This visual comparison underscores that a slightly higher proportion of incidents occur within the community compared to the school environment.
					</div>
				</div>
				</div>
				
				
)
}
export default RevenueChart