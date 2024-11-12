import { useState } from 'react'
import Recent from './Recent'
import QuickAccess from './QuickAccess'
import LeftPanel from './LeftPanel'
import { useViewPort } from '../../../hooks'

// components
import { PageBreadcrumb } from '../../../components'
import { OffcanvasLayout } from '../../../components/HeadlessUI'

// data
import { quickAccessFiles, recentFiles } from './data'

const FileManagerApp = () => {
	const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(false)

	const { width } = useViewPort()

	const handleLeftPanel = () => {
		setLeftPanelOpen(!leftPanelOpen)
	}

	return (
		<>
			<PageBreadcrumb title="File Manager" subName="Apps" />
			<div className="lg:flex gap-2">
				{width >= 1024 ? (
					<div className="lg:block hidden inset-y-0 start-0 transform h-ful min-h-full min-w-72 lg:z-0 z-50 fixed lg:static lg:translate-x-0 -translate-x-full transition-all duration-300 lg:rtl:-translate-x-0 rtl:translate-x-full" tabIndex={-1}>
						<LeftPanel />
					</div>
				) : (
					<OffcanvasLayout open={leftPanelOpen} toggleOffcanvas={handleLeftPanel} placement="start" sizeClassName="w-64 max-w-[16rem]">
						<LeftPanel />
					</OffcanvasLayout>
				)}

				<div className="card p-6 w-full">
					<div className="flex flex-wrap justify-between items-center gap-4">
						<div className="flex items-center gap-4">
							<div className="lg:hidden block">
								<button className="inline-flex items-center justify-center text-gray-700 border border-gray-200 rounded hover:bg-slate-100 dark:text-gray-400 hover:dark:bg-gray-800 dark:border-gray-600 transition h-9 w-9 duration-100" onClick={handleLeftPanel}>
									<div className="ri-menu-2-fill text-lg"></div>
								</button>
							</div>
							<form>
								<div className="relative flex rounded-md">
									<input type="text" id="trailing-button-add-on-with-icon-and-button" name="trailing-button-add-on-with-icon-and-button" className="form-input bg-slate-100 border-0 ps-8 dark:bg-slate-700" placeholder="Search files..." />
									<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
										<i className="ri-search-line"></i>
									</div>
								</div>
							</form>
						</div>
						<div>
							<button type="submit" className="btn btn-sm bg-light dark:bg-slate-700">
								<i className="ri-list-check text-sm"></i>
							</button>
							<button type="submit" className="btn btn-sm">
								<i className="ri-grid-fill text-sm"></i>
							</button>
						</div>
					</div>

					<QuickAccess quickAccessFiles={quickAccessFiles} />
					<Recent recentFiles={recentFiles} />
				</div>
			</div>
		</>
	)
}

export default FileManagerApp
