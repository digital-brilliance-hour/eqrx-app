import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { secondBubbleChartOpts, simpleBubbleChartOpts } from './data'

const BubbleApex = () => {
	return (
		<>
			<PageBreadcrumb title="Bubble Charts" subName="Apex" />
			<div className="grid xl:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Simple Bubble Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={simpleBubbleChartOpts} height={380} series={simpleBubbleChartOpts.series} type="bubble" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">3D Bubble Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={secondBubbleChartOpts} height={380} series={secondBubbleChartOpts.series} type="bubble" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BubbleApex
