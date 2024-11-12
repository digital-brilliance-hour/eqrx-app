import ReactApexChart from 'react-apexcharts'
import { useState } from 'react'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { donutUpdateOpts, gradientDonutOpts, imagefillOpts, monochromePieOpts, patternedDonutOpts, simpleDonutOpts, simplePieOpts } from './data'

// components

const PieApex = () => {
	const [data, setData] = useState([44, 55, 13, 33])

	function appendData() {
		const arr = data.map(function () {
			return Math.floor(Math.random() * (100 - 1 + 1)) + 1
		})
		arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
		return setData(arr)
	}

	function removeData() {
		const arr = data.map(function () {
			return Math.floor(Math.random() * (100 - 1 + 1)) + 1
		})
		arr.pop()
		return setData(arr)
	}

	function randomize() {
		return setData(
			data.map(function () {
				return Math.floor(Math.random() * (100 - 1 + 1)) + 1
			})
		)
	}

	function reset() {
		return setData([44, 55, 13, 33])
	}

	return (
		<>
			<PageBreadcrumb title="Pie Charts" subName="Apex" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Simple Pie Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={simplePieOpts} height={320} series={simplePieOpts.series} type="pie" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Simple Donut Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={simpleDonutOpts} height={320} series={simpleDonutOpts.series} type="donut" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Monochrome Pie Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={monochromePieOpts} height={320} series={monochromePieOpts.series} type="pie" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Gradient Donut Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={gradientDonutOpts} height={320} series={gradientDonutOpts.series} type="donut" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Patterned Donut Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={patternedDonutOpts} height={320} series={patternedDonutOpts.series} type="donut" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Pie Chart with Image fill</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={imagefillOpts} height={320} series={imagefillOpts.series} type="pie" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Donut Update</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={donutUpdateOpts} height={320} series={data} type="donut" />
						</div>

						<div className="text-center mt-2">
							<button className="btn btn-sm btn-primary" onClick={randomize}>
								RANDOMIZE
							</button>
							<button className="btn btn-sm btn-primary" onClick={appendData}>
								ADD
							</button>
							<button className="btn btn-sm btn-primary" onClick={removeData}>
								REMOVE
							</button>
							<button className="btn btn-sm btn-primary" onClick={reset}>
								RESET
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PieApex
