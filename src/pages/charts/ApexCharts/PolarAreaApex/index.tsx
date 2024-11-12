import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { basicPolarAreaOpts, monochromePolarAreaOpts } from './data'

const PolarAreaApex = () => {
	return (
		<>
			<PageBreadcrumb title="Polar Area Charts" subName="Apex" />
			<div className="grid md:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Basic Polar Area Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicPolarAreaOpts} height={380} series={basicPolarAreaOpts.series} type="polarArea" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Monochrome Polar Area</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={monochromePolarAreaOpts} height={380} series={monochromePolarAreaOpts.series} type="polarArea" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PolarAreaApex
