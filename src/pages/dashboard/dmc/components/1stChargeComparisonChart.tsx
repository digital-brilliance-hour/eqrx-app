import { Link } from 'react-router-dom'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const FirstChargeComparisonChart = () => {
	const apexOpts: ApexOptions = {
        chart: {
            height: 400,
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
                        offsetX: 5
                    }
                }
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        colors: ['#3e60d5', '#47ad77', '#fa5c7c', '#ffbc00', '#e3eaef', '#3e60d5'],
        series: [
            {
                name: 'Black',
                data: [44, 55, 57, 56, 61],
            },
            {
                name: 'White',
                data: [76, 85, 101, 98, 87],
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
            categories: ['Violent Offenses', 'Property Offenses', 'Status Offenses', 'Drug/Alcohol', 'Behavioral/Disorderly'],
        },
        legend: {
            offsetY: 7,
        },
        yaxis: {
            title: {
                text: '',
            },
        },
        fill: {
            opacity: 1,
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
        tooltip: {
            y: {
                formatter: function (value, opts) {
                    const sum = opts.series.reduce((a:any, b:any) => a + b[opts.dataPointIndex], 0);
                    const percent = (value / sum) * 100;
                    return percent.toFixed(0) + '%'
                },
            },
        },
    }

	return (
		<div className="col-lg-4 lg:col-span-2">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">1st Charge Comparison by Culture/Race</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={apexOpts} height={400} series={apexOpts.series} type="bar" />
						</div>
					</div>
			</div>
		</div>
	)
}

export default FirstChargeComparisonChart
