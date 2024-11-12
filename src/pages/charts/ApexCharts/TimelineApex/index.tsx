import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

//data
import { advancedTimelineOpts, basicTimelineOpts, distributedTimelineOpts, groupRowsTimelineOpts, multiSeriesTimelineOpts } from './data'

const TimelineApex = () => {
	return (
		<>
			<PageBreadcrumb title="Timeline Charts" subName="Apex" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Basic Timeline</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicTimelineOpts} height={350} series={basicTimelineOpts.series} type="rangeBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Distributed Timeline </h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={distributedTimelineOpts} height={350} series={distributedTimelineOpts.series} type="rangeBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Multi Series Timeline</h4>

						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={multiSeriesTimelineOpts} height={350} series={multiSeriesTimelineOpts.series} type="rangeBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Advanced Timeline</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={advancedTimelineOpts} height={350} series={advancedTimelineOpts.series} type="rangeBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Multiple Series - Group Rows</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={groupRowsTimelineOpts} height={350} series={groupRowsTimelineOpts.series} type="rangeBar" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default TimelineApex
