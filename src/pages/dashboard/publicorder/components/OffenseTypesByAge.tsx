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
                name: 'Young Adult (16-19)',
                data: [44, 55, 41, 37, 22],
            },
            {
                name: 'Pre-Teen (11-13)',
                data: [53, 32, 33, 52, 13],
            },
            {
                name: 'Child (8-10)',
                data: [12, 17, 11, 9, 15],
            },
            {
                name: 'Young Adult (4-7)',
                data: [9, 7, 5, 8, 6],
            },
            {
                name: 'Teen (14-16)',
                data: [25, 12, 19, 32, 25],
            },
        ],
        xaxis: {
            categories: ['Black', 'White', 'Latino', 'Asian', 'Native American'],
        },
        colors: ['#ffbc00', '#39afd1', '#6c757d', '#e3eaef', '#3e60d5'],
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
			name: 'Juvenile Offenses',
			type: 'line',
			data: [440, 505, 375, 200, 150, 160],
		},
	]

	return (
		<div className="lg:col-span-2">
            <div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Contact Counts by Age and Culture</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={apexOpts} height={520} series={apexOpts.series} type="bar" />
						</div>
					</div>
				</div>
		</div>
	)
}

export default RevenueChart
