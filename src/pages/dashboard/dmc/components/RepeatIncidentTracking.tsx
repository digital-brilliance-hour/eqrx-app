import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// components
import WorldVectorMap from '../../../../components/VectorMap/WorldMap'
import { PopoverLayout } from '../../../../components/HeadlessUI'
import ReactApexChart from 'react-apexcharts'

const RepeatIncidentChart = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	const apexOpts: ApexOptions = {
		chart: {
			height: 320,
			type: 'bar',
		},
		plotOptions: {
			bar: {
				horizontal: true,
			},
		},
		colors: ['#47ad77'],
		dataLabels: {
			enabled: false,
		},
		series: [
			{
				name: 'Orders',
				data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12],
			},
		],
		xaxis: {
			categories: ['India', 'China', 'United States', 'Japan', 'France', 'Italy', 'Netherlands', 'United Kingdom', 'Canada', 'South Korea'],
			axisBorder: {
				show: false,
			},
			labels: {
				formatter: function (val) {
					return val + '%'
				},
			},
		},
		grid: {
			strokeDashArray: 5,
		},
	}

	// define colors1
	const colors1 = ['#3e60d5', '#6c757d']

	// vector map config
 const repeatincidenttracking: ApexOptions = {
		chart: {
			height: 320,
			type: 'pie',
		},
		series: [445, 55],
		labels: ['Repeat', 'Non-Repeat'],
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
	

	return (
<div className="card xl:col-span-2">
			<div className="p-6">
				<h4 className="card-title mb-4">Repeat incident tracking</h4>
				<div dir="ltr">
					<ReactApexChart className="apex-charts" options={repeatincidenttracking} height={363} series={repeatincidenttracking.series} type="pie" />
				</div>
			</div>
		</div>
	)
}

export default RepeatIncidentChart
