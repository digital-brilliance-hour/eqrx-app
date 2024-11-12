import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { basicRadarOpts, multipleSeriesOpts, polygonFillOpts } from './data'

// components

const RadarApex = () => {
	const [data, setData] = useState([
		{
			name: 'Series 1',
			data: [80, 50, 30, 40, 100, 20],
		},
		{
			name: 'Series 2',
			data: [20, 30, 40, 80, 20, 80],
		},
		{
			name: 'Series 3',
			data: [44, 76, 78, 13, 43, 10],
		},
	])

	function update() {
		function randomSeries() {
			const arr = []
			for (let i = 0; i < 6; i++) {
				arr.push(Math.floor(Math.random() * 100))
			}
			return arr
		}

		setData([
			{
				name: 'Series 1',
				data: randomSeries(),
			},
			{
				name: 'Series 2',
				data: randomSeries(),
			},
			{
				name: 'Series 3',
				data: randomSeries(),
			},
		])
	}

	return (
		<>
			<PageBreadcrumb title="Radar Charts" subName="Apex" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Basic Radar Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicRadarOpts} height={350} series={basicRadarOpts.series} type="radar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Radar with Polygon-fill</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={polygonFillOpts} height={350} series={polygonFillOpts.series} type="radar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Radar – Multiple Series</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={multipleSeriesOpts} height={350} series={data} type="radar" />
							<div className="text-center mt-2">
								<button className="btn btn-sm btn-primary" onClick={update}>
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default RadarApex
