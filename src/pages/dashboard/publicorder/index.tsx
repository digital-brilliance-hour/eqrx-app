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

const timebasedtrends: ApexOptions = {
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

const disorderlyconduct: ApexOptions = {
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
			name: 'Age',
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8 , 36, 44],
		},
		{
			name: 'Male',
			data: [23, 19, 14, 48, 43, 9, 12, 48, 13, 5, 7, 64],
		},
		{
			name: 'Female',
			data: [65, 14, 28, 31, 75, 84, 59, 4, 62, 30, 27, 11],
		},
		{
			name: 'Asian',
			data: [21, 38, 28, 26, 2, 20, 49, 27, 40, 6, 24, 30],
		},
		{
			name: 'Native American',
			data: [29, 9, 34, 45, 13, 27, 24, 43, 3, 15, 46, 34],
		},
		{
			name: 'Latino',
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51],
		},
		{
			name: 'White',
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 48, 26],
		},
		{
			name: 'Black',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 36, 13],
		},
	],

	markers: {
		size: 0,
		// style: 'hollow', // full, hollow, inverted
	},
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	},
	colors: ['#ffbc00','#3e60d5','#fa5c7c','#6c757d', '#2b908f', '#47ad77', '#39afd1', '#212730'],
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

export const parentnotificationrates: ApexOptions = {
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
			name: 'Released to parent',
			data: [28, 29, 33, 36, 32, 32, 33],
		},
		{
			name: 'Released on street',
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
			text: 'Amount of encounters',
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

export const statusoffense: ApexOptions = {
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
			name: 'Misdemeanor',
			data: [35, 41, 40, 42, 36, 28, 29, 37, 36, 45, 48, 35],
		},
		{
			name: 'Felonies',
			data: [23, 19, 14, 20, 13, 9, 12, 18, 13, 25, 27, 14],
		},
	],
	title: {
		text: 'Misdemeanor vs Felonies',
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
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		title: {
			text: 'Month',
		},
	},
	yaxis: {
		title: {
			text: 'Offenses commited',
		},
		min: 5,
		max: 50,
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

export const schoolbasedinfractions: ApexOptions = {
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
			data: [400, 430, 448, 470, 540, 580, 690],
		},
	],
	stroke: {
		width: 0,
		colors: ['#fff'],
	},
	xaxis: {
		categories: ['Fighting', 'Assault with a weapon', 'Assualt', 'Disorderly conduct', 'Larceny', 'Weapons violation', 'Drug violations'],
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

const fullStackedColumnOpts: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		stacked: true,
		stackType: '100%',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '50%',
		},
	},
	series: [
		{
			name: 'White',
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 48, 26],
		},
		{
			name: 'Black',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 36, 13],
		},
		{
			name: 'Asian',
			data: [21, 38, 28, 26, 21, 20, 49, 27, 40, 6, 24, 30],
		},
		{
			name: 'Native American',
			data: [29, 9, 34, 45, 13, 27, 24, 43, 3, 15, 46, 34],
		},
		{
			name: 'Latino',
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51],
		},
	],
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	},
	fill: {
		opacity: 1,
	},
	legend: {
		offsetY: 7,
	},
	colors: ['#ffbc00','#3e60d5','#fa5c7c','#6c757d', '#2b908f'],
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

const columnWithRotatedlabelsOpts: ApexOptions = {
	annotations: {
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
	},
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
			name: 'Servings',
			data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
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
		categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas', 'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'],
	},
	yaxis: {
		title: {
			text: 'Servings',
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

const resolutionmethodsused: ApexOptions = {
	annotations: {
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
	},
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
			name: 'Times used',
			data: [44, 55, 41, 67, 22],
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
		categories: ['Handled Within The Department', 'Referred to Juvenile Authorities', 'Social Services', 'Referred to Another Police/Jurisdiction', 'None'],
	},
	yaxis: {
		title: {
			text: 'Frequncy used',
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
			name: 'Product A',
			data: [44, 55, 41, 67, 22, 43, 21, 49],
		},
		{
			name: 'Product B',
			data: [13, 23, 20, 8, 13, 27, 33, 12],
		},
		{
			name: 'Product C',
			data: [11, 17, 15, 15, 21, 14, 15, 13],
		},
	],
	xaxis: {
		categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
	},
	colors: ['#39afd1', '#ffbc00', '#e3eaef'],
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

const repeatincidenttracking: ApexOptions = {
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
			name: 'Asian',
			data: [21, 38, 28, 26, 22, 20, 49, 27, 40, 26, 24, 30],
		},
		{
			name: 'Native American',
			data: [29, 9, 34, 45, 13, 27, 24, 43, 3, 15, 46, 34],
		},
		{
			name: 'Latino',
			data: [35, 41, 62, 42, 16, 38, 29, 37, 36, 51, 38, 29],
		},
		{
			name: 'White',
			data: [35, 41, 62, 42, 19, 18, 29, 37, 36, 51, 48, 26],
		},
		{
			name: 'Black',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 36, 53],
		},
	],
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	},
	colors: ['#ffbc00','#3e60d5','#fa5c7c','#6c757d', '#2b908f', '#47ad77', '#39afd1', '#212730'],
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

const averageresponsetimes: ApexOptions = {
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
			name: 'Min',
			data: [44, 55, 41, 67, 22, 43, 21, 49, 55, 41, 67, 22],
		},
		{
			name: 'Med',
			data: [13, 23, 20, 8, 13, 27, 33, 12, 23, 20, 8, 13],
		},
		{
			name: 'Max',
			data: [11, 17, 15, 15, 21, 14, 15, 13, 17, 15, 15, 21],
		},
	],
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	},
	colors: ['#39afd1', '#ffbc00', '#e3eaef'],
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

const BehavioralIncidents = () => {
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

		<div className="xl:col-span-3">
			<div className="card">
						<div className="p-6">
							<h4 className="card-title">Trespassing hotspots</h4>
							<div dir="ltr">
								<ReactApexChart className="apex-charts" options={fullStackedColumnOpts} height={380} series={fullStackedColumnOpts.series} type="bar" />
							</div>
						</div>
			</div>
		</div>
		
		<div className="xl:col-span-6 gap-6">
			<div className="col-span-6 gap-6 mb-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">School-based infractions</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={schoolbasedinfractions} height={450} series={schoolbasedinfractions.series} type="bar" />
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="xl:col-span-6">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Disorderly conduct patterns</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={disorderlyconduct} height={380} series={disorderlyconduct.series} type="line" />
					</div>
				</div>
			</div>
		</div>

		<div className="xl:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Status offense trends</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={statusoffense} height={380} series={statusoffense.series} type="line" />
					</div>
				</div>
			</div>
		</div>

		</>
	)
}

const ResponseAnalysis = () => {
	return (
		<>
		{/* phaze 2 */}
		{/* <div className="xl:col-span-3">
			<div className="col-span-3 gap-6 mb-6">	
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Intervention effectiveness</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={customDataLabelBarOpts} height={450} series={customDataLabelBarOpts.series} type="bar" />
						</div>
					</div>
				</div>
			</div>
		</div> */}

			<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Average response times</h4>
						<div dir="ltr">
						<ReactApexChart className="apex-charts" options={averageresponsetimes} height={380} series={averageresponsetimes.series} type="bar" />
						</div>
					</div>
				</div>
			</div>

			<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title"> Resolution methods used</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={resolutionmethodsused} height={380} series={resolutionmethodsused.series} type="bar" />
						</div>
					</div>
				</div>
			</div>

			<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Parent notification rates</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={parentnotificationrates} height={380} series={parentnotificationrates.series} type="line" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const PatternRecognition = () => {
	return (
		<>
		{/* phase 2 */}
		{/* <div className="xl:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Time-based trends</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={timebasedtrends} height={380} series={timebasedtrends.series} type="line" />
					</div>
				</div>
			</div>
		</div> 
		
		<div className="xl:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Location clustering</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={dashedLineChartOpts2} height={380} series={dashedLineChartOpts2.series} type="line" />
					</div>
				</div>
			</div>
		</div>
		
		<div className="xl:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Group involvement</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={dashedLineChartOpts2} height={380} series={dashedLineChartOpts2.series} type="line" />
					</div>
				</div>
			</div>
		</div>
		*/}
		<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Repeat incident tracking</h4>
						<div dir="ltr">
						<ReactApexChart className="apex-charts" options={repeatincidenttracking} height={380} series={repeatincidenttracking.series} type="bar" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const PublicOrder = () => {
	return (
		<>
			<PageBreadcrumb title="Dashboard" subName="Menu" />
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<BehavioralIncidents />
				<ResponseAnalysis />
				<PatternRecognition />
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

export default PublicOrder
