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
import { BasicHeatMap } from '../../ui/maps/GoogleMaps/data'
import { GoogleApiWrapper } from 'google-maps-react'
import { LocClustHeatMap } from '../../ui/maps/GoogleMaps/data'

// dummy data
import { products } from './data'
import { options } from './option-data'
import AgeChart from '../dmc/components/AgeComepare'
import SchoolScheduleCorrelation from '../violentcrimes/components/SchoolScheduleCorrelation'
import SchoolVsCommunity from '../violentcrimes/components/SchoolVsCommunity'
import TotalJuvenileContacts from '../analysis/components/TotalJuvenileContacts'
import ContactOfficerType from './components/ContactOfficerType'
import CountOfContactOrigin from './components/CountOfContactOrigin'
import CountOfResidence1 from './components/CountOfResidence1'
import CountOfSubstanceUse from './components/CountOfSubstanceUse'
import CountOfReferralPrimary2 from './components/CountOfReferralPrimary2'

const colors1 = ['#3e60d5', '#6c757d', '#47ad77', '#fa5c7c', '#e3eaef']

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
		toolbar: {
			show: true,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		width: [3, 3, 3],
		curve: 'smooth',
	},
	series: [
		{
			name: 'Age',
			data: [45, 52, 38, 24],
		},
		{
			name: 'Male Cases',
			data: [23, 19, 14, 48],
		},
		{
			name: 'Female Cases',
			data: [65, 14, 28, 31],
		},
		// {
		// 	name: 'Asian',
		// 	data: [21, 38, 28, 26, 2, 20, 49, 27, 40, 6, 24, 30],
		// },
		// {
		// 	name: 'Native American',
		// 	data: [29, 9, 34, 45, 13, 27, 24, 43, 3, 15, 46, 34],
		// },
		// {
		// 	name: 'Latino',
		// 	data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51],
		// },
		// {
		// 	name: 'White',
		// 	data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 48, 26],
		// },
		// {
		// 	name: 'Black',
		// 	data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 36, 13],
		// },
	],

	markers: {
		size: 0,
		// style: 'hollow', // full, hollow, inverted
	},
	xaxis: {
		categories: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
	},
	colors: ['#6c757d','#3e60d5','#fa5c7c','#6c757d', '#2b908f', '#47ad77', '#39afd1', '#212730'],
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
			show: true,
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
						show: true,
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
			show: true,
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
		text: '*Future',
		align: 'left',
		style: {
			color:  '#6c757d'
		},
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
		horizontalAlign: 'center',
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
						show: true,
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
			show: true,
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
		horizontalAlign: 'center',
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
						show: true,
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
			data: [100, 172, 179, 188, 216, 232, 276],
		},
	],
	stroke: {
		width: 0,
		colors: ['#fff'],
	},
	xaxis: {
		categories: ['Affray', 'Assault with a weapon', 'Assualt', 'Disorderly conduct', 'Larceny', 'Weapons violation', 'Drug violations'],
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

// for use once Non school based incident has been clarified

// export const schoolbasedinfractions2: ApexOptions = {
// 	chart: {
// 		height: 450,
// 		type: 'bar',
// 	},
// 	plotOptions: {
// 		bar: {
// 			barHeight: '100%',
// 			distributed: true,
// 			horizontal: true,
// 			dataLabels: {
// 				position: 'bottom',
// 			},
// 		},
// 	},
// 	colors: ['#3e60d5', '#47ad77', '#fa5c7c', '#6c757d', '#39afd1', '#2b908f', '#ffbc00', '#90ee7e', '#f48024', '#212730'],
// 	dataLabels: {
// 		enabled: true,
// 		textAnchor: 'start',
// 		style: {
// 			colors: ['#fff'],
// 		},
// 		formatter: function (val, opt) {
// 			return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
// 		},
// 		offsetX: 0,
// 		dropShadow: {
// 			enabled: false,
// 		},
// 	},
// 	series: [
// 		{
// 			data: [400, 430, 448, 470, 540, 580, 690],
// 		},
// 	],
// 	stroke: {
// 		width: 0,
// 		colors: ['#fff'],
// 	},
// 	xaxis: {
// 		categories: ['Affray', 'Assault with a weapon', 'Assualt', 'Disorderly conduct', 'Larceny', 'Weapons violation', 'Drug violations'],
// 	},
// 	yaxis: {
// 		labels: {
// 			show: false,
// 		},
// 	},
// 	grid: {
// 		borderColor: '#f1f3fa',
// 	},

// 	tooltip: {
// 		theme: 'dark',
// 		x: {
// 			show: false,
// 		},
// 		y: {
// 			title: {
// 				formatter: function () {
// 					return ''
// 				},
// 			},
// 		},
// 	},
// }

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
			show: true,
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
			data: [44, 55, 41, 67, 22,33],
		},
	],
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
			right: -2,
			bottom: 0,
			left: 10,
		},
	},
	xaxis: {
		labels: {
			rotate: -45,
		},
		categories: ['Released', ' Juv Authorities', 'Social Services', 'Another Jurisdiction', 'None', 'Other' ],
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

// const repeatincidenttracking: ApexOptions = {
// 	chart: {
// 		height: 380,
// 		type: 'bar',
// 		stacked: true,
// 		toolbar: {
// 			show: false,
// 		},
// 	},
// 	plotOptions: {
// 		bar: {
// 			horizontal: false,
// 			columnWidth: '50%',
// 		},
// 	},
// 	series: [
// 		{
// 			name: 'Asian',
// 			data: [21, 38, 28, 26, 22, 20, 49, 27, 40, 26, 24, 30],
// 		},
// 		{
// 			name: 'Asian, Native American, Latino, White, Black',
// 			data: [29, 9, 34, 45, 13, 27, 24, 43, 3, 15, 46, 34],
// 		},
// 		{
// 			name: 'Latino',
// 			data: [35, 41, 62, 42, 16, 38, 29, 37, 36, 51, 38, 29],
// 		},
// 		{
// 			name: 'White',
// 			data: [35, 41, 62, 42, 19, 18, 29, 37, 36, 51, 48, 26],
// 		},
// 		{
// 			name: 'Black',
// 			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 36, 53],
// 		},
// 	],
// 	xaxis: {
// 		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
// 	},
// 	colors: ['#ffbc00','#3e60d5','#fa5c7c','#6c757d', '#2b908f', '#47ad77', '#39afd1', '#212730'],
// 	fill: {
// 		opacity: 1,
// 	},
// 	legend: {
// 		offsetY: 7,
// 	},
// 	grid: {
// 		row: {
// 			colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
// 			opacity: 0.2,
// 		},
// 		borderColor: '#f1f3fa',
// 		padding: {
// 			bottom: 5,
// 		},
// 	},
// }

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

export const repeatincidenttracking: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [44, 55, 41, 17, 15],
	labels: ['Asian', 'Native American', 'Latino', 'White', 'Black'],
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

export const simplePieOpts: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
	},
	series: [44, 55, 41, 17, 15],
	labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
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

export const groupBarOpts: ApexOptions = {
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
				position: 'top',
			},
		},
	},
	dataLabels: {
		enabled: true,
		offsetX: -6,
		style: {
			fontSize: '0px',
			colors: ['#000000'],
		},
	},
	colors: ['#ffbc00','#3e60d5','#fa5c7c','#6c757d', '#2b908f'],
	stroke: {
		show: true,
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
		  name: '2011',
		  data: [44, 55, 41, 64, 22, 43, 21, 30],
		},
		{
		  name: '2012',
		  data: [53, 32, 33, 52, 13, 44, 32, 25],
		},
		{
		  name: '2013',
		  data: [44, 55, 41, 64, 22, 43, 21, 30], 
		},
		{
		  name: '2014',
		  data: [53, 32, 33, 52, 13, 44, 32, 25],
		},
		{
		  name: '2015',
		  data: [53, 32, 33, 52, 13, 44, 32, 25],
		},
	  ],
	xaxis: {
		categories: ['Drunk and Disruptive', 'Disorderly conduct', 'Trespassing', 'Resist Delay & Obstruct', 'Assault', 'Vandalism', 'Shop Lifting', 'Other'],
	},
	legend: {
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

const series = {
	monthDataSeries1: {
		prices: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85],
		dates: ['13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017', '20 Nov 2017', '21 Nov 2017', '22 Nov 2017', '23 Nov 2017', '24 Nov 2017', '27 Nov 2017', '28 Nov 2017', '29 Nov 2017', '30 Nov 2017', '01 Dec 2017', '04 Dec 2017', '05 Dec 2017', '06 Dec 2017', '07 Dec 2017', '08 Dec 2017'],
	},
	monthDataSeries2: {
		prices: [8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9040.85, 8340.7, 8165.5, 8122.9, 8107.85, 8128.0],
		dates: ['13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017', '20 Nov 2017', '21 Nov 2017', '22 Nov 2017', '23 Nov 2017', '24 Nov 2017', '27 Nov 2017', '28 Nov 2017', '29 Nov 2017', '30 Nov 2017', '01 Dec 2017', '04 Dec 2017', '05 Dec 2017', '06 Dec 2017', '07 Dec 2017', '08 Dec 2017'],
	},
	monthDataSeries3: {
		prices: [7114.25, 7126.6, 7116.95, 7203.7, 7233.75, 7451.0, 7381.15, 7348.95, 7347.75, 7311.25, 7266.4, 7253.25, 7215.45, 7266.35, 7315.25, 7237.2, 7191.4, 7238.95, 7222.6, 7217.9, 7359.3, 7371.55, 7371.15, 7469.2, 7429.25, 7434.65, 7451.1, 7475.25, 7566.25, 7556.8, 7525.55, 7555.45, 7560.9, 7490.7, 7527.6, 7551.9, 7514.85, 7577.95, 7592.3, 7621.95, 7707.95, 7859.1, 7815.7, 7739.0, 7778.7, 7839.45, 7756.45, 7669.2, 7580.45, 7452.85, 7617.25, 7701.6, 7606.8, 7620.05, 7513.85, 7498.45, 7575.45, 7601.95, 7589.1, 7525.85, 7569.5, 7702.5, 7812.7, 7803.75, 7816.3, 7851.15, 7912.2, 7972.8, 8145.0, 8161.1, 8121.05, 8071.25, 8088.2, 8154.45, 8148.3, 8122.05, 8132.65, 8074.55, 7952.8, 7885.55, 7733.9, 7897.15, 7973.15, 7888.5, 7842.8, 7838.4, 7909.85, 7892.75, 7897.75, 7820.05, 7904.4, 7872.2, 7847.5, 7849.55, 7789.6, 7736.35, 7819.4, 7875.35, 7871.8, 8076.5, 8114.8, 8193.55, 8217.1, 8235.05, 8215.3, 8216.4, 8301.55, 8235.25, 8229.75, 8201.95, 8164.95, 8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2],
		dates: ['02 Jun 2017', '05 Jun 2017', '06 Jun 2017', '07 Jun 2017', '08 Jun 2017', '09 Jun 2017', '12 Jun 2017', '13 Jun 2017', '14 Jun 2017', '15 Jun 2017', '16 Jun 2017', '19 Jun 2017', '20 Jun 2017', '21 Jun 2017', '22 Jun 2017', '23 Jun 2017', '27 Jun 2017', '28 Jun 2017', '29 Jun 2017', '30 Jun 2017', '03 Jul 2017', '04 Jul 2017', '05 Jul 2017', '06 Jul 2017', '07 Jul 2017', '10 Jul 2017', '11 Jul 2017', '12 Jul 2017', '13 Jul 2017', '14 Jul 2017', '17 Jul 2017', '18 Jul 2017', '19 Jul 2017', '20 Jul 2017', '21 Jul 2017', '24 Jul 2017', '25 Jul 2017', '26 Jul 2017', '27 Jul 2017', '28 Jul 2017', '31 Jul 2017', '01 Aug 2017', '02 Aug 2017', '03 Aug 2017', '04 Aug 2017', '07 Aug 2017', '08 Aug 2017', '09 Aug 2017', '10 Aug 2017', '11 Aug 2017', '14 Aug 2017', '16 Aug 2017', '17 Aug 2017', '18 Aug 2017', '21 Aug 2017', '22 Aug 2017', '23 Aug 2017', '24 Aug 2017', '28 Aug 2017', '29 Aug 2017', '30 Aug 2017', '31 Aug 2017', '01 Sep 2017', '04 Sep 2017', '05 Sep 2017', '06 Sep 2017', '07 Sep 2017', '08 Sep 2017', '11 Sep 2017', '12 Sep 2017', '13 Sep 2017', '14 Sep 2017', '15 Sep 2017', '18 Sep 2017', '19 Sep 2017', '20 Sep 2017', '21 Sep 2017', '22 Sep 2017', '25 Sep 2017', '26 Sep 2017', '27 Sep 2017', '28 Sep 2017', '29 Sep 2017', '03 Oct 2017', '04 Oct 2017', '05 Oct 2017', '06 Oct 2017', '09 Oct 2017', '10 Oct 2017', '11 Oct 2017', '12 Oct 2017', '13 Oct 2017', '16 Oct 2017', '17 Oct 2017', '18 Oct 2017', '19 Oct 2017', '23 Oct 2017', '24 Oct 2017', '25 Oct 2017', '26 Oct 2017', '27 Oct 2017', '30 Oct 2017', '31 Oct 2017', '01 Nov 2017', '02 Nov 2017', '03 Nov 2017', '06 Nov 2017', '07 Nov 2017', '08 Nov 2017', '09 Nov 2017', '10 Nov 2017', '13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017', '20 Nov 2017', '21 Nov 2017', '22 Nov 2017', '23 Nov 2017', '24 Nov 2017', '27 Nov 2017', '28 Nov 2017'],
	},
}

const trespassingcases: ApexOptions = {
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
			name: 'Cases',
			data: [30, 41, 35, 51, 49, 62, 69, 91, 126],
		},
	],
	title: {
		text: 'Trespassing Reported',
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
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
	},
	responsive: [
		{
			breakpoint: 600,
			options: {
				chart: {
					toolbar: {
						show: true,
					},
				},
				legend: {
					show: false,
				},
			},
		},
	],
}

interface MapContainerProps {
	google: any
}

const heatmapdata = {
	mapData:{
		lat: [37.782, 37.782, 37.782, 37.782, 37.782, 37.782, 37.782, 37.785, 37.785, 37.785, 37.785, 37.785, 37.785, 37.785],
		lng: [-122.447, -122.445, -122.443, -122.441, -122.439, -122.437,-122.435, -122.447, -122.445, -122.443, -122.441, -122.439, -122.437, -122.435]
	}
}

const BehavioralIncidents = ({}: MapContainerProps) => {
	return (
		<>
		<div className="xl:col-span-6 gap-6">
			<div className="col-span-6 gap-6 mb-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">School-based Charges</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={schoolbasedinfractions} height={380} series={schoolbasedinfractions.series} type="bar" />
						</div>
						<div className="pt-6">
						This data highlights areas where targeted interventions or policy changes may be needed to reduce specific types of infractions.<br/>
						<b>Affray (blue):</b> 400 incidents, making it the least frequent infraction.<br/>
						<b>Assault with a weapon (green):</b> 430 incidents.<br/>
						<b>Assault (pink):</b> 448 incidents.<br/>
						<b>Disorderly conduct (gray):</b> 470 incidents.<br/>
						<b>Larceny (teal):</b> 540 incidents.<br/>
						<b>Weapons violation (dark teal):</b> 580 incidents.<br/>
						<b>Drug violations (yellow):</b> 690 incidents, the most frequent infraction.
						</div>
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
											<h4 className="card-title">Juvenile Contact Disposition</h4>
											<div dir="ltr">
												<ReactApexChart className="apex-charts" options={resolutionmethodsused} height={400} series={resolutionmethodsused.series} type="bar" />
											</div>
											<div className="pt-6">
											Released: Occurs with 45 instances, representing contacts where individuals were released after referral.<br/>
											Juvenile Authorities: Around 50 instances, showing a significant number of contacts referred to juvenile authorities.<br/>
											Social Services: Approximately 40 instances, indicating similar handling frequency to the "Released" category.<br/>
											Another Jurisdiction: Approximately 45 instances, indicating a significant percentage of contacts are referred to other authorities<br/>
											Mental Health Services: Approximately 25 instances, representing contacts where individuals were referred to a mental health specialist.<br/>
											Domestic Violence Services: Occurs with 24 instances, representing contacts where individuals were handled by Domestic Violence Services.<br/>
											Healthcare Providers: Occurs with 30 instances, representing contacts where individuals were provided healthcare or medical treatment.<br/>
											School Administration: Approximately 20 instances, representing contacts where individuals were addresed within the school administration.<br/>
											None: About 25 instances, representing contacts with no follow-up action.<br/>
											</div>
										</div>
									</div>
								</div>
		</>
	)
}

const PatternRecognition = ({}: MapContainerProps) => {
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
		</div>  */
		}

		<div className="xl:col-span-3 ">
			<AgeChart />
		</div>

		{/* <div className="xl:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Group involvement</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={dashedLineChartOpts2} height={380} series={dashedLineChartOpts2.series} type="line" />
					</div>
				</div>
			</div>
		</div> */}

		<div className="xl:col-span-3 hidden">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title">Repeat incident tracking</h4>
					<div dir="ltr">
					<ReactApexChart className="apex-charts" options={repeatincidenttracking} height={380} series={repeatincidenttracking.series} type="bar" />
					</div>
				</div>
			</div>
		</div>
		
		{/* <div className="lg:col-span-2">
					<div className="card">
							<div className="p-6">
								<h4 className="card-title mb-4">Age and Culture/Race Interactions</h4>
								<div dir="ltr">
									<ReactApexCharts className="apex-charts" options={apexOpts} height={520} series={apexOpts.series} type="bar" />
								</div>
							</div>
					</div>
				</div>*/}

		</>
	)
}

const Analysis = ({ google }: MapContainerProps) => {
	return (
		<>
			{/* <PageBreadcrumb title="Dashboard" subName="Menu" /> */}
			<header className="text-slate-900 dark:text-slate-200 text-lg font-medium mb-6">KPD DMC/RED Analysis</header>
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<TotalJuvenileContacts />
				<ContactOfficerType/>
				<CountOfContactOrigin/>
				<CountOfResidence1/>
				<CountOfSubstanceUse/>
				<CountOfReferralPrimary2/>
				<BehavioralIncidents google={google} />
				<ResponseAnalysis />
				<PatternRecognition google={google}/>
				<SchoolVsCommunity />
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

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBsHtI7Ed8ZeQ-yvYIMw9VKORe5WdPo5yg',
	libraries: ['visualization'],
})(Analysis)
