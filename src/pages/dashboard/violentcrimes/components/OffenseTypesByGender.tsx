import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {

	const apexOpts: ApexOptions = {
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
                horizontal: false,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        series: [
            {
                name: 'Black Male',
                data: [44, 55, 41, 37, 22, 55],
            },
            {
                name: 'Black Female',
                data: [53, 32, 33, 52, 13, 32],
            },
            {
                name: 'White Male',
                data: [12, 17, 11, 9, 15, 17],
            },
            {
                name: 'White Female',
                data: [9, 7, 5, 8, 6, 7],
            },
        ],
        xaxis: {
            categories: ['2014', '2015', '2016', '2017', '2018', '2019'],
        },
        colors: ['#6c757d', '#ffbc00', '#e3eaef', '#39afd1'],
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

	const series = [
		{
			name: 'Total violent Incidents',
			type: 'line',
			data: [440, 505, 375, 200, 150, 160],
		},
	]

	return (
		<div className="lg:col-span-2">
            <div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">violent Incidents</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={apexOpts} height={380} series={apexOpts.series} type="bar" />
						</div>
					</div>
				</div>
		</div>
	)
}

export default RevenueChart
