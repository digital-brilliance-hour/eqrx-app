import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { brushChartOpts, brushChartOpts2, dashedLineChartOpts, gradientLineChartOpts, lineChartOpts, lineChartwithAnnotationOpts, lineWithDataLabelOpts, missingChartOpts, steplineChartOpts, syncingChartOpts, syncingChartOpts2, zoomableTimeseriesOpts } from './data'

const LineApex = () => {
	return (
		<>
			<PageBreadcrumb title="Line Charts" subName="Apex" />
			<div className="grid xl:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Simple line chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={lineChartOpts} height={380} series={lineChartOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Line with Data Labels</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={lineWithDataLabelOpts} height={380} series={lineWithDataLabelOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Zoomable Timeseries</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={zoomableTimeseriesOpts} height={380} series={zoomableTimeseriesOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Line Chart with Annotations</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={lineChartwithAnnotationOpts} height={380} series={lineChartwithAnnotationOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Syncing charts</h4>
						<ReactApexChart className="apex-charts" options={syncingChartOpts} height={200} series={syncingChartOpts.series} type="line" />
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={syncingChartOpts2} height={200} series={syncingChartOpts2.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Gradient Line Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={gradientLineChartOpts} height={374} series={gradientLineChartOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Missing / Null values</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={missingChartOpts} height={380} series={missingChartOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Dashed Line Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={dashedLineChartOpts} height={380} series={dashedLineChartOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Stepline Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={steplineChartOpts} height={344} series={steplineChartOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Brush Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={brushChartOpts} height={230} series={brushChartOpts.series} type="line" />

							<ReactApexChart className="apex-charts" options={brushChartOpts2} height={130} series={brushChartOpts2.series} type="line" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LineApex
