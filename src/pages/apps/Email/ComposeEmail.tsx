import { useState } from 'react'
import ReactQuill from 'react-quill'

// components
import { ModalLayout } from '../../../components/HeadlessUI'

// style
import 'react-quill/dist/quill.snow.css'

interface ComposeMailProps {
	isModalOpen: boolean
	toggleComposeModal: () => void
}

const ComposeEmail = ({ isModalOpen, toggleComposeModal }: ComposeMailProps) => {
	const [editorValue, setEditorValue] = useState<string>(`
  <h3>This is a simple editable area.</h3>
  <p>
    End of simple area
  </p>`)

	return (
		<ModalLayout showModal={isModalOpen} toggleModal={toggleComposeModal} panelClassName="sm:max-w-lg sm:w-full" placement="justify-center items-start">
			<div className="duration-500 overflow-hidden ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
				<div className="flex justify-between items-center p-4 bg-primary ">
					<h3 className="font-semibold text-white text-lg">New Message</h3>
					<button className="text-white" onClick={toggleComposeModal} type="button">
						<i className="ri-close-line text-xl"></i>
					</button>
				</div>
				<div className="p-1.5">
					<div className="px-6 pt-6 pb-0">
						<form>
							<div className="mb-3 space-y-2">
								<label htmlFor="msgto" className="text-gray-500 font-semibold">
									To
								</label>
								<input type="text" id="msgto" className="form-input" placeholder="Example@email.com" />
							</div>

							<div className="mb-3 space-y-2">
								<label htmlFor="mailsubject" className="text-gray-500 font-semibold">
									Subject
								</label>
								<input type="text" id="mailsubject" className="form-input" placeholder="Your subject" />
							</div>

							<div className="mb-3">
								<label className="text-gray-500 font-semibold mb-2">Message</label>
								<div className="mb-10">
									<ReactQuill
										theme="snow"
										value={editorValue}
										onChange={setEditorValue}
										style={{ height: 200 }}
										modules={{
											toolbar: {
												container: [['bold', 'italic', 'underline', 'strike'], [{ color: [] }], ['blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }], ['link', 'image', 'video']],
											},
										}}
									/>
								</div>
							</div>
						</form>
					</div>
					<div className="flex items-center gap-1 px-6 py-6">
						<button type="button" className="btn bg-primary text-white" onClick={toggleComposeModal}>
							<i className="ri-send-plane-2-line me-1"></i> Send Message
						</button>
						<button type="button" className="btn bg-light text-gray-800 dark:bg-gray-700 dark:text-gray-200" onClick={toggleComposeModal}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</ModalLayout>
	)
}

export default ComposeEmail
