import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// components
import { PageBreadcrumb } from '../../components'
import { ModalLayout } from '../../components/HeadlessUI'

//image
import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-dark.png'

interface ModalBasedAlert {
	icon: string
	title: string
	variant: string
}
interface position {
	name: string
	placement: string
}

const colors = ['bg-primary', 'bg-secondary', 'bg-info', 'bg-warning', 'bg-danger', 'bg-dark']
const colors2 = ['bg-primary/90', 'bg-secondary/90', 'bg-info/90', 'bg-warning/90', 'bg-danger/90', 'bg-dark/90']

const modalbasedAlert: ModalBasedAlert[] = [
	{
		icon: 'ri-check-line',
		title: 'Well Done!',
		variant: 'success',
	},
	{
		icon: 'ri-information-line',
		title: 'Heads up!',
		variant: 'info',
	},
	{
		icon: 'ri-alert-line',
		title: 'Incorrect Information',
		variant: 'warning',
	},
	{
		icon: 'ri-close-circle-line',
		title: 'Well Done!',
		variant: 'danger',
	},
]

const ModalExample = () => {
	interface ModalSize {
		name: string
		width: string
		variant: string
	}
	const sizes: ModalSize[] = [
		{
			name: 'Standard Modal',
			width: 'sm:max-w-lg',
			variant: 'primary',
		},
		{
			name: 'Large Modal',
			width: 'max-w-7xl min-w-[1280px]',
			variant: 'info',
		},
		{
			name: 'Small Modal',
			width: 'sm:max-w-sm',
			variant: 'success',
		},
		{
			name: 'Full Width',
			width: 'w-[90vw]',
			variant: 'primary',
		},
		{
			name: 'Scrollable Modal',
			width: 'sm:max-w-lg',
			variant: 'primary',
		},
	]

	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)

	const handleModal = (index: number) => () => {
		if (index === isModalOpen) setIsModalOpen(null)
		else setIsModalOpen(index)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Example</h4>
				<div className="flex flex-wrap gap-3">
					{(sizes || []).map((size, idx) => {
						return (
							<div key={idx}>
								<button className={`btn bg-${size.variant} text-white`} type="button" onClick={handleModal(idx)}>
									{' '}
									{size.name}{' '}
								</button>
								<ModalLayout showModal={isModalOpen === idx} toggleModal={handleModal(idx)} panelClassName={size.width} placement=" justify-center items-start">
									<div className="duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
										<div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
											<h3 className="font-medium text-gray-600 dark:text-white text-lg">Modal Title</h3>
											<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" type="button">
												<i className="ri-close-line text-2xl" onClick={handleModal(idx)} />
											</button>
										</div>
										<div className={`${size.name === 'Scrollable Modal' ? 'max-h-80' : ''} p-4 overflow-y-auto`}>
											<h5 className="mb-2.5 text-base">Text in a modal</h5>
											<p className="text-sm mb-4">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
											<hr className="my-5 dark:border-gray-700" />
											<h5 className="mb-2.5 text-base">Overflowing text to show scroll behavior</h5>
											<p className="text-sm mb-4">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
											<p className="text-sm mb-4">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
											<p className="text-sm">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
										</div>
										<div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
											<button className="btn bg-light text-gray-800 transition-all" onClick={handleModal(idx)}>
												Close
											</button>
											<Link className="btn bg-primary text-white" to="">
												Save Changes
											</Link>
										</div>
									</div>
								</ModalLayout>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const ModalWithPages = () => {
	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)

	const handleModal = (index: number) => () => {
		if (index === isModalOpen) setIsModalOpen(null)
		else setIsModalOpen(index)
	}
	return (
		<>
			<div className="card">
				<div className="p-6">
					<h4 className="card-title mb-4">Modal with Pages</h4>
					<div className="flex flex-wrap gap-3">
						<div>
							<button className="btn bg-primary text-white" type="button" onClick={handleModal(0)}>
								{' '}
								Sign Up Modal{' '}
							</button>
							<ModalLayout showModal={isModalOpen === 0} toggleModal={handleModal(0)} panelClassName="w-[500px]" placement="justify-center items-start">
								<div className="duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
									<div className="p-4 overflow-y-auto">
										<div className="p-9">
											<Link to="/" className="flex justify-center">
												<img src={logo} alt="logo" className="h-6 hidden dark:block" />
												<img src={logoDark} alt="logo" className="h-6 block dark:hidden" />
											</Link>
										</div>
										<form className="px-6" action="#">
											<div className="space-y-1 mb-6">
												<label htmlFor="username" className="font-semibold text-gray-500">
													Name
												</label>
												<input className="form-input" type="email" id="username" required placeholder="Michael Zenaty" />
											</div>

											<div className="space-y-1 mb-6">
												<label htmlFor="emailaddress" className="font-semibold text-gray-500">
													Email address
												</label>
												<input className="form-input" type="email" id="emailaddress" required placeholder="john@deo.com" />
											</div>

											<div className="space-y-1 mb-6">
												<label htmlFor="password" className="font-semibold text-gray-500">
													Password
												</label>
												<input className="form-input" type="password" required id="password" placeholder="Enter your password" />
											</div>

											<div className="mb-6">
												<div className="flex items-center">
													<input type="checkbox" className="form-checkbox rounded text-primary" id="checkbox-signin" />
													<label className="ms-2 text-sm font-medium text-gray-500" htmlFor="checkbox-signin">
														I accept <Link to="#">Terms and Conditions</Link>
													</label>
												</div>
											</div>
											<div className="mb-6 text-center">
												<button className="btn bg-primary text-white" type="submit">
													Sign Up Free
												</button>
											</div>
										</form>
									</div>
								</div>
							</ModalLayout>
						</div>
						<div>
							<button className="btn bg-info text-white" type="button" onClick={handleModal(1)}>
								{' '}
								Log In Modal{' '}
							</button>

							<ModalLayout showModal={isModalOpen === 1} toggleModal={handleModal(1)} panelClassName="w-[500px]" placement="justify-center items-start">
								<div className="duration-300 ease-in-out transition-all m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
									<div className="p-4 overflow-y-auto">
										<div className="p-9">
											<Link to="/" className="flex justify-center">
												<img src={logo} alt="logo" className="h-6 hidden dark:block" />
												<img src={logoDark} alt="logo" className="h-6 block dark:hidden" />
											</Link>
										</div>

										<form className="px-6" action="#">
											<div className="space-y-1 mb-6">
												<label htmlFor="emailaddress1" className="font-semibold text-gray-500">
													Email address
												</label>
												<input className="form-input" type="email" id="emailaddress1" required placeholder="john@deo.com" />
											</div>

											<div className="space-y-1 mb-6">
												<label htmlFor="password1" className="font-semibold text-gray-500">
													Password
												</label>
												<input className="form-input" type="password" required id="password1" placeholder="Enter your password" />
											</div>

											<div className="mb-6">
												<div className="flex items-center">
													<input type="checkbox" className="form-checkbox rounded text-primary" id="checkbox-signin" />
													<label className="ms-2 text-sm font-medium text-gray-500" htmlFor="checkbox-signin">
														Remember me
													</label>
												</div>
											</div>
											<div className="mb-6 text-center">
												<button className="btn bg-primary text-white rounded-full" type="submit">
													Sign In
												</button>
											</div>
										</form>
									</div>
								</div>
							</ModalLayout>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const ModalWithAlerts = () => {
	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)

	const handleModal = (index: number) => () => {
		if (index === isModalOpen) setIsModalOpen(null)
		else setIsModalOpen(index)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Modal based Alerts</h4>
				<div className="flex flex-wrap gap-3">
					{(modalbasedAlert || []).map((item, idx) => {
						return (
							<React.Fragment key={idx}>
								<button className={`btn bg-${item.variant} text-white`} onClick={handleModal(idx)} type="button">
									{item.variant.charAt(0).toUpperCase() + item.variant.slice(1)} Alert
								</button>
								<ModalLayout showModal={isModalOpen === idx} toggleModal={handleModal(idx)} panelClassName="sm:max-w-xs" placement="justify-center items-start">
									<div className={`duration-300 ease-in-out transition-all sm:w-full m-3 sm:mx-auto flex flex-col bg-${item.variant} shadow-sm rounded`}>
										<div className="p-9 overflow-y-auto">
											<div className="text-center text-white">
												<i className={`${item.icon} text-4xl`}></i>
												<h4 className="text-xl font-medium mt-3 mb-2.5">{item.title}</h4>
												<p className="mt-6 mb-4">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
												<button type="button" className="btn bg-light text-gray-800 my-2" onClick={handleModal(idx)}>
													Continue
												</button>
											</div>
										</div>
									</div>
								</ModalLayout>
							</React.Fragment>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const ModalPositions = () => {
	const Positions: position[] = [
		{
			name: 'Top',
			placement: 'justify-center items-start',
		},
		{
			name: 'Bottom',
			placement: 'justify-center items-end',
		},
		{
			name: 'Center',
			placement: 'justify-center items-center',
		},
	]

	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)

	const handleModal = (index: number) => () => {
		if (index === isModalOpen) setIsModalOpen(null)
		else setIsModalOpen(index)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Modal Position</h4>
				<div className="flex flex-wrap gap-3">
					{(Positions || []).map((item, idx) => {
						return (
							<div key={idx}>
								<button className="btn bg-secondary text-white" type="button" onClick={handleModal(idx)}>
									{item.name} Modal
								</button>
								<ModalLayout showModal={isModalOpen === idx} toggleModal={handleModal(idx)} panelClassName="sm:max-w-lg" placement={item.placement}>
									<div className="duration-300 ease-in-out transition-all sm:w-full m-3 mt-0 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
										<div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
											<h3 className="font-medium text-gray-800 dark:text-white text-lg">Modal Title</h3>
											<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" type="button">
												<i className="ri-close-line text-2xl" onClick={handleModal(idx)}></i>
											</button>
										</div>
										<div className="p-4 overflow-y-auto">
											<p className="text-gray-800 dark:text-gray-200">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
										</div>
										<div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
											<button className="btn bg-light text-gray-800 transition-all" onClick={handleModal(idx)} type="button">
												Close
											</button>
											<Link className="btn bg-primary text-white" to="">
												Save Changes
											</Link>
										</div>
									</div>
								</ModalLayout>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const ModalWithColoredHeader = () => {
	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)

	const handleModal = (index: number) => () => {
		if (index === isModalOpen) setIsModalOpen(null)
		else setIsModalOpen(index)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Colored Header Modals</h4>
				<div className="flex flex-wrap gap-2">
					{(colors || []).map((color, idx) => {
						return (
							<div key={idx}>
								<button className={`btn ${color} text-white`} type="button" onClick={handleModal(idx)}>
									{' '}
									{color.charAt(3).toUpperCase() + color.slice(4)} Header{' '}
								</button>
								<ModalLayout showModal={isModalOpen === idx} toggleModal={handleModal(idx)} panelClassName="sm:max-w-lg mt-3" placement="justify-center items-start">
									<div className="duration-300 ease-in-out transition-all sm:max-w-lg  flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700">
										<div className={`flex justify-between items-center py-2.5 px-4 ${color} dark:border-gray-700`}>
											<h3 className="font-medium text-white text-lg">Modal Title</h3>
											<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" type="button">
												<i className="ri-close-line text-2xl text-white" onClick={handleModal(idx)}></i>
											</button>
										</div>
										<div className="p-4 overflow-y-auto">
											<h5 className="mb-2.5 text-base">{color.charAt(3).toUpperCase() + color.slice(4)} Background</h5>
											<p className="text-sm mb-4">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
											<p className="text-sm mb-4">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
										</div>
										<div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
											<button className="btn bg-light text-gray-800 transition-all" onClick={handleModal(idx)}>
												Close
											</button>
											<Link className={`btn ${color} text-white`} to="">
												Save Changes
											</Link>
										</div>
									</div>
								</ModalLayout>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const ModalWithColorFilled = () => {
	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)

	const handleModal = (index: number) => () => {
		if (index === isModalOpen) setIsModalOpen(null)
		else setIsModalOpen(index)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Colored Filled Modals</h4>
				<div className="flex flex-wrap gap-2">
					{(colors || []).map((color, idx) => {
						return (
							<div key={idx}>
								<button className={`btn ${color} text-white`} type="button" onClick={handleModal(idx)}>
									{' '}
									{color.charAt(3).toUpperCase() + color.slice(4)} Filled{' '}
								</button>
								<ModalLayout showModal={isModalOpen === idx} toggleModal={handleModal(idx)} panelClassName="sm:max-w-lg" placement="justify-center items-start">
									<div className="duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800 dark:border-gray-700">
										<div className={`flex justify-between items-center py-2.5 px-4 ${colors2[idx]} dark:border-gray-700`}>
											<h3 className="font-medium text-white text-lg">Modal Title</h3>
											<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" type="button">
												<i className="ri-close-line text-2xl text-white" onClick={handleModal(idx)}></i>
											</button>
										</div>
										<div className={`p-4 ${color} text-white overflow-y-auto`}>
											<h5 className="mb-2.5 text-base">{color.charAt(3).toUpperCase() + color.slice(4)} Background</h5>
											<p className="text-sm mb-4">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
											<p className="text-sm mb-4">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
										</div>
										<div className={`flex justify-end items-center gap-2 p-4 border-t ${color} border-white/5`}>
											<button className="btn bg-light text-gray-800 transition-all" onClick={handleModal(idx)}>
												Close
											</button>
											<Link className="btn border-light hover:bg-light hover:text-gray-800 text-white" to="">
												Save Changes
											</Link>
										</div>
									</div>
								</ModalLayout>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const MultipleModal = () => {
	const [isModalOpen, setIsModalOpen] = useState<number | null>(null)

	const handleModal = (index: number) => () => {
		if (index === isModalOpen) setIsModalOpen(null)
		else setIsModalOpen(index)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Multiple Modal</h4>
				<div>
					<button className="btn bg-primary text-white" type="button" onClick={handleModal(0)}>
						{' '}
						Standard Modal{' '}
					</button>

					<ModalLayout showModal={isModalOpen === 0} toggleModal={handleModal(0)} panelClassName="sm:max-w-lg" placement="justify-center items-start">
						<div className="duration-300 ease-in-out transition-all  m-3 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
							<div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
								<h3 className="font-medium text-gray-600 dark:text-white text-lg">Modal Title</h3>
								<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" type="button">
									<i className="ri-close-line text-2xl" onClick={handleModal(0)}></i>
								</button>
							</div>
							<div className="p-4 overflow-y-auto">
								<h5 className="mb-2.5 text-base">Text in a modal</h5>
								<p className="text-sm mb-4">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
							</div>
							<div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
								<button className="btn bg-primary text-white" onClick={handleModal(1)}>
									Next
								</button>
							</div>
						</div>
					</ModalLayout>
					<ModalLayout showModal={isModalOpen === 1} toggleModal={handleModal(1)} placement="justify-center items-start" panelClassName="sm:max-w-lg mt-3">
						<div className="duration-300 ease-in-out transition-all m-3 my-0 sm:mx-auto flex flex-col bg-white shadow-sm rounded dark:bg-gray-800">
							<div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
								<h3 className="font-medium text-gray-600 dark:text-white text-lg">Modal Title</h3>
								<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200" type="button">
									<i className="ri-close-line text-2xl" onClick={handleModal(1)}></i>
								</button>
							</div>
							<div className="p-4 overflow-y-auto">
								<h5 className="mb-2.5 text-base">Text in a modal</h5>
								<p className="text-sm mb-4">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
							</div>
							<div className="flex justify-end items-center gap-2 p-4 border-t dark:border-slate-700">
								<button className="btn bg-primary text-white transition-all" onClick={handleModal(1)}>
									Close
								</button>
							</div>
						</div>
					</ModalLayout>
				</div>
			</div>
		</div>
	)
}

const FullscreenModal = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const handleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Fullscreen Modal</h4>
				<div>
					<button className="btn bg-primary text-white" type="button" onClick={handleModal}>
						{' '}
						Standard Modal{' '}
					</button>
					<ModalLayout showModal={isModalOpen} toggleModal={handleModal} panelClassName="w-screen">
						<div className="duration-300 ease-in-out transition-all flex flex-col bg-white shadow-sm rounded h-[100vh] dark:bg-gray-800">
							<div className="flex justify-between items-center py-2.5 px-4 border-b dark:border-gray-700">
								<h3 className="font-medium text-gray-600 dark:text-white text-lg">Modal Title</h3>
								<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 dark:text-gray-200">
									<i className="ri-close-line text-2xl" onClick={handleModal}></i>
								</button>
							</div>
							<div className="p-4 overflow-y-auto">
								<h5 className="mb-2.5 text-base">Text in a modal</h5>
								<p className="text-sm mb-4">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
							</div>
							<div className="flex justify-end items-center gap-4 p-4 mt-auto border-t dark:border-gray-700">
								<button className="btn bg-light text-gray-800 transition-all" onClick={handleModal}>
									Close
								</button>
								<Link className="btn bg-primary text-white" to="">
									Save Changes
								</Link>
							</div>
						</div>
					</ModalLayout>
				</div>
			</div>
		</div>
	)
}
const Modals = () => {
	return (
		<>
			<PageBreadcrumb title="Modals" subName="Base UI" />
			<div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
				<ModalExample />
				<ModalWithPages />
				<ModalWithAlerts />
				<ModalPositions />
				<ModalWithColoredHeader />
				<ModalWithColorFilled />
				<MultipleModal />
				<FullscreenModal />
			</div>
		</>
	)
}

export default Modals
