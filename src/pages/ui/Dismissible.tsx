import { Link } from 'react-router-dom'

// components
import { PageBreadcrumb, handleDismiss } from '../../components'

const Dismissible = () => {
	return (
		<>
			<PageBreadcrumb title="Dismissable" subName="Base UI" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
				<div className="space-y-6">
					<div className="card">
						<div className="p-6">
							<h4 className="card-title mb-4">Dismissible</h4>

							<div id="dismiss-example" className="border bg-info/10 text-info border-info/20 rounded px-4 py-3 flex justify-between items-center">
								<p>
									<span className="font-medium">Alert:</span>
									You can dismiss this alert by, simply click on close button
								</p>
								<button className="flex-shrink-0" type="button" onClick={() => handleDismiss('dismiss-example')}>
									<i className="ri-close-line text-xl"></i>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Card Dismissible</h4>

						<div className="card shadow-md max-w-xs relative transition-all duration-300" id="dismiss-card">
							<div className="absolute end-2 top-2">
								<button onClick={() => handleDismiss('dismiss-card')} className="ms-auto h-8 w-8 rounded-full bg-gray-500/20 flex justify-center items-center ">
									<i className="ri-close-line text-xl"></i>
								</button>
							</div>
							<div className="p-4">
								<h3 className="text-lg font-bold text-gray-800 dark:text-white">Card title</h3>
								<p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">Card subtitle</p>
								<p className="mt-2 text-gray-800 dark:text-gray-400">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<Link className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-primary hover:text-sky-700" to="#">
									Card link
									<i className="ri-arrow-right-s-line"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Dismissible
