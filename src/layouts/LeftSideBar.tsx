import React, { useRef } from 'react'

// assets
import SimpleBar from 'simplebar-react'
import AppMenu from './Menu'
import { getMenuItems } from '../helpers/menu'
import LogoBox from '../components/LogoBox'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { changeSideBarType } from '../redux/actions'
import { SideBarType } from '../constants'

/* Sidebar content */
const SideBarContent = () => {
	return (
		<>
			<AppMenu menuItems={getMenuItems()} />
		</>
	)
}

interface LeftSideBarProps {
	isCondensed: boolean
	isLight: boolean
	hideUserProfile: boolean
	hideLogo?: boolean
}

const LeftSideBar = ({ hideLogo }: LeftSideBarProps) => {
	const dispatch = useDispatch<AppDispatch>()

	const { sideBarType } = useSelector((state: RootState) => ({
		sideBarType: state.Layout.sideBarType,
	}))

	const menuNodeRef = useRef<HTMLDivElement>(null)

	const handleHoverMenu = () => {
		if (sideBarType === 'hover') {
			dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE))
		} else if (sideBarType === 'hover-active') {
			dispatch(changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_HOVER))
		}
	}

	return (
		<React.Fragment>
			<div className="app-menu" ref={menuNodeRef}>
				{!hideLogo && <LogoBox />}

				<button id="button-hover-toggle" className="absolute top-5 end-2 rounded-full p-1.5 z-50" onClick={handleHoverMenu}>
					<span className="sr-only">Menu Toggle Button</span>
					<i className="ri-checkbox-blank-circle-line text-xl"></i>
				</button>

				<SimpleBar className="scrollbar">
					<SideBarContent />
				</SimpleBar>
			</div>
		</React.Fragment>
	)
}

export default LeftSideBar
