import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'

// components
import { PopoverLayout } from '../../../components/HeadlessUI'

// style
import 'react-tooltip/dist/react-tooltip.css'

interface RecentFileTypes {
	recentFiles: {
		name: string
		modifiedDate: string
		modifiedBy: string
		size: string
		owner: string
		members: {
			image: string
			name: string
		}[]
	}[]
}

interface ActionMenuItem {
	icon: string
	option: string
}

const actionMenuItems: ActionMenuItem[] = [
	{
		icon: 'ri-share-line',
		option: 'Share',
	},
	{
		icon: 'ri-link',
		option: 'Get Sharable Link',
	},
	{
		icon: 'ri-pencil-line',
		option: 'Rename',
	},
	{
		icon: 'ri-download-line',
		option: 'Download',
	},
	{
		icon: 'ri-delete-bin-line',
		option: 'Remove',
	},
]

const Recent = ({ recentFiles }: RecentFileTypes) => {
	const PopoverToggle = () => <i className="ri-more-2-fill"></i>

	return (
		<>
			<div className="mt-6">
				<h5 className="text-base mb-4">Recent</h5>
				<div className="grid grid-cols-2">
					<div className="col-span-2 overflow-x-auto">
						<div className="inline-block min-w-full align-middle">
							<div className="overflow-hidden">
								<table className="min-w-full">
									<thead className="bg-light/40 border-t border-b dark:bg-slate-700/30 border-gray-200 dark:border-gray-700">
										<tr className="text-gray-800 dark:text-gray-300">
											<th scope="col" className="text-gray-500 dark:text-gray-400 p-3.5 text-sm text-start font-semibold min-w-40">
												File Name
											</th>
											<th scope="col" className="text-gray-500 dark:text-gray-400 p-3.5 text-sm text-start font-semibold min-w-40">
												Last Modified
											</th>
											<th scope="col" className="text-gray-500 dark:text-gray-400 p-3.5 text-sm text-start font-semibold min-w-24">
												File Size
											</th>
											<th scope="col" className="text-gray-500 dark:text-gray-400 p-3.5 text-sm text-start font-semibold min-w-32">
												Owner
											</th>
											<th scope="col" className="text-gray-500 dark:text-gray-400 p-3.5 text-sm text-start font-semibold min-w-24">
												Members
											</th>
											<th scope="col" className="text-gray-500 dark:text-gray-400 p-3.5 text-sm text-start font-semibold">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{(recentFiles || {}).map((file, idx) => {
											return (
												<tr key={idx}>
													<td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
														<Link to="" className="font-semibold">
															{file.name}
														</Link>
													</td>
													<td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
														<p>{file.modifiedDate}</p>
														<span className="text-xs">by {file.modifiedBy}</span>
													</td>
													<td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{file.size}</td>
													<td className="p-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{file.owner}</td>
													<td className="p-3.5 relative">
														<div className="flex -space-x-1.5">
															{(file.members || []).map((member, idx) => {
																return (
																	<div className="h-8 w-8 group" key={idx}>
																		<img className="inline-block h-full w-full rounded-full hover:-translate-y-0.5 transition-all duration-200" src={member.image} alt="Image Description" id={`tooltip1-${idx + 1 + file.name}`} />
																		<Tooltip place="top" content={member.name} anchorId={`tooltip1-${idx + 1 + file.name}`} />
																	</div>
																)
															})}
														</div>
													</td>
													<td className="p-3.5">
														<PopoverLayout placement="bottom-end" toggler={<PopoverToggle />} togglerClass="btn bg-light px-1.5 dark:bg-slate-700">
															<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 rounded-md py-1">
																{(actionMenuItems || []).map((item, idx) => {
																	return (
																		<Link key={idx} className="flex w-max items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
																			<i className={`${item.icon} me-3`}></i>
																			<span>{item.option}</span>
																		</Link>
																	)
																})}
															</div>
														</PopoverLayout>
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
		</>
	)
}

export default Recent
