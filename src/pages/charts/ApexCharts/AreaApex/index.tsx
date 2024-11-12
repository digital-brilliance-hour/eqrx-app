import ReactApexChart from 'react-apexcharts'

// data
import { NavigateAreaApexOpts, areaApexOpts, areaNullValueOpts, dateTimeAreaApexOpts, irregularTimeSeriesOpts, spilineAreaApexOpts, stackedAreaOpts } from './data'

// components
import { PageBreadcrumb } from '../../../../components'

const AreaApex = () => {
	return (
		<>
			<PageBreadcrumb title="Area Charts" subName="Apex" />
			<div className="grid xl:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Basic Area Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={areaApexOpts} height={380} series={areaApexOpts.series} type="area" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Spline Area</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={spilineAreaApexOpts} height={380} series={spilineAreaApexOpts.series} type="area" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Area Chart - Datetime X-axis</h4>
						<div className="toolbar apex-toolbar">
							<button id="one_month" className="btn btn-sm btn-light">
								1M
							</button>
							<button id="six_months" className="btn btn-sm btn-light">
								6M
							</button>
							<button id="one_year" className="btn btn-sm btn-light active">
								1Y
							</button>
							<button id="ytd" className="btn btn-sm btn-light">
								YTD
							</button>
							<button id="all" className="btn btn-sm btn-light">
								ALL
							</button>
						</div>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={dateTimeAreaApexOpts} height={350} series={dateTimeAreaApexOpts.series} type="area" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Area with Negative Values</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={NavigateAreaApexOpts} height={380} series={NavigateAreaApexOpts.series} type="area" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Stacked Area</h4>
						<div dir="ltr">
							<ReactApexChart id="stacked-area" className="apex-charts" options={stackedAreaOpts} height={380} series={stackedAreaOpts.series} type="area" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Irregular TimeSeries</h4>
						<div dir="ltr">
							<ReactApexChart id="area-timeSeries" className="apex-charts" options={irregularTimeSeriesOpts} height={380} series={irregularTimeSeriesOpts.series} type="area" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Area Chart with Null values</h4>
						<div dir="ltr">
							<ReactApexChart id="area-chart-nullvalues" className="apex-charts" options={areaNullValueOpts} height={380} series={areaNullValueOpts.series} type="area" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AreaApex
