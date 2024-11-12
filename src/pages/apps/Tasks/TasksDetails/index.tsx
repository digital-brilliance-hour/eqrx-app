import { useState } from 'react'
import Task from './Task'
import Comments from './Comments'
import Attachments from './Attachments'

// dummy data
import { ListTaskItem } from '../TasksList/data'
import { Tasks } from './data'

// components
import { PageBreadcrumb } from '../../../../components'

const TaskDetails = () => {
	const [selectedTask] = useState<ListTaskItem>(Tasks[0])

	return (
		<>
			<PageBreadcrumb title="Project Detail" subName="Project" />
			<div className="grid xl:grid-cols-3 gap-6">
				<div className="xl:col-span-2">
					<Task task={selectedTask} />
					<Comments />
				</div>

				<div className="col-span-1">
					<Attachments />
				</div>
			</div>
		</>
	)
}

export default TaskDetails
