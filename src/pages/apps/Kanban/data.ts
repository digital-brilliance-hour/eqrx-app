import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'
import avatar7 from '@/assets/images/users/avatar-7.jpg'
import avatar8 from '@/assets/images/users/avatar-8.jpg'
import avatar9 from '@/assets/images/users/avatar-9.jpg'
import avatar10 from '@/assets/images/users/avatar-10.jpg'

export interface TaskTypes {
	id: number
	title: string
	status: string
	priority: string
	dueDate: string
	category: string
	comments: number
	userAvatar: {
		id: string
		isImage: boolean
		title: string
		image: string
		textBg?: string
	}[]
}

interface AssigneeTypes {
	id: number
	title: string
	image: string
	isImage: boolean
}

const tasks: TaskTypes[] = [
	{
		id: 1,
		title: 'iOS App home page',
		status: 'Todo',
		priority: 'High',
		dueDate: '18 Jul 2023',
		category: 'iOS',
		comments: 74,
		userAvatar: [
			{
				id: '1',
				isImage: true,
				title: 'Tosha',
				image: avatar1,
			},
			{
				id: '2',
				isImage: true,
				title: 'Brain',
				image: avatar3,
			},
			{
				id: '3',
				isImage: false,
				title: 'Hooker',
				image: 'K',
				textBg: 'bg-success text-white',
			},
			{
				id: '4',
				isImage: false,
				title: 'More +',
				image: '9+',
				textBg: 'bg-primary text-white',
			},
		],
	},
	{
		id: 2,
		title: 'Topnav layout design',
		status: 'Todo',
		priority: 'Medium',
		dueDate: '15 Dec 2023',
		category: 'Attex',
		comments: 28,
		userAvatar: [
			{
				id: '5',
				isImage: true,
				title: 'Tosha',
				image: avatar2,
			},
			{
				id: '6',
				isImage: true,
				title: 'Brain',
				image: avatar4,
			},
		],
	},
	{
		id: 3,
		title: 'Invite user to a project',
		status: 'Todo',
		priority: 'Low',
		dueDate: '11 Jul 2023',
		category: 'CRM',
		comments: 68,
		userAvatar: [
			{
				id: '7',
				isImage: true,
				title: 'Tosha',
				image: avatar5,
			},
			{
				id: '8',
				isImage: true,
				title: 'Brain',
				image: avatar6,
			},
			{
				id: '9',
				isImage: false,
				title: 'Hooker',
				image: 'M',
				textBg: 'bg-info text-white',
			},
		],
	},
	{
		id: 4,
		title: 'Write a release note',
		status: 'Inprogress',
		priority: 'Medium',
		dueDate: '22 Jun 2023',
		category: 'Attex',
		comments: 17,
		userAvatar: [
			{
				id: '10',
				isImage: true,
				title: 'Tosha',
				image: avatar7,
			},
			{
				id: '11',
				isImage: true,
				title: 'Brain',
				image: avatar8,
			},
		],
	},
	{
		id: 5,
		title: 'Enable analytics tracking',
		status: 'Inprogress',
		priority: 'Low',
		dueDate: '19 Jun 2023',
		category: 'CRM',
		comments: 48,
		userAvatar: [
			{
				id: '12',
				isImage: true,
				title: 'Tosha',
				image: avatar10,
			},
			{
				id: '13',
				isImage: false,
				title: 'Hooker',
				image: 'K',
				textBg: 'bg-warning text-white',
			},
			{
				id: '14',
				isImage: true,
				title: 'Brain',
				image: avatar9,
			},
		],
	},
	{
		id: 6,
		title: 'Kanban board design',
		status: 'Review',
		priority: 'High',
		dueDate: '2 May 2023',
		category: 'CRM',
		comments: 65,
		userAvatar: [
			{
				id: '15',
				isImage: true,
				title: 'Tosha',
				image: avatar2,
			},
			{
				id: '16',
				isImage: true,
				title: 'Brain',
				image: avatar4,
			},
			{
				id: '17',
				isImage: false,
				title: 'Hooker',
				image: 'D',
				textBg: 'bg-light text-black',
			},
		],
	},
	{
		id: 7,
		title: 'Code HTML email template',
		status: 'Review',
		priority: 'Medium',
		dueDate: '7 May 2023',
		category: 'CRM',
		comments: 106,
		userAvatar: [
			{
				id: '18',
				isImage: true,
				title: 'Tosha',
				image: avatar1,
			},
			{
				id: '19',
				isImage: true,
				title: 'Brain',
				image: avatar10,
			},
			{
				id: '20',
				isImage: true,
				title: 'Brain',
				image: avatar5,
			},
		],
	},
	{
		id: 8,
		title: 'Brand logo design',
		status: 'Review',
		priority: 'Medium',
		dueDate: '8 Jul 2023',
		category: 'Design',
		comments: 95,
		userAvatar: [
			{
				id: '21',
				isImage: false,
				title: 'Hooker',
				image: 'M',
				textBg: 'bg-primary text-white',
			},
			{
				id: '22',
				isImage: false,
				title: 'Hooker',
				image: 'A',
				textBg: 'bg-info text-white',
			},
			{
				id: '23',
				isImage: true,
				title: 'Brain',
				image: avatar1,
			},
		],
	},
	{
		id: 9,
		title: 'Improve animation loader',
		status: 'Review',
		priority: 'High',
		dueDate: '22 Jul 2023',
		category: 'CRM',
		comments: 39,
		userAvatar: [
			{
				id: '24',
				isImage: true,
				title: 'Tosha',
				image: avatar2,
			},
			{
				id: '25',
				isImage: true,
				title: 'Brain',
				image: avatar4,
			},
		],
	},
	{
		id: 10,
		title: 'Dashboard design',
		status: 'Done',
		priority: 'Low',
		dueDate: '16 Jul 2023',
		category: 'Attex',
		comments: 287,
		userAvatar: [
			{
				id: '26',
				isImage: true,
				title: 'Tosha',
				image: avatar1,
			},
			{
				id: '27',
				isImage: true,
				title: 'Brain',
				image: avatar3,
			},
			{
				id: '28',
				isImage: true,
				title: 'Tosha',
				image: avatar8,
			},
			{
				id: '29',
				isImage: false,
				title: 'Hooker',
				image: 'K',
				textBg: 'bg-danger text-white',
			},
		],
	},
]

const assignees: AssigneeTypes[] = [
	{
		id: 1,
		title: 'Coderthemes',
		image: avatar1,
		isImage: true,
	},
	{
		id: 2,
		title: 'Kenil Sudani',
		image: avatar2,
		isImage: true,
	},
	{
		id: 3,
		title: 'Louis Allen',
		image: avatar3,
		isImage: true,
	},
	{
		id: 4,
		title: 'Sean White',
		image: avatar4,
		isImage: true,
	},
	{
		id: 5,
		title: 'Riley Steele',
		image: avatar5,
		isImage: true,
	},
	{
		id: 6,
		title: 'Zak Turnbull',
		image: avatar6,
		isImage: true,
	},
]

export { tasks, assignees }
