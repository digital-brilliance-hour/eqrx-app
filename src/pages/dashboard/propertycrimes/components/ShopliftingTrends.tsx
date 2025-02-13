import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const RevenueChart = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}
	const series = {
		monthDataSeries1: {
			prices: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3],
			dates: ['Q1', 'Q1', 'Q1', 'Q4', 'Q1', 'Q1', 'Q1', 'Q1', 'Q2', 'Q2', 'Q2', 'Q2', 'Q3', ' Q3', 'Q3', 'Q3', 'Q4', 'Q4', 'Q4', 'Q4'],
		}

	}
	const lineChartOpts1: ApexOptions = {
		chart: {
			height: 380,
			type: 'line',
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ['#ffbc00'],
		stroke: {
			width: [4],
			curve: 'straight',
		},
		series: [
			{
				name: 'Incedents',
				data: [30, 41, 35, 51, 60, 31, 70, 60, 30, 34, 45, 50],
			},
		],
		title: {
			text: '',
			align: 'center',
		},
		grid: {
			row: {
				colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.2,
			},
			borderColor: '#f1f3fa',
		},
		labels: series.monthDataSeries1.dates,
		xaxis: {
			categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		},
		responsive: [
			{
				breakpoint: 600,
				options: {
					chart: {
						toolbar: {
							show: false,
						},
					},
					legend: {
						show: false,
					},
				},
			},
		],
	}

return(

				<div className="xl:col-span-6">
				<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Recovery Time Trends</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={lineChartOpts1} height={380} series={lineChartOpts1.series} type="line" />
						</div>
						<div className='mt-6'>
							<p><strong>Key observations:</strong></p>
							<ul>
								<li>The trend shows a general increase from January to May, peaking in May.</li>
								<li>A sharp decline is observed in June, followed by a steep rise reaching the highest point in July.</li>
								<li>Another decline occurs in August and September, hitting the lowest point in September.</li>
								<li>A gradual recovery follows from October to December.</li>
							</ul>
							<p>This pattern suggests seasonal variations, operational challenges, or external factors influencing recovery times. The sharp drops in June and September may indicate resource constraints or specific incidents impacting recovery efficiency.</p>
						</div>
					</div>
				</div>
				</div>
					</div>



)

}
export default RevenueChart