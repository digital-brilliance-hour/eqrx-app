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
            toolbar: {
                show: false,
            },
            events: {
                dataPointSelection: (event:any, chartContext:any, config) => { 
                    console.log(event);
                    console.log(chartContext);
                    console.log(config);
                },
                legendClick: function(chartContext, seriesIndex, opts) {
                    // ...
                    console.log(chartContext);
                    console.log(seriesIndex);
                    console.log(opts);
                },
                xAxisLabelClick: function(chartContext, seriesIndex, opts) {
                    // ...
                    console.log(chartContext);
                    console.log(seriesIndex);
                    console.log(opts);
                },
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
            width: 1,
            colors: ['#fff'],
        },
        series: [
            {
                name: 'Black',
                data: [44, 55, 41, 37, 60],
            },
            {
                name: 'White',
                data: [12, 17, 11, 9, 10],
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
            categories: ['No Action Taken', 'Warning/Counseling', 'Referral to Programs', 'Court Referral', 'Arrest'],
        },
        colors: ['#ffbc00', '#39afd1', '#6c757d', '#e3eaef', '#3e60d5'],
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
        annotations: {
            xaxis: [{
                label: {
                    click: function() {
                        console.log("here");
                    }
                }
            }]
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
						<h4 className="card-title mb-4">Disposition By Culture/Race</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={apexOpts} height={380} series={apexOpts.series} type="bar" />
						</div>
					</div>
				</div>
		</div>
	)
}

export default RevenueChart
