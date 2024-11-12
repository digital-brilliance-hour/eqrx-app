import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

//data
import { datetimeOpts, scatterWithImagesOpts, scatterXYOpts } from './data'

const ScatterApex = () => {
	return (
		<>
			<PageBreadcrumb title="Scatter Charts" subName="Apex" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Scatter (XY) Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={scatterXYOpts} height={380} series={scatterXYOpts.series} type="scatter" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Scatter Chart - Datetime</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={datetimeOpts} height={380} series={datetimeOpts.series} type="scatter" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Scatter - Images</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={scatterWithImagesOpts} height={380} series={scatterWithImagesOpts.series} type="scatter" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ScatterApex
