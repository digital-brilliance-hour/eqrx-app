import React from 'react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

// types
import { NotificationItem } from '../layouts/Topbar'
import PopoverLayout from './HeadlessUI/PopoverLayout'

interface NotificationDropDownProps {
	notifications: Array<NotificationItem>
}

const NotificationDropdown = ({ notifications }: NotificationDropDownProps) => {
	/**
	 * Get time since
	 */
	function timeSince(date: Date) {
		if (typeof date !== 'object') {
			date = new Date(date)
		}

		const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000)
		let intervalType: string

		let interval = Math.floor(seconds / 31536000)
		if (interval >= 1) {
			intervalType = 'year'
		} else {
			interval = Math.floor(seconds / 2592000)
			if (interval >= 1) {
				intervalType = 'month'
			} else {
				interval = Math.floor(seconds / 86400)
				if (interval >= 1) {
					intervalType = 'day'
				} else {
					interval = Math.floor(seconds / 3600)
					if (interval >= 1) {
						intervalType = 'hour'
					} else {
						interval = Math.floor(seconds / 60)
						if (interval >= 1) {
							intervalType = 'minute'
						} else {
							interval = seconds
							intervalType = 'second'
						}
					}
				}
			}
		}
		if (interval > 1 || interval === 0) {
			intervalType += 's'
		}
		return interval + ' ' + intervalType + ' ago'
	}

	let previousDate: null | number | Date = null
	let currentDate: null | number | Date = null

	const PopoverToggler = () => {
		return (
			<>
				<span className="sr-only">View notifications</span>
				<span className="flex items-center justify-center">
					<i className="ri-notification-3-line text-2xl"></i>
					<span className="absolute top-5 end-2.5 w-2 h-2 rounded-full bg-danger"></span>
				</span>
			</>
		)
	}

	return (
		<>
			<PopoverLayout placement="bottom-end" togglerClass="nav-link p-2" toggler={<PopoverToggler />}>
				<div className="absolute mt-1 end-0 w-80 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg">
					<div className="p-3 border-b border-gray-200 dark:border-gray-700">
						<div className="flex items-center justify-between">
							<h6 className="text-sm text-gray-500 dark:text-gray-200"> Notification</h6>
							<Link to="#" className="text-gray-500 dark:text-gray-200 underline">
								<small>Clear All</small>
							</Link>
						</div>
					</div>
					<SimpleBar className="py-4 h-80">
						{(notifications || []).map((notification, idx) => {
							const todayDate = new Date().getDate()
							currentDate = notification.createdAt.getDate()
							let labelName = ''
							if (previousDate !== currentDate) {
								previousDate = currentDate
								if (todayDate === currentDate) {
									labelName = 'Today'
								} else if (todayDate - currentDate === 1) {
									labelName = 'Yesterday'
								} else {
									labelName = `${new Date().toLocaleDateString()}`
								}
								return (
									<React.Fragment key={idx}>
										<h5 className="text-xs text-gray-500 dark:text-gray-200 px-4 mb-2">{labelName}</h5>
										<Link to="#" className="block mb-4">
											<div className="py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
												<div className="flex items-center">
													<div className="flex-shrink-0">
														{notification.avatar ? (
															<img src={notification.avatar} className="rounded-full h-9 w-9" alt="" />
														) : (
															<div className={`flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-${notification.bgColor}`}>
																<i className={notification.icon}></i>
															</div>
														)}
													</div>
													<div className="flex-grow truncate ms-2">
														<h5 className="text-sm font-semibold mb-1">
															Datacorp <small className="font-normal ms-1">1 min ago</small>
														</h5>
														<small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
													</div>
												</div>
											</div>
										</Link>
									</React.Fragment>
								)
							} else {
								return (
									<Link to="#" className="block mb-4" key={idx}>
										<div className="py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
											<div className="flex items-center">
												<div className="flex-shrink-0">
													{notification.avatar ? (
														<img src={notification.avatar} className="rounded-full h-9 w-9" alt="" />
													) : (
														<div className={`flex justify-center items-center h-9 w-9 rounded-full bg text-white bg-${notification.bgColor}`}>
															<i className={notification.icon}></i>
														</div>
													)}
												</div>
												<div className="flex-grow truncate ms-2">
													<h5 className="text-sm font-semibold mb-1">
														{notification.text} <small className="font-normal ms-1">{timeSince(notification.createdAt)}</small>
													</h5>
													<small className="noti-item-subtitle text-muted">{notification.subText}</small>
												</div>
											</div>
										</div>
									</Link>
								)
							}
						})}
					</SimpleBar>
					<Link to="#" className="p-2 border-t border-gray-200 dark:border-gray-700 block text-center text-primary underline font-semibold">
						View All
					</Link>
				</div>
			</PopoverLayout>
		</>
	)
}

export default NotificationDropdown
