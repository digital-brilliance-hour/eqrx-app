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
                data: [400, 430, 448, 470, 540],
            },
        ],
        colors: ['#39afd1'],
        xaxis: {
            categories: ['2019', '2020', '2021', '2022', '2023'],
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
						<h4 className="card-title mb-4">Total Value recovered</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicBarOpts} height={380} series={basicBarOpts.series} type="bar" />
						</div>
                        <div className='mt-6'>
                            <h2>Total Value Recovered (2019-2023) - Summary</h2>
                            <h3>Key Insights:</h3>
                            <ul>
                                <li><strong>Steady Increase:</strong> Recovery values rose yearly (<strong>400 → 540</strong>), indicating improved enforcement.</li>
                                <li><strong>Largest Jump in 2023:</strong> A significant rise suggests stronger policies or better retrieval methods.</li>
                                <li><strong>Gradual Growth (2019-2022):</strong> Incremental gains reflect steady improvement.</li>
                            </ul>
                            <h3>Implications:</h3>
                            <ul>
                                <li>Enhanced <strong>recovery efficiency</strong> and asset retrieval.</li>
                                <li>Possible <strong>policy shifts</strong> or increased focus in 2023.</li>
                                <li><strong>Future Outlook:</strong> If the trend continues, recovery rates may rise further in 2024.</li>
                            </ul>
                        </div>
					</div>
				</div>
                </div>
				
          



)

}
export default RevenueChart