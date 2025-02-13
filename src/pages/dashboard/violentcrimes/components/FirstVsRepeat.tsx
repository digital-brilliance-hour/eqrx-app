import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const RepeatVNonRepeate = () => {
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
	series: [22, 78],
	labels: ['Repeate', 'Non-Repeat'],
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

	<div className="lg:col-span-2">
	<div className="card">
			<div className="p-6">
						<h4 className="card-title mb-4"> First Time VS Repeat Offenders
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={simplePieOpts} height={320} series={simplePieOpts.series} type="pie" />
						</div>
						<br/> The pie chart displays the distribution between two categories: "Repeat" and "Non-Repeat." The blue segment represents "Repeat," accounting for 22.0% of the total, while the gray segment represents "Non-Repeat," making up 78.0%. This visual comparison highlights that the majority of incidents fall under the "Non-Repeat" category, indicating that repeated incidents are relatively infrequent.
					</div>
				</div>
				</div>
)
}
export default RepeatVNonRepeate