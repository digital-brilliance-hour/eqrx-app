import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const TotalSalesChart = () => {
	const apexOpts: ApexOptions = {
        chart: {
            height: 240,
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
                data: [8, 495],
            },
            {
                name: 'White',
                data: [2, 42],
            },
        ],
        xaxis: {
            categories: ['SRO', "Patrol"],
        },
        colors: ['#6c757d', '#ffbc00'],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + ''
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

	return (
		<div className="col-lg-4 lg:col-span-2">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Contacts by Officer Type</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={apexOpts} height={430} series={apexOpts.series} type="bar" />
						</div>
					</div>
			</div>
		</div>
	)
}

export default TotalSalesChart
