import { Link } from 'react-router-dom'

// components
import { PageBreadcrumb } from '../../components'

const Breadcrumb = () => {
	return (
		<>
			<PageBreadcrumb title="Breadcrumb" subName="Base UI" />
			<div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Simple</h4>
						<nav className="flex" aria-label="Breadcrumb">
							<ol role="list" className="flex items-center text-sm font-semibold space-x-4">
								<li>
									<div className="flex items-center">
										<Link to="#" className="text-gray-400 hover:text-gray-500">
											<i className="ri-home-4-line text-lg flex-shrink-0 align-middle"></i>
											<span className="sr-only">Home</span>
										</Link>
									</div>
								</li>

								<li>
									<div className="flex items-center">
										<i className="ri-arrow-right-s-line text-lg flex-shrink-0 text-gray-400"></i>
										<Link to="#" className="ms-4 text-sm font-medium text-gray-500 hover:text-gray-700">
											Apps
										</Link>
									</div>
								</li>

								<li>
									<div className="flex items-center">
										<i className="ri-arrow-right-s-line text-lg flex-shrink-0 text-gray-400"></i>
										<Link to="#" className="ms-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">
											Calendar
										</Link>
									</div>
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Example</h4>
						<ol className="flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
							<li className="text-sm text-gray-600 dark:text-gray-400">
								<Link className="flex items-center hover:text-primary" to="#">
									Home
									<svg className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
									</svg>
								</Link>
							</li>

							<li className="text-sm text-gray-600 dark:text-gray-400">
								<Link className="flex items-center hover:text-primary" to="#">
									App Center
									<svg className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
										<path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
									</svg>
								</Link>
							</li>

							<li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
								Application
							</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	)
}

export default Breadcrumb
