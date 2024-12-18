import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RevenueChart = () => {
	const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

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
                dataLabels: {
                    position: 'top',
                    total: {
                        enabled: true,
                        formatter: function (val) {
                            return val + ''
                        },
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
                data: [44, 55, 41, 37],
            },
            {
                name: 'White',
                data: [12, 17, 11, 9],
            },
            {
                name: 'Asian',
                data: [0, 0, 0, 0],
            },
            {
                name: 'Latino',
                data: [0, 0, 0, 0],
            },
            {
                name: 'Native American',
                data: [0, 0, 0, 0],
            },
        ],
        xaxis: {
            categories: ['Alcohol', 'Marijuana', 'Other Drugs', 'No Substance'],
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
						<h4 className="card-title mb-4">Substance Involved by Culture/Race</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={apexOpts} height={380} series={apexOpts.series} type="bar" />
						</div>
					</div>
				</div>
		</div>
	)
}

export default RevenueChart
