import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { candlestickwithLineOpts, categoryXAxisOpts, simpleCandlestickOpts } from './data'

const CandleStickApex = () => {
	return (
		<>
			<PageBreadcrumb title="Candlestick Charts" subName="Apex" />
			<div className="grid xl:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Simple Candlestick Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={simpleCandlestickOpts} height={400} series={simpleCandlestickOpts.series} type="candlestick" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Category X-Axis</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={categoryXAxisOpts} height={380} series={categoryXAxisOpts.series} type="candlestick" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Candlestick with Line</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={candlestickwithLineOpts} height={380} series={candlestickwithLineOpts.series} type="candlestick" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CandleStickApex
