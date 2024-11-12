import { useState } from 'react'
import ChatUsers from './ChatUsers'
import ChatArea from './ChatArea'

// components
import PageBreadcrumb from '../../../components/PageBreadcrumb'

//dummy data
import { ChatUser, users } from './data'
import { OffcanvasLayout } from '../../../components/HeadlessUI'
import { useViewPort } from '../../../hooks'

const ChatApp = () => {
	const [selectedUser, setSelectedUser] = useState<ChatUser>(users[1])

	/**
	 * On user change
	 */
	const onUserChange = (user: ChatUser) => {
		setSelectedUser(user)
	}

	const [chatAreaOpen, setChatAreaOpen] = useState<boolean>(false)
	const handleChatAreaPanel = () => {
		setChatAreaOpen(!chatAreaOpen)
	}

	const { width } = useViewPort()
	return (
		<>
			<PageBreadcrumb title="Chat" subName="Apps" />
			<div className="relative lg:overflow-visible overflow-hidden">
				<div className="lg:flex gap-4">
					<ChatUsers onUserSelect={onUserChange} chatToggler={handleChatAreaPanel} />

					{width >= 1024 ? (
						<ChatArea selectedUser={selectedUser} chatToggler={handleChatAreaPanel} />
					) : (
						<OffcanvasLayout open={chatAreaOpen} toggleOffcanvas={handleChatAreaPanel} placement="end" sizeClassName="w-full">
							<ChatArea selectedUser={selectedUser} chatToggler={handleChatAreaPanel} />
						</OffcanvasLayout>
					)}
				</div>
			</div>
		</>
	)
}

export default ChatApp
