import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'
import { useTask } from '../../../../hooks'

// dummy data
import { ListTaskItem } from './data'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

// style
import 'react-quill/dist/quill.bubble.css'

const Task = (task: ListTaskItem) => {
	const PopoverToggle = () => <i className="ri-more-fill" />

	const { completed, markCompleted } = useTask(task)
	const [editorValue, setEditorValue] = useState<string>(`
  <h3>This is a simple editable area.</h3>
  <p><br></p>
  <ul>
      <li> Select a text to reveal the toolbar. </li>
      <li>
          Edit rich document on-the-fly, so elastic!
      </li>
  </ul>
  <p><br></p>
  <p>
      End of simple area
  </p>`)

	return (
		<div className="card p-6 xl:rounded-none xl:m-0 m-6">
			<div className="dropdown float-right h-4">
				<PopoverLayout toggler={<PopoverToggle />} placement="bottom-end" togglerClass="text-gray-600 dark:text-gray-400">
					<div className="min-w-40 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-600 rounded-md py-1">
						<Link className="flex items-center py-1.5 px-4 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							<i className="ri-attachment-line me-1.5"></i>
							<span>Attachment</span>
						</Link>
						<Link className="flex items-center py-1.5 px-4 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							<i className="ri-edit-box-line me-1.5"></i>
							<span>Edit</span>
						</Link>
						<Link className="flex items-center py-1.5 px-4 text-sm text-gray-500 hover:bg-slate-100 hover:text-slate-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
							<i className="ri-file-copy-2-line me-1.5"></i>
							<span>Mark as Duplicate</span>
						</Link>
						<hr className="my-3 border-gray-300 dark:border-gray-700" />
						<Link className="flex items-center py-1.5 px-4 text-sm text-danger hover:bg-slate-100 dark:hover:bg-gray-700" to="">
							<i className="ri-delete-bin-line me-1.5"></i>
							<span>Remove</span>
						</Link>
					</div>
				</PopoverLayout>
			</div>

			<div className="flex gap-2 items-center float-left">
				<input type="checkbox" className="form-checkbox rounded" id="completedCheck" defaultChecked={completed} onChange={markCompleted} />
				<label className="font-semibold text-gray-500 dark:text-gray-300 text-sm" htmlFor="completedCheck">
					Mark as completed
				</label>
			</div>

			<hr className="mt-9 mb-3 border-gray-300 dark:border-gray-700" />

			<div className="">
				<div className="w-auto">
					<h4 className="text-base mb-2.5 font-semibold text-gray-500 dark:text-gray-300">{task.title}</h4>

					<div className="flex flex-wrap items-center gap-y-3">
						<div className="sm:w-1/2 px-3">
							<p className="mt-3 mb-1.5 text-gray-500 dark:text-gray-300 text-sm">Assigned To</p>
							<div className="flex items-center">
								<img src={task.assignee_avatar} alt={task.assigned_to} className="h-6 rounded-full me-3" />
								<div>
									<h5 className="text-sm">{task.assigned_to}</h5>
								</div>
							</div>
						</div>

						<div className="sm:w-1/2 px-3">
							<p className="mt-3 mb-1.5 text-gray-500 dark:text-gray-300 text-sm">Due Date</p>
							<div className="flex items-center">
								<i className="ri-calendar-todo-line text-lg text-success me-1.5"></i>
								<div>
									<h5 className="text-sm">{task.due_date}</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="flex mt-6">
						<div className="w-full">
							<div className="border rounded border-gray-300 dark:border-gray-700">
								<ReactQuill theme="bubble" value={editorValue} onChange={setEditorValue} style={{ height: 130 }} />
							</div>
						</div>
					</div>
					<h5 className="mt-9 mb-3 text-base">Checklists/Sub-tasks</h5>

					{task.checklists.map((checklist, idx) => (
						<div key={idx} className="flex items-center gap-2 mt-1.5">
							<input type="checkbox" className="form-checkbox rounded" id={`checklist-${checklist.id}`} defaultChecked={checklist.completed} />
							<label className="font-semibold text-gray-500 dark:text-gray-300 text-sm" htmlFor={`checklist-${checklist.id}`}>
								{checklist.title}
							</label>
						</div>
					))}

					<h5 className="mt-9 mb-3 text-base">Attachments</h5>

					{task.attachments.map((file, idx) => {
						const ext = file.filename.substr(file.filename.lastIndexOf('.') + 1)
						return (
							<div key={idx} className="card mb-3 border shadow-none border-gray-300 dark:border-gray-700">
								<div className="p-1.5">
									<div className="flex justify-between items-center">
										<div className="flex items-center gap-3">
											<div className="w-auto">
												<div className="w-12 h-12">
													<span className="h-full w-full inline-flex items-center justify-center bg-primary text-white font-semibold rounded">{ext.toUpperCase()}</span>
												</div>
											</div>
											<div className="">
												<Link to="" className="text-sm text-gray-400 font-bold">
													{file.filename}
												</Link>
												<p className="text-sm">{file.size}</p>
											</div>
										</div>
										<div className="w-auto float-right" id="tooltip-container9">
											<Link to="" className="text-xl">
												<i className="ri-delete-bin-line"></i>
											</Link>
											<Link to="" className="text-xl text-danger">
												<i className="ri-close-fill"></i>
											</Link>
										</div>
									</div>
								</div>
							</div>
						)
					})}

					<div className="mt-6">
						<div className="w-full">
							<h5 className="mb-6 text-base">Comments</h5>

							{task.comments.map((comment, idx) => (
								<React.Fragment key={idx}>
									<div className="flex mt-6 p-1.5">
										<img src={comment.author_avatar} className="rounded-full me-3 h-9" alt={comment.author} />
										<div className="w-full">
											<h5 className="text-sm">
												<span className="float-right text-muted text-xs">{comment.posted_on}</span>
												{comment.author}
											</h5>
											<p className="mt-1.5 text-gray-400">{comment.text}</p>
										</div>
									</div>
									<hr className="my-5 border-gray-300 dark:border-gray-700" />
								</React.Fragment>
							))}
						</div>
					</div>

					<div className="flex pt-3">
						<div className="w-full">
							<div className="border rounded border-gray-300 dark:border-gray-700">
								<form action="#" className="">
									<textarea rows={3} className="form-input text-gray-400 border-0 resize-none placeholder:text-gray-400" placeholder="Your comment..."></textarea>
									<div className="p-2 bg-gray-400/10 dark:">
										<div className="flex items-center gap-2">
											<Link to="#" className="btn btn-sm bg-light dark:bg-gray-600 text-gray-950 dark:text-white">
												<i className="ri-upload-line text-sm"></i>
											</Link>
											<Link to="#" className="btn btn-sm bg-light dark:bg-gray-600 text-gray-950 dark:text-white">
												<i className="ri-at-line text-sm"></i>
											</Link>
											<button type="submit" className="btn btn-sm bg-success text-white ms-auto">
												<i className="ri-send-plane-2-line me-1"></i>Submit
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Task
