import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const RevenueChart = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	
    const basicBarOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        series: [
            {
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
            },
        ],
        colors: ['#39afd1'],
        xaxis: {
            categories: ['Aggravated Assault', 'Weapons Violations', 'Robbery', 'Armed Robbery', 'Domestic Violence', 'Strangulation', 'Kidnapping', 'Manslaughter', 'Intimate Partner Violence', 'Assault with Deadly Weapon'],
        },
        // states: {
        //     // hover: {
        //     //     // filter: 'none'
        //     // }
        // },
        grid: {
            borderColor: '#f1f3fa',
        },
    }

return(

	
	<div className="lg:col-span-2">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Break Down By Type</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicBarOpts} height={380} series={basicBarOpts.series} type="bar" />
						</div>
					</div>
				</div>
                </div>
				
          



)

}
export default RevenueChart