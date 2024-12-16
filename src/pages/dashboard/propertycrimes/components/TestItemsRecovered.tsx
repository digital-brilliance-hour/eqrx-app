import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const ItemsRecovered1: ApexOptions = {
/*annotations: {
		points: [
			{
				x: 'Bananas',
				seriesIndex: 0,
				label: {
					borderColor: '#3e60d5',
					offsetY: 0,
					style: {
						color: '#fff',
						background: '#3e60d5',
					},
					text: 'Bananas are good',
				},
			},
		],
	}, */
	chart: {
		height: 380,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '50%',
			// endingShape: 'rounded'
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 2,
	},
	colors: ['#fa5c7c'],
	series: [
		{
			name: 'Number Of Items',
			data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31],
		},
	],
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
			right: -2,
			bottom: -35,
			left: 10,
		},
	},
	xaxis: {
		labels: {
			rotate: -45,
		},
		categories: ['Currency', 'Precious metals', 'Stolen Vehicles', 'Office Equipment', 'Electronics', 'Household goods', 'Cosmetics', 'Consumable goods', 'Cloththing and Furs', 'Miscellaneous'],
	},
	yaxis: {
		title: {
			text: 'Number oF Items',
		},
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'light',
			type: 'horizontal',
			shadeIntensity: 0.25,
			gradientToColors: undefined,
			inverseColors: true,
			opacityFrom: 0.85,
			opacityTo: 0.85,
			stops: [50, 0, 100],
		},
	},
}
export default ItemsRecovered1