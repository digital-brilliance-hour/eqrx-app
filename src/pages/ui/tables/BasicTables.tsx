import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// Components
import { PageBreadcrumb } from '../../../components'

// dummy data
import { records, expandablerecords, nestedrecords } from './data'

const BasicTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Basic example</h3>

				<div className="overflow-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead>
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Name
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Phone Number
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Date of Birth
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Country
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
									{(records || []).map((record, idx) => {
										return (
											<tr key={idx}>
												<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.phoneNo}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
												<td className="px-4 py-4 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">{record.country}</td>
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
	)
}

const InverseTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Inverse example</h3>

				<div className="overflow-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="border overflow-hidden bg-dark border-gray-500">
							<table className="min-w-full divide-y divide-gray-500">
								<thead>
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Name
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Phone Number
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Date of Birth
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Country
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-500">
									{(records || []).map((record, idx) => {
										return (
											<tr key={idx}>
												<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">{record.name}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-white">{record.phoneNo}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-white">{record.dob}</td>
												<td className="px-4 py-4 whitespace-nowrap text-white">{record.country}</td>
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
	)
}

const StripedRows = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Striped rows</h3>

				<div className="overflow-x-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead>
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											User
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Account No.
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Balance
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Action
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
									{(records || []).map((record, idx) => {
										return (
											<tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}>
												<th scope="row" className="flex items-center gap-2 px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
													<img className="w-8 h-8 rounded-full" src={record.image} alt="Jese image" />
													<div className="whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</div>
												</th>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.accountNo}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
												<td className="px-4 py-4">
													<div className="flex items-center justify-start space-x-3">
														<Link to="">
															<i className="ri-settings-3-line text-base"></i>
														</Link>
														<Link to="">
															<i className="ri-delete-bin-2-line text-base"></i>
														</Link>
													</div>
												</td>
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
	)
}

const TableHeadOptions = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Table head options</h3>

				<div className="overflow-x-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead className="bg-dark">
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Product
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Courier
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Process
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Status
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
									{(expandablerecords || []).slice(0, 5).map((record, idx) => {
										return (
											<tr key={idx}>
												<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.product}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.courier}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
													<div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
														<div className={`flex flex-col justify-center overflow-hidden bg-${record.variant}`} role="progressbar" style={{ width: `${record.now}%` }} aria-valuenow={record.now} aria-valuemin={0} aria-valuemax={100}></div>
													</div>
												</td>
												<td className="px-4 py-4 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">{record.status}</td>
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
	)
}

const HoverableRows = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Hoverable rows</h3>

				<div className="overflow-x-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead>
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Product
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Price
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Quantity
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Amount
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
									{(expandablerecords || []).slice(0, 4).map((record, idx) => {
										return (
											<tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-900">
												<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.product}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.price}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
													<span className="text-xs text-white bg-primary rounded-md px-1 py-0.5">{record.Quantity} Pcs</span>
												</td>
												<td className="px-4 py-4 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">${record.Amount}</td>
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
	)
}

const SmallTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Small table</h3>

				<div className="overflow-x-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead>
									<tr>
										<th scope="col" className="px-2 py-2 text-start text-sm font-medium text-gray-500">
											Product
										</th>
										<th scope="col" className="px-2 py-2 text-start text-sm font-medium text-gray-500">
											Price
										</th>
										<th scope="col" className="px-2 py-2 text-start text-sm font-medium text-gray-500">
											Quantity
										</th>
										<th scope="col" className="px-2 py-2 text-start text-sm font-medium text-gray-500">
											Amount
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
									{(expandablerecords || []).map((record, idx) => {
										return (
											<tr key={idx}>
												<td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.product}</td>
												<td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.price}</td>
												<td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">
													<span className="text-xs text-white bg-primary rounded-md px-1 py-0.5">{record.Quantity} Pcs</span>
												</td>
												<td className="px-2 py-2 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">${record.Amount}</td>
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
	)
}

const BorderedTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Bordered table</h3>

				<div className="relative overflow-auto">
					<table className="border-collapse min-w-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm shadow-sm">
						<thead className="bg-slate-50 dark:bg-slate-700">
							<tr>
								<th className="border border-slate-300 dark:border-slate-600 font-semibold px-4 py-4 text-slate-900 dark:text-slate-200 text-start">User</th>
								<th className="border border-slate-300 dark:border-slate-600 font-semibold px-4 py-4 text-slate-900 dark:text-slate-200 text-start">Account No.</th>
								<th className="border border-slate-300 dark:border-slate-600 font-semibold px-4 py-4 text-slate-900 dark:text-slate-200 text-start">Balance</th>
								<th className="border border-slate-300 dark:border-slate-600 font-semibold px-4 py-4 text-slate-900 dark:text-slate-200 text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							{(records || []).map((record, idx) => {
								return (
									<tr key={idx}>
										<th scope="row" className="flex items-center gap-2 px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
											<img className="w-8 h-8 rounded-full" src={record.image} alt="Jese image" />
											<div className="whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</div>
										</th>
										<td className="border border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">{record.accountNo}</td>
										<td className="border border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">{record.dob}</td>
										<td className="border border-slate-300 dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400 text-center">
											<Link to="">
												<i className="ri-delete-bin-2-line text-base"></i>
											</Link>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

const BorderedColorTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Bordered color table</h3>

				<div className="relative overflow-auto">
					<table className="border-collapse min-w-full border border-primary dark:border-slate-600 bg-white dark:bg-slate-800 text-sm shadow-sm">
						<thead className="bg-slate-50 dark:bg-slate-700">
							<tr>
								<th className="border border-primary dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-start">User</th>
								<th className="border border-primary dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-start">Account No.</th>
								<th className="border border-primary dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-start">Balance</th>
								<th className="border border-primary dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							{(records || []).map((record, idx) => {
								return (
									<tr key={idx}>
										<th scope="row" className="flex items-center gap-2 px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
											<img className="w-8 h-8 rounded-full" src={record.image} alt="Jese image" />
											<div className="whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</div>
										</th>
										<td className="border border-primary dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">{record.accountNo}</td>
										<td className="border border-primary dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400">{record.dob}</td>
										<td className="border border-primary dark:border-slate-700 px-4 py-4 text-slate-500 dark:text-slate-400 text-center">
											<Link to="">
												<i className="ri-delete-bin-2-line text-base"></i>
											</Link>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
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
					<h3 className="card-title mb-4">Always responsive</h3>

					<div className="overflow-x-auto">
						<div className="min-w-full inline-block align-middle">
							<div className="overflow-hidden">
								<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
									<thead>
										<tr>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												#
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
											<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
												Heading
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
										{(records || []).slice(0, 3).map((record, idx) => {
											return (
												<tr key={idx}>
													<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
														{record.id}
													</th>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.cell}</td>
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

const BorderlessTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Basic Borderless Example</h3>

				<div className="overflow-x-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full">
								<thead>
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Name
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Phone Number
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Date of Birth
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Country
										</th>
									</tr>
								</thead>
								<tbody>
									{(records || []).map((record, idx) => {
										return (
											<tr key={idx}>
												<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.phoneNo}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
												<td className="px-4 py-4 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">{record.country}</td>
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
	)
}

const BorderlessInverseTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Inverse Borderless table</h3>

				<div className="overflow-x-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full">
								<thead className="bg-black">
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Name
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Phone Number
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Date of Birth
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-white">
											Country
										</th>
									</tr>
								</thead>
								<tbody className="bg-black">
									{(records || []).map((record, idx) => {
										return (
											<tr key={idx}>
												<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">{record.name}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-white">{record.phoneNo}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-white">{record.dob}</td>
												<td className="px-4 py-4 whitespace-nowrap text-start text-white">{record.country}</td>
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
	)
}

const ActiveTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Active tables</h3>

				<div className="overflow-x-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead>
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Name
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Phone Number
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Date of Birth
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Country
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
									{(records || []).map((record, idx) => {
										return (
											<tr key={idx} className={record.activeClass ? record.activeClass : ''}>
												<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.phoneNo}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
												<td className="px-4 py-4 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">{record.country}</td>
											</tr>
										)
									})}

									<tr>
										<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">Paul J. Friend</td>
										<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">281-308-0793</td>
										<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">September 1, 1939</td>
										<td className="px-4 py-4 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">India</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const NestedTable = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title mb-4">Nesting</h3>

				<div className="overflow-x-auto">
					<div className="min-w-full inline-block align-middle">
						<div className="overflow-hidden">
							<table className="min-w-full">
								<thead>
									<tr>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Name
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Phone Number
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Date of Birth
										</th>
										<th scope="col" className="px-4 py-4 text-start text-sm font-medium text-gray-500">
											Country
										</th>
									</tr>
								</thead>
								<tbody>
									{(nestedrecords || []).map((record, idx) => {
										return record.children ? (
											<Fragment key={idx}>
												<tr className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-700">
													<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.phoneNo}</td>
													<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
													<td className="px-4 py-4 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">{record.country}</td>
												</tr>

												<tr className="" key={idx}>
													<td colSpan={4} className="p-4">
														<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
															<thead>
																<tr>
																	<th scope="col" className="px-2 py-2 text-start text-sm font-medium text-gray-500">
																		Name
																	</th>
																	<th scope="col" className="px-2 py-2 text-start text-sm font-medium text-gray-500">
																		Phone Number
																	</th>
																	<th scope="col" className="px-2 py-2 text-start text-sm font-medium text-gray-500">
																		Date of Birth
																	</th>
																	<th scope="col" className="px-2 py-2 text-start text-sm font-medium text-gray-500">
																		Country
																	</th>
																</tr>
															</thead>
															<tbody>
																{(record.children || []).map((record, idx) => {
																	return (
																		<tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
																			<td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
																			<td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.phoneNo}</td>
																			<td className="px-2 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
																			<td className="px-2 py-2 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">{record.country}</td>
																		</tr>
																	)
																})}
															</tbody>
														</table>
													</td>
												</tr>
											</Fragment>
										) : (
											<tr key={idx} className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-700">
												<td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-200">{record.name}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.phoneNo}</td>
												<td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-200">{record.dob}</td>
												<td className="px-4 py-4 whitespace-nowrap text-start text-gray-500 dark:text-gray-200">{record.country}</td>
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
	)
}
const BasicTables = () => {
	return (
		<>
			<PageBreadcrumb title="Basic" subName="Table" />
			<div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
				<BasicTable />
				<InverseTable />
				<StripedRows />
				<TableHeadOptions />
				<HoverableRows />
				<SmallTable />
				<BorderedTable />
				<BorderedColorTable />
				<ResponsiveTable />
				<BorderlessTable />
				<BorderlessInverseTable />
				<ActiveTable />
				<NestedTable />
			</div>
		</>
	)
}

export default BasicTables
