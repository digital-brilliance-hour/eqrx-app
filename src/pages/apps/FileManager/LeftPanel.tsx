import { Link } from 'react-router-dom'

// components
import { PopoverLayout } from '../../../components/HeadlessUI'

const LeftPanel = () => {
	const PopoverToggler = () => (
		<>
			<i className="ri-file-add-line me-1"></i> Create New
		</>
	)
	return (
		<>
			<div className="card p-6 h-full min-h-full lg:rounded-md rounded-none">
				<div className="relative">
					<PopoverLayout placement="bottom" toggler={<PopoverToggler />} togglerClass="btn bg-success inline-flex justify-center text-white w-full">
						<div className="min-w-40 !start-0 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 rounded-md py-1">
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
								<i className="ri-folder-5-line me-1.5"></i>
								<span>Folder</span>
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
								<i className="ri-file-2-line me-1.5"></i>
								<span>File</span>
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
								<i className="ri-file-list-3-line me-1.5"></i>
								<span>Document</span>
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
								<i className="ri-upload-line me-1.5"></i>
								<span>Choose File</span>
							</Link>
						</div>
					</PopoverLayout>
				</div>

				<div className="mt-5">
					<Link to="" className="py-2 px-1.5 transition-all text-gray-400 flex items-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
						<i className="ri-folders-line text-lg align-middle me-3"></i>My Files
					</Link>
					<Link to="" className="py-2 px-1.5 transition-all text-gray-400 flex items-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
						<i className="ri-drive-line text-lg align-middle me-3"></i>Google Drive
					</Link>
					<Link to="" className="py-2 px-1.5 transition-all text-gray-400 flex items-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
						<i className="ri-dropbox-line text-lg align-middle me-3"></i>Dropbox
					</Link>
					<Link to="" className="py-2 px-1.5 transition-all text-gray-400 flex items-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
						<i className="ri-user-voice-line text-lg align-middle me-3"></i>Share with me
					</Link>
					<Link to="" className="py-2 px-1.5 transition-all text-gray-400 flex items-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
						<i className="ri-time-line text-lg align-middle me-3"></i>Recent
					</Link>
					<Link to="" className="py-2 px-1.5 transition-all text-gray-400 flex items-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
						<i className="ri-star-line text-lg align-middle me-3"></i>Starred
					</Link>
					<Link to="" className="py-2 px-1.5 transition-all text-gray-400 flex items-center hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
						<i className="ri-delete-bin-line text-lg align-middle me-3"></i>Deleted Files
					</Link>
				</div>

				<div className="mt-16">
					<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-sm/none font-semibold uppercase bg-gray-900/20 text-gray-900 dark:bg-gray-700 dark:text-gray-400 open:opacity-0">Free</span>
					<h6 className="text-uppercase mt-3">Storage</h6>
					<div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 mt-4">
						<div className="flex flex-col justify-center overflow-hidden bg-success" role="progressbar" style={{ width: '46%' }} aria-valuenow={46} aria-valuemin={0} aria-valuemax={100}></div>
					</div>
					<p className="text-gray-500 mt-4 text-xs">7.02 GB (46%) of 15 GB used</p>
				</div>
			</div>
		</>
	)
}

export default LeftPanel
