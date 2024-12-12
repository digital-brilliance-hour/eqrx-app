//import { useState } from 'react'
import Select from 'react-select'
//import { MaskedInput } from 'rsuite'

// components
import Statistics from './components/Statistics'
import RevenueChart from './components/RevenueChart'
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

const GeographicOverview = () => {
	return (
		<>
		<div className="xl:col-span-3">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title">Trespassing hotspots</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={colorRangeHeatmapOpts} height={380} series={colorRangeHeatmapOpts.series} type="heatmap" />
						</div>
					</div>
			</div>
		</div>
		</>
	)
}

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

const SystemPerformanceMetrics = () => {
	return (
		<>
		<div className="xl:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Case resolution rates</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={dashedLineChartOpts} height={380} series={dashedLineChartOpts.series} type="line" />
					</div>
				</div>
			</div>
		</div>
		
		<div className="xl:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Average response times</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={dashedLineChartOpts} height={380} series={dashedLineChartOpts2.series} type="line" />
					</div>
				</div>
			</div>
		</div>
		
		<div className="xl:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Intervention program success rates</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={dashedLineChartOpts} height={380} series={dashedLineChartOpts2.series} type="line" />
					</div>
				</div>
			</div>
		</div>
		
		<div className="xl:col-span-6 gap-6">
			<div className="col-span-6 gap-6 mb-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Resource utilization levels</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={customDataLabelBarOpts} height={450} series={customDataLabelBarOpts.series} type="bar" />
						</div>
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
				<GeographicOverview />
				<SystemPerformanceMetrics />
			</div>
			{/* <div className="grid lg:grid-cols-6 gap-6 mb-6">
				<ResponseAnalysis />
			</div>
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<PatternRecognition />
			</div> */}
		</>
	)
}

export default Main
