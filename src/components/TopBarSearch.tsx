import { Link } from 'react-router-dom'
import PopoverLayout from './HeadlessUI/PopoverLayout'

//image
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'

const TopBarSearch = () => {
	const PopoverToggler = () => {
		return (
			<>
				<input type="search" className="form-input bg-black/5 border-none ps-8 relative" placeholder="Search..." />
				<span className="ri-search-line text-base z-10 absolute start-2 top-1/2 -translate-y-1/2"></span>
			</>
		)
	}

	return (
		<>
			<PopoverLayout placement="bottom-start" toggler={<PopoverToggler />}>
				<div className="mt-5 w-80 z-50 transition-all duration-300 bg-white shadow-lg border rounded-lg py-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
					<h5 className="flex items-center py-2 px-3 text-sm text-gray-800 dark:text-gray-400 uppercase">
						Found <b className="text-decoration-underline"> &nbsp;08&nbsp;</b> results
					</h5>
					<Link
						to="#"
						className="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
						onClick={() => {
							console.info('search was clicked')
						}}
					>
						<i className="ri-file-chart-line text-base me-1"></i>
						<span>Analytics Report</span>
					</Link>
					<Link to="#" className="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
						<i className="ri-lifebuoy-line text-base me-1"></i>
						<span>How can I help you?</span>
					</Link>
					<Link to="#" className="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
						<i className="ri-user-settings-line text-base me-1"></i>
						<span>User profile settings</span>
					</Link>
					<h6 className="flex items-center py-2 px-3 text-sm text-gray-800 dark:text-gray-400 uppercase">Users</h6>
					<Link to="#" className="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
						<img className="me-2 rounded-full h-8" src={avatar2} alt="Generic placeholder image" />
						<div className="flex-grow">
							<h5 className="m-0 fs-14">Erwin Brown</h5>
							<span className="fs-12 ">UI Designer</span>
						</div>
					</Link>
					<Link to="#" className="flex items-center py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
						<img className="me-2 rounded-full h-8" src={avatar5} alt="Generic placeholder image" />
						<div className="flex-grow">
							<h5 className="m-0 fs-14">Jacob Deo</h5>
							<span className="fs-12 ">Developer</span>
						</div>
					</Link>
				</div>
			</PopoverLayout>
		</>
	)
}

export default TopBarSearch
