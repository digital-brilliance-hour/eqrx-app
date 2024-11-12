import { Link } from 'react-router-dom'

interface QuickAccessFileTypes {
	quickAccessFiles: {
		icon: string
		name: string
		size: string
		variant?: string
	}[]
}

const QuickAccess = ({ quickAccessFiles }: QuickAccessFileTypes) => {
	return (
		<>
			<div className="mt-6">
				<h5 className="text-base mb-4">Quick Access</h5>
				<div className="grid xl:grid-cols-4 md:grid-cols-2 -mx-1.5 g-0">
					{(quickAccessFiles || []).map((file, idx) => {
						return (
							<div key={idx} className="border rounded m-1.5 border-gray-200 dark:border-gray-700">
								<div className="p-3">
									<div className="flex items-center gap-3">
										<div className="">
											<div className="w-12 h-12">
												<span className={`${file.variant ? `text-${file.variant}` : 'text-secondary'} inline-flex items-center justify-center h-full w-full bg-light rounded dark:bg-slate-700 dark:text-slate-400`}>
													<i className={`${file.icon} text-xl font-normal`}></i>
												</span>
											</div>
										</div>
										<div className="">
											<Link to="" className="text-gray-500 text-sm font-bold dark:text-gray-400">
												{file.name}
											</Link>
											<p className="text-sm">{file.size}</p>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default QuickAccess
