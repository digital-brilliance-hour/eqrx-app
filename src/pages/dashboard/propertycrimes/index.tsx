//import { useState } from 'react'
import Select from 'react-select'
//import { MaskedInput } from 'rsuite'

// components
import Statistics from './components/Statistics'
import RevenueChart from './components/RevenueChart'
import TotalSalesChart from './components/TotalSalesChart'
import TopSellingProducts from './components/TopSellingProducts'
import RevenueByLocation from './components/RevenueByLocation'
import OffenseTypesByAge from './components/OffenseTypesByAge'
import OffenseTypesByCulture from './components/OffenseTypesByCulture'
import OffenseTypesByGender from './components/SuccessRateCategory'
import { PageBreadcrumb } from '../../../components'

// dummy data
import { products } from './data'
import { options } from './option-data'
import ShopliftingTrends from './components/ShopliftingTrends'
//import ItemsRecovered from './components/ItemsRecovered'
import RecoveryTime from './components/RecoveryTime'
import ReactApexChart from 'react-apexcharts'
import dashedLineChartOpts4 from './components/RecoveryTime'
import dashedLineChartOpts5 from './components/RecoveryTime'
import  ItemsRecovered1  from './components/TestItemsRecovered'
import ValueRecovered from './components/ValueRecovered'


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

const AverageResponse  = () => {
	return(
		<>
		
		<div className="xl:col-span-6">
		<div className="xl:col-span-3">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title">Most Frequent Property Crimes:
						</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={dashedLineChartOpts4} height={380} series={dashedLineChartOpts5.series} type="line" />
						</div>
						<div className='mt-6'>
							<h2>Crime Trends Analysis (2019-2023)</h2>
							<h3>Key Takeaways:</h3>
							<ul>
								<li><strong>Larceny spiked in 2022</strong> before declining, suggesting either enforcement gaps or increased theft opportunities.</li>
								<li><strong>Vandalism steadily declined,</strong> possibly due to deterrents or community initiatives.</li>
								<li><strong>Breaking and Entering is rising,</strong> requiring stronger interventions.</li>
								<li><strong>Shoplifting dropped after 2021</strong> but saw a slight rebound in 2023, likely influenced by retail security measures.</li>
							</ul>
							<h3>Implications for Law Enforcement:</h3>
							<ul>
								<li>Increased focus on <strong>Larceny and Breaking & Entering</strong> is needed.</li>
								<li>Declining <strong>Vandalism and Shoplifting</strong> may reflect effective policing strategies.</li>
								<li>Resource allocation should adapt to emerging trends.</li>
							</ul>
							<p>This data highlights areas for strategic policing efforts to curb crime effectively.</p>
						</div>
					</div>
				</div>
			</div>
			</div>
			</>
		)
}

interface TableRecord {
	id: number
	name: string
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
const referralrecords: TableRecord[] = [
	{
		id: 1,
		name: 'Handled Within The Department',
		cell: 'Cell',
	},
	{
		id: 2,
		name: 'Referred to Juvenile Authorities',
		cell: 'Cell',
	},
	{
		id: 3,
		name: 'None',
		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Referred to Another Police/Jurisdiction',
		cell: 'Cell',
	},
	{
		id: 5,
		name: 'Social Services',
		cell: 'Cell',
	},
]



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
		<div className="xl:col-span-2">
			<div className="card">
				<div className="p-6">
					<h3 className="card-title mb-4">Top 5 Referrals</h3>

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
const ItemsRecovered = () => {
return(
	<>
	<div className="lg:col-span-2">
    <div className="card">
					<div className="p-6">
						<h4 className="card-title">Items Recovered By Type</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={ItemsRecovered1} height={380} series={ItemsRecovered1.series} type="bar" />
						</div>
						<div>
							<h2>Analysis of Items Recovered By Type</h2>
							<p>The data indicates a diverse range of recovered items, with <strong>Office Equipment (67 items)</strong> being the most frequently recovered, followed by <strong>Precious Metals (55 items)</strong> and <strong>Currency (44 items)</strong>. <strong>Stolen Vehicles (41 items)</strong> and <strong>Clothing & Furs (45 items)</strong> also show notable recovery rates.</p>
							<p>On the lower end, <strong>Electronics (22 items)</strong> and <strong>Cosmetics (21 items)</strong> had the least recoveries, suggesting either lower theft rates or less successful recovery efforts. <strong>Household Goods (43 items)</strong> and <strong>Miscellaneous Items (31 items)</strong> fall within a mid-range recovery level.</p>
							<p>This distribution suggests a focus on high-value assets in police operations, with financial assets and office-related items being prioritized. The lower recovery of consumer goods may indicate either different theft patterns or challenges in tracing such items.</p>
						</div>
					</div>
				</div>
				</div>
		</>
	)
}


const Report = () => {
	return (
		<>
			{/* <PageBreadcrumb title="Property Crimes Dashboard" subName="Menu" /> */}
			<header className="text-slate-900 dark:text-slate-200 text-lg font-medium mb-6">Property Crimes Dashboard</header>
			<div className="grid lg:grid-cols-4 gap-6 mb-6">
				<AverageResponse />
				<ShopliftingTrends />
			</div>
			<div className="grid lg:grid-cols-4 gap-6 mb-6">
				<ItemsRecovered />
				<ValueRecovered/>
			</div>
			<div className="grid lg:grid-cols-4 gap-6 mb-6">
				
			</div>

		</>
	)
}

export default Report
