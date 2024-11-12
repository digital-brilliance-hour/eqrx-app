import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

//data
import { basicHeatmapOpts, colorRangeHeatmapOpts, multipleHeatmapOpts, rangewithoutShadeOpts } from './data'

const HeatApex = () => {
	return (
		<>
			<PageBreadcrumb title="Heatmap Charts" subName="Apex" />
			<div className="grid xl:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Basic Heatmap - Single Series</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicHeatmapOpts} height={380} series={basicHeatmapOpts.series} type="heatmap" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Heatmap - Multiple Series</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={multipleHeatmapOpts} height={380} series={multipleHeatmapOpts.series} type="heatmap" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Heatmap - Color Range</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={colorRangeHeatmapOpts} height={380} series={colorRangeHeatmapOpts.series} type="heatmap" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Heatmap - Range without Shades</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={rangewithoutShadeOpts} height={380} series={rangewithoutShadeOpts.series} type="heatmap" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeatApex
