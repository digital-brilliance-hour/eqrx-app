import * as LayoutConstants from '../../constants/layout'

interface TopBarThemeProps {
	handleChangeTopBarTheme: (value: any) => void
	topBarTheme?: string
	layoutConstants: typeof LayoutConstants.TopBarTheme
}

const TopBarTheme = ({ handleChangeTopBarTheme, topBarTheme, layoutConstants }: TopBarThemeProps) => {
	return (
		<>
			<div className="mb-6">
				<h5 className="font-semibold text-sm mb-3">Topbar Color</h5>
				<div className="flex flex-col gap-2">
					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-topbar-color" id="topbar-color-light" value={layoutConstants.TOPBAR_LIGHT} onChange={(e) => handleChangeTopBarTheme(e.target.value)} checked={topBarTheme === layoutConstants.TOPBAR_LIGHT} />
						<label className="ms-1.5" htmlFor="topbar-color-light">
							{' '}
							Light{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-topbar-color" id="topbar-color-dark" value={layoutConstants.TOPBAR_DARK} onChange={(e) => handleChangeTopBarTheme(e.target.value)} checked={topBarTheme === layoutConstants.TOPBAR_DARK} />
						<label className="ms-1.5" htmlFor="topbar-color-dark">
							{' '}
							Dark{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-topbar-color" id="topbar-color-brand" value={layoutConstants.TOPBAR_BRAND} onChange={(e) => handleChangeTopBarTheme(e.target.value)} checked={topBarTheme === layoutConstants.TOPBAR_BRAND} />
						<label className="ms-1.5" htmlFor="topbar-color-brand">
							{' '}
							Brand{' '}
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default TopBarTheme
