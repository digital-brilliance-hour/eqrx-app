// components
import { PageBreadcrumb } from '../../components'

const colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

const color = ['bg-secondary/25']
const color2 = ['hover:bg-info', 'hover:bg-warning']

const DefultButtons = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Default Buttons</h4>
			<div className="flex flex-wrap items-center gap-3">
				{(colors || []).map((color, idx) => (
					<button key={idx} type="button" className={`${color === 'light' ? 'text-dark' : 'text-white'} btn bg-${color}`}>
						{color.charAt(0).toUpperCase() + color.slice(1)}
					</button>
				))}
				<button type="button" className="btn bg-transparent text-primary">
					Link
				</button>
			</div>
		</div>
	)
}

const OutlineButtons = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Button Outline</h4>
			<div className="flex flex-wrap items-center gap-3">
				{(colors || []).slice(0, 6).map((color, idx) => (
					<button key={idx} type="button" className={`btn border-${color} text-${color} hover:bg-${color} hover:text-white`}>
						{color.charAt(0).toUpperCase() + color.slice(1)}
					</button>
				))}

				<button type="button" className="btn border-light text-light hover:bg-light hover:text-gray-800 dark:text-slate-200">
					Light
				</button>
				<button type="button" className="btn border-dark text-slate-900 dark:text-slate-200 hover:bg-dark hover:text-white">
					Dark
				</button>
			</div>
		</div>
	)
}

const RoundedButtons = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Button-Rounded</h4>
			<div className="flex flex-wrap items-center gap-3">
				{(colors || []).slice(0, 6).map((color, idx) => (
					<button key={idx} type="button" className={`btn bg-${color} text-white rounded-full`}>
						{color.charAt(0).toUpperCase() + color.slice(1)}
					</button>
				))}

				<button type="button" className="btn bg-light text-slate-900 dark:text-slate-200 rounded-full">
					Light
				</button>
				<button type="button" className="btn bg-dark text-white rounded-full">
					Dark
				</button>
			</div>
		</div>
	)
}

const OutlineRoundedButtons = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Outline Rounded Buttons</h4>
			<div className="flex flex-wrap items-center gap-3">
				{(colors || []).slice(0, 6).map((color, idx) => (
					<button key={idx} type="button" className={`btn rounded-full border border-${color} text-${color} hover:bg-${color} hover:text-white`}>
						{color.charAt(0).toUpperCase() + color.slice(1)}
					</button>
				))}

				<button type="button" className="btn rounded-full border-light text-light hover:bg-light hover:text-gray-800 dark:text-slate-200">
					Light
				</button>
				<button type="button" className="btn rounded-full border border-dark text-slate-900 dark:text-slate-200 hover:bg-dark hover:text-white">
					Dark
				</button>
			</div>
		</div>
	)
}

const SoftButtons = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Soft Buttons</h4>
			<div className="flex flex-wrap items-center gap-3">
				{(colors || []).slice(0, 6).map((color, idx) => (
					<button key={idx} type="button" className={`btn bg-${color}/25 text-${color} hover:bg-${color} hover:text-white`}>
						{color.charAt(0).toUpperCase() + color.slice(1)}
					</button>
				))}
				<button type="button" className="btn bg-dark/25 text-slate-900 dark:text-slate-200 hover:bg-dark hover:text-white">
					Dark
				</button>
			</div>
		</div>
	)
}

const SoftRoundedButtons = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Soft Rounded Buttons</h4>
			<div className="flex flex-wrap items-center gap-3">
				{(colors || []).slice(0, 6).map((color, idx) => (
					<button key={idx} type="button" className={`btn bg-${color}/25 text-${color} hover:bg-${color} rounded-full hover:text-white`}>
						{color.charAt(0).toUpperCase() + color.slice(1)}
					</button>
				))}
				<button type="button" className="btn rounded-full bg-dark/25 text-slate-900 dark:text-slate-200 hover:bg-dark hover:text-white">
					Dark
				</button>
			</div>
		</div>
	)
}

const ButtonSizes = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Sizes</h4>
			<div className="flex items-center gap-2">
				<button type="button" className="btn btn-lg bg-primary text-white">
					Large
				</button>
				<button type="button" className="btn bg-info text-white">
					Normal
				</button>
				<button type="button" className="btn btn-sm bg-success text-white">
					Small
				</button>
			</div>
		</div>
	)
}

const DisabledButton = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Disabled</h4>
			<div className="flex items-center gap-2">
				<button type="button" className="btn bg-primary/60 text-white" disabled>
					Large
				</button>
				<button type="button" className="btn bg-info/60 text-white" disabled>
					Normal
				</button>
				<button type="button" className="btn bg-success/60 text-white" disabled>
					Small
				</button>
			</div>
		</div>
	)
}

const IconButtons = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Buttons with Icon</h4>
			<div className="flex flex-wrap items-center gap-3">
				<button type="button" className="btn bg-light text-gray-800">
					<i className="ri-heart-line text-sm"></i>
				</button>
				<button type="button" className="btn bg-danger text-white">
					<i className="ri-windows-line text-sm"></i>
				</button>
				<button type="button" className="btn bg-dark text-white">
					<i className="ri-music-line text-sm"></i>
				</button>
				<button type="button" className="btn bg-primary text-white">
					<i className="ri-shield-star-line text-sm"></i>
				</button>
				<button type="button" className="btn bg-success text-white">
					<i className="ri-thumb-up-line text-sm"></i>
				</button>
				<button type="button" className="btn bg-info text-white">
					<i className="ri-keyboard-line text-sm"></i>
				</button>
				<button type="button" className="btn bg-warning text-white">
					<i className="ri-school-line text-sm"></i>
				</button>
				<button type="button" className="btn bg-light text-gray-800">
					<i className="ri-hearts-fill text-sm me-1.5"></i>
					<span>Like</span>
				</button>
				<button type="button" className="btn bg-warning text-white">
					<i className="ri-rocket-line text-sm me-1.5"></i>
					<span>Launch</span>
				</button>
				<button type="button" className="btn bg-info text-white">
					<i className="ri-server-line text-sm me-1.5"></i>
					<span>Cloud Hosting</span>
				</button>
				<button type="button" className="btn rounded border border-success text-success hover:bg-success hover:text-white">
					<i className="ri-money-pound-circle-line me-1.5"></i>
					<span>Money</span>
				</button>
				<button type="button" className="btn rounded border border-primary text-primary hover:bg-primary hover:text-white">
					<i className="ri-paypal-line me-1.5"></i>
					<span>Money</span>
				</button>
				<button type="button" className="btn rounded border border-danger text-danger hover:bg-danger hover:text-white">
					<i className="ri-equalizer-line me-1.5"></i>
					<span>Settings</span>
				</button>
			</div>
		</div>
	)
}

const BlockButtons = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Block Button</h4>
			<div className="flex flex-col gap-2">
				<button type="button" className="btn w-full bg-primary text-white">
					Default
				</button>
				<button type="button" className="btn btn-lg w-full bg-success text-white">
					Default
				</button>
			</div>
		</div>
	)
}

const ButtonGroup = () => {
	return (
		<div className="card p-6">
			<h4 className="card-title mb-4">Button Group</h4>
			<div className="">
				<div className="inline-flex rounded-md shadow-sm">
					<button type="button" className="btn bg-light first:rounded-l-lg first:ml-0 last:rounded-r-lg transition-all">
						Years
					</button>
					<button type="button" className="btn bg-light first:rounded-l-lg first:ml-0 last:rounded-r-lg transition-all">
						Month
					</button>
					<button type="button" className="btn bg-light first:rounded-l-lg first:ml-0 last:rounded-r-lg transition-all">
						Date
					</button>
				</div>
			</div>
		</div>
	)
}

const Buttons = () => {
	return (
		<>
			<PageBreadcrumb title="Buttons" subName="Base UI" />
			<div className="grid xl:grid-cols-2 gap-6">
				<DefultButtons />
				<OutlineButtons />
				<RoundedButtons />
				<OutlineRoundedButtons />
				<SoftButtons />
				<SoftRoundedButtons />
				<ButtonSizes />
				<DisabledButton />
				<IconButtons />
				<BlockButtons />
				<ButtonGroup />
			</div>
		</>
	)
}

export default Buttons
