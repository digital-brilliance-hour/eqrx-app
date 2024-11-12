import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

//data
import { basicBoxplotOpts, horizontalBoxPlotOpts, scatterBoxplotOpts } from './data'

const BoxPlotApex = () => {
	return (
		<>
			<PageBreadcrumb title="Boxplot Charts" subName="Apex" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Basic Boxplot</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicBoxplotOpts} height={350} series={basicBoxplotOpts.series} type="boxPlot" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Scatter Boxplot </h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={scatterBoxplotOpts} height={350} series={scatterBoxplotOpts.series} type="boxPlot" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Horizontal BoxPlot</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={horizontalBoxPlotOpts} height={350} series={horizontalBoxPlotOpts.series} type="boxPlot" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BoxPlotApex
