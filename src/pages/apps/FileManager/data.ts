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

interface QuickAccessFileTypes {
	icon: string
	name: string
	size: string
	variant?: string
}

interface RecentFileTypes {
	name: string
	modifiedDate: string
	modifiedBy: string
	size: string
	owner: string
	members: {
		image: string
		name: string
	}[]
}

const quickAccessFiles: QuickAccessFileTypes[] = [
	{
		icon: 'ri-file-zip-line',
		name: 'Attex-sketch.zip',
		size: '2.3 MB',
	},
	{
		icon: 'ri-folder-5-line',
		name: 'Compile Version',
		size: '87.2 MB',
	},
	{
		icon: 'ri-folder-5-line',
		name: 'Admin.zip',
		size: '45.1 MB',
		variant: 'primary',
	},
	{
		icon: 'ri-file-pdf-line',
		name: 'Docs.pdf',
		size: '7.5 MB',
	},
	{
		icon: 'ri-file-pdf-line',
		name: 'License-details.pdf',
		size: '784 KB',
	},
	{
		icon: 'ri-folder-5-line',
		name: 'Purchase Verification',
		size: '2.2 MB',
	},
	{
		icon: 'ri-folder-5-line',
		name: 'Attex Integrations',
		size: '874 MB',
	},
]

const recentFiles: RecentFileTypes[] = [
	{
		name: 'App Design & Development',
		modifiedDate: 'Jan 03, 2023',
		modifiedBy: 'Andrew',
		size: '128 MB',
		owner: 'Danielle Thompson',
		members: [
			{
				image: avatar1,
				name: 'Mat Helme',
			},
			{
				image: avatar2,
				name: 'Michael Zenaty',
			},
			{
				image: avatar3,
				name: 'James Anderson',
			},
			{
				image: avatar5,
				name: 'Arya Stark',
			},
		],
	},
	{
		name: 'Attex-sketch-design.zip',
		modifiedDate: 'Feb 13, 2023',
		modifiedBy: 'Coderthemes',
		size: '521 MB',
		owner: 'Coder Themes',
		members: [
			{
				image: avatar4,
				name: 'Mat Helme',
			},
			{
				image: avatar1,
				name: 'Michael Zenaty',
			},
			{
				image: avatar6,
				name: 'James Anderson',
			},
		],
	},
	{
		name: 'Annualreport.pdf',
		modifiedDate: 'Dec 18, 2022',
		modifiedBy: 'Alejandro',
		size: '7.2 MB',
		owner: 'Gary Coley',
		members: [
			{
				image: avatar9,
				name: 'Mat Helme',
			},
			{
				image: avatar7,
				name: 'Michael Zenaty',
			},
			{
				image: avatar3,
				name: 'James Anderson',
			},
		],
	},
	{
		name: 'Wireframes',
		modifiedDate: 'Nov 25, 2022',
		modifiedBy: 'Dunkle',
		size: '54.2 MB',
		owner: 'Jasper Rigg',
		members: [
			{
				image: avatar1,
				name: 'Mat Helme',
			},
			{
				image: avatar8,
				name: 'Michael Zenaty',
			},
			{
				image: avatar2,
				name: 'James Anderson',
			},
			{
				image: avatar5,
				name: 'Arya Stark',
			},
		],
	},
	{
		name: 'Documentation.docs',
		modifiedDate: 'Feb 9, 2023',
		modifiedBy: 'Justin',
		size: '8.3 MB',
		owner: 'Cooper Sharwood',
		members: [
			{
				image: avatar3,
				name: 'Mat Helme',
			},
			{
				image: avatar10,
				name: 'Michael Zenaty',
			},
		],
	},
]

export { quickAccessFiles, recentFiles }
