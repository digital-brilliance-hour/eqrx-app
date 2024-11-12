import { useEffect } from 'react'
import Chart, { type ChartItem } from 'chart.js/auto'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { boundariesConfig, datasetConfig, drawTimeConfig, radarConfig, stackedConfig } from './data'

// components

const AreaChartjs = () => {
	useEffect(() => {
		const boundariesTag = document.getElementById('boundaries-example') as ChartItem
		const boundariesChart = new Chart(boundariesTag, boundariesConfig)

		const datasetTag = document.getElementById('dataset-example') as ChartItem
		const datasetChart = new Chart(datasetTag, datasetConfig)

		const drawTimeTag = document.getElementById('draw-time-example') as ChartItem
		const drawTimeChart = new Chart(drawTimeTag, drawTimeConfig)

		const stackedTag = document.getElementById('stacked-example') as ChartItem
		const stackedChart = new Chart(stackedTag, stackedConfig)

		const radarTag = document.getElementById('radar-example') as ChartItem
		const radarChart = new Chart(radarTag, radarConfig)

		return () => {
			boundariesChart.destroy()
			datasetChart.destroy()
			drawTimeChart.destroy()
			stackedChart.destroy()
			radarChart.destroy()
		}
	}, [])

	return (
		<>
			<PageBreadcrumb title="Chartjs" subName="Charts" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Boundaries</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="boundaries-example" data-colors="#3e60d5,#47ad77"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Different Dataset</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="dataset-example" data-colors="#3e60d5,#fa5c7c,#47ad77,#ebeff2, #f56f36"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Draw Time</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="draw-time-example" data-colors="#3e60d5,#47ad77"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Stacked</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="stacked-example" data-colors="#3e60d5,#fa5c7c,#47ad77,#ebeff2, #f56f36"></canvas>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Radar</h4>
						<div className="mt-3" style={{ height: 320 }}>
							<canvas id="radar-example" data-colors="#3e60d5,#fa5c7c,#47ad77,#ebeff2, #f56f36"></canvas>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AreaChartjs
