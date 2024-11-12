import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTask, useToggle } from '../../../../hooks'

// components
import { Collapse } from '../../../../components/FrostUI'

// dummy data
import { ListTaskItem } from './data'

const Task = ({ task, selectTask, classname }: { task: ListTaskItem; classname: string; selectTask: (task: ListTaskItem) => void }) => {
	const { completed, markCompleted } = useTask(task)
	return (
		<>
			<div className={`grid md:grid-cols-2 gap-4 ${classname}`}>
				<div className="flex items-center gap-2">
					<input type="checkbox" className="form-checkbox rounded text-primary" id={`task-${task.id}`} defaultChecked={completed} onChange={(event) => markCompleted(event, selectTask)} />
					<label className="font-semibold text-gray-500 dark:text-gray-300" htmlFor={`task-${task.id}`} onClick={() => selectTask(task)}>
						{task.title}
					</label>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex-grow">
						<div className="h-8 w-8">
							<img className="inline-block h-full w-full rounded-full" src={task.assignee_avatar} alt="avatar" id={`task-avatar-${task.id}`} />
						</div>
					</div>
					<ul className="text-sm text-end">
						<li className="inline-block me-2">
							<i className="ri-calendar-todo-line text-base me-1.5"></i> {task.due_date}
						</li>
						<li className="inline-block me-2 ms-1">
							<i className="ri-list-check-3 text-base me-1.5"></i> {task.checklists.filter((t) => t.completed).length} / {task.checklists.length}
						</li>
						<li className="inline-block me-2 ms-1">
							<i className="ri-chat-2-line text-base me-1.5"></i> 21
						</li>
						<li className="inline-block me-2 ms-2">
							<span className={`${task.priority === 'High' ? 'bg-danger/20 text-danger' : task.priority === 'Medium' ? 'bg-info/20 text-info' : 'bg-success/20 text-success'} rounded text-xs/none align-baseline font-medium p-1`}>{task.priority}</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

interface TaskSectionProps {
	title: string
	tasks: Array<ListTaskItem>
	selectTask: (task: ListTaskItem) => void
}

const TaskSection = ({ title, tasks, selectTask }: TaskSectionProps) => {
	const [isOpen, toggleCollapse] = useToggle(true)

	const [taskList] = useState<ListTaskItem[]>(tasks)

	return (
		<Collapse open={isOpen} toggleCollapse={toggleCollapse}>
			<Collapse.Toggle as="h5" className="mb-3">
				<Link className="text-gray-600 dark:text-gray-200 text-sm" to="#">
					<i className="ri-arrow-down-s-line text-lg align-middle me-2"></i>
					{title} <span className="text-gray-500 dark:text-gray-300">({taskList.length})</span>
				</Link>
			</Collapse.Toggle>

			<Collapse.Menu className="overflow-hidden transition-[height] duration-300">
				<div className="card p-6 mb-8">
					{taskList.map((task, idx) => (
						<Task selectTask={selectTask} task={task} key={idx} classname={idx === taskList.length - 1 ? '' : 'mb-4'} />
					))}
				</div>
			</Collapse.Menu>
		</Collapse>
	)
}

export default TaskSection
