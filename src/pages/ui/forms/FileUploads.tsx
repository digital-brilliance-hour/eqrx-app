// components
import { FileUploader, PageBreadcrumb } from '../../../components'

const FileUploads = () => {
	return (
		<>
			<PageBreadcrumb title="File Upload" subName="Forms" />
			<div className="card">
				<div className="p-6">
					<div className="flex justify-between items-center">
						<h4 className="card-title mb-1">Dropzone</h4>
					</div>

					<div className="pt-5">
						<FileUploader icon="ri-upload-cloud-line text-4xl text-gray-300 dark:text-gray-200" text="Drop files here or click to upload." />
						<div className="text-center mt-4">
							<button type="button" className="btn bg-violet-500 border-violet-500 text-white">
								Send Files
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FileUploads
