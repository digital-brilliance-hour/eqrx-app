//import { useState } from 'react'
import Select from 'react-select'
//import { MaskedInput } from 'rsuite'

// components
import Statistics from './components/Statistics'
import RevenueChart from './components/SchoolScheduleCorrelation'
import TotalSalesChart from './components/TotalSalesChart'
import TopSellingProducts from './components/TopSellingProducts'
import RevenueByLocation from './components/RevenueByLocation'
import OffenseTypesByAge from './components/OffenseTypesByAge'
import OffenseTypesByCulture from './components/OffenseTypesByCulture'
import OffenseTypesByGender from './components/OffenseTypesByGender'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import StatisticsWidget from '../../dashboard/report/components/StatisticsWidget'

// dummy data
import { products } from './data'
import { options } from './option-data'
import ViolentIncidents from './components/ViolentIncidents'
import ReactApexChart from 'react-apexcharts'
import { Part1Types } from './components/BreakdownByType'
import { simplePieOpts } from '@/pages/charts/ApexCharts/PieApex/data'
import FirstVsRepeat from './components/FirstVsRepeat'
import ItemsRecovered3 from './components/MonthlyComparisons'
//import Parts from './components/parts'
import TotalCrimes from './components/TotalCrime1'
import Parts from './components/Parts'

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

const Checkboxes23 = () => {
	return (
		<div className="xl:col-span-2">
			<div className="p-6">
		<div className="card">
	
				<h4 className="card-title mb-4">Simple Pie Chart</h4>
				<div dir="ltr">
					<ReactApexChart className="apex-charts" options={simplePieOpts} height={320} series={simplePieOpts.series} type="pie" />
				</div>
			</div>
		</div>
		</div>

	)
}
const Monthly = () => {
	return(
		<>
		<div className="lg:col-span-2">
		<div className="card">
						<div className="p-6">
							<h4 className="card-title"> Contact by Months
							</h4>
							<div dir="ltr">
								<ReactApexChart className="apex-charts" options={ItemsRecovered3} height={540} series={ItemsRecovered3.series} type="bar" />
							</div>
							<br/> Shows the total interactions or incidents recorded each month. The highest number of contacts occurs in April, November, and December, while a noticeable drop is seen in May, June, and July. This could suggest fewer incidents or interventions during the summer months, with a sharp increase towards the end of the year.
							This may also show that the holiday season may have a impact on the number of incidents and this county or mamisable might want to increase patrols or have more officers on duty during these months.
						</div>
					</div>
					</div>
			</>
		)
	}

	const TotalContactsDisplay = () => {
		return (
			<>
				<div className="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
					<div className="2xl:col-span-1 lg:col-span-2">
						<StatisticsWidget variant={'bg-success'} cardTitle={"Total Juvenile Contacts"} title={'Number of customers'} change={'216'} stats={'486'} dataSince={'Since last yesterday'} classname={'apex-charts'} chartSeries={[58, 42]} colors={['#47ad77', '#e3e9ee']} />
					</div>
	
					<div className="2xl:col-span-1 lg:col-span-2">
						<StatisticsWidget variant={'bg-danger'} cardTitle={"Total Black Contacts"} title={'Number of Orders'} change={'1.08%'} stats={'297'} dataSince={'Since last month'} classname={'apex-charts'} chartSeries={[34, 66]} colors={['#3e60d5', '#e3e9ee']} />
					</div>  
					<div className="2xl:col-span-1 lg:col-span-2">
						<StatisticsWidget variant={'bg-success'} cardTitle={"Total White Contacts"} title={'Number of customers'} change={'96'} stats={'886'} dataSince={'Since last month'} classname={'apex-charts'} chartSeries={[58, 42]} colors={['#47ad77', '#e3e9ee']} />
					</div>
	
					<div className="2xl:col-span-1 lg:col-span-2">
						<StatisticsWidget variant={'bg-danger'} cardTitle={"Total Hispanic Contacts"} title={'Number of Orders'} change={'2.54%'} stats={'617'} dataSince={'Since last month'} classname={'apex-charts'} chartSeries={[34, 66]} colors={['#3e60d5', '#e3e9ee']} />
					</div> 
				</div>
			</>
		)
	}

const Report = () => {
	return (
		<>
			{/* <PageBreadcrumb title="Violent Crimes Dashboard" subName="Menu" /> */}
			<header className="text-slate-900 dark:text-slate-200 text-lg font-medium mb-6">Violent Crimes Dashboard</header>

			<div className="grid lg:grid-cols-5 gap-6 mb-6">
				<ViolentIncidents />
			</div>
			<div className="grid lg:grid-cols-5 gap-6 mb-6">
				<Parts/>
			</div>
			<div className="grid lg:grid-cols-4 gap-6 mb-6">
				<Monthly />
				<FirstVsRepeat />
			</div>

		</>
	)
}

export default Report
