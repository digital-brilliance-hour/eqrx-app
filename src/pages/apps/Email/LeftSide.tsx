import { Link } from 'react-router-dom'

interface LeftSideProps {
	totalUnreadEmails: number
	showAllEmails?: () => void
	showStarredEmails?: () => void
	toggleComposeModal: () => void
}

const LeftSide = ({ totalUnreadEmails, showAllEmails, showStarredEmails, toggleComposeModal }: LeftSideProps) => {
	return (
		<div className="card min-w-80 h-full min-h-full rounded-none lg:rounded-md">
			<div data-simplebar className="h-full p-6">
				<Link to="" onClick={toggleComposeModal} type="button" className="btn bg-danger inline-flex justify-center text-white w-full">
					Compose
				</Link>

				<div className="mt-6">
					<Link to="" onClick={showAllEmails} className="py-2 px-1.5 text-sm flex items-center font-bold text-danger">
						<i className="ri-inbox-line me-2"></i>Inbox<span className="py-0.5 px-1.5 text-xs rounded bg-danger/10 text-danger ms-auto">{totalUnreadEmails}</span>
					</Link>
					<Link to="" onClick={showStarredEmails} className="py-2 px-1.5 text-sm flex items-center font-medium text-gray-400 hover:text-gray-800 dark:hover:text-white">
						<i className="ri-star-line me-2"></i>Starred
					</Link>
					<Link to="" className="py-2 px-1.5 text-sm flex items-center font-medium text-gray-400 hover:text-gray-800 dark:hover:text-white">
						<i className="ri-time-line me-2"></i>Snoozed
					</Link>
					<Link to="" className="py-2 px-1.5 text-sm flex items-center font-medium text-gray-400 hover:text-gray-800 dark:hover:text-white">
						<i className="ri-article-line me-2"></i>Draft<span className="py-0.5 px-1.5 text-xs rounded bg-info/10 text-info ms-auto">32</span>
					</Link>
					<Link to="" className="py-2 px-1.5 text-sm flex items-center font-medium text-gray-400 hover:text-gray-800 dark:hover:text-white">
						<i className="ri-mail-send-line me-2"></i>Sent Mail
					</Link>
					<Link to="" className="py-2 px-1.5 text-sm flex items-center font-medium text-gray-400 hover:text-gray-800 dark:hover:text-white">
						<i className="ri-delete-bin-line me-2"></i>Trash
					</Link>
					<Link to="" className="py-2 px-1.5 text-sm flex items-center font-medium text-gray-400 hover:text-gray-800 dark:hover:text-white">
						<i className="ri-price-tag-3-line me-2"></i>Important
					</Link>
					<Link to="" className="py-2 px-1.5 text-sm flex items-center font-medium text-gray-400 hover:text-gray-800 dark:hover:text-white">
						<i className="ri-alert-line me-2"></i>Spam
					</Link>
				</div>

				<div className="mt-9">
					<h6 className="uppercase">Labels</h6>
					<div className="mt-4">
						<Link to="" className="py-2 px-1.5 text-sm font-medium flex items-center text-gray-400 hover:text-gray-800 dark:hover:text-white">
							<i className="ri-checkbox-blank-circle-fill text-sm text-info me-2"></i>
							<span>Updates</span>
						</Link>
						<Link to="" className="py-2 px-1.5 text-sm font-medium flex items-center text-gray-400 hover:text-gray-800 dark:hover:text-white">
							<i className="ri-checkbox-blank-circle-fill text-sm text-warning me-2"></i>
							<span>Friends</span>
						</Link>
						<Link to="" className="py-2 px-1.5 text-sm font-medium flex items-center text-gray-400 hover:text-gray-800 dark:hover:text-white">
							<i className="ri-checkbox-blank-circle-fill text-sm text-success me-2"></i>
							<span>Family</span>
						</Link>
						<Link to="" className="py-2 px-1.5 text-sm font-medium flex items-center text-gray-400 hover:text-gray-800 dark:hover:text-white">
							<i className="ri-checkbox-blank-circle-fill text-sm text-primary me-2"></i>
							<span>Social</span>
						</Link>
						<Link to="" className="py-2 px-1.5 text-sm font-medium flex items-center text-gray-400 hover:text-gray-800 dark:hover:text-white">
							<i className="ri-checkbox-blank-circle-fill text-sm text-danger me-2"></i>
							<span>Important</span>
						</Link>
						<Link to="" className="py-2 px-1.5 text-sm font-medium flex items-center text-gray-400 hover:text-gray-800 dark:hover:text-white">
							<i className="ri-checkbox-blank-circle-fill text-sm text-secondary me-2"></i>
							<span>Promotions</span>
						</Link>
					</div>
				</div>

				<div className="mt-16">
					<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm/none font-semibold uppercase bg-gray-900/20 text-gray-900 dark:bg-gray-700 dark:text-gray-400 open:opacity-0">Free</span>
					<h6 className="text-uppercase mt-3">Storage</h6>
					<div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 mt-4">
						<div className="flex flex-col justify-center overflow-hidden bg-success" role="progress" style={{ width: '46%' }} aria-valuenow={46} aria-valuemin={0} aria-valuemax={100}></div>
					</div>
					<p className="text-gray-500 mt-4 text-xs">7.02 GB (46%) of 15 GB used</p>
				</div>
			</div>
		</div>
	)
}

export default LeftSide
