import * as LayoutConstants from '../../constants/layout'

interface SideBarTypeProps {
	handleChangeSideBarType: (value: any) => void
	sideBarType?: string
	layoutConstants: typeof LayoutConstants.SideBarType
}

const SideBarType = ({ handleChangeSideBarType, sideBarType, layoutConstants }: SideBarTypeProps) => {
	return (
		<>
			<div className="mb-6">
				<h5 className="font-semibold text-sm mb-3">Sidenav View</h5>
				<div className="flex flex-col gap-2">
					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-sidenav-view" id="sidenav-view-default" value={layoutConstants.LEFT_SIDEBAR_TYPE_DEFAULT} onChange={(e) => handleChangeSideBarType(e.target.value)} checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_DEFAULT} />
						<label className="ms-1.5" htmlFor="sidenav-view-default">
							{' '}
							Default{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-sidenav-view" id="sidenav-view-sm" value={layoutConstants.LEFT_SIDEBAR_TYPE_SMALL} onChange={(e) => handleChangeSideBarType(e.target.value)} checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_SMALL} />
						<label className="ms-1.5" htmlFor="sidenav-view-sm">
							{' '}
							Small{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-sidenav-view" id="sidenav-view-md" value={layoutConstants.LEFT_SIDEBAR_TYPE_COMPACT} onChange={(e) => handleChangeSideBarType(e.target.value)} checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_COMPACT} />
						<label className="ms-1.5" htmlFor="sidenav-view-md">
							{' '}
							Compact{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-sidenav-view" id="sidenav-view-mobile" value={layoutConstants.LEFT_SIDEBAR_TYPE_MOBILE} onChange={(e) => handleChangeSideBarType(e.target.value)} checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_MOBILE} />
						<label className="ms-1.5" htmlFor="sidenav-view-mobile">
							{' '}
							Mobile{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-sidenav-view" id="sidenav-view-hidden" value={layoutConstants.LEFT_SIDEBAR_TYPE_HIDDEN} onChange={(e) => handleChangeSideBarType(e.target.value)} checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_HIDDEN} />
						<label className="ms-1.5" htmlFor="sidenav-view-hidden">
							{' '}
							Hidden{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-sidenav-view" id="sidenav-view-hover" value={layoutConstants.LEFT_SIDEBAR_TYPE_HOVER} onChange={(e) => handleChangeSideBarType(e.target.value)} checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_HOVER} />
						<label className="ms-1.5" htmlFor="sidenav-view-hover">
							{' '}
							Hover{' '}
						</label>
					</div>

					<div className="flex items-center">
						<input className="form-switch form-switch-sm" type="checkbox" name="data-sidenav-view" id="sidenav-view-hover-active" value={layoutConstants.LEFT_SIDEBAR_TYPE_HOVERACTIVE} onChange={(e) => handleChangeSideBarType(e.target.value)} checked={sideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_HOVERACTIVE} />
						<label className="ms-1.5" htmlFor="sidenav-view-hover-active">
							{' '}
							Hover Active{' '}
						</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default SideBarType
