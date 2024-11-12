import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import useFileUploader from './useFileUploader'
import React from 'react'

export interface FileType extends File {
	preview?: string
	formattedSize?: string
}

interface FileUploaderProps extends ChildrenProps {
	onFileUpload?: (files: FileType[]) => void
	showPreview?: boolean
}

type ChildrenProps = {
	icon?: string
	text?: string
	textClass?: string
	extraText?: string
	classname?: string
}

const FileUploader = ({ showPreview = true, onFileUpload, icon, text }: FileUploaderProps) => {
	const { selectedFiles, handleAcceptedFiles, removeFile } = useFileUploader(showPreview)

	return (
		<>
			<Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles, onFileUpload)}>
				{({ getRootProps, getInputProps }) => (
					<div className="dropzone flex justify-center items-center">
						<div className="fallback">
							<input {...getInputProps()} name="file" type="file" multiple />
						</div>
						<div className="dz-message needsclick" {...getRootProps()}>
							<div className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
								<i className={icon}></i>
							</div>
							<h5 className="text-xl text-gray-600 dark:text-gray-200">{text}</h5>
						</div>
					</div>
				)}
			</Dropzone>

			{showPreview && selectedFiles.length > 0 && (
				<div>
					{(selectedFiles || []).map((file, idx) => {
						return (
							<React.Fragment key={idx}>
								<div className="border rounded-md border-gray-200 p-3 mb-2 dark:border-gray-600 mt-2">
									<div className="float-right">
										<Link to="" className="btn btn-link">
											<i className="ri-close-line text-lg" onClick={() => removeFile(file)}></i>
										</Link>
									</div>

									<div className="flex items-center gap-3">
										{file.preview && <img data-dz-thumbnail="" className="h-12 w-12 rounded bg-light" style={{ objectFit: 'cover' }} alt={file.name} src={file.preview} />}
										{!file.preview && <span className="flex items-center justify-center bg-primary/10 text-primary font-semibold rounded-md w-12 h-12">{file.type.split('/')[0]}</span>}
										<div>
											<Link to="" className="font-semibold">
												{file.name}
											</Link>
											<p>{file.formattedSize}</p>
										</div>
									</div>
								</div>
							</React.Fragment>
						)
					})}
				</div>
			)}
		</>
	)
}

export { FileUploader }
