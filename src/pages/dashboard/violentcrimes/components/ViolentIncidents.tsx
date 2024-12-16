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
				data: [30, 41, 35, 51],
			},
		],
		title: {
			text: 'Violent Incidents Per Quarter',
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
			categories: ['Q1', 'Q2', 'Q3', 'Q4'],
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
						<h4 className="card-title">Total Violent Incidents</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={lineChartOpts1} height={380} series={lineChartOpts1.series} type="line" />
						</div>
					</div>
				</div>
				</div>
					</div>



)

}
export default RevenueChart