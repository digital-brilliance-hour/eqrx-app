import { ListTaskItem } from '../TasksList/data'

interface TaskProps {
	task: ListTaskItem
}

const Task = ({ task }: TaskProps) => {
	return (
		<div className="card mb-6">
			<div className="p-6">
				<div className="mb-4">
					<input className="form-checkbox rounded text-primary" type="checkbox" id="customckeck1" defaultChecked />
					<label className="ms-1.5" htmlFor="customckeck1">
						Mark as completed
					</label>
				</div>
				<h4 className="text-base font-medium">{task.title}</h4>
				<div className="my-5">
					<div className="grid sm:grid-cols-3 gap-3">
						<div className="col-span-1">
							<p className="text-gray-400">Assigned To</p>
							<div className="flex items-center gap-3 mt-1">
								<img src={task.assignee_avatar} alt={task.assigned_to} className="h-6 rounded-full" />
								<div className="">
									<h5 className="font-medium">{task.assigned_to}</h5>
								</div>
							</div>
						</div>
						<div className="col-span-1">
							<p className="text-gray-400">Project Name</p>
							<div className="flex items-center gap-3 mt-1">
								<i className="ri-briefcase-line text-success text-lg"></i>
								<div className="">
									<h5 className="font-medium">{task.projectName}</h5>
								</div>
							</div>
						</div>
						<div className="col-span-1">
							<p className="text-gray-400">Due Date</p>
							<div className="flex items-center gap-3 mt-1">
								<i className="ri-calendar-todo-line text-success text-lg"></i>
								<div className="">
									<h5 className="font-medium">{task.due_date}</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<h5 className="mb-1">Overview:</h5>
				<p className="text-gray-400">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.</p>
				<div className="mt-8">
					<h5 className="mb-2">Checklists/Sub-tasks</h5>

					{(task.checklists || []).map((checklist, idx) => {
						return (
							<div className="mb-1" key={idx}>
								<input className="form-checkbox rounded text-primary" type="checkbox" id={`checklist-${checklist.id}`} defaultChecked={checklist.completed} />
								<label className="ms-1.5 text-gray-600" htmlFor={`checklist-${checklist.id}`}>
									{checklist.title}
								</label>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Task
