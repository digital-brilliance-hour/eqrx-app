import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const CountOfResidence = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
	const colors1 = ['#EE4B2B', '#3e60d5']

 const residencePie: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [10.2, 89.8],
	labels: ['Non-Resident', 'Resodent'],
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
						<h4 className="card-title mb-4">Count Of Residence
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={residencePie} height={320} series={residencePie.series} type="pie" />
						</div>
						<br/>The data shows that 89.8% of juvenile contacts involved individuals who were residents, while only 10.2% were non-residents. This suggests that the majority of youth interactions with law enforcement are happening within the local community. The low percentage of non-resident contacts may indicate that most incidents involve youth who live in the area, pointing to localized enforcement activity and issues primarily affecting the resident population.
					</div>
				</div>
				</div>
				
				
)
}
export default CountOfResidence