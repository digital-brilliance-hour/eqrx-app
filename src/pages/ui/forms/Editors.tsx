import ReactQuill from 'react-quill'

// components
import { PageBreadcrumb } from '../../../components'

// styles
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'

const Editors = () => {
	let valueBubble = ''
	let valueSnow = ''
	valueSnow = valueBubble = `<h3><span className="ql-size-large">Hello World!</span></h3>
  <p><br/></p>
  <h3>This is an simple editable area.</h3>
  <p><br/></p>
  <ul>
    <li>Select a text to reveal the toolbar.</li>
    <li>Edit rich document on-the-fly, so elastic!</li>
  </ul>
  <p><br/></p>
  <p>End of simple area</p>`

	const modules = {
		toolbar: [[{ font: [] }, { size: [] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ script: 'super' }, { script: 'sub' }], [{ header: [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }], ['direction', { align: [] }], ['link', 'image', 'video'], ['clean']],
	}

	return (
		<>
			<PageBreadcrumb title="Editor" subName="Form" />
			<div className="flex flex-col gap-6">
				<div className="card">
					<div className="p-6">
						<div className="flex justify-between items-center">
							<h4 className="card-title">Snow Editor</h4>
						</div>

						<div className="pt-5">
							<ReactQuill modules={modules} defaultValue={valueSnow} theme="snow" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<div className="flex justify-between items-center">
							<h4 className="card-title">Bubble Editor</h4>
						</div>

						<div className="pt-5">
							<ReactQuill defaultValue={valueBubble} theme="bubble" style={{ height: 300 }} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Editors
