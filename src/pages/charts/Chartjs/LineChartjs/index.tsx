import Chart, { type ChartItem } from 'chart.js/auto'
import { useEffect } from 'react'
import { interpolationConfig, lineConfig, multiAxesConfig, pointStylingConfig, lineSegmentConfig, steppedConfig } from './data'

// component
import PageBreadcrumb from '../../../../components/PageBreadcrumb'

const LineChartjs = () => {
	useEffect(() => {
		const interpolationTag = document.getElementById('interpolation-example') as ChartItem
		const interpolationChart = new Chart(interpolationTag, interpolationConfig)

		const lineTag = document.getElementById('line-example') as ChartItem
		const lineChart = new Chart(lineTag, lineConfig)

		const multiAxesTag = document.getElementById('multi-axes-example') as ChartItem
		const multiAxesChart = new Chart(multiAxesTag, multiAxesConfig)

		const pointStylingTag = document.getElementById('point-styling-example') as ChartItem
		const pointStylingChart = new Chart(pointStylingTag, pointStylingConfig)

		const lineSegmentTag = document.getElementById('line-segment-example') as ChartItem
		const lineSegmentChart = new Chart(lineSegmentTag, lineSegmentConfig)

		const steppedTag = document.getElementById('stepped-example') as ChartItem
		const steppedChart = new Chart(steppedTag, steppedConfig)

		return () => {
			interpolationChart.destroy()
			lineChart.destroy()
			multiAxesChart.destroy()
			pointStylingChart.destroy()
			lineSegmentChart.destroy()
			steppedChart.destroy()
		}
	}, [])

	return (
		<>
			<PageBreadcrumb title="Chartjs" subName="Charts" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Interpolation</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="interpolation-example" data-colors="#3e60d5,#47ad77"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Line</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="line-example" data-colors="#3e60d5,#47ad77"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Multi-Axes</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="multi-axes-example" data-colors="#3e60d5,#47ad77"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Point Styling</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="point-styling-example" data-colors="#3e60d5,#47ad77"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Line Segment</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="line-segment-example" data-colors="#3e60d5,#47ad77"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Stepped</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="stepped-example" data-colors="#3e60d5,#47ad77"></canvas>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LineChartjs
