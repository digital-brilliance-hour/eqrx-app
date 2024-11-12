import * as LayoutConstants from '../../constants/layout'

interface LayoutThemeProps {
	handleChangeLayoutTheme: (value: any) => void
	layoutTheme?: string
	layoutConstants: typeof LayoutConstants.LayoutTheme
}

const LayoutTheme = ({ handleChangeLayoutTheme, layoutTheme, layoutConstants }: LayoutThemeProps) => {
	return (
		<>
			<div className="mb-6">
				<h5 className="font-semibold text-sm mb-3">Theme</h5>
				<div className="flex flex-col gap-2">
					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-mode" id="layout-color-light" value={layoutConstants.THEME_LIGHT} onChange={(e) => handleChangeLayoutTheme(e.target.value)} checked={layoutTheme === layoutConstants.THEME_LIGHT} />
						<label className="ms-1.5" htmlFor="layout-color-light">
							{' '}
							Light{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-mode" id="layout-color-dark" value={layoutConstants.THEME_DARK} onChange={(e) => handleChangeLayoutTheme(e.target.value)} checked={layoutTheme === layoutConstants.THEME_DARK} />
						<label className="ms-1.5" htmlFor="layout-color-dark">
							{' '}
							Dark{' '}
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default LayoutTheme
