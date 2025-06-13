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
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import StatisticsWidget from '../../dashboard/report/components/StatisticsWidget'
import { BasicHeatMap } from '../../ui/maps/GoogleMaps/data'
import { GoogleApiWrapper } from 'google-maps-react'
import { LocClustHeatMap } from '../../ui/maps/GoogleMaps/data'

// dummy data
import { products } from './data'
import { options } from './option-data'
import AgeChart from '../dmc/components/AgeComepare'

const colors1 = ['#3e60d5', '#6c757d', '#47ad77', '#fa5c7c', '#e3eaef']

const contactBW: ApexOptions = {
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
		width: [3, 3],
		curve: 'straight',
		dashArray: [0, 0],
	},
	series: [
		{
			name: 'B',
			data: [51, 59, 82, 56, 34],
		},
		{
			name: 'W',
			data: [4, 3, 5, 5, 3],
		},
	],

	markers: {
		size: 0,
		// style: 'hollow', // full, hollow, inverted
	},
	xaxis: {
		categories: ['2014', '2015', '2016', '2017', '2018',],
	},
	colors: ['#3e60d5', '#eb1e1e'],
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
		position: 'top',
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
			data: [400, 430, 448, 470, 540, 580, 690],
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

const ageRaceInt: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stacked: true,
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
		},
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
			name: 'B',
			data: [192, 87,10,2,291],
		},
		{
			name: 'W',
			data: [15,5,0,0,20],
		},
	],
	xaxis: {
		categories: ['Teen 14-16', 'Pre-Teen 11-13', 'Child 10-8', 'Young child 4-7', 'Total'],
	},
	colors: ['#3e60d5', '#eb1e1e'],
	// tooltip: {
	// 	y: {
	// 		formatter: function (val) {
	// 			return val + 'K'
	// 		},
	// 	},
	// },
	fill: {
		opacity: 1,
	},
	states: {
		// hover: {
		//     filter: 'none'
		// }
	},
	legend: {
		position: 'top',
		horizontalAlign: 'center',
		offsetY: 10,
	},
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
		},
	},
}

const officerInt: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stackType: '100%',
		stacked: true,
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
		},
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
			name: 'NO',
			data: [148,114,0,0,0],
		},
		{
			name: 'SRO',
			data: [32,4,0,1,3],
		},
	],
	xaxis: {	
		categories: ['Refer to Juvenile Auth', 'Handle in Dept and released', 'Social Services', 'Teen Court', 'None'],
	},
	colors: [ '#3e60d5','#eb1e1e'],
	fill: {
		opacity: 1,
	},
	states: {
		// hover: {
		//     filter: 'none'
		// }
	},
	legend: {
		position: 'top',
		horizontalAlign: 'center',
		offsetY: 10,
	},
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
		},
	},
}

const raceIntComp: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stacked: false,
		stackType: '100%',
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
		},
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
			name: 'B',
			data: [107,108],
		},
		{
			name: 'W',
			data: [10,10],
		},
	],
	xaxis: {
		categories: ['Referred to the Juvenile Authorities', 'Handled within the Department and Released'],
	},
	colors: [ '#3e60d5','#eb1e1e'],
	tooltip: {
		y: {
			formatter: function (val) {
				return val + 'K'
			},
		},
	},
	fill: {
		opacity: 1,
	},
	states: {
		// hover: {
		//     filter: 'none'
		// }
	},
	legend: {
		position: 'top',
		horizontalAlign: 'center',
		offsetY: 10,
	},
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
		},
	},
}

const firstCharge: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stacked: true,
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
		},
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
			name: 'Black',
			data: [4,1,6,1,2,1,25,2,2,5,6,5,10,24,22,4,2,30,1,3,1,1,2,13,1,13,2,1,4,2,41,3,21,9,1,1],
		},
		{
			name: 'White',
			data: [0,0,0,1,0,1,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,9,0,1,1],
		},
	],
	xaxis: {
		categories: ['AGGRAVATED ASSAULT', 'ALL OTHER DRUG VIOLATIONS','All Other Larceny','ALL OTHER SEX OFFENSES','ALL OTHER SIMPLE ASSAULT',
			'ALL TRAFFIC','BURGLARY-FORCIBLE ENTRY','BURGLARY NON-FORCED ENTRY','CALLS FOR SERVICE','CITY ORDINANCE VIOLATIONS',
			'CRIMINAL DAMAGE TO PROPERTY','DISORDERLY CONDUCT','DRUG VIOLATIONS','ESCAPE FROM CUSTODY OR RESIST ARREST','FIGHTING (AFFRAY)',
			'LARCENY','LARCENY FROM BUILDINGS','LARCENY FROM MOTOR VEHICLE','MOTOR VEHICLE THEFT OF ALL OTHER VEHICLES',
			'MOTOR VEHICLE THEFT OF AUTOMOBILE','MURDER & NON-NEGLIGENT MANSLAUGHTER','NON-CRIMINAL DETAINMENT (INV. COMMITMENT)',
			'OtherWeapons Violations','POSSESSING/CONCEALING STOLEN PROPERTY','Possessing/ concealing weapons','POSSESSING/CONCEALING STOLEN PROPERTY',
			'PURSE SNATCHING','RESIST/OBSTRUCT PUBLIC OFFICER','ROBBERY','ROD','SHOPLIFTING','SIMPLE NON-PHYSICAL THREAT INTIMIDATION',
			'SIMPLE PHYSICAL ASSAULT','TRESPASSING','UNAUTHORIZED USE OF CONVEYANCE','YOUTH PROTECTION ORDINANCE'],
	},
	colors: [ '#3e60d5','#eb1e1e'],
	tooltip: {
		y: {
			formatter: function (val) {
				return val + 'K'
			},
		},
	},
	fill: {
		opacity: 1,
	},
	states: {
		// hover: {
		//     filter: 'none'
		// }
	},
	legend: {
		position: 'top',
		horizontalAlign: 'center',
		offsetY: 10,
	},
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
		},
	},
}

const minorReferrals: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stacked: true,
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
		},
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
			name: 'Reffered to Juvenile Authorities',
			data: [4,1,5,2,0,1,25,0,0,0,2,3,5,10,16,2,0,24,1,3,1,1,2,9,1,9,2,0,4,1,13,2,17,7,0,0],
		},
		{
			name: 'Handled within Deparment and Released',
			data: [0,0,1,0,2,1,4,2,2,5,4,2,5,13,2,1,2,7,0,0,0,0,1,5,0,5,0,1,0,1,37,1,5,2,1,1],
		},
		{
			name: 'Social Services',
			data: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		},
		{
			name: 'Teen court',
			data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
		},
		{
			name: 'None',
			data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		},
	],
	xaxis: {
		categories: ['AGGRAVATED ASSAULT', 'ALL OTHER DRUG VIOLATIONS','All Other Larceny','ALL OTHER SEX OFFENSES','ALL OTHER SIMPLE ASSAULT',
			'ALL TRAFFIC','BURGLARY-FORCIBLE ENTRY','BURGLARY NON-FORCED ENTRY','CALLS FOR SERVICE','CITY ORDINANCE VIOLATIONS',
			'CRIMINAL DAMAGE TO PROPERTY','DISORDERLY CONDUCT','DRUG VIOLATIONS','ESCAPE FROM CUSTODY OR RESIST ARREST','FIGHTING (AFFRAY)',
			'LARCENY','LARCENY FROM BUILDINGS','LARCENY FROM MOTOR VEHICLE','MOTOR VEHICLE THEFT OF ALL OTHER VEHICLES',
			'MOTOR VEHICLE THEFT OF AUTOMOBILE','MURDER & NON-NEGLIGENT MANSLAUGHTER','NON-CRIMINAL DETAINMENT (INV. COMMITMENT)',
			'OtherWeapons Violations','POSSESSING/CONCEALING STOLEN PROPERTY','Possessing/ concealing weapons','POSSESSING/CONCEALING STOLEN PROPERTY',
			'PURSE SNATCHING','RESIST/OBSTRUCT PUBLIC OFFICER','ROBBERY','ROD','SHOPLIFTING','SIMPLE NON-PHYSICAL THREAT INTIMIDATION',
			'SIMPLE PHYSICAL ASSAULT','TRESPASSING','UNAUTHORIZED USE OF CONVEYANCE','YOUTH PROTECTION ORDINANCE'],
	},
	colors: [ '#3e60d5','#eb1e1e','#ffbc00d9','#47ad77d9','#f48024d9'],
	fill: {
		opacity: 1,
	},
	states: {
		// hover: {
		//     filter: 'none'
		// }
	},
	legend: {
		position: 'top',
		horizontalAlign: 'center',
		offsetY: 10,
	},
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
		},
	},
}

export const contactByRace: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [6.6, 93.4],
	labels: ['W', 'B'],
	colors: [ '#eb1e1e','#3e60d5'],
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

export const officerContactType: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [13.1, 86.9],
	labels: ['SRO', 'NO'],
	colors: [ '#eb1e1e','#3e60d5'],
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
	colors: ['#3e60d5','#6c757d', '#2b908f','#fa5c7c','#ffbc00'],
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
		// {
		//   name: '2014',
		//   data: [53, 32, 33, 52, 13, 44, 32, 25],
		// },
		// {
		//   name: '2015',
		//   data: [53, 32, 33, 52, 13, 44, 32, 25],
		// },
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

export const totalCountRace: ApexOptions = {
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
				position: 'center',
			},
		},
	},
	colors: ['#3e60d5','#eb1e1e'],
	stroke: {
		show: true,
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
		  name: 'B',
		  data: [1,3,2,2,17,54,206],
		},
		{
		  name: 'W',
		  data: [0,0,0,1,1,1,17],
		},
	  ],
	xaxis: {
		categories: ['7', '6', '5', '4', '3', '2', '1'],
	},
	yaxis: {
		title: {
			text: 'NUMBER OF COUNTS PER INTERACTION',
		},
	},
	legend: {
		position: 'top',
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

export const intReferral: ApexOptions = {
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
				position: 'center',
			},
		},
	},
	colors: ['#3e60d5','#eb1e1e'],
	stroke: {
		show: true,
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
		  name: 'B',
		  data: [107,92,1,1,3],
		},
		{
		  name: 'W',
		  data: [7,10,0,0,0],
		},
	  ],
	xaxis: {
		categories: ['Referred to the juvenile Authorities', 'Handled withing the Department and released', 'Social Services', 'Teen Court', 'None'],
	},
	legend: {
		position: 'top',
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

export const primaryCount: ApexOptions = {
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
				position: 'center',
			},
		},
	},
	colors: ['#3e60d5','#eb1e1e'],
	stroke: {
		show: true,
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
		  name: 'Count of Referral Primary',
		  data: [180,118,1,0,3,2],
		},
	  ],
	xaxis: {
		categories: ['Referred to the juvenile Authorities', 'Handled withing the Department and released', 'Social Services', 'Teen Court', 'None', 'Referred to another Police'],
	},
	legend: {
		position: 'top',
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

interface MapContainerProps {
	google: any
}

const BarCharts = ({}: MapContainerProps) => {
	return (
		<>
		<div className="xl:col-span-6">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title mb-4">Total Counts by Race</h4>
					<div dir="ltr">
					<ReactApexChart
                            className="apex-charts"
                            options={totalCountRace}
                            series={totalCountRace.series}
                            type="bar"
                            height={500}
                        />
						</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						This chart reinforces racial disparity in enforcement outcomes. <br/>
						Black individuals not only experience more frequent interactions, <br/>
						but they also tend to receive more charges per interaction than White individuals.
						</div>
				</div>
			</div>
		</div>
		
		<div className="xl:col-span-6">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title mb-4">Interaction Referral by Race and 1 Count</h4>
					<div dir="ltr">
					<ReactApexChart
                            className="apex-charts"
                            options={intReferral}
                            series={intReferral.series}
                            type="bar"
                            height={500}
                        />					</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						This disparity suggests that Black youth are more frequently funneled into the juvenile justice system, <br/>
						raising concerns about over-policing, differential treatment, and long-term systemic impacts on communities of color. <br/>
						Even at low offense levels, unequal referral patterns may contribute to cumulative disadvantage.
						</div>
				</div>
			</div>
		</div>
		
		<div className="xl:col-span-6">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title mb-4">Count of Referral Primary</h4>
					<div dir="ltr">
					<ReactApexChart
                            className="apex-charts"
                            options={primaryCount}
                            series={primaryCount.series}
                            type="bar"
                            height={500}
                        />					</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						 The data suggests a strong preference for formal interventions over alternative or community-based referrals. <br/>
						 This pattern could indicate limited use of diversion programs, potentially increasing juvenile system <br/>
						 involvement and contributing to cumulative disadvantages for youth.
						</div>
				</div>
			</div>
		</div>

		<div className="xl:col-span-3">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title">B and W Contacts</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={contactBW} height={337} series={contactBW.series} type="line" />
						</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						The fluctuating trend for Black individuals may indicate changes in policies, enforcement practices, or community dynamics affecting contact rates.<br/>
						The stable trend for White individuals suggests consistent contact rates, possibly reflecting less variation in influencing factors.<br/>
						The disparity in trends may highlight systemic issues or differences in how policies impact different racial groups, warranting further analysis to understand underlying causes
						</div>
					</div>
				</div>
		</div>
		
		<div className="xl:col-span-3">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Age and Race of Interactions with KPD 2014-2018</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={ageRaceInt} height={363} series={ageRaceInt.series} type="bar" />
						</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						The data indicates that Black youth had significantly more interactions than White youth across all age groups.<br/>
						This disparity may reflect broader systemic issues, such as racial profiling, socio-economic factors, or differences in community-police relationships.
						</div>
					</div>
				</div>
		</div>
		
		<div className="xl:col-span-3">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Officer Interactions by Officer Type and Referral</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={officerInt} height={350} series={officerInt.series} type="bar" />
						</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						The data suggests racial disparities in referral outcomes, with Black individuals more often referred to formal judicial authorities and handled by non-SROs. <br/>
						In contrast, White individuals are more frequently directed to alternative resolutions like Teen Court or receive no formal referral, managed exclusively by SROs. <br/>
						This may indicate systemic differences in how student behavior is addressed based on race and officer type.
						</div>
					</div>
				</div>
		</div>

		<div className="xl:col-span-3">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Comparison of Interaction Outcomes by Race</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={raceIntComp} height={350} series={raceIntComp.series} type="bar" />
						</div>
						<div className="pt-6">
						<h3>Implications:</h3>
						The data suggests racial disparities in referral outcomes, with Black individuals more often referred to formal judicial authorities and handled by non-SROs. <br/>
						In contrast, White individuals are more frequently directed to alternative resolutions like Teen Court or receive no formal referral, managed exclusively by SROs. <br/>
						This may indicate systemic differences in how student behavior is addressed based on race and officer type.
						</div>
					</div>
				</div>
		</div>

		<div className="xl:col-span-6">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">1st Charge vs Black and White</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={firstCharge} height={820} series={firstCharge.series} type="bar" />
						</div>
						<div className="pt-6">
							<h3>Implications:</h3>
							<b>Racial Disparity:</b> The pronounced difference suggests potential racial disparities in arrest or charging practices.<br/>
							<b>Criminal Justice Concerns:</b> It may reflect systemic biases within law enforcement or judicial processes.<br/>
							<b>Policy Impact:</b> The data can inform discussions on criminal justice reform, aiming to address these disparities through equitable law enforcement policies.
						</div>
					</div>
				</div>
		</div>

		<div className="xl:col-span-6">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Referrals Types used after Interactions</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={minorReferrals} height={820} series={minorReferrals.series} type="bar" />
						</div>
						<div className="pt-6">
							<h3>Implications:</h3>
							<b>High Referral to Juvenile Authorities:</b> Offenses like "Criminal Larceny," "City Ordinance Violations," and "Aggravated Assault" predominantly result in referrals to juvenile authorities, indicating their seriousness.<br/>
							<b>Department Handling Dominates Minor Offenses:</b> Less severe infractions like "Shoplifting - Third" and "Simple Physical Assault" are mostly handled within the department and released, reflecting a focus on in-house resolution for minor offenses.<br/>
							<b>Limited Use of Alternative Programs:</b> Referrals to social services, teen court, or no referrals are rare, suggesting limited reliance on alternative intervention programs.<br/>
							There's a strong dependency on formal juvenile justice interventions for serious crimes, which could impact youth recidivism rates.<br/>
							Minor offenses are often resolved internally, possibly to avoid burdening the juvenile system.<br/>
							The minimal use of social services and teen court highlights an opportunity to expand restorative justice approaches for certain cases.

						</div>
					</div>
				</div>
		</div>
		</>
	)
}


const PieCharts = ({}: MapContainerProps) => {
	return (
		<>
		<div className="card xl:col-span-3">
			<div className="p-6">
				<h4 className="card-title mb-4">Contacts by Race</h4>
				<div dir="ltr">
					<ReactApexChart className="apex-charts" options={contactByRace} height={400} series={contactByRace.series} type="pie" />
				</div>
				<div className='mt-6'>
					<h3>Implications:</h3>
					<ul>
						<li>Disproportionate reporting suggests differences in community interactions with authorities.</li>
						<li>Further investigation needed into enforcement, policy, or societal factors influencing reporting trends.</li>
					</ul>
				</div>
			</div>
		</div>

		<div className="card xl:col-span-3">
			<div className="p-6">
				<h4 className="card-title mb-4">Contact Officer Type</h4>
				<div dir="ltr">
					<ReactApexChart className="apex-charts" options={officerContactType} height={400} series={officerContactType.series} type="pie" />
				</div>
				<div className='mt-6'>
					<h3>Implications:</h3>
					<ul>
						<li>This data suggests Non-SRO law enforcement makes up majority of interactions with authorities in the community.</li>
						<li>Further investigation needed into enforcement, policy, or societal factors influencing reporting trends.</li>
					</ul>
				</div>
			</div>
		</div>

		</>
	)
}

const DMC = ({ google }: MapContainerProps) => {
	return (
		<>
			{/* <PageBreadcrumb title="Dashboard" subName="Menu" /> */}
			<header className="text-slate-900 dark:text-slate-200 text-lg font-medium mb-6">DMC</header>
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<PieCharts google={google}/>
				<BarCharts google={google} />
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
})(DMC)
