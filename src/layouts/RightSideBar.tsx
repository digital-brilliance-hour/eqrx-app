import React, { useRef } from 'react'

// redux
import { RootState } from '../redux/store'
import { hideRightSidebar } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

// components
import ThemeCustomizer from '../components/ThemeCustomizer'
import { OffcanvasLayout } from '../components/HeadlessUI'

const RightSideBar = () => {
	const dispatch = useDispatch()
	const rightBarNodeRef: any = useRef(null)
	const { isOpenRightSideBar } = useSelector((state: RootState) => ({
		isOpenRightSideBar: state.Layout.isOpenRightSideBar,
	}))

	/**
	 * Toggles the right sidebar
	 */
	const handleRightSideBar = () => {
		dispatch(hideRightSidebar())
	}

	return (
		<React.Fragment>
			<OffcanvasLayout open={isOpenRightSideBar} toggleOffcanvas={handleRightSideBar} sizeClassName="max-w-72 w-72" placement="end">
				<ThemeCustomizer handleRightSideBar={handleRightSideBar} rightBarNodeRef={rightBarNodeRef} />
			</OffcanvasLayout>
		</React.Fragment>
	)
}

export default RightSideBar
