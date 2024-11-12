import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { EventInput } from '@fullcalendar/core'

// components
import { FormInput } from '../../../components/'
import { ModalLayout } from '../../../components/HeadlessUI'

interface FormValues {
	title: string
	className: string
}

interface AddEditEventProps {
	isOpen: boolean
	onClose: () => void
	isEditable?: boolean
	eventData: EventInput
	onRemoveEvent?: () => void
	onUpdateEvent: (value: any) => void
	onAddEvent: (value: any) => void
}

const AddEditEvent = ({ isOpen, onClose, isEditable, eventData, onRemoveEvent, onUpdateEvent, onAddEvent }: AddEditEventProps) => {
	// event state
	const [event] = useState<EventInput>(eventData!)

	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			title: yup.string().required('Please enter event name'),
			className: yup.string().required('Please select category'),
		})
	)

	/*
	 * form methods
	 */
	const methods = useForm<FormValues>({
		defaultValues: {
			title: event.title,
			className: event.className ? String(event.className) : 'bg-danger',
		},
		resolver: schemaResolver,
	})
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = methods

	/*
	 * handle form submission
	 */
	const onSubmitEvent = (data: { title: string; className: string }) => {
		isEditable ? onUpdateEvent(data) : onAddEvent(data)
	}

	return (
		<ModalLayout showModal={isOpen} toggleModal={onClose} panelClassName="mt-4 rounded-md w-full h-full top-0 left-0 sm:w-[513px]" aria-hidden="true" placement="justify-center items-start">
			<div className="-translate-y-5 duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
				<div className="flex justify-between items-center pt-6 px-6 dark:border-gray-700">
					<h3 className="font-medium text-gray-500 dark:text-white text-base">{isEditable ? 'Edit Event' : 'Add New Event'}</h3>
					<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" onClick={onClose} type="button">
						<i className="ri-close-line text-lg"></i>
					</button>
				</div>
				<form onSubmit={handleSubmit(onSubmitEvent)}>
					<div className="py-6 px-6 overflow-y-auto">
						<div className="flex-col">
							<div className="w-full">
								<FormInput type="text" label="Event Name" labelClassName="font-semibold text-gray-500" name="title" className="form-input" placeholder="Insert Event Name" containerClass="space-y-1.5 mb-6" register={register} key="title" errors={errors} control={control} required />
							</div>
							<div className="w-full">
								<FormInput type="select" label="Category" name="className" labelClassName="font-semibold text-gray-500" className="form-select" containerClass="space-y-1.5 mb-6" key="className" register={register} errors={errors} control={control}>
									<option className="dark:bg-gray-700" value="bg-danger" defaultChecked>
										Danger
									</option>
									<option className="dark:bg-gray-700" value="bg-success">
										Success
									</option>
									<option className="dark:bg-gray-700" value="bg-primary">
										Primary
									</option>
									<option className="dark:bg-gray-700" value="bg-info">
										Info
									</option>
									<option className="dark:bg-gray-700" value="bg-dark">
										Dark
									</option>
									<option className="dark:bg-gray-700" value="bg-warning">
										Warning
									</option>
								</FormInput>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-center gap-2 pb-6 px-6 dark:border-slate-700">
						{isEditable && (
							<button className="text-white btn bg-danger" onClick={onRemoveEvent}>
								Delete
							</button>
						)}
						<div className="gap-2 flex">
							<button className="btn bg-light text-gray-800 transition-all dark:bg-gray-700 dark:text-gray-100" onClick={onClose} type="button">
								Close
							</button>
							<button className="btn bg-success text-white" type="submit">
								Save Changes
							</button>
						</div>
					</div>
				</form>
			</div>
		</ModalLayout>
	)
}

export default AddEditEvent
