import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Tippy from '@tippyjs/react'
import SimpleBar from 'simplebar-react'

// images
import avatar1 from '@/assets/images/users/avatar-1.jpg'

// dummy data
import { ChatMessage, ChatUser, messages } from './data'

// components
import { FormInput } from '../../../components'
import { PopoverLayout } from '../../../components/HeadlessUI'

// style
import 'tippy.js/dist/tippy.css'

const UserMessage = ({ message, toUser }: { message: ChatMessage; toUser: ChatUser }) => {
	const PopoverToggle = () => <i className="ri-more-2-fill text-lg" />

	return (
		<div className={`${message.from.id === toUser.id ? 'flex-row-reverse items-start text-end' : 'items-start text-start'} flex gap-3 group`}>
			<div className="text-center">
				<img src={message.from.avatar} className="rounded-md h-8" />
				<p className="text-xs pt-0.5">{message.sendOn}</p>
			</div>

			{message.message.type === 'text' && (
				<div className="max-w-3/4 bg-light p-3 relative rounded rounded-ss-none after:top-0 after:-start-2.5 after:absolute after:border-[6px] after:border-t-light after:border-e-light after:border-transparent dark:bg-gray-700 dark:after:border-t-gray-700 dark:after:border-e-gray-700">
					<p className="text-xs font-bold relative">{message.from.name}</p>
					<p className="pt-1">{message.message.value}</p>
				</div>
			)}

			{message.message.type === 'file' && (
				<div className="border rounded mt-3 dark:border-slate-700">
					<div className="p-3">
						<div className="flex items-center justify-between gap-3">
							<div className="flex items-center gap-3">
								<div className="w-12 h-12">
									<span className="inline-flex items-center justify-center h-full w-full bg-primary text-white rounded">.ZIP</span>
								</div>
								<div className="text-start text-gray-400">
									<Link to="" className="text-sm font-bold">
										{message.message.value.file}
									</Link>
									<p className="text-sm">{message.message.value.size}</p>
								</div>
							</div>
							<Link to="" className="btn !text-xl">
								<i className="ri-download-2-line"></i>
							</Link>
						</div>
					</div>
				</div>
			)}

			<div className="hidden group-hover:block">
				<PopoverLayout toggler={<PopoverToggle />} togglerClass="">
					<div className="min-w-40 mt-2 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 rounded-md py-1.5">
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Copy Message
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Edit
						</Link>
						<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							Delete
						</Link>
					</div>
				</PopoverLayout>
			</div>
		</div>
	)
}

interface ChatHeaderOptions {
	title: string
	icon: string
}

const chatHeaderOptions: ChatHeaderOptions[] = [
	{
		title: 'Voice Call',
		icon: 'ri-phone-line',
	},
	{
		title: 'Video Call',
		icon: 'ri-vidicon-line',
	},
	{
		title: 'Add Users',
		icon: 'ri-group-line',
	},
	{
		title: 'Delete Chat',
		icon: 'ri-delete-bin-line',
	},
]

interface ChatAreaProps {
	selectedUser: ChatUser
	chatToggler: () => void
}

const ChatArea = ({ selectedUser, chatToggler }: ChatAreaProps) => {
	const [userMessages, setUserMessages] = useState<ChatMessage[]>([])

	const [toUser] = useState<ChatUser>({
		id: 9,
		name: 'Tosha Minner',
		avatar: avatar1,
		email: 'support@coderthemes.com',
		phone: '+1 456 9595 9594',
		location: 'California, USA',
		languages: 'English, German, Spanish',
		groups: 'Work, Friends',
	})

	/*
	 *  Fetches the messages for selected user
	 */
	const getMessagesForUser = useCallback(() => {
		if (selectedUser) {
			setTimeout(() => {
				setUserMessages([...messages].filter((m) => (m.to.id === toUser.id && m.from.id === selectedUser.id) || (toUser.id === m.from.id && m.to.id === selectedUser.id)))
			}, 750)
		}
	}, [selectedUser, toUser])

	useEffect(() => {
		getMessagesForUser()
	}, [getMessagesForUser])

	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			newMessage: yup.string().required('Please enter your messsage'),
		})
	)

	/*
	 * form methods
	 */
	const methods = useForm({ resolver: schemaResolver })
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
		reset,
	} = methods

	/**
	 * sends the chat message
	 */
	const sendChatMessage = (values: { newMessage?: string }) => {
		const newUserMessages = [...userMessages]
		newUserMessages.push({
			id: userMessages.length + 1,
			from: toUser,
			to: selectedUser,
			message: { type: 'text', value: values.newMessage },
			sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
		})
		setTimeout(() => {
			const otherNewMessages = [...newUserMessages]
			otherNewMessages.push({
				id: userMessages.length + 1,
				from: selectedUser,
				to: toUser,
				message: { type: 'text', value: values.newMessage },
				sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
			})
			setUserMessages(otherNewMessages)
		}, 1000)
		setUserMessages(newUserMessages)
		reset()
	}

	const AlwaysScrollToBottom = () => {
		const elementRef = useRef<HTMLDivElement>(null)
		useEffect(() => {
			if (elementRef && elementRef.current && elementRef.current.scrollIntoView) {
				elementRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		})
		return <div ref={elementRef} />
	}

	return (
		<>
			<div className="card w-full lg:overflow-hidden">
				<div className="sticky top-0 start-0 end-0 lg:static py-3 px-6 border-b border-light dark:border-gray-600 z-10 bg-white">
					<div className="flex flex-wrap justify-between gap-3 py-1.5">
						<div className="sm:w-7/12">
							<div className="flex items-center gap-2">
								<button className="lg:hidden block rtl:rotate-180" onClick={chatToggler} type="button">
									<i className="ri-arrow-left-s-line text-xl text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400"></i>
								</button>

								<img src={selectedUser.avatar} className="me-2 rounded-full h-9" alt={selectedUser.name} />
								<div>
									<h5 className="text-sm ">
										<Link to="#" className="text-gray-500">
											{selectedUser.name}
										</Link>
									</h5>
									<p className="mt-1.5 text-gray-400 text-xs flex items-center">
										<small className="ri-checkbox-blank-circle-fill text-danger me-1"></small> Offline
									</p>
								</div>
							</div>
						</div>

						<div className="w-auto">
							<div id="tooltips-container">
								{(chatHeaderOptions || []).map((item, idx) => {
									return (
										<Tippy key={idx} content={item.title} placement="bottom">
											<Link to="" className="p-1.5 inline-block">
												<i className={`${item.icon} text-xl`} />
											</Link>
										</Tippy>
									)
								})}
							</div>
						</div>
					</div>
				</div>

				<SimpleBar className=" p-6 h-full lg:h-[calc(100vh-400px)]">
					<div className="space-y-4">
						{(userMessages || []).map((message, idx) => {
							return <UserMessage key={idx} message={message} toUser={toUser} />
						})}

						<AlwaysScrollToBottom />
					</div>
				</SimpleBar>

				<div className="flex sticky bottom-0 start-0 end-0 lg:static">
					<div className="w-full">
						<div className="bg-light p-6 dark:bg-gray-700">
							<form name="chat-form" noValidate onSubmit={handleSubmit(sendChatMessage)}>
								<div className="flex gap-2">
									<FormInput type="text" name="newMessage" containerClass="w-full" className="form-input border-none bg-white dark:bg-gray-800 placeholder:text-slate-400" placeholder="Enter your text" register={register} key="newMessage" errors={errors} control={control} />
									<div className="w-auto">
										<div className="flex gap-1">
											<Link to="#" className="btn bg-light text-gray-800 hover:bg-dark/20 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-light/20">
												<i className="ri-attachment-2"></i>
											</Link>
											<button type="submit" className="btn bg-success text-white w-full">
												<i className="ri-send-plane-2-line"></i>
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ChatArea
