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

export const shopLift: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		stacked: true,
		stackType: '100%',
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
		  name: 'Black',
		  data: [41],
		},
		{
		  name: 'White',
		  data: [9],
		},
	  ],
	xaxis: {
		categories: ['SHOPLIFTING'],
	},
	yaxis: {
		title: {
			text: '1st CHARGE',
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

export const burglary: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		stacked: true,
		stackType: '100%',
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
		  name: 'Black',
		  data: [25],
		},
		{
		  name: 'White',
		  data: [4],
		},
	  ],
	xaxis: {
		categories: ['BURGLARY-FORCIBLE ENTRY'],
	},
	yaxis: {
		title: {
			text: '1st CHARGE',
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

export const drugVio: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		stacked: true,
		stackType: '100%',
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
		  name: 'Black',
		  data: [10],
		},
		{
		  name: 'White',
		  data: [0],
		},
	  ],
	xaxis: {
		categories: ['DRUG VIOLATIONS'],
	},
	yaxis: {
		title: {
			text: '1st CHARGE',
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

export const simple: ApexOptions = {
	chart: {
		height: 380,
		type: 'bar',
		stacked: true,
		stackType: '100%',
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
		  name: 'Black',
		  data: [3,21,9],
		},
		{
		  name: 'White',
		  data: [0,1,1],
		},
	  ],
	xaxis: {
		categories: ['SIMPLE NON-PHYSICAL THREAT','SIMPLE PHYSICAL ASSAULT','TRESPASSING'],
	},
	yaxis: {
		title: {
			text: '1st CHARGE',
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

const unique: ApexOptions = {
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
			name: 'Black',
			data: [260,20],
		},
		{
			name: 'White',
			data: [25,0],
		},
	],
	xaxis: {	
		categories: ['Unique', 'Not Uniuqe'],
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

const uniqueContact: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
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
			name: 'Black',
			data: [191,20],
		},
		{
			name: 'White',
			data: [20,0],
		},
	],
	xaxis: {	
		categories: ['Unique', 'Not Uniuqe'],
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

const gender: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
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
			name: 'Male',
			data: [39,45,72,49,28],
		},
		{
			name: 'Female',
			data: [17,17,17,12,9],
		},
	],
	xaxis: {	
		categories: ['2014', '2015','2016','2017','2018'],
	},
	colors: [ '#26bfc7','#f5bf38'],
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

export const uniqueLo: ApexOptions = {
	chart: {
		height: 320,
		type: 'pie',
		toolbar: {
			show: true,
		},
	},
	series: [31.5, 68.5],
	labels: ['Not-Unique', 'Unique'],
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

interface MapContainerProps {
	google: any
}


const BehavioralIncidents = ({}: MapContainerProps) => {
	return (
		<>
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
			
			<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Shoplifting Black vs White</h4>
						<div dir="ltr">
						<ReactApexChart
								className="apex-charts"
								options={shopLift}
								series={shopLift.series}
								type="bar"
								height={400}
							/>					</div>
							<div className="pt-6">
							<h3>Implications:</h3>
								It may reflect potential biases in law enforcement, judicial processes, or reporting practices.<br/>
Further analysis is needed to understand the underlying causes, including socioeconomic factors, policing patterns, and systemic inequalities.<br/>
It highlights the importance of examining justice system practices to ensure fairness and equity.

							</div>
					</div>
				</div>
			</div>
	
			<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Burglary-Forcible Entry Black vs White</h4>
						<div dir="ltr">
						<ReactApexChart
								className="apex-charts"
								options={burglary}
								series={burglary.series}
								type="bar"
								height={400}
							/>					</div>
							<div className="pt-6">
							<h3>Implications:</h3>
								It may reflect potential biases in law enforcement, judicial processes, or reporting practices.<br/>
Further analysis is needed to understand the underlying causes, including socioeconomic factors, policing patterns, and systemic inequalities.<br/>
It highlights the importance of examining justice system practices to ensure fairness and equity.

							</div>
					</div>
				</div>
			</div>
	
			<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Drug Violations Black vs White</h4>
						<div dir="ltr">
						<ReactApexChart
								className="apex-charts"
								options={drugVio}
								series={drugVio.series}
								type="bar"
								height={400}
							/>					</div>
							<div className="pt-6">
							<h3>Implications:</h3>
								It may reflect potential biases in law enforcement, judicial processes, or reporting practices.<br/>
Further analysis is needed to understand the underlying causes, including socioeconomic factors, policing patterns, and systemic inequalities.<br/>
It highlights the importance of examining justice system practices to ensure fairness and equity.

							</div>
					</div>
				</div>
			</div>
	
			<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Simple Charges Recieved Black vs White</h4>
						<div dir="ltr">
						<ReactApexChart
								className="apex-charts"
								options={simple}
								series={simple.series}
								type="bar"
								height={400}
							/>					</div>
							<div className="pt-6">
							<h3>Implications:</h3>
								It may reflect potential biases in law enforcement, judicial processes, or reporting practices.<br/>
Further analysis is needed to understand the underlying causes, including socioeconomic factors, policing patterns, and systemic inequalities.<br/>
It highlights the importance of examining justice system practices to ensure fairness and equity.

							</div>
					</div>
				</div>
			</div>

			<div className="xl:col-span-3">
				<div className="card">
						<div className="p-6">
							<h4 className="card-title mb-4">Unique Contacts by Race</h4>
							<div dir="ltr">
								<ReactApexCharts className="apex-charts" options={unique} height={350} series={unique.series} type="bar" />
							</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							The data highlights racial disparities in referral outcomes, with Black individuals experiencing a significantly higher number of both unique and non-unique contacts.<br/>
This trend may suggest systemic biases or unequal treatment in the processes leading to referrals.<br/>
The concentration of non-unique contacts among Black individuals could indicate repeated interactions with the system, raising concerns about potential over-surveillance or lack of effective resolution mechanisms.

							</div>
						</div>
					</div>
			</div>

			<div className="xl:col-span-3">
				<div className="card">
						<div className="p-6">
							<h4 className="card-title">B and W Contacts</h4>
							<div dir="ltr">
								<ReactApexChart className="apex-charts" options={contactBW} height={365} series={contactBW.series} type="line" />
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
					
			<div className="card xl:col-span-3">
				<div className="p-6">
					<h4 className="card-title mb-4">Comparison of Contacts at 1 or More Locations</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={uniqueLo} height={400} series={uniqueLo.series} type="pie" />
					</div>
					<div className='mt-6'>
						<h3>Implications:</h3>
						<ul>
							<li>The disproportion in reporting suggests potential differences in community interactions with authorities.</li>
							<li>This may be influenced by variations in enforcement practices, policies, or societal factors.</li>
							<li>Further investigation is needed to understand the underlying causes of these reporting trends and to identify any systemic issues affecting community-authority relationships.</li>
						</ul>
					</div>
				</div>
			</div>
	
			<div className="card xl:col-span-3">
				<div className="p-6">
					<h4 className="card-title mb-4">Contact Officer Type</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={officerContactType} height={441} series={officerContactType.series} type="pie" />
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
			
			<div className="xl:col-span-3">
				<div className="card">
						<div className="p-6">
							<h4 className="card-title mb-4">Unique Location of Contacts by Race</h4>
							<div dir="ltr">
								<ReactApexCharts className="apex-charts" options={uniqueContact} height={350} series={uniqueContact.series} type="bar" />
							</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							The significantly higher number of unique contacts among Black individuals may suggest disparities in interactions, reporting, or enforcement practices.<br/>
							This data could warrant further investigation into potential systemic factors, such as differences in community engagement, law enforcement practices, or societal influences affecting these contact rates.<br/>
							</div>
						</div>
					</div>
			</div>
			
			<div className="xl:col-span-3">
				<div className="card">
						<div className="p-6">
							<h4 className="card-title mb-4">Interactions by Year and Gender</h4>
							<div dir="ltr">
								<ReactApexCharts className="apex-charts" options={gender} height={350} series={gender.series} type="bar" />
							</div>
							<div className="pt-6">
							<h3>Implications:</h3>
							 This trend suggests a gender disparity in interactions, with male interactions being more frequent and showing greater fluctuation over time. <br/>
							 The decline from 2016 onward for both genders could indicate changes in policy, reporting practices, or underlying social factors affecting interaction rates.
							</div>
						</div>
					</div>
			</div>

		</>
	)
}
const DisparateTreatment = ({ google }: MapContainerProps) => {
	return (
		<>
			{/* <PageBreadcrumb title="Dashboard" subName="Menu" /> */}
			<header className="text-slate-900 dark:text-slate-200 text-lg font-medium mb-6">Disparate Treatment</header>
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<BehavioralIncidents google={google} />
			</div>
		</>
	)
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBsHtI7Ed8ZeQ-yvYIMw9VKORe5WdPo5yg',
	libraries: ['visualization'],
})(DisparateTreatment)
