import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { basicRadialBarOpts, circleWithImageOpts, customAngleOpts, gradientCircularOpts, multipleRadialBarsOpts, semiCircleGaugeOpts, strokedCircularGuageOpts } from './data'

const RadialbarApex = () => {
	return (
		<>
			<PageBreadcrumb title="RadialBar Charts" subName="Apex" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Basic RadialBar Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicRadialBarOpts} height={320} series={basicRadialBarOpts.series} type="radialBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Multiple RadialBars</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={multipleRadialBarsOpts} height={320} series={multipleRadialBarsOpts.series} type="radialBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Circle Chart - Custom Angle</h4>
						<div className="text-center" dir="ltr">
							<ReactApexChart className="apex-charts" options={customAngleOpts} height={380} series={customAngleOpts.series} type="radialBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Circle Chart with Image</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={circleWithImageOpts} height={360} series={circleWithImageOpts.series} type="radialBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Stroked Circular Guage</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={strokedCircularGuageOpts} height={380} series={strokedCircularGuageOpts.series} type="radialBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Gradient Circular Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={gradientCircularOpts} height={330} series={gradientCircularOpts.series} type="radialBar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Semi Circle Gauge</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={semiCircleGaugeOpts} height={625} series={semiCircleGaugeOpts.series} type="radialBar" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default RadialbarApex
