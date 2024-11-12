import * as LayoutConstants from '../../constants/layout'

interface SideBarThemeProps {
	handleChangeSideBarTheme: (value: any) => void
	sideBarTheme?: string
	layoutConstants: typeof LayoutConstants.SideBarTheme
}

const SideBarTheme = ({ handleChangeSideBarTheme, sideBarTheme, layoutConstants }: SideBarThemeProps) => {
	return (
		<>
			<div className="mb-6">
				<h5 className="font-semibold text-sm mb-3">Menu Color</h5>
				<div className="flex flex-col gap-2">
					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-menu-color" id="menu-color-light" value={layoutConstants.LEFT_SIDEBAR_THEME_LIGHT} onChange={(e) => handleChangeSideBarTheme(e.target.value)} checked={sideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT} />
						<label className="ms-1.5" htmlFor="menu-color-light">
							{' '}
							Light{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-menu-color" id="menu-color-dark" value={layoutConstants.LEFT_SIDEBAR_THEME_DARK} onChange={(e) => handleChangeSideBarTheme(e.target.value)} checked={sideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_DARK} />
						<label className="ms-1.5" htmlFor="menu-color-dark">
							{' '}
							Dark{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-menu-color" id="menu-color-brand" value={layoutConstants.LEFT_SIDEBAR_THEME_BRAND} onChange={(e) => handleChangeSideBarTheme(e.target.value)} checked={sideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_BRAND} />
						<label className="ms-1.5" htmlFor="menu-color-brand">
							{' '}
							Brand{' '}
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default SideBarTheme
