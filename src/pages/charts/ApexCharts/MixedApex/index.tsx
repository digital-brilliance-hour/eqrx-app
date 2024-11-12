import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

//data
import { lineAreaChartOpts, lineColumnAreaChartOpts, lineColumnChartOpts, multipleYAxisChartOpts } from './data'

const MixedApex = () => {
	return (
		<>
			<PageBreadcrumb title="Mixed Charts" subName="Apex" />
			<div className="grid xl:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Line & Column Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={lineColumnChartOpts} height={380} series={lineColumnChartOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Multiple Y-Axis Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={multipleYAxisChartOpts} height={380} series={multipleYAxisChartOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Line & Area Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={lineAreaChartOpts} height={380} series={lineAreaChartOpts.series} type="line" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Line, Column & Area Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={lineColumnAreaChartOpts} height={380} series={lineColumnAreaChartOpts.series} type="line" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MixedApex
