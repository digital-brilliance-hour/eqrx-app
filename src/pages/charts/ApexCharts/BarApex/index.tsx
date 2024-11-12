import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { basicBarOpts, customDataLabelBarOpts, fullStackedBarOpts, groupBarOpts, imageFillBarOpts, markersBarOpts, navigateBarOpts, patternedBarOpts, reversedBarOpts, stackedBarOpts } from './data'

const BarApex = () => {
	return (
		<>
			<PageBreadcrumb title="Bar Charts" subName="Apex" />
			<div className="grid xl:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Basic Bar Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicBarOpts} height={380} series={basicBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Grouped Bar Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={groupBarOpts} height={380} series={groupBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Stacked Bar Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={stackedBarOpts} height={380} series={stackedBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">100% Stacked Bar Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={fullStackedBarOpts} height={380} series={fullStackedBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Bar with Negative Values</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={navigateBarOpts} height={380} series={navigateBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Reversed Bar Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={reversedBarOpts} height={380} series={reversedBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Bar with Image Fill</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={imageFillBarOpts} height={450} series={imageFillBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Custom DataLabels Bar</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={customDataLabelBarOpts} height={450} series={customDataLabelBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Patterned Bar Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={patternedBarOpts} height={380} series={patternedBarOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Bar with Markers</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={markersBarOpts} height={380} series={markersBarOpts.series} type="bar" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BarApex
