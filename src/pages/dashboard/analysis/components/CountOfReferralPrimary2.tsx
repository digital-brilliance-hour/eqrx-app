import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const CountOfReferralPrimary2 = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
const primaryCount: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
			dataLabels: {
				position: 'center',
			},
		},
	},
	colors: ['#3e60d5','#eb1e1e'],
	stroke: {
		show: true,
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
		  name: 'Count of Referral Primary',
		  data: [180,118,1,0,3,2],
		},
	  ],
	xaxis: {
		categories: ['Referred to the juvenile Authorities', 'Handled withing the Department and released', 'Social Services', 'Teen Court', 'None', 'Referred to another Police'],
	},
	legend: {
		position: 'top',
		offsetY: 5,
	},
	// states: {
	//     hover: {
	//         filter: 'none'
	//     }
	// },
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			bottom: 5,
		},
	},
}


return(

<div className="xl:col-span-6">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title mb-4">Count of Referral Primary</h4>
					<div dir="ltr">
					<ReactApexChart
							className="apex-charts"
							options={primaryCount}
							series={primaryCount.series}
							type="bar"
							height={500}
						/>					</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						 The data shows that the majority of juvenile referrals, totaling 180, were made to juvenile authorities, while 118 cases were handled within the department and the individuals were released. All other referral categories had very low counts: Social Services (1), Teen Court (0), None (3), and Referred to another Police Department (2). This distribution highlights a strong reliance on formal juvenile justice channels and departmental handling, with minimal use of alternative or community-based referral options.
						</div>
				</div>
			</div>
		</div>

)
}
export default CountOfReferralPrimary2