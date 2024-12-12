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
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        series: [
            {
                name: 'SRO',
                data: [44],
            },
            {
                name: 'Other',
                data: [503],
            },
        ],
        xaxis: {
            categories: ['Total'],
        },
        colors: ['#6c757d', '#ffbc00'],
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

	return (
		<div className="col-lg-4">
			<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Contacts by Officer Type</h4>
						<div dir="ltr">
							<ReactApexCharts className="apex-charts" options={apexOpts} height={240} series={apexOpts.series} type="bar" />
						</div>
					</div>
				</div>
		</div>
	)
}

export default TotalSalesChart
