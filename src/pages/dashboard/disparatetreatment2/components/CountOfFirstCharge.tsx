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

 const CountFirstCharge: ApexOptions = {
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
							<ReactApexChart className="apex-charts" options={CountFirstCharge} height={320} series={CountFirstCharge.series} type="pie" />
						</div>
						<br/>The data shows that the most common first charges among juveniles were Shoplifting (16.4%), Larceny From (10.2%), and Burglary (9.5%), followed by Simple Physical Assault (7.2%), Fighting (Affray) (7.2%), and Escape From Custody (7.9%). Other charges appeared at much lower rates, each below 5%. This distribution indicates that property-related offenses and low-level physical altercations are the leading entry points into the system. The concentration of certain charges suggests potential focus areas for early intervention or prevention efforts.
					</div>
				</div>
				</div>
				
				
)
}
export default RevenueChart