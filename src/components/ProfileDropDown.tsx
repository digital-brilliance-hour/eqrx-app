import { Link } from 'react-router-dom'
import PopoverLayout from './HeadlessUI/PopoverLayout'

interface ProfileMenuItem {
	label: string
	icon: string
	redirectTo: string
}

interface ProfileDropDownProps {
	menuItems: Array<ProfileMenuItem>
	profiliePic?: string
	username: string
	userTitle?: string
}

const ProfileDropDown = (props: ProfileDropDownProps) => {
	const profilePic = props.profiliePic

	const PopoverToggler = () => {
		return (
			<>
				<img src={profilePic} alt="user-image" className="rounded-full h-8" />
				<span className="md:flex flex-col gap-0.5 text-start hidden">
					<h5 className="text-sm">Tosha Minner</h5>
					<span className="text-xs">Founder</span>
				</span>
			</>
		)
	}

	return (
		<>
			<PopoverLayout placement="bottom-end" togglerClass="nav-link flex items-center gap-2.5 px-3 bg-black/5 border-x border-black/10" toggler={<PopoverToggler />}>
				<div className="mt-1 end-0 absolute w-44 z-50 transition-all duration-300 bg-white shadow-lg border rounded-lg py-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
					<h6 className="flex items-center py-2 px-3 text-xs text-gray-800 dark:text-gray-400">Welcome !</h6>

					{(props.menuItems || []).map((item, idx) => {
						return (
							<Link key={idx} to={item.redirectTo} className="flex items-center gap-2 py-1.5 px-4 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
								<i className={`${item.icon} text-lg align-middle`}></i>
								<span>{item.label}</span>
							</Link>
						)
					})}
				</div>
			</PopoverLayout>
		</>
	)
}

export default ProfileDropDown
