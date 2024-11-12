import { useEffect } from 'react'
import { useTaskList } from '../../../../hooks'
import TaskSection from './Section'
import Task from './Task'

const TaskList = () => {
	useEffect(() => {
		const mainTag = document.getElementsByTagName('main')[0]

		mainTag.classList.remove('p-6')

		return () => {
			mainTag.classList.add('p-6')
		}
	}, [])

	const { todayTask, upcomingTask, otherTask, selectedTask, selectTask } = useTaskList()
	return (
		<>
			<div className="grid xl:grid-cols-3">
				<div className="xl:col-span-2 w-full px-6">
					<div className="flex justify-between items-center my-6">
						<h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">Tasks</h4>

						<div className="md:flex hidden items-center gap-2.5 text-sm font-semibold">
							<div className="static overflow-y-hidden">
								<form>
									<div className="relative">
										<input type="text" className="form-input border border-dark/10 ps-8" placeholder="Search files..." />
										<span className="ri-search-line absolute text-base leading-9 left-2.5 top-0"></span>
									</div>
								</form>
							</div>
						</div>
					</div>

					<TaskSection title="Today" tasks={todayTask} selectTask={selectTask}></TaskSection>
					<TaskSection title="Upcoming" tasks={upcomingTask} selectTask={selectTask}></TaskSection>
					<TaskSection title="Other" tasks={otherTask} selectTask={selectTask}></TaskSection>
				</div>

				<div className="col-span-1">
					<Task {...selectedTask} />
				</div>
			</div>
		</>
	)
}

export default TaskList
