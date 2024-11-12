import { Link } from 'react-router-dom'

// utils
import { splitArray } from '../../utils'

// images
import githubIcon from './icons/github.png'
import bitbucketIcon from './icons/bitbucket.png'
import dropboxIcon from './icons/dropbox.png'
import slackIcon from './icons/slack.png'
import dribbbleIcon from './icons/dribbble.png'
import behanceIcon from './icons/behance.png'
import PopoverLayout from '../HeadlessUI/PopoverLayout'

interface AppsData {
	name: string
	icon: string
	redirectTo: string
}

/**
 * Get the apps
 */
const apps: AppsData[] = [
	{
		name: 'GitHub',
		icon: githubIcon,
		redirectTo: '',
	},
	{
		name: 'Bitbucket',
		icon: bitbucketIcon,
		redirectTo: '',
	},
	{
		name: 'Dropbox',
		icon: dropboxIcon,
		redirectTo: '',
	},
	{
		name: 'Slack',
		icon: slackIcon,
		redirectTo: '',
	},
	{
		name: 'Dribbble',
		icon: dribbbleIcon,
		redirectTo: '',
	},
	{
		name: 'Behance',
		icon: behanceIcon,
		redirectTo: '',
	},
]

const AppsDropDown = () => {
	const chunk_size = 3
	const appsChunks = splitArray(apps, chunk_size)

	const PopoverToggler = () => {
		return (
			<>
				<span className="sr-only">Apps</span>
				<span className="flex items-center justify-center">
					<i className="ri-apps-2-line text-2xl"></i>
				</span>
			</>
		)
	}

	return (
		<>
			<PopoverLayout placement="bottom-end" togglerClass="nav-link p-2" toggler={<PopoverToggler />}>
				<div className="end-0 mt-1 absolute w-80 z-50 transition-all duration-300 bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
					<div className="grid grid-cols-3 gap-3">
						{(appsChunks || []).map((chunk) =>
							(chunk || []).map((item, idx) => {
								return (
									<Link key={idx} to={item.redirectTo} className="flex flex-col items-center justify-center gap-1.5 py-3 px-6 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
										<img src={item.icon} className="h-6" alt={item.name} />
										<span>{item.name}</span>
									</Link>
								)
							})
						)}
					</div>
				</div>
			</PopoverLayout>
		</>
	)
}

export default AppsDropDown
