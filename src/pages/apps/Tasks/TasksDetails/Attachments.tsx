import { Link } from 'react-router-dom'

// components
import { FileUploader } from '../../../../components'

const Attachments = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title text-base mb-3">Attachments</h5>
				<div className="mb-6">
					<FileUploader icon="ri-upload-cloud-line text-4xl" text="Drop files here or click to upload." />
					<div className="mt-3 border rounded-md border-gray-200 p-3 mb-2 dark:border-gray-600">
						<div className="float-right">
							<Link to="" className="btn btn-link">
								<i className="ri-download-line text-lg"></i>
							</Link>
						</div>

						<div className="flex items-center gap-3">
							<span className="flex items-center justify-center bg-primary/10 text-primary font-semibold rounded-md w-12 h-12">ZIP</span>
							<div>
								<Link to="" className="font-semibold">
									Attex-sketch-design.zip
								</Link>
								<p>2.3 MB</p>
							</div>
						</div>
					</div>

					<div className="border rounded-md border-gray-200 p-3 mb-2 dark:border-gray-600">
						<div className="float-right">
							<Link to="" className="btn btn-link">
								<i className="ri-download-line text-lg"></i>
							</Link>
						</div>

						<div className="flex items-center gap-3">
							<span className="flex items-center justify-center bg-primary/10 text-primary font-semibold rounded-md w-12 h-12">JPG</span>
							<div>
								<Link to="" className="font-semibold">
									Dashboard-design.jpg
								</Link>
								<p>3.25 MB</p>
							</div>
						</div>
					</div>

					<div className="border rounded-md border-gray-200 p-3 mb-2 dark:border-gray-600">
						<div className="float-right">
							<Link to="" className="btn btn-link">
								<i className="ri-download-line text-lg"></i>
							</Link>
						</div>

						<div className="flex items-center gap-3">
							<span className="flex items-center justify-center bg-secondary text-white font-semibold rounded-md w-12 h-12">.MP4</span>
							<div>
								<Link to="" className="font-semibold">
									Admin-bug-report.mp4
								</Link>
								<p>7.05 MB</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Attachments
