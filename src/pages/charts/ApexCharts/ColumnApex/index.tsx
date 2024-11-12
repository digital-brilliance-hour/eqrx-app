import ReactApexChart from 'react-apexcharts'
import DynamicLoaded from './DynamicLoaded'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { basicColumnOpts, columnGroupLabelOpts, columnWithDataTableOpts, columnWithRotatedlabelsOpts, columnwithMarkersOpts, columnwithnegativevalueOpts, distributedColumnOpts, fullStackedColumnOpts, rangeColumnOpts, stackedColumnOpts } from './data'

const ColumnApex = () => {
	return (
		<>
			<PageBreadcrumb title="Column Charts" subName="Apex" />
			<div className="grid xl:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Basic Column Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicColumnOpts} height={396} series={basicColumnOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-3">Column Chart with Datalabels</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={columnWithDataTableOpts} height={380} series={columnWithDataTableOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Stacked Column Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={stackedColumnOpts} height={380} series={stackedColumnOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">100% Stacked Column Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={fullStackedColumnOpts} height={380} series={fullStackedColumnOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Column with Markers</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={columnwithMarkersOpts} height={380} series={columnwithMarkersOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Column with Group Label</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={columnGroupLabelOpts} height={380} series={columnGroupLabelOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Column Chart with rotated labels & Annotations</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={columnWithRotatedlabelsOpts} height={380} series={columnWithRotatedlabelsOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Column Chart with negative values</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={columnwithnegativevalueOpts} height={380} series={columnwithnegativevalueOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Distributed Column Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={distributedColumnOpts} height={380} series={distributedColumnOpts.series} type="bar" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Range Column Chart</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={rangeColumnOpts} height={380} series={rangeColumnOpts.series} type="rangeBar" />
						</div>
					</div>
				</div>

				<div className="xl:col-span-2">
					<div className="card">
						<div className="p-6">
							<div className="flex items-center justify-between">
								<h4 className="card-title mb-4">Dynamic Loaded Chart</h4>
								<div className="flex-shrink-0">
									<select id="model" className="form-select form-select-sm">
										<option value="iphone5">iPhone 5</option>
										<option value="iphone6">iPhone 6</option>
										<option value="iphone7">iPhone 7</option>
									</select>
								</div>
							</div>
						</div>
						<div className="p-6 pt-0">
							<h4 className="card-title"></h4>
							<div dir="ltr">
								<DynamicLoaded />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ColumnApex
