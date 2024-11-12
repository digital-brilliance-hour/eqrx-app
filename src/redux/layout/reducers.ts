// action constants
import { LayoutActionTypes, LayoutStateTypes } from './constants'

// app constants
import { LayoutTheme, LayoutDirection, LayoutWidth, SideBarType, SideBarTheme, TopBarTheme, LayoutPosition } from '../../constants/layout'

// actions
import { LayoutActionType } from './actions'

// utils
import { getLayoutConfigs } from '../../utils/layout'

const INIT_STATE = () => {
	const urlSearchParams = new URLSearchParams(window.location.search)
	const params = Object.fromEntries(urlSearchParams.entries())
	return {
		layoutTheme: params['layout_theme'] === 'dark' ? LayoutTheme.THEME_DARK : LayoutTheme.THEME_LIGHT,
		layoutDirection: params['dir'] === 'rtl' ? LayoutDirection.RIGHT_TO_LEFT : LayoutDirection.LEFT_TO_RIGHT,
		layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID,
		sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT,
		sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_DARK,
		topBarTheme: TopBarTheme.TOPBAR_LIGHT,
		layoutPosition: LayoutPosition.POSITION_FIXED,
		isOpenRightSideBar: false,
	}
}

const Layout = (state: LayoutStateTypes = INIT_STATE(), action: LayoutActionType<string>) => {
	switch (action.type) {
		case LayoutActionTypes.CHANGE_LAYOUT_THEME:
			return {
				...state,
				layoutTheme: action.payload,
			}

		case LayoutActionTypes.CHANGE_LAYOUT_DIRECTION:
			return {
				...state,
				layoutDirection: action.payload,
			}

		case LayoutActionTypes.CHANGE_LAYOUT_WIDTH: {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const layoutConfig = getLayoutConfigs(action.payload! && action.payload)
			return {
				...state,
				layoutWidth: action.payload,
				...layoutConfig,
			}
		}

		case LayoutActionTypes.CHANGE_TOPBAR_THEME:
			return {
				...state,
				topBarTheme: action.payload,
			}

		case LayoutActionTypes.CHANGE_SIDEBAR_THEME:
			return {
				...state,
				sideBarTheme: action.payload,
			}

		case LayoutActionTypes.CHANGE_SIDEBAR_TYPE:
			return {
				...state,
				sideBarType: action.payload,
			}

		case LayoutActionTypes.CHANGE_LAYOUT_POSITION:
			return {
				...state,
				layoutPosition: action.payload,
			}

		case LayoutActionTypes.SHOW_RIGHT_SIDEBAR:
			return {
				...state,
				isOpenRightSideBar: true,
			}

		case LayoutActionTypes.HIDE_RIGHT_SIDEBAR:
			return {
				...state,
				isOpenRightSideBar: false,
			}

		default:
			return state
	}
}

export default Layout
