import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {

	const ageInter: ApexOptions = {
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
                horizontal: true,
                dataLabels: {
                    total: {
                        enabled: true,
                        formatter: function (val) {
                            return val + ''
                        },
                        offsetX: 5
                    }
                }
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        series: [
            {
                name: 'Black',
                data: [44, 55, 41, 37, 22],
            },
            {
                name: 'White',
                data: [53, 32, 33, 52, 13],
            },
            {
                name: 'Asian',
                data: [0, 0, 0, 0, 0],
            },
            {
                name: 'Latino',
                data: [0, 0, 0, 0, 0],
            },
            {
                name: 'Native American',
                data: [0, 0, 0, 0, 0],
            },
        ],
        xaxis: {
            categories: ['Young Child (4-7)', 'Child (8-10)', 'Pre-Teen (11-13)', 'Teen (14-16)', 'Young Adult (16-19)'],
        },
        colors: ['#39afd1', '#6c757d', '#ffbc00', '#e3eaef', '#3e60d5'],
        tooltip: {
            y: {
                formatter: function (value, opts) {
                    const sum = opts.series.reduce((a:any, b:any) => a + b[opts.dataPointIndex], 0);
                    const percent = (value / sum) * 100;
                    return percent.toFixed(0) + '%'
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
						<h4 className="card-title mb-4">Age Interactions</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={ageInter} height={520} series={ageInter.series} type="bar" />
						</div>
					</div>
				</div>
		</div>
	)
}

export default RevenueChart
