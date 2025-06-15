import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const CountOfAddresses = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
	const colors1 = ['#EE4B2B', '#3e60d5']

 const CountAddresses: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [35.4,64.6],
	labels: ['Not-Unique', 'Unique'],
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
						<h4 className="card-title mb-4">Count Of Addresses
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={CountAddresses} height={320} series={CountAddresses.series} type="pie" />
						</div>
						<br/>The data shows that 64.6% of juvenile contacts were associated with unique addresses, while 35.4% were linked to non-unique addresses, meaning multiple contacts occurred at the same location. This suggests that while most incidents are spread across various locations, a significant portion clusters around certain addresses. These repeated locations may indicate geographic patterns, such as high-activity areas, or reflect environmental or social factors contributing to recurring incidents.
					</div>
				</div>
				</div>
				
				
)
}
export default CountOfAddresses