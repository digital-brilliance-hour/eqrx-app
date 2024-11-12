import { useState } from 'react'

// components
import { PageBreadcrumb } from '../../components'
import { OffcanvasLayout } from '../../components/HeadlessUI'

const DefaultOffcanvas = () => {
	const [open, setOpen] = useState<boolean>(false)
	const handlerOffcanvas = () => {
		setOpen(!open)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Default</h4>
				<button className="bg-primary text-white hover:bg-primary-600 py-2 px-4 rounded transition-all" onClick={handlerOffcanvas}>
					Open Offcanvas
				</button>
				<OffcanvasLayout sizeClassName="max-w-xs w-full" open={open} placement="start" toggleOffcanvas={handlerOffcanvas}>
					<div className="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
						<h3 className="font-medium">Offcanvas title</h3>
						<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400" type="button">
							<i className="ri-close-line text-xl" onClick={handlerOffcanvas} />
						</button>
					</div>
					<div className="p-4">
						<p className="text-gray-800 dark:text-gray-400">Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
					</div>
				</OffcanvasLayout>
			</div>
		</div>
	)
}

const AutoTargetingOffcanvas = () => {
	const [open, setOpen] = useState<boolean>(false)
	const handlerOffcanvas = () => {
		setOpen(!open)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Auto Targeting</h4>

				<div>
					<button className="bg-primary text-white hover:bg-primary-600 py-2 px-4 rounded transition-all" onClick={handlerOffcanvas}>
						Open Offcanvas
					</button>
					<OffcanvasLayout placement="start" open={open} sizeClassName="max-w-xs" toggleOffcanvas={handlerOffcanvas}>
						<div className="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
							<h3 className="font-medium">Offcanvas title</h3>
							<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400" type="button">
								<i className="ri-close-line text-xl" onClick={handlerOffcanvas} />
							</button>
						</div>
						<div className="p-4">
							<p className="text-gray-800 dark:text-gray-400">Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
						</div>
					</OffcanvasLayout>
				</div>
			</div>
		</div>
	)
}

const OffcanvasPositions = () => {
	const [left, setLeft] = useState<boolean>(false)
	const [top, setTop] = useState<boolean>(false)
	const [right, setRight] = useState<boolean>(false)
	const [bottom, setBottom] = useState<boolean>(false)

	const handlerLeftOffcanvas = () => {
		setLeft(!left)
	}

	const handlerTopOffcanvas = () => {
		setTop(!top)
	}

	const handlerRightOffcanvas = () => {
		setRight(!right)
	}

	const handlerBottomOffcanvas = () => {
		setBottom(!bottom)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Positions</h4>

				<div className="flex flex-wrap gap-4">
					<button className="btn bg-primary text-white" onClick={handlerLeftOffcanvas}>
						Left
					</button>
					<OffcanvasLayout sizeClassName="max-w-xs" placement="start" open={left} toggleOffcanvas={handlerLeftOffcanvas}>
						<div className="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
							<h3 className="font-medium">Offcanvas title</h3>
							<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400" type="button">
								<i className="ri-close-line text-xl" onClick={handlerLeftOffcanvas} />
							</button>
						</div>
						<div className="p-4">
							<p className="text-gray-800 dark:text-gray-400">Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
						</div>
					</OffcanvasLayout>

					<button className="btn bg-primary text-white" onClick={handlerTopOffcanvas}>
						Top
					</button>
					<OffcanvasLayout sizeClassName="max-h-40 h-full w-full" placement="top" open={top} toggleOffcanvas={handlerTopOffcanvas}>
						<div className="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
							<h3 className="font-medium">Offcanvas title</h3>
							<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400" type="button">
								<i className="ri-close-line text-xl" onClick={handlerTopOffcanvas} />
							</button>
						</div>
						<div className="p-4">
							<p className="text-gray-800 dark:text-gray-400">Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
						</div>
					</OffcanvasLayout>

					<button className="btn bg-primary text-white" onClick={handlerRightOffcanvas}>
						Right
					</button>
					<OffcanvasLayout open={right} sizeClassName="h-full max-w-xs w-full" toggleOffcanvas={handlerRightOffcanvas}>
						<div className="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
							<h3 className="font-medium">Offcanvas title</h3>
							<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400" type="button">
								<i className="ri-close-line text-xl" onClick={handlerRightOffcanvas} />
							</button>
						</div>
						<div className="p-4">
							<p className="text-gray-800 dark:text-gray-400">Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
						</div>
					</OffcanvasLayout>

					<button className="btn bg-primary text-white" onClick={handlerBottomOffcanvas}>
						Bottom
					</button>
					<OffcanvasLayout placement="bottom" open={bottom} sizeClassName="max-h-40 h-full w-full" toggleOffcanvas={handlerBottomOffcanvas}>
						<div className="flex justify-between items-center py-2 px-4 border-b dark:border-gray-700">
							<h3 className="font-medium">Offcanvas title</h3>
							<button className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400" type="button">
								<i className="ri-close-line text-xl" onClick={handlerBottomOffcanvas} />
							</button>
						</div>
						<div className="p-4">
							<p className="text-gray-800 dark:text-gray-400">Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
						</div>
					</OffcanvasLayout>
				</div>
			</div>
		</div>
	)
}

const Offcanvas = () => {
	return (
		<>
			<PageBreadcrumb title="Offcanvas" subName="Base UI" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
				<DefaultOffcanvas />
				<AutoTargetingOffcanvas />
				<OffcanvasPositions />
			</div>
		</>
	)
}

export default Offcanvas
