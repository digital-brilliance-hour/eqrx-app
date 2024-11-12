import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { basicTreemapOpts, colorRangeTreemapOpts, distributedTreemapOpts, multipleSeriesTreemapOpts } from './data'

const TreemapApex = () => {
	return (
		<>
			<PageBreadcrumb title="Treemap Charts" subName="Apex" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Basic Treemap</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicTreemapOpts} height={350} series={basicTreemapOpts.series} type="treemap" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Treemap Multiple Series</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={multipleSeriesTreemapOpts} height={350} series={multipleSeriesTreemapOpts.series} type="treemap" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Distributed Treemap</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={distributedTreemapOpts} height={350} series={distributedTreemapOpts.series} type="treemap" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Color Range Treemap</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={colorRangeTreemapOpts} height={350} series={colorRangeTreemapOpts.series} type="treemap" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default TreemapApex
