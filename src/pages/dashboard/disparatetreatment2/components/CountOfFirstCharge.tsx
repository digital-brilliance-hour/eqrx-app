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
	series: [2.0,1.6,4.6,1.3,1.6,2.0,10.2,7.2,9.5,7.2,16.4,1.3,7.9,3.3,3.3,5.2,1.3],
	labels: ['All Other Larceny','CITY ORDINANCE','POSSESSING/CONCE','OTHER WEAPONS','DISORDERLY','CRIMINAL DAMAGE','LARCENY FROM','FIGHTING (AFFRAY)','BURGLARY-','SIMPLE PHYSICAL','SHOPLIFTING','AGGRAVATED','ESCAPE FROM','TRESPASSING','DRUG VIOLATIONS','POSSESSING/CONCE','LARCENY'],
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
						<h4 className="card-title mb-4">Count of First Charge
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