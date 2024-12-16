// avatar
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar10 from '@/assets/images/users/avatar-10.jpg'
import { Employee } from '@/pages/ui/tables/types'
import { Grid } from 'gridjs-react'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { dashedLineChartOpts } from '@/pages/charts/ApexCharts/LineApex/data'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

//import { Employee } from './types'

/*const PropTable = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}*/
	
	const dashedLineChartOpts4: ApexOptions = {
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
				name: 'Shoplifting Trends',
				data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8],
			},
			{
				name: 'Breaking and Entering',
				data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51],
			},
			{
				name: 'Larceny Incidents ',
				data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56],
			},
			{
				name: 'Vandalism Reports',
				data: [35, 39, 50, 60, 75, 98, 99, 56, 45, 36],
			},
		],
	
		markers: {
			size: 0,
			// style: 'hollow', // full, hollow, inverted
		},
		xaxis: {
			categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
		},
		colors: ['#6c757d', '#47ad77', '#39afd1', '#47ad77'],
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
	const dashedLineChartOpts5: ApexOptions = {
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
				name: 'Shoplifting Trends',
				data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8],
			},
			{
				name: 'Breaking and Entering',
				data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51],
			},
			{
				name: 'Larceny Incidents ',
				data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56],
			},
			{
				name: 'Vandalism Reports',
				data: [35, 39, 50, 60, 75, 98, 99, 56, 45, 36],
			},
		],
	
		markers: {
			size: 0,
			// style: 'hollow', // full, hollow, inverted
		},
		xaxis: {
			categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
		},
		colors: ['#6c757d', '#47ad77', '#39afd1','#ff00ff'],
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

/*return(
	<>
	<PageBreadcrumb title="Data Table" subName="Table" />
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

		</>
*/	//)
//}

export default dashedLineChartOpts4 && dashedLineChartOpts5
