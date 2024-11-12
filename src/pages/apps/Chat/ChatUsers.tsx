import { useState } from 'react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

// images
import avatar1 from '@/assets/images/users/avatar-1.jpg'

// dummy data
import { ChatUser, users } from './data'

// components
import { PopoverLayout } from '../../../components/HeadlessUI'

interface ChatUsersProps {
	onUserSelect: (value: ChatUser) => void
	chatToggler: () => void
}

const ChatUsers = ({ onUserSelect, chatToggler }: ChatUsersProps) => {
	const PopoverToggle = () => <i className="ri-settings-5-line text-xl" />

	const [user, setUser] = useState<ChatUser[]>([...users])

	/**
	 * Search the user
	 * @param {*} text
	 */
	const search = (text: string) => {
		setUser(text ? [...users].filter((u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0) : [...users])
	}

	/**
	 * Activates the user
	 * @param {*} user
	 */
	const activateUser = (user: ChatUser) => {
		if (onUserSelect) {
			onUserSelect(user)
		}
	}

	return (
		<div className="card lg:min-w-96">
			<div className="p-6">
				<div className="flex justify-between mb-6">
					<div className="flex items-center gap-3">
						<img src={avatar1} className="rounded-full h-10" alt="Brandon Smith" />
						<div className="w-full">
							<h5 className="">
								<Link to="/pages/profile">Tosha Minner</Link>
							</h5>
							<p className="flex items-center">
								<small className="ri-checkbox-blank-circle-fill me-1 text-success"></small> Online
							</p>
						</div>
					</div>
					<PopoverLayout placement="bottom-end" toggler={<PopoverToggle />} togglerClass="">
						<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 rounded-md py-1 mt-1">
							<Link className="flex items-center py-1.5 px-5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
								<i className="ri-archive-line me-2 text-base"></i>Archive
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
								<i className="ri-equalizer-line me-2 text-base"></i>Setting
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm font-medium text-danger hover:bg-gray-100 dark:hover:bg-gray-700" to="">
								<i className="ri-delete-bin-line me-2 text-base"></i>Delete
							</Link>
							<hr className="my-1.5" />
							<Link className="flex items-center py-1.5 px-5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
								<i className="ri-logout-circle-line me-2 text-base"></i>Log Out
							</Link>
						</div>
					</PopoverLayout>
				</div>

				<div className="mb-3">
					<form>
						<div className="relative flex rounded-md">
							<input onKeyUp={(e: any) => search(e.target.value)} type="text" id="trailing-button-add-on-with-icon-and-button" name="trailing-button-add-on-with-icon-and-button" className="form-input form-input-light ps-9" placeholder="People, groups & messages..." />
							<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
								<i className="ri-search-line text-base"></i>
							</div>
						</div>
					</form>
				</div>

				<h6 className="fs-13 text-muted text-uppercase mb-3">Group Chats</h6>
				<div className="flex flex-col ">
					<Link to="" className="text-reset mb-2 flex items-center">
						<i className="ri-checkbox-blank-circle-line me-1 text-success"></i>
						<span>App Development</span>
					</Link>

					<Link to="" className="text-reset mb-2 flex items-center">
						<i className="ri-checkbox-blank-circle-line me-1 text-warning"></i>
						<span>Office Work</span>
					</Link>
				</div>
			</div>

			<div>
				<h6 className="fs-13 text-muted text-uppercase px-6 mb-4">Contacts</h6>

				<SimpleBar className="h-[calc(100vh-400px)] lg:h-[calc(100vh-526px)]">
					<div className="">
						{(user || []).map((user, idx) => {
							return (
								<Link
									key={idx}
									to="#"
									onClick={() => {
										activateUser(user)
										chatToggler()
									}}
								>
									<div className="flex items-center gap-2 py-3 px-6">
										<img src={user.avatar} className="rounded-full h-10" alt={user.name} />
										<div className="w-full">
											<div className="flex justify-between">
												<h6>{user.name}</h6>
												<small className="text-gray-400">{user.lastMessageOn}</small>
											</div>
											<div className="flex justify-between">
												<span className="font-light text-gray-400">{user.lastMessage}</span>
												<span>{user.totalUnread !== 0 && <span className="px-1 py-0.5 text-xs rounded-full bg-danger/25 text-danger">{user.totalUnread}</span>}</span>
											</div>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
				</SimpleBar>
			</div>
		</div>
	)
}

export default ChatUsers
