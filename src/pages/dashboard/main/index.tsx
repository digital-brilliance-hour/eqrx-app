//import { useState } from 'react'
import Select from 'react-select'
//import { MaskedInput } from 'rsuite'

// components
import Statistics from './components/Statistics'
import RevenueChart from './components/RevenueChart'
import { PopoverLayout } from '../../../components/HeadlessUI'
import TotalSalesChart from './components/TotalSalesChart'
import TopSellingProducts from './components/TopSellingProducts'
import RevenueByLocation from './components/RevenueByLocation'
import OffenseTypesByAge from './components/OffenseTypesByAge'
import OffenseTypesByCulture from './components/OffenseTypesByCulture'
import OffenseTypesByGender from './components/OffenseTypesByGender'
import { PageBreadcrumb } from '../../../components'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import StatisticsWidget from '../../dashboard/report/components/StatisticsWidget'
import ReactApexCharts from 'react-apexcharts'
import { Link } from 'react-router-dom'

// dummy data
import { products } from './data'
import { options } from './option-data'

const dashedLineChartOpts: ApexOptions = {
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
	stroke: {
		width: [3, 5, 3],
		curve: 'straight',
		dashArray: [0, 8, 5],
	},
	series: [
		{
			name: 'Burglary',
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8],
		},
		{
			name: 'Drug Violation',
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51],
		},
		{
			name: 'Larceny',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56],
		},
	],

	markers: {
		size: 0,
		// style: 'hollow', // full, hollow, inverted
	},
	xaxis: {
		categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
	},
	colors: ['#6c757d', '#47ad77', '#39afd1'],
	tooltip: {
		y: {
			title: {
				formatter: function (val) {
					if (val === 'Session Duration') return val + ' (mins)'
					else if (val === 'Page Views') return val + ' per session'
					return val
				},
			},
		},
	},
	grid: {
		borderColor: '#f1f3fa',
	},
	legend: {
		offsetY: 7,
	},
}

const dashedLineChartOpts2: ApexOptions = {
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
	stroke: {
		width: [3, 5, 3],
		curve: 'straight',
		dashArray: [0, 8, 5],
	},
	series: [
		{
			name: 'Escape from Custody',
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8],
		},
		{
			name: 'City Ordinance',
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51],
		},
		{
			name: 'Motor Vehicle',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56],
		},
	],

	markers: {
		size: 0,
		// style: 'hollow', // full, hollow, inverted
	},
	xaxis: {
		categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
	},
	colors: ['#6c757d', '#47ad77', '#39afd1'],
	tooltip: {
		y: {
			title: {
				formatter: function (val) {
					if (val === 'Session Duration') return val + ' (mins)'
					else if (val === 'Page Views') return val + ' per session'
					return val
				},
			},
		},
	},
	grid: {
		borderColor: '#f1f3fa',
	},
	legend: {
		offsetY: 7,
	},
}

function generateData(count: number, yrange: any) {
	let i = 0
	const series = []
	while (i < count) {
		const x = (i + 1).toString()
		const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

		series.push({
			x: x,
			y: y,
		})
		i++
	}
	return series
}

export const colorRangeHeatmapOpts: ApexOptions = {
	chart: {
		height: 380,
		type: 'heatmap',
	},
	plotOptions: {
		heatmap: {
			shadeIntensity: 0.5,

			colorScale: {
				ranges: [
					{
						from: -30,
						to: 5,
						name: 'Low',
						color: '#fa5c7c',
					},
					{
						from: 6,
						to: 20,
						name: 'Medium',
						color: '#ffbc00',
					},
					{
						from: 21,
						to: 45,
						name: 'High',
						color: '#39afd1',
					},
					{
						from: 46,
						to: 55,
						name: 'Extreme',
						color: '#47ad77',
					},
				],
			},
		},
	},
	dataLabels: {
		enabled: false,
	},
	series: [
		{
			name: 'Jan',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
		{
			name: 'Feb',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
		{
			name: 'Mar',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
		{
			name: 'Apr',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
		{
			name: 'May',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
		{
			name: 'Jun',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
		{
			name: 'Jul',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
		{
			name: 'Aug',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
		{
			name: 'Sep',
			data: generateData(20, {
				min: -30,
				max: 55,
			}),
		},
	],
}

export const lineWithDataLabelOpts: ApexOptions = {
	chart: {
		height: 380,
		type: 'line',
		zoom: {
			enabled: false,
		},
		toolbar: {
			show: false,
		},
	},
	colors: ['#6c757d', '#3e60d5'],
	dataLabels: {
		enabled: true,
	},
	stroke: {
		width: [3, 3],
		curve: 'smooth',
	},
	series: [
		{
			name: 'High - 2018',
			data: [28, 29, 33, 36, 32, 32, 33],
		},
		{
			name: 'Low - 2018',
			data: [12, 11, 14, 18, 17, 13, 13],
		},
	],
	title: {
		text: 'Average High & Low Temperature',
		align: 'left',
	},
	grid: {
		row: {
			colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.2,
		},
		borderColor: '#f1f3fa',
	},
	markers: {
		// style: 'inverted',
		size: 6,
	},
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		title: {
			text: 'Month',
		},
	},
	yaxis: {
		title: {
			text: 'Temperature',
		},
		min: 5,
		max: 40,
	},
	legend: {
		position: 'top',
		horizontalAlign: 'right',
		floating: true,
		offsetY: -25,
		offsetX: -5,
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

export const customDataLabelBarOpts: ApexOptions = {
	chart: {
		height: 450,
		type: 'bar',
	},
	plotOptions: {
		bar: {
			barHeight: '100%',
			distributed: true,
			horizontal: true,
			dataLabels: {
				position: 'bottom',
			},
		},
	},
	colors: ['#3e60d5', '#47ad77', '#fa5c7c', '#6c757d', '#39afd1', '#2b908f', '#ffbc00', '#90ee7e', '#f48024', '#212730'],
	dataLabels: {
		enabled: true,
		textAnchor: 'start',
		style: {
			colors: ['#fff'],
		},
		formatter: function (val, opt) {
			return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
		},
		offsetX: 0,
		dropShadow: {
			enabled: false,
		},
	},
	series: [
		{
			data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
		},
	],
	stroke: {
		width: 0,
		colors: ['#fff'],
	},
	xaxis: {
		categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'India'],
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	grid: {
		borderColor: '#f1f3fa',
	},

	tooltip: {
		theme: 'dark',
		x: {
			show: false,
		},
		y: {
			title: {
				formatter: function () {
					return ''
				},
			},
		},
	},
}

const apexOpts: ApexOptions = {
	series: [
		{
			name: 'Black Offenses',
			type: 'line',
			data: [440, 505, 375, 200, 150, 160],
		},
		{
			name: 'White Offenses',
			type: 'line',
			data: [10, 20, 5, 0, 30, 20],
		},
	],
	chart: {
		height: 374,
		type: 'line',
		offsetY: 10,
	},
	stroke: {
		width: [2, 3],
	},
	plotOptions: {
		bar: {
			columnWidth: '50%',
		},
	},
	colors: ['#3e60d5', '#47ad77'],
	labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
	legend: {
		offsetY: 7,
	},
	grid: {
		padding: {
			bottom: 20,
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
			opacityFrom: 0.75,
			opacityTo: 0.75,
			stops: [0, 0, 0],
		},
	},
	yaxis: [
		{
			title: {
				text: 'Response Time (in seconds)',
			},
		},
	],
}

const PopoverToggle = () => {
	return <i className="ri-more-2-fill text-xl" />
}

export const customDataLabelBarOpts2: ApexOptions = {
	chart: {
		height: 450,
		type: 'bar',
	},
	plotOptions: {
		bar: {
			barHeight: '100%',
			distributed: true,
			horizontal: true,
			dataLabels: {
				position: 'bottom',
			},
		},
	},
	colors: ['#3e60d5', '#47ad77', '#fa5c7c', '#6c757d', '#39afd1', '#2b908f', '#ffbc00', '#90ee7e', '#f48024', '#212730'],
	dataLabels: {
		enabled: true,
		textAnchor: 'start',
		style: {
			colors: ['#fff'],
		},
		formatter: function (val, opt) {
			return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
		},
		offsetX: 0,
		dropShadow: {
			enabled: false,
		},
	},
	series: [
		{
			data: [400, 430, 448, 470, 540],
		},
	],
	stroke: {
		width: 0,
		colors: ['#fff'],
	},
	xaxis: {
		categories: ['Burglary', 'Escape from Custody', 'Drug Violation', 'Aggrevated Assault', 'Disorderly Conduct'],
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	grid: {
		borderColor: '#f1f3fa',
	},

	tooltip: {
		theme: 'dark',
		x: {
			show: false,
		},
		y: {
			title: {
				formatter: function () {
					return ''
				},
			},
		},
	},
}

const colors1 = ['#3e60d5', '#6c757d', '#47ad77', '#fa5c7c', '#e3eaef']

export const simplePieOpts: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
	},
	series: [44, 55, 41, 17, 15],
	labels: ['Total Officers', 'Sro Officers', 'Bomb Squad', 'Admin', 'Traffic'],
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

const stackedColumnOpts: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		stacked: true,
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '50%',
		},
	},
	series: [
		{
			name: 'Burglary',
			data: [44, 55, 41, 67, 22, 43, 21, 49],
		},
		{
			name: 'Escape from Custody',
			data: [13, 23, 20, 8, 13, 27, 33, 12],
		},
		{
			name: 'Drug Violation',
			data: [11, 17, 15, 15, 21, 14, 15, 13],
		},
		{
			name: 'Aggrevated Assault',
			data: [13, 23, 20, 8, 13, 27, 33, 12],
		},
		{
			name: 'Disorderly Conduct',
			data: [11, 17, 15, 15, 21, 14, 15, 13],
		},
	],
	xaxis: {
		categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
	},
	colors: ['#3e60d5', '#6c757d', '#e3eaef', '#fa5c7c', '#47ad77'],
	fill: {
		opacity: 1,
	},
	legend: {
		offsetY: 7,
	},
	grid: {
		row: {
			colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.2,
		},
		borderColor: '#f1f3fa',
		padding: {
			bottom: 5,
		},
	},
}

// code for the page begins

// const GeographicOverview = () => {
// 	return (
// 		<>
// 		<div className="xl:col-span-3">
// 			<div className="card">
// 					<div className="p-6">
// 						<h4 className="card-title">Trespassing hotspots</h4>
// 						<div dir="ltr">
// 							<ReactApexChart className="apex-charts" options={colorRangeHeatmapOpts} height={380} series={colorRangeHeatmapOpts.series} type="heatmap" />
// 						</div>
// 					</div>
// 			</div>
// 		</div>
// 		<div className="xl:col-span-3">
// 			<div className="card">
// 					<div className="p-6">
// 						<h4 className="card-title">Trespassing hotspots</h4>
// 						<div dir="ltr">
// 							<ReactApexChart className="apex-charts" options={colorRangeHeatmapOpts} height={380} series={colorRangeHeatmapOpts.series} type="heatmap" />
// 						</div>
// 					</div>
// 			</div>
// 		</div>
// 		<div className="xl:col-span-3">
// 			<div className="card">
// 					<div className="p-6">
// 						<h4 className="card-title">Trespassing hotspots</h4>
// 						<div dir="ltr">
// 							<ReactApexChart className="apex-charts" options={colorRangeHeatmapOpts} height={380} series={colorRangeHeatmapOpts.series} type="heatmap" />
// 						</div>
// 					</div>
// 			</div>
// 		</div>
// 		<div className="xl:col-span-3">
// 			<div className="card">
// 					<div className="p-6">
// 						<h4 className="card-title">Trespassing hotspots</h4>
// 						<div dir="ltr">
// 							<ReactApexChart className="apex-charts" options={colorRangeHeatmapOpts} height={380} series={colorRangeHeatmapOpts.series} type="heatmap" />
// 						</div>
// 					</div>
// 			</div>
// 		</div>
// 		</>
// 	)
// }

const TotalContactsDisplay = () => {
	return (
		<>
		<div className="xl:col-span-6">
			
			<div className="gap-5 mb-6 flex">
				<div className="col-span-3">
					<StatisticsWidget variant={'bg-success'} cardTitle={"Today's total juvenile contacts"} title={'Number of customers'} change={'2,541'} stats={'54,214'} dataSince={'Since last month'} classname={'apex-charts'} chartSeries={[58, 42]} colors={['#47ad77', '#e3e9ee']} />
				</div>

				<div className="col-span-3">
					<StatisticsWidget variant={'bg-danger'} cardTitle={"This week's total (with comparison to last week)"} title={'Number of Orders'} change={'1.08%'} stats={'7,543'} dataSince={'Since last month'} classname={'apex-charts'} chartSeries={[34, 66]} colors={['#3e60d5', '#e3e9ee']} />
				</div>  
				<div className="col-span-3">
					<StatisticsWidget variant={'bg-success'} cardTitle={"This month's total (with comparison to last month)"} title={'Number of customers'} change={'2,541'} stats={'54,214'} dataSince={'Since last month'} classname={'apex-charts'} chartSeries={[58, 42]} colors={['#47ad77', '#e3e9ee']} />
				</div>

				<div className="col-span-3">
					<StatisticsWidget variant={'bg-danger'} cardTitle={"Year-to-date total (with comparison to last year)"} title={'Number of Orders'} change={'1.08%'} stats={'7,543'} dataSince={'Since last month'} classname={'apex-charts'} chartSeries={[34, 66]} colors={['#3e60d5', '#e3e9ee']} />
				</div> 
			</div>
		</div>
		</>
	)
}

// these need to be guage charts or progress
const SystemPerformanceMetrics = () => {
	return (
		<>
		{/* Phase 2 */}
		{/* <div className="xl:col-span-6">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title"> referral program success rate</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={dashedLineChartOpts} height={380} series={dashedLineChartOpts2.series} type="line" />
					</div>
				</div>
			</div>
		</div> */}

		<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Case resolution rates</h4>
						<div dir="ltr">
						<ReactApexChart className="apex-charts" options={stackedColumnOpts} height={380} series={stackedColumnOpts.series} type="bar" />
						</div>
					</div>
				</div>
			</div>

		<div className="xl:col-span-3 gap-6">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Resource utilization</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={simplePieOpts} height={320} series={simplePieOpts.series} type="pie" />
						</div>
					</div>
				</div>
		</div>
		
		<div className="lg:col-span-6">
			<div className="card">
				<div className="flex card-header justify-between items-center">
					<h4 className="card-title">Average response times</h4>
					<PopoverLayout placement="bottom-end" togglerClass="text-gray-600 dark:text-gray-400" toggler={<PopoverToggle />}>
						<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1">
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Sales Report
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Export Report
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Profit
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Action
							</Link>
						</div>
					</PopoverLayout>
				</div>
				<div className="bg-light/40 border-b border-gray-100 dark:bg-light/5 dark:border-b-gray-700">
					<div className="flex flex-wrap justify-around items-center text-center">
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> Current Week
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>15</span>
							</h3>
						</div>
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> Previous Week
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>
									20 <i className="ri-corner-right-down-line text-danger"></i>
								</span>
							</h3>
						</div>
					</div>
				</div>
				<div className="p-6">
					<div dir="ltr">
						<ReactApexCharts options={apexOpts} series={apexOpts.series} type="line" height={380} className="apex-charts mt-3" />
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

const Main = () => {
	return (
		<>
			<PageBreadcrumb title="Dashboard" subName="Menu" />
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<TotalContactsDisplay />
				<SystemPerformanceMetrics />
				{/* <GeographicOverview /> */}
			</div>
		</>
	)
}

export default Main
