import React from 'react'
import { Link } from 'react-router-dom'
import type { Placement } from '@floating-ui/dom'

// components
import { PageBreadcrumb } from '../../components'
import { PopoverLayout } from '../../components/HeadlessUI'

const alignments: Placement[] = ['right', 'left', 'top', 'bottom']

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger']

const DefaultDropdown = () => {
	const PopoverToggle = () => {
		return (
			<>
				Dropdown button <i className="ri-arrow-down-s-fill ms-1" />
			</>
		)
	}

	const PopoverToggle2 = () => {
		return (
			<>
				Dropdown link <i className="ri-arrow-down-s-fill ms-1" />
			</>
		)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Default</h4>
				<div className="flex flex-wrap gap-2">
					<div className="">
						<PopoverLayout toggler={<PopoverToggle />} togglerClass="btn bg-light dark:bg-gray-700 dark:text-white text-sm text-gray-800">
							<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md my-1">
								<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
									Action
								</Link>
								<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
									Another Action
								</Link>
								<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
									Something else here
								</Link>
							</div>
						</PopoverLayout>
					</div>
					<PopoverLayout toggler={<PopoverToggle2 />} togglerClass="btn bg-secondary text-sm text-white">
						<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md my-1">
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Action
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Another Action
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Something else here
							</Link>
						</div>
					</PopoverLayout>
				</div>
			</div>
		</div>
	)
}

const MenuAlignmentDropdown = () => {
	const PopoverToggleStart = () => {
		return (
			<>
				Top Start <i className="ri-arrow-down-s-fill ms-1"></i>
			</>
		)
	}

	const PopoverToggleEnd = () => {
		return (
			<>
				Top End <i className="ri-arrow-down-s-fill ms-1"></i>
			</>
		)
	}

	const AlignmentToggle = ({ align }: { align: string }) => {
		return (
			<>
				Dropdown {align} <i className="ri-arrow-down-s-fill ms-1"></i>
			</>
		)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Menu alignment</h4>
				<div className="flex flex-wrap gap-2">
					{(alignments || []).map((align, idx) => {
						return (
							<PopoverLayout key={idx} placement={align} toggler={<AlignmentToggle align={align.charAt(0).toUpperCase() + align.slice(1)} />} togglerClass="btn bg-light dark:bg-gray-700 dark:text-white text-sm text-gray-800">
								<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md my-1">
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
										Action
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
										Another Action
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
										Something else here
									</Link>
								</div>
							</PopoverLayout>
						)
					})}

					<PopoverLayout toggler={<PopoverToggleStart />} placement="top-start" togglerClass="btn bg-light dark:bg-gray-700 dark:text-white text-sm text-gray-800">
						<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md my-1 py-1">
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Action
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Another Action
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Something else here
							</Link>
						</div>
					</PopoverLayout>
					<PopoverLayout toggler={<PopoverToggleEnd />} placement="top-end" togglerClass="btn bg-light dark:bg-gray-700 dark:text-white text-sm text-gray-800">
						<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md my-1 py-1">
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Action
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Another Action
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Something else here
							</Link>
						</div>
					</PopoverLayout>
				</div>
			</div>
		</div>
	)
}

const ColorVariantDropdown = () => {
	const PopoverToggle = ({ name }: { name: string }) => {
		return (
			<>
				{name.charAt(0).toUpperCase() + name.slice(1)} <i className="ri-arrow-down-s-fill ms-1"></i>
			</>
		)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Variant</h4>
				<div className="flex flex-wrap gap-2">
					{(colors || []).map((color, idx) => {
						return (
							<PopoverLayout key={idx} toggler={<PopoverToggle name={color} />} togglerClass={`btn bg-${color} text-sm text-white`}>
								<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md my-1">
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
										Action
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
										Another Action
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
										Something else here
									</Link>
									<hr className="my-2 dark:border-gray-700" />
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
										Separated link
									</Link>
								</div>
							</PopoverLayout>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const SplitVariantDropdown = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Split Variant</h4>
				<div className="flex flex-wrap gap-2">
					{(colors || []).map((color, idx) => {
						return (
							<React.Fragment key={idx}>
								<div className="flex">
									<button className={`btn bg-${color} text-white rounded-e-none`}>{color.charAt(0).toUpperCase() + color.slice(1)}</button>
									<PopoverLayout toggler={<i className="ri-arrow-down-s-fill" />} togglerClass={`btn bg-${color} text-white px-2 rounded-s-none relative after:content-[''] after:absolute after:inset-0 after:bg-black/10`}>
										<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1">
											<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
												Action
											</Link>
											<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
												Another Action
											</Link>
											<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
												Something else here
											</Link>
											<hr className="my-2 dark:border-gray-700" />
											<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
												Separated link
											</Link>
										</div>
									</PopoverLayout>
								</div>
							</React.Fragment>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const ButtonSizes = () => {
	const sizes = [
		{
			size: 'sm',
			name: 'Small',
		},
		{
			size: '',
			name: 'Default',
		},
		{
			size: 'lg',
			name: 'Large',
		},
	]

	const PopoverToggle = ({ name }: { name: string }) => {
		return (
			<>
				{name.charAt(0).toUpperCase() + name.slice(1)} <i className="ri-arrow-down-s-fill ms-1"></i>
			</>
		)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Sizing</h4>
				<div className="flex flex-wrap items-center gap-2">
					{(sizes || []).map((item, idx) => {
						return (
							<PopoverLayout toggler={<PopoverToggle name={item.name} />} key={idx} togglerClass={`btn btn-${item.size} bg-light text-sm text-gray-800`}>
								<div className="min-w-[10rem] z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md py-1 my-1">
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Action
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Another Action
									</Link>
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Something else here
									</Link>
									<hr className="my-2 dark:border-gray-700" />
									<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="">
										Separated link
									</Link>
								</div>
							</PopoverLayout>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const NestedDropdown = () => {
	const PopoverToggle = () => {
		return (
			<>
				Two Level Dropdown <i className="ri-arrow-down-s-fill ms-1" />
			</>
		)
	}
	const PopoverToggle2 = () => {
		return (
			<>
				Action <i className="ri-arrow-right-s-fill text-lg/none" />
			</>
		)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Nested Dropdown</h4>
				<div className="flex flex-wrap gap-2">
					<PopoverLayout toggler={<PopoverToggle />} togglerClass="btn bg-light dark:bg-gray-700 dark:text-white text-sm text-gray-800">
						<div id="dropdown-target" className="bg-white  shadow rounded-md0 border py-1 my-1 dark:bg-gray-800 dark:border-gray-700">
							<div className="relative">
								<PopoverLayout placement="right-end" toggler={<PopoverToggle2 />} togglerClass="flex items-center justify-between py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer w-full">
									<div className="-ms-2 w-48 bg-white shadow-md rounded border py-1 dark:bg-gray-800 dark:border-gray-700">
										<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
											Action
										</Link>
										<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
											Another action
										</Link>
										<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
											Something else here
										</Link>
										<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
											Separated link
										</Link>
									</div>
								</PopoverLayout>
							</div>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Another Action
							</Link>
							<Link className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" to="#">
								Something else here
							</Link>
						</div>
					</PopoverLayout>
				</div>
			</div>
		</div>
	)
}

const DropdownWithComponent = () => {
	const PopoverToggle = () => {
		return (
			<>
				Radio <i className="ri-arrow-down-s-fill ms-1" />
			</>
		)
	}

	const PopoverToggle2 = () => {
		return (
			<>
				CheckBox <i className="ri-arrow-down-s-fill ms-1" />
			</>
		)
	}

	const PopoverToggle3 = () => {
		return (
			<>
				CheckBox <i className="ri-arrow-down-s-fill ms-1" />
			</>
		)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Dropdown With Form Components</h4>
				<div className="flex flex-wrap gap-2">
					<PopoverLayout toggler={<PopoverToggle />} menuClass="" togglerClass="btn bg-light dark:bg-gray-700 dark:text-white text-sm text-gray-800">
						<div className="bg-white w-max shadow rounded border py-1 dark:bg-gray-800 dark:border-gray-700">
							<div className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
								<div className="flex">
									<input type="radio" name="default-radio" className="shrink-0 form-radio rounded" id="default-radio" />
									<label htmlFor="default-radio" className="text-sm text-gray-500 ms-2 dark:text-gray-400">
										Default radio
									</label>
								</div>
							</div>
							<div className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
								<div className="flex">
									<input type="radio" name="default-radio" className="shrink-0 form-radio rounded" id="checked-radio" checked />
									<label htmlFor="checked-radio" className="text-sm text-gray-500 ms-2 dark:text-gray-400">
										Checked radio
									</label>
								</div>
							</div>
						</div>
					</PopoverLayout>

					<PopoverLayout toggler={<PopoverToggle2 />} togglerClass="btn bg-light dark:bg-gray-700 dark:text-white text-sm text-gray-800">
						<div className="bg-white w-max shadow rounded border py-1 dark:bg-gray-800 dark:border-gray-700">
							<div className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
								<div className="flex">
									<input type="checkbox" className="shrink-0 form-checkbox rounded" id="default-checkbox" />
									<label htmlFor="default-checkbox" className="text-sm text-gray-500 ms-3 dark:text-gray-400">
										Default checkbox
									</label>
								</div>
							</div>
							<div className="flex items-center py-1.5 px-5 text-sm text-gray-500 hover:bg-light hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
								<div className="flex">
									<input type="checkbox" className="shrink-0 form-checkbox rounded" id="checked-checkbox" checked />
									<label htmlFor="checked-checkbox" className="text-sm text-gray-500 ms-3 dark:text-gray-400">
										Checked checkbox
									</label>
								</div>
							</div>
						</div>
					</PopoverLayout>

					<PopoverLayout toggler={<PopoverToggle3 />} togglerClass="btn bg-light dark:bg-gray-700 dark:text-white text-sm text-gray-800">
						<div className="bg-white w-max shadow rounded border p-5 dark:bg-gray-800 dark:border-gray-700">
							<form>
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="mb-2">
										Email address
									</label>
									<input type="email" className="form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
									<small id="emailHelp" className="form-text text-sm text-slate-700 dark:text-slate-400">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="mb-2">
										Password
									</label>
									<input type="password" className="form-input" id="exampleInputPassword1" placeholder="Password" />
								</div>
								<div className="flex items-center gap-2 mb-3">
									<input type="checkbox" className="form-checkbox rounded border border-gray-200" id="checkmeout0" />
									<label className="text-gray-800 text-sm font-medium inline-block" htmlFor="checkmeout0">
										Check me out !
									</label>
								</div>
								<button type="submit" className="btn bg-primary text-white">
									Submit
								</button>
							</form>
						</div>
					</PopoverLayout>
				</div>
			</div>
		</div>
	)
}
const Dropdowns = () => {
	return (
		<>
			<PageBreadcrumb title="Dropdown" subName="Dropdown" />
			<div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
				<DefaultDropdown />
				<MenuAlignmentDropdown />
				<ColorVariantDropdown />
				<SplitVariantDropdown />
				<ButtonSizes />
				<NestedDropdown />
				<DropdownWithComponent />
			</div>
		</>
	)
}

export default Dropdowns
