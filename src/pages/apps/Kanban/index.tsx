import { useState } from 'react'
import { Link } from 'react-router-dom'

import { TaskTypes, tasks, assignees } from './data'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from 'react-hook-form'
import TaskItem from './TaskItem'

//image
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import Img1 from '@/assets/images/small/small-1.jpg'

// components
import { FormInput, CustomDatepicker, PageBreadcrumb } from '../../../components'
import { ModalLayout } from '../../../components/HeadlessUI'
import { Tab } from '@headlessui/react'

interface StateType {
	todoTasks: TaskTypes[]
	inprogressTasks: TaskTypes[]
	reviewTasks: TaskTypes[]
	doneTasks: TaskTypes[]
}

const KanbanApp = () => {
	const [state, setState] = useState<StateType>({
		todoTasks: tasks.filter((t) => t.status === 'Todo'),
		inprogressTasks: tasks.filter((t) => t.status === 'Inprogress'),
		reviewTasks: tasks.filter((t) => t.status === 'Review'),
		doneTasks: tasks.filter((t) => t.status === 'Done'),
	})
	const [totalTasks, setTotalTasks] = useState<number>(tasks.length)
	const [newTaskModal, setNewTaskModal] = useState<boolean>(false)
	const [descriptionModal, setDescriptionModal] = useState<boolean>(false)
	const [newTaskDetails, setNewTaskDetails] = useState<any>(null)

	const BreadcrumbChild = () => {
		return (
			// 768
			<button
				className="btn btn-sm !rounded bg-success text-white"
				type="button"
				onClick={() => {
					toggleNewTaskModal()
					newTask('Todo', 'todoTasks')
				}}
			>
				Add Task
			</button>
		)
	}

	/*
	 * Form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			category: yup.string().required(),
			title: yup.string().required(),
			priority: yup.string().required(),
			description: yup.string().required(),
			assignTo: yup.string().required(),
		})
	)

	/*
	 * Form methods
	 */
	const methods = useForm({ resolver: schemaResolver })
	const {
		handleSubmit,
		register,
		control,
		reset,
		formState: { errors },
	} = methods

	/**
	 * Toggles the new task modal
	 */
	function toggleNewTaskModal() {
		setNewTaskModal((prevState) => !prevState)
	}

	/**
	 * Toggles the description modal
	 */
	const toggleDescriptionModal = () => {
		setDescriptionModal((prevState) => !prevState)
	}

	/**
	 * Creates new empty task with given status
	 * @param status
	 * @param queue
	 */
	const newTask = (status: string, queue: string) => {
		setNewTaskDetails({
			dueDate: new Date(),
			status: status,
			queue: queue,
		})
		setNewTaskModal(true)
	}

	/**
	 * When date changes
	 * @param {} date
	 */
	const handleDateChange = (date: Date) => {
		if (newTaskDetails) {
			// setState({
			//     ...state,
			//     newTask: { ...state.newTask, dueDate: date },
			// });
			setNewTaskDetails({ ...newTaskDetails, dueDate: date })
		}
	}

	// a little function to help us with reordering the result
	const reorder = (list: any[], startIndex: number, endIndex: number) => {
		const result = Array.from(list)
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)

		return result
	}

	/**
	 * Moves an item from one list to another list.
	 */
	const move = (source: Iterable<unknown> | ArrayLike<unknown>, destination: Iterable<unknown> | ArrayLike<unknown>, droppableSource: { index: number; droppableId: string | number }, droppableDestination: { index: number; droppableId: string | number }) => {
		const sourceClone = Array.from(source)
		const destClone = Array.from(destination)
		const [removed] = sourceClone.splice(droppableSource.index, 1)
		destClone.splice(droppableDestination.index, 0, removed)
		const result: any = {}
		result[droppableSource.droppableId] = sourceClone
		result[droppableDestination.droppableId] = destClone

		return result
	}

	/**
	 * Gets the list
	 */
	const getList = (id: string) => {
		const modifiedState: any = { ...state }
		const stateTasks: any = modifiedState[id] && modifiedState[id]
		return stateTasks
	}

	/**
	 * On drag end
	 */
	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result

		// dropped outside the list
		if (!destination) {
			return
		}
		if (source.droppableId === destination.droppableId) {
			const items = reorder(getList(source.droppableId), source.index, destination.index)
			const localState: any = { ...state }
			localState[source.droppableId] = items
			setState(localState)
		} else {
			const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination)
			const localState = { ...state, ...result }
			setState(localState)
		}
	}

	/**
	 * Handles the new task form submission
	 */
	const handleNewTask = (values: any) => {
		const formData = {
			category: values.category,
			title: values.title,
			priority: values.priority,
			description: values.description,
			userAvatar: [JSON.parse(values.assignTo)],
		}

		const newTask = {
			...newTaskDetails,
			...formData,
			id: totalTasks + 1,
			comments: 35,
			dueDate: newTaskDetails.dueDate.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			}),
		}
		const modifiedState: any = { ...state }
		const tasks = [...getList(newTaskDetails.queue), newTask]
		modifiedState[newTaskDetails.queue] = [...tasks]
		setState(modifiedState)
		setNewTaskModal(false)
		setTotalTasks(totalTasks + 1)

		// reset the form after submission
		reset()
	}

	return (
		<>
			<PageBreadcrumb title="Kanban" subName="Apps" addedChild={<BreadcrumbChild />} />
			<div className="grid w-full">
				<div className="overflow-hidden text-gray-700 dark:text-slate-400">
					<DragDropContext onDragEnd={onDragEnd}>
						<div className="flex overflow-x-auto custom-scroll gap-6 pb-4 h-[calc(100vh-235px)]">
							<Droppable droppableId="todoTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="flex flex-col flex-shrink-0 w-80 border rounded-md border-gray-200 dark:border-gray-700 p-4">
										<h5 className="uppercase mb-4">ToDo ({state.todoTasks.length})</h5>
										<div className="flex flex-col gap-4 kanban-board custom-scroll overflow-x-hidden overflow-y-auto px-1 h-full">
											{(state.todoTasks || []).map((item, idx) => (
												<Draggable draggableId={item.id + ''} index={idx} key={item.id}>
													{(provided: any) => (
														<div className="card cursor-pointer" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
															<TaskItem task={item} toggleDescriptionModal={toggleDescriptionModal} />
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									</div>
								)}
							</Droppable>

							<Droppable droppableId="inprogressTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="flex flex-col flex-shrink-0 w-80 border rounded-md border-gray-200 dark:border-gray-700 p-4">
										<h5 className="uppercase mb-4">IN PROGRESS ({state.inprogressTasks.length})</h5>
										<div className="flex flex-col gap-4 kanban-board custom-scroll overflow-x-hidden overflow-y-auto px-1 h-full">
											{(state.inprogressTasks || []).map((item, idx) => (
												<Draggable draggableId={item.id + ''} index={idx} key={item.id}>
													{(provided: any) => (
														<div className="card cursor-pointer" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
															<TaskItem task={item} toggleDescriptionModal={toggleDescriptionModal} />
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									</div>
								)}
							</Droppable>

							<Droppable droppableId="reviewTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="flex flex-col flex-shrink-0 w-80 border rounded-md border-gray-200 dark:border-gray-700 p-4">
										<h5 className="uppercase mb-4">Review ({state.reviewTasks.length})</h5>
										<div className="flex flex-col gap-4 kanban-board custom-scroll overflow-x-hidden overflow-y-auto px-1 h-full">
											{(state.reviewTasks || []).map((item, idx) => (
												<Draggable draggableId={item.id + ''} index={idx} key={item.id}>
													{(provided: any) => (
														<div className="card cursor-pointer" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
															<TaskItem task={item} toggleDescriptionModal={toggleDescriptionModal} />
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									</div>
								)}
							</Droppable>

							<Droppable droppableId="doneTasks">
								{(provided: any) => (
									<div ref={provided.innerRef} className="flex flex-col flex-shrink-0 w-80 border rounded-md border-gray-200 dark:border-gray-700 p-4">
										<h5 className="uppercase mb-4">Done ({state.doneTasks.length})</h5>
										<div className="flex flex-col gap-4 kanban-board custom-scroll overflow-x-hidden overflow-y-auto px-1 h-full">
											{(state.doneTasks || []).map((item, idx) => (
												<Draggable draggableId={item.id + ''} index={idx} key={item.id}>
													{(provided: any) => (
														<div className="card cursor-pointer" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
															<TaskItem task={item} toggleDescriptionModal={toggleDescriptionModal} />
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									</div>
								)}
							</Droppable>
						</div>
					</DragDropContext>
				</div>
			</div>

			{/* Add New Task Modal */}
			<ModalLayout showModal={newTaskModal} toggleModal={toggleNewTaskModal} panelClassName="min-w-[768px] mt-8 rounded-none" aria-hidden="true">
				<div className="duration-300 ease-in-out transition-all sm:max-w-3xl sm:w-full sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
					<div className="flex justify-between items-center py-3 px-6 border-b dark:border-gray-700">
						<h3 className="font-medium text-gray-600 dark:text-white text-base">Create New Task</h3>
						<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" type="button" onClick={toggleNewTaskModal}>
							<i className="ri-close-line text-2xl" />
						</button>
					</div>
					<div className="py-3 px-6 overflow-y-auto">
						<form onSubmit={handleSubmit(handleNewTask)}>
							<FormInput name="category" label="Project" type="select" containerClass="w-full space-y-1.5 mb-6" className="form-select" key="category" register={register} errors={errors} control={control}>
								<option>Attex</option>
								<option>CRM</option>
								<option>Design</option>
								<option>iOS</option>
							</FormInput>

							<div className="grid sm:grid-cols-12 gap-6">
								<div className="lg:col-span-8 sm:col-span-6">
									<FormInput name="title" label="Title" placeholder="Enter Title" type="text" containerClass="space-y-1.5 mb-6" className="form-input" key="title" register={register} errors={errors} control={control} />
								</div>
								<div className="lg:col-span-4 sm:col-span-6">
									<FormInput name="priority" label="Priority" type="select" containerClass="space-y-1.5 mb-6" className="form-select" key="priority" register={register} errors={errors} control={control}>
										<option>Low</option>
										<option>Medium</option>
										<option>High</option>
									</FormInput>
								</div>
							</div>

							<FormInput name="description" label="Description" type="textarea" containerClass="w-full space-y-1.5 mb-6" className="form-input" rows={3} key="description" register={register} errors={errors} control={control} />

							<div className="grid sm:grid-cols-2 gap-6">
								<div className="col-md-6">
									<FormInput name="assignTo" label="Assign To" type="select" containerClass="space-y-1.5 mb-6" labelClassName="font-semibold text-gray-500" className="form-select" key="assignTo" register={register} errors={errors} control={control}>
										{(assignees || []).map((assignee, idx) => (
											<option key={idx} value={JSON.stringify(assignee)}>
												{assignee.title}
											</option>
										))}
									</FormInput>
								</div>
								<div className="col-md-6">
									<div className="space-y-1.5 mb-6 flex flex-col">
										<label htmlFor="task-priority" className="font-semibold text-gray-500">
											Due Date
										</label>
										<CustomDatepicker
											hideAddon
											dateFormat="yyyy-MM-dd"
											value={newTaskDetails?.dueDate}
											inputClass="form-input"
											onChange={(date) => {
												handleDateChange(date)
											}}
										/>
									</div>
								</div>
							</div>
							<div className="flex justify-end items-center gap-2">
								<button className="btn bg-light text-gray-800 transition-all dark:bg-gray-700 dark:text-gray-100" type="button" onClick={toggleNewTaskModal}>
									Close
								</button>
								<button type="submit" className="btn bg-success text-white">
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
			</ModalLayout>

			{/* Description Modal */}
			<ModalLayout showModal={descriptionModal} toggleModal={toggleDescriptionModal} aria-hidden="true">
				<div className="bg-white pointer-events-none relative w-auto -translate-y-5 transition-all duration-300 ease-in-out sm:max-w-2xl md:max-w-3xl sm:w-full h-full flex items-center rounded-md shadow-lg dark:bg-gray-800 sm:mx-auto">
					<div className="pointer-events-auto relative flex w-full flex-col">
						<div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700 pt-8">
							<h3 className="font-medium text-gray-800 dark:text-white text-lg">
								iOS App home page
								<span className="inline-flex items-center gap-1.5 p-1 rounded-md text-xs font-medium bg-danger text-white ms-3">High</span>
							</h3>

							<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" onClick={toggleDescriptionModal} type="button">
								<i className="ri-close-line text-xl"></i>
							</button>
						</div>

						<div className="px-4 py-8 overflow-y-auto">
							<h5 className="mb-1">Description:</h5>
							<p className="font-light text-gray-500 dark:text-gray-400">Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit amet. With supporting text below as a natural lead-in to additional contenposuere erat a ante.</p>

							<div className="my-7">
								<div className="grid sm:grid-cols-3 gap-6">
									<div className="col-span-1">
										<h5 className="mb-2 text-gray-600">Create Date</h5>
										<p className="font-normal text-gray-500 dark:text-gray-400">
											17 March 2023 <small className="font-light">1:00 PM</small>
										</p>
									</div>

									<div className="col-span-1">
										<h5 className="mb-2 text-gray-600">Due Date</h5>
										<p className="font-normal text-gray-500 dark:text-gray-400">
											22 December 2023 <small className="font-light">1:00 PM</small>
										</p>
									</div>

									<div className="col-span-1">
										<h5 className="mb-2 text-gray-600">Asignee:</h5>
										<div className="flex items-center">
											<div className="-me-3">
												<Link to="">
													<img src={avatar1} alt="" className="rounded-full h-8 w-8 hover:-translate-y-0.5 transition-all duration-200" />
												</Link>
												<div className="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
													Tosha
													<div className="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]"></div>
												</div>
											</div>

											<div className="-me-3">
												<Link to="">
													<div className="bg-warning text-white font-medium flex items-center justify-center rounded-full h-8 w-8 hover:-translate-y-0.5 transition-all duration-200">K</div>
												</Link>
												<div className="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
													Hooker
													<div className="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]"></div>
												</div>
											</div>

											<div className="-me-3">
												<Link to="">
													<img src={avatar5} alt="" className="rounded-full h-8 w-8 hover:-translate-y-0.5 transition-all duration-200" />
												</Link>
												<div className="bg-slate-700 hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
													Brain
													<div className="bg-slate-700 w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<Tab.Group>
								<Tab.List as="nav" className="flex space-x-5 border-b border-gray-300 dark:border-gray-700" aria-label="Tabs">
									<Tab key={'comments'} type="button" className={({ selected }) => `py-4 px-1 inline-flex items-center gap-2 border-b-2 -mb-px transition-all text-sm whitespace-nowrap dark:text-gray-400 hover:text-primary ${selected ? 'font-semibold border-primary text-primary active' : 'border-transparent text-gray-500'}`}>
										Comments
									</Tab>
									<Tab key={'files'} type="button" className={({ selected }) => `py-4 px-1 inline-flex items-center gap-2 border-b-2 -mb-px transition-all text-sm whitespace-nowrap dark:text-gray-400 hover:text-primary ${selected ? 'font-semibold border-primary text-primary active' : 'border-transparent text-gray-500'}`}>
										Files
									</Tab>
								</Tab.List>

								<Tab.Panels className="mt-5 overflow-hidden">
									<Tab.Panel className="transition-all duration-300 transform">
										<textarea className="form-input mt-2" id="example-textarea" placeholder="Write message" rows={4}></textarea>
										<div className="flex items-center justify-end">
											<div className="mb-2 inline-block">
												<button type="button" className="btn btn-link text-xl">
													<i className="ri-attachment-2"></i>
												</button>
											</div>
											<div className="mb-2 inline-block">
												<button type="button" className="btn bg-primary text-white btn-sm">
													Submit
												</button>
											</div>
										</div>

										<div className="flex gap-5">
											<img src={avatar3} alt="" className="h-12 rounded-full" />
											<div className="w-full">
												<h5 className="mb-2 text-gray-500 dark:text-gray-400 font-semibold">Jeremy Tomlinson</h5>
												<p className="font-light">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>

												<div className="mt-5">
													<div className="flex gap-5">
														<img src={avatar4} alt="" className="h-12 rounded-full" />
														<div className="w-full">
															<h5 className="mb-2 text-gray-500 dark:text-gray-400 font-semibold">Thelma Fridley</h5>
															<p className="font-light">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Tab.Panel>
									<Tab.Panel className="transition-all duration-300 transform">
										<div className="border rounded-md border-gray-300 dark:border-gray-700 p-3 mb-2 flex justify-between">
											<div className="flex items-center gap-3">
												<span className="flex items-center justify-center bg-primary text-white font-semibold rounded-md w-12 h-12">.ZIP</span>
												<div>
													<Link to="" className="font-medium">
														-admin-design.zip
													</Link>
													<p className="font-light">2.3 MB</p>
												</div>
											</div>

											<div className="flex justify-between items-center">
												<Link to="" className="btn btn-link">
													<i className="ri-download-line text-lg"></i>
												</Link>
											</div>
										</div>

										<div className="border rounded-md border-gray-300 dark:border-gray-700 p-3 mb-2 flex justify-between">
											<div className="flex items-center gap-3">
												<span>
													<img src={Img1} alt="" className="h-12 w-12 rounded-md" />
												</span>
												<div>
													<Link to="" className="font-medium">
														Dashboard-design.jpg
													</Link>
													<p className="font-light">3.25 MB</p>
												</div>
											</div>
											<div className="flex justify-between items-center">
												<Link to="" className="btn btn-link">
													<i className="ri-download-line text-lg"></i>
												</Link>
											</div>
										</div>

										<div className="border rounded-md border-gray-300 dark:border-gray-700 p-3 mb-2 flex justify-between">
											<div className="flex items-center gap-3">
												<span className="flex items-center justify-center bg-secondary text-white font-semibold rounded-md w-12 h-12">.MP4</span>
												<div>
													<Link to="" className="font-medium">
														Admin-bug-report.mp4
													</Link>
													<p className="font-light">7.05 MB</p>
												</div>
											</div>
											<div className="flex justify-between items-center">
												<Link to="" className="btn btn-link">
													<i className="ri-download-line text-lg"></i>
												</Link>
											</div>
										</div>
									</Tab.Panel>
								</Tab.Panels>
							</Tab.Group>

							<div className="text-center mt-2 font-medium">
								<Link to="" className="text-danger">
									Load more{' '}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</ModalLayout>
		</>
	)
}

export default KanbanApp
