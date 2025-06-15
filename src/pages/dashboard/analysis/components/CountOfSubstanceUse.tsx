import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const CountOfSubstanceUse = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
	const colors1 = ['#EE4B2B', '#3e60d5','#FFC300']

 const SubstanceUse: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [4.9,69.1,26.0],
	labels: ['Yes', 'No', 'Unknown'],
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
						<h4 className="card-title mb-4">Count Of Substance Use
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={SubstanceUse} height={320} series={SubstanceUse.series} type="pie" />
						</div>
						<br/>The data shows that 69.1% of juvenile contacts involved no indication of substance use, while 26.0% were marked as unknown, and only 4.9% confirmed substance use. This suggests that substance use was not a common factor in most incidents, though the high rate of unknown responses raises concerns about the consistency or thoroughness of reporting. The relatively small confirmed percentage may reflect either low prevalence or limitations in detection during initial contact.
					</div>
				</div>
				</div>
				
				
)
}
export default CountOfSubstanceUse