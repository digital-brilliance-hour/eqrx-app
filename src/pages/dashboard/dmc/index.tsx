//import { useState } from 'react'
import Select from 'react-select'
//import { MaskedInput } from 'rsuite'
import ReactApexChart from 'react-apexcharts'

// components
import Statistics from './components/Statistics'
import RevenueChart from './components/RevenueChart'
import TotalSalesChart from './components/TotalSalesChart'
import TopSellingProducts from './components/TopSellingProducts'
import RevenueByLocation from './components/RevenueByLocation'
import OffenseTypesByAge from './components/OffenseTypesByAge'
import OffenseTypesByCulture from './components/OffenseTypesByCulture'
import OffenseTypesByGender from './components/OffenseTypesByGender'
import FirstChargeComparisonChart from './components/1stChargeComparisonChart'
import ContactOriginChart from './components/ContactOriginChart'
import SystemWideAnalysisChart from './components/SystemWideAnalysisChart'
import OutcomeofInteractions from './components/OutcomeofInteractions'
import RepeatOffender from './components/RepeatOffender'
import { PageBreadcrumb } from '../../../components'

// dummy data
import { products } from './data'
import { options } from './option-data'
import { repeatincidenttracking } from '../publicorder'
import RepeatOffenderTracking from './components/RepeatOffender'

const FormSelect = () => {
	return (
		<div className="card mb-6">

			<div className="p-6">
				<div className="section">
					<div className="mb-6">
						<h2 className="mb-4 text-base">Select inputs</h2>
						<div className="grid xl:grid-cols-2 md:grid-cols-2 gap-6">
							<div>
								<label className="mb-2" htmlFor="choices-text-remove-button">
									Starting Year
								</label>
								<Select className="select2 z-5" options={options} />
							</div>
							<div>
								<label className="mb-2" htmlFor="choices-text-remove-button">
									Ending Year
								</label>
								<Select className="select2 z-5" options={options} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

interface TableRecord {
	id: number
	name: string
	cell: string
}

interface HighlightTableRecord {
	id: number
	name: string
	type: string
	count: number
	cell: string
}

// basic tables
const records: TableRecord[] = [
	{
		id: 1,
		name: 'Burlary',
		cell: 'Cell',
	},
	{
		id: 2,
		name: 'Escape from Custody',
		cell: 'Cell',
	},
	{
		id: 3,
		name: 'Drug Violation',
		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Aggrevated Assault',
		cell: 'Cell',
	},
	{
		id: 5,
		name: 'Disorderly Conduct',
		cell: 'Cell',
	},
]

// referral tables
const referralrecords: HighlightTableRecord[] = [
	{
		id: 1,
		name: 'Officer 1',
		type: 'Patrol',
		count: 125,
		cell: 'Cell',
	},
	{
		id: 2,
		name: 'Officer 2',
		type: 'SRO',
		count: 80,
		cell: 'Cell',
	},
	{
		id: 3,
		name: 'Officer 3',
		type: 'Patrol',
		count: 55,
		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Officer 4',
		type: 'Patrol',
		count: 45,
		cell: 'Cell',
	},
	{
		id: 5,
		name: 'Officer 5',
		type: 'SRO',
		count: 25,
		cell: 'Cell',
	},
]
const RepeatIncidentTracking = () => {
	return (
		<div className="card col-lg-4 lg:col-span-2">
			<div className="p-6">
				<h4 className="card-title mb-4">Repeat incident tracking</h4>
				<div dir="ltr">
					<ReactApexChart className="apex-charts" options={repeatincidenttracking} height={400} series={repeatincidenttracking.series} type="pie" />
				</div>
			</div>
		</div>
			)
		}

const ResponsiveTable = () => {
	return (
		<div className="xl:col-span-2">
			<div className="card">
				<div className="p-6">
					<h3 className="card-title mb-4">Top 5 Charges</h3>

					<div className="overflow-x-auto">
						<div className="min-w-full inline-block align-middle">
							<div className="overflow-hidden">
								<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
									<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
										{(records || []).slice(0, 5).map((record, idx) => {
											return (
												<tr key={idx}>
													<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
														{record.id}
													</th>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const ResponsiveTable2 = () => {
	return (
		<div className="xl:col-span-3">
			<div className="card">
				<div className="flex card-header justify-between items-center">
					<h4 className="card-title hidden">Officer Type Highlights</h4>
					<h4 className="card-title">Top 5 Contact Rates</h4>
				</div>
				<div className="bg-light/40 border-b border-gray-100 dark:bg-light/5 dark:border-b-gray-700 hidden">
					<div className="flex flex-wrap justify-around items-center text-center">
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> Current Week
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>15</span>
							</h3>
						</div>
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> Previous Week
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>
									20 <i className="ri-corner-right-down-line text-success"></i>
								</span>
							</h3>
						</div>
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> Referral
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>
									16.20% <i className="ri-corner-right-up-line text-success"></i>
								</span>
							</h3>
						</div>
						<div className="w-1/2 lg:w-1/4">
							<p className="text-gray-400 mt-6 mb-4">
								<i className="ri-donut-chart-fill"></i> First Charge
							</p>
							<h3 className="text-2xl font-normal mb-6">
								<span>
									10 <i className="ri-corner-right-up-line text-danger"></i>
								</span>
							</h3>
						</div>
					</div>
				</div>
				<div className="p-6">
					<h3 className="card-title mb-4 hidden">Top 5 Contact Rates</h3>

					<div className="overflow-x-auto">
						<div className="min-w-full inline-block align-middle">
							<div className="overflow-hidden">
								<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
									<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
										{(referralrecords || []).slice(0, 5).map((record, idx) => {
											return (
												<tr key={idx}>
													<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
														{record.id}
													</th>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.type}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.count}</td>
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const TrackingNums = () => {
	return (
		<>

		<div className="card xl:col-span-3">
			<div className="p-6">
				<h4 className="card-title mb-4">Repeat Offender Tracking</h4>
				<div dir="ltr">
					<ReactApexChart className="apex-charts" options={repeatincidenttracking} height={400} series={repeatincidenttracking.series} type="pie" />
				</div>
			</div>
		</div>
		</>

		)
		}

const Checkboxes = () => {
	return (
		<div className="card mb-6">
			<div className="p-6">
				<h4 className="card-title">Charge Types</h4>

				<div>
					<div className="mt-5">
						<h6 className="text-sm mb-2">Inline</h6>
						<div className="flex gap-5 flex-wrap">
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox1" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineCheckbox1">
									Burlary
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox2" />
								<label className="ms-1.5" htmlFor="InlineCheckbox2">
									Escape from Custody
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox1" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineCheckbox1">
									Drug Violation
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox2" />
								<label className="ms-1.5" htmlFor="InlineCheckbox2">
									Aggrevated Assault
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox1" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineCheckbox1">
									Disorderly Conduct
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox2" />
								<label className="ms-1.5" htmlFor="InlineCheckbox2">
									City Ordinance
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox1" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineCheckbox1">
									Larceny
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox2" />
								<label className="ms-1.5" htmlFor="InlineCheckbox2">
									Motor Vehicle
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox1" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineCheckbox1">
									Non-Criminal
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox2" />
								<label className="ms-1.5" htmlFor="InlineCheckbox2">
									Possessing
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox1" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineCheckbox1">
									Resist/Obstruction
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox2" />
								<label className="ms-1.5" htmlFor="InlineCheckbox2">
									Shoplifting
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox1" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineCheckbox1">
									All Other Sex
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const dmc = () => {
	return (
		<>
			<PageBreadcrumb title="RED/DMC Dashboard" subName="Menu" />
			<div className="grid lg:grid-cols-5 gap-6 mb-6">
				<TotalSalesChart />
				<ResponsiveTable2 />
			</div>

			<div className="grid lg:grid-cols-4 gap-6 mb-6">
				<OffenseTypesByAge />
				<OffenseTypesByGender />
				<FirstChargeComparisonChart />
				<ContactOriginChart />
				<SystemWideAnalysisChart />
				<OffenseTypesByCulture />
				<RepeatIncidentTracking />


			</div>
		</>
	)
}

export default dmc
