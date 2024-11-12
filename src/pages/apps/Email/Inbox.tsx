import { Link } from 'react-router-dom'
import { useState } from 'react'
import LeftSide from './LeftSide'
import { useToggle, useViewPort } from '../../../hooks'
import { useInbox } from './hooks/useInbox'
import { Email } from './types'
import ComposeEmail from './ComposeEmail'

// components
import { PageBreadcrumb } from '../../../components'
import { OffcanvasLayout, PopoverLayout } from '../../../components/HeadlessUI'

const EmailsList = ({ emails }: { emails: Email[] }) => {
	return (
		<>
			{(emails || []).map((email, idx) => {
				return (
					<div key={idx} className={`${!email.is_read ? 'unread' : ''} group relative px-4 py-3 transition-all duration-500 hover:bg-light/50 overflow-hidden dark:hover:bg-light/5`}>
						<div className="flex items-center h-full">
							<input type="checkbox" className="form-checkbox rounded" id={'mail1' + email.id} />
							<label className="form-check-label" htmlFor={'mail1' + email.id}></label>
							<i className={`ri-star-line mx-5 text-lg ${email.is_important ? 'text-warning' : ''}`}></i>

							<div className="grid grid-cols-10 font-medium whitespace-nowrap flex-grow">
								<div className="2xl:col-span-2 xl:col-span-4 sm:col-span-5 col-span-10">
									<Link to="#" className="text-gray-500">
										{email.from_name}
									</Link>
								</div>

								<div className="2xl:col-span-8 xl:col-span-6 sm:col-span-5 hidden sm:block">
									<div className="truncate overflow-hidden">
										<Link to="#" className="text-gray-500">
											{email.subject}
										</Link>
									</div>
								</div>
							</div>

							<div className="whitespace-nowrap hidden sm:block">
								<div className="text-gray-500 w-20 text-end">{email.time}</div>
							</div>
						</div>

						<div className="absolute inset-y-0 -end-52 transition-all group-hover:end-0">
							<div className="flex items-center justify-center gap-4 backdrop-blur-sm px-4 h-full">
								<Link to="">
									<i className="ri-archive-line text-xl transition-all duration-500 text-gray-500 hover:text-danger"></i>
								</Link>
								<Link to="">
									<i className="ri-delete-bin-6-line text-xl transition-all duration-500 text-gray-500 hover:text-danger"></i>
								</Link>
								<Link to="">
									<i className="ri-mail-open-line text-xl transition-all duration-500 text-gray-500 hover:text-danger"></i>
								</Link>
								<Link to="">
									<i className="ri-time-line text-xl transition-all duration-500 text-gray-500 hover:text-danger"></i>
								</Link>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

const EmailInbox = () => {
	const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(false)
	const handleLeftPanel = () => {
		setLeftPanelOpen(!leftPanelOpen)
	}

	const { width } = useViewPort()

	const PopoverToggle = () => {
		return (
			<>
				<i className="ri-folder-2-line text-base" />
				<i className="ri-arrow-down-s-line" />
			</>
		)
	}
	const PopoverToggle2 = () => {
		return (
			<>
				<i className="ri-price-tag-3-line text-base" />
				<i className="ri-arrow-down-s-line" />
			</>
		)
	}
	const PopoverToggle3 = () => {
		return (
			<>
				<i className="ri-more-line text-base me-1" /> More
				<i className="ri-arrow-down-s-line" />
			</>
		)
	}
	// handle compose modal
	const [isModalOpen, toggleComposeModal] = useToggle(false)

	const { emails, totalEmails, startIndex, endIndex, page, totalPages, totalUnreadEmails, getPrevPage, getNextPage, showAllEmails, showStarredEmails } = useInbox()

	return (
		<>
			<PageBreadcrumb title="Email Inbox" subName="Apps" />

			<div className="lg:flex w-full gap-2">
				{width >= 1024 ? (
					<div className="lg:block inset-y-0 start-0 transform h-ful min-h-full min-w-72 lg:z-0 z-50 fixed lg:static lg:translate-x-0 -translate-x-full transition-all duration-300 lg:rtl:-translate-x-0 rtl:translate-x-full" tabIndex={-1}>
						<LeftSide totalUnreadEmails={totalUnreadEmails} showAllEmails={showAllEmails} showStarredEmails={showStarredEmails} toggleComposeModal={toggleComposeModal} />
					</div>
				) : (
					<OffcanvasLayout open={leftPanelOpen} toggleOffcanvas={handleLeftPanel} placement="start" sizeClassName="w-80 max-w-[24rem]">
						<LeftSide totalUnreadEmails={totalUnreadEmails} showAllEmails={showAllEmails} showStarredEmails={showStarredEmails} toggleComposeModal={toggleComposeModal} />
					</OffcanvasLayout>
				)}

				<div className="card p-6 w-full">
					<div className="flex flex-wrap items-center gap-2">
						<div className="lg:hidden block">
							<button className="inline-flex items-center justify-center text-gray-700 border border-gray-300 rounded shadow hover:bg-slate-100 dark:text-gray-400 hover:dark:bg-gray-800 dark:border-gray-700 transition h-9 w-9 duration-100" onClick={handleLeftPanel}>
								<div className="ri-menu-2-fill text-lg"></div>
							</button>
						</div>
						<div className="inline-flex">
							<button type="button" className="btn bg-secondary/90 text-white rounded-e-none hover:bg-secondary">
								<i className="ri-inbox-archive-line text-base"></i>
							</button>
							<button type="button" className="btn bg-secondary/90 text-white rounded-none hover:bg-secondary">
								<i className="ri-spam-2-line text-base"></i>
							</button>
							<button type="button" className="btn bg-secondary/90 text-white rounded-s-none hover:bg-secondary">
								<i className="ri-delete-bin-line text-base"></i>
							</button>
						</div>
						<div className="relative rounded inline-flex align-middle">
							<PopoverLayout placement="bottom-start" toggler={<PopoverToggle />} togglerClass="btn bg-secondary/90 text-white rounded hover:bg-secondary">
								<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1 mt-1">
									<span className="flex items-center py-1.5 px-3.5 text-sm text-gray-500 dark:text-gray-400">Move to:</span>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Social
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Promotions
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Updates
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Forums
									</Link>
								</div>
							</PopoverLayout>
						</div>
						<div className="relative rounded inline-flex align-middle">
							<PopoverLayout placement="bottom-start" toggler={<PopoverToggle2 />} togglerClass="btn bg-secondary/90 text-white rounded hover:bg-secondary">
								<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1 mt-1">
									<span className="flex items-center py-1.5 px-3.5 text-sm text-gray-500 dark:text-gray-400">Label as:</span>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Updates
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Social
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Promotions
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Forums
									</Link>
								</div>
							</PopoverLayout>
						</div>
						<div className="relative rounded inline-flex align-middle">
							<PopoverLayout placement="bottom-start" toggler={<PopoverToggle3 />} togglerClass="btn bg-secondary/90 text-white rounded hover:bg-secondary">
								<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1 mt-1">
									<span className="flex items-center py-1.5 px-3.5 text-sm text-gray-500 dark:text-gray-400">More Options :</span>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Mark as Unread
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Add to Tasks
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Add Star
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Mute
									</Link>
								</div>
							</PopoverLayout>
						</div>
					</div>

					<div className="mt-6">
						<EmailsList emails={emails} />

						<div className="flex justify-between items-center mt-6">
							<div className="">
								Showing {startIndex} - {endIndex} of {totalEmails}
							</div>
							<div className="">
								<div className="flex">
									{page === 1 ? (
										<button type="button" className="btn btn-sm bg-light text-dark rounded-e-none">
											<i className="ri-arrow-left-s-line text-sm"></i>
										</button>
									) : (
										<button type="button" className="btn btn-sm bg-info text-light rounded-s-none">
											<i className="ri-arrow-left-s-line text-sm" onClick={getPrevPage}></i>
										</button>
									)}
									{page < totalPages ? (
										<button type="button" className="btn btn-sm bg-info text-light rounded-s-none">
											<i className="ri-arrow-right-s-line text-sm" onClick={getNextPage}></i>
										</button>
									) : (
										<button type="button" className="btn btn-sm bg-light text-dark rounded-e-none">
											<i className="ri-arrow-right-s-line text-sm"></i>
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ComposeEmail isModalOpen={isModalOpen} toggleComposeModal={toggleComposeModal} />
		</>
	)
}

export default EmailInbox
