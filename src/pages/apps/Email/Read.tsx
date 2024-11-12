import { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import ComposeEmail from './ComposeEmail'
import LeftSide from './LeftSide'

// hooks
import { useToggle, useViewPort } from '../../../hooks'

// dummy data & types
import { emails } from './data'

// images
import img4 from '@/assets/images/small/small-4.jpg'
import avatarImg from '@/assets/images/users/avatar-2.jpg'

import { OffcanvasLayout, PopoverLayout } from '../../../components/HeadlessUI'
import { EmailDetails } from './types'

const EmailRead = () => {
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
	const [totalUnreadEmails] = useState<number>(emails.filter((e) => e.is_read === false).length)
	const [attachments] = useState<EmailDetails>({
		avatar: avatarImg,
		subject: 'Your elite author Graphic Optimization reward is ready!',
		from_name: 'Steven Smith',
		from_email: 'jonathan@domain.com',
		recieved_on: 'Jul 24, 2019, 5:17 AM',
		attachments: [
			{ id: 1, name: 'Attex-admin-design.zip', size: '2.3 MB', ext: '.zip' },
			{ id: 2, name: 'Dashboard-design.jpg', size: '3.25 MB', ext: '.jpg', img: img4 },
			{ id: 3, name: 'Admin-bug-report.mp4', size: '7.05 MB', ext: '.mp4' },
		],
	})

	/**
	 *  handle compose modal
	 */
	const [isModalOpen, toggleComposeModal] = useToggle()
	const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(false)
	const handleLeftPanel = () => {
		setLeftPanelOpen(!leftPanelOpen)
	}

	const { width } = useViewPort()

	return (
		<>
			<PageBreadcrumb title="Email Read" subName="Apps" />
			<div className="lg:flex w-full gap-2">
				{width >= 1024 ? (
					<div className="lg:block inset-y-0 start-0 transform h-ful min-h-full min-w-72 lg:z-0 z-50 fixed lg:static lg:translate-x-0 -translate-x-full transition-all duration-300 lg:rtl:-translate-x-0 rtl:translate-x-full" tabIndex={-1}>
						<LeftSide totalUnreadEmails={totalUnreadEmails} toggleComposeModal={toggleComposeModal} />
					</div>
				) : (
					<OffcanvasLayout open={leftPanelOpen} toggleOffcanvas={handleLeftPanel} placement="start" sizeClassName="w-80 max-w-[24rem]">
						<LeftSide totalUnreadEmails={totalUnreadEmails} toggleComposeModal={toggleComposeModal} />
					</OffcanvasLayout>
				)}

				<div className="card p-6 min-w-auto">
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
						<h5 className="text-lg">Your elite author Graphic Optimization reward is ready!</h5>

						<hr className="dark:border-gray-700 my-5" />

						<div className="flex items-center mb-6 mt-1.5">
							<img className="me-3 rounded-full h-8" src={attachments.avatar} alt={attachments.from_name} />
							<div className="w-full overflow-hidden">
								<small className="float-right">{attachments.recieved_on}</small>
								<h6 className="text-sm/normal">{attachments.from_name}</h6>
								<small className="text-gray-500 dark:text-gray-400">From: {attachments.from_email}</small>
							</div>
						</div>

						<p className="mb-4 text-sm/normal">Hi Coderthemes!</p>
						<p className="mb-4 text-sm/normal">Clicking ‘Order Service’ on the right-hand side of the above page will present you with an order page. This service has the following Briefing Guidelines that will need to be filled before placing your order:</p>
						<ol className="mb-4 block list-decimal ps-10">
							<li>Your design preferences (Color, style, shapes, Fonts, others) </li>
							<li>Tell me, why is your item different? </li>
							<li>Do you want to bring up a specific feature of your item? If yes, please tell me </li>
							<li>Do you have any preference or specific thing you would like to change or improve on your item page? </li>
							<li>Do you want to include your item's or your provider's logo on the page? if yes, please send it to me in vector format (Ai or EPS) </li>
							<li>Please provide me with the copy or text to display</li>
						</ol>
						<p className="mb-4 text-sm/normal">Filling in this form with the above information will ensure that they will be able to start work quickly.</p>
						<p className="mb-4 text-sm/normal">You can complete your order by putting your coupon code into the Promotional code box and clicking ‘Apply Coupon’.</p>
						<p className="mb-4 text-sm/normal">
							<b>Best,</b> <br /> Graphic Studio
						</p>
						<hr className="dark:border-gray-700 my-5" />
						<h5 className="text-base/normal mb-3">Attachments</h5>
						<div className="grid grid-cols-3 gap-6">
							{(attachments.attachments || []).map((item, idx) => {
								return item.img ? (
									<div key={idx} className="card mb-1.5 shadow-none border dark:border-gray-700">
										<div className="p-3">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2.5">
													<div className="h-12 w-12">
														<img src={item.img} className="w-full h-full rounded" alt="file-image" />
													</div>
													<div className="">
														<Link to="" className="text-gray-500 dark:text-gray-400 text-sm font-bold">
															{item.name}
														</Link>
														<p className="text-sm/normal">{item.size}</p>
													</div>
												</div>
												<div className="col-auto">
													<Link to="" className="btn btn-lg text-gray-500 !text-xl">
														<i className="ri-download-2-line"></i>
													</Link>
												</div>
											</div>
										</div>
									</div>
								) : (
									<div key={idx} className="card mb-1.5 shadow-none border dark:border-gray-700">
										<div className="p-3">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2.5">
													<div className="h-12 w-12">
														<span className="inline-flex items-center justify-center w-full h-full bg-primary/20 text-primary rounded">{item.ext.toUpperCase()}</span>
													</div>
													<div className="">
														<Link to="" className="text-gray-500 dark:text-gray-400 text-sm font-bold">
															{item.name}
														</Link>
														<p className="text-sm/normal">{item.size}</p>
													</div>
												</div>
												<div className="col-auto">
													<Link to="" className="btn btn-lg text-gray-500 !text-xl">
														<i className="ri-download-2-line"></i>
													</Link>
												</div>
											</div>
										</div>
									</div>
								)
							})}
						</div>
						<div className="mt-5">
							<Link to="" className="btn bg-secondary text-white me-3">
								<i className="ri-reply-line me-1"></i> Reply
							</Link>
							<Link to="" className="btn bg-secondary/20 hover:bg-secondary/40 text-gray-800 dark:text-gray-200">
								Forward <i className="ri-share-forward-2-fill ms-1"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<ComposeEmail isModalOpen={isModalOpen} toggleComposeModal={toggleComposeModal} />
		</>
	)
}

export default EmailRead
