import { Link } from 'react-router-dom'

// components
import { PageBreadcrumb, handleDismiss } from '../../components'

const colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

interface DefaultVariant {
	variant: string
	isBG: boolean
}

interface IconAlertVariant {
	variant: string
	icon: string
}

const DefaultAlerts = () => {
	const defaultAlertVariants: DefaultVariant[] = [
		{
			variant: 'primary',
			isBG: false,
		},
		{
			variant: 'secondary',
			isBG: false,
		},
		{
			variant: 'success',
			isBG: false,
		},
		{
			variant: 'danger',
			isBG: false,
		},
		{
			variant: 'warning',
			isBG: true,
		},
		{
			variant: 'info',
			isBG: true,
		},
		{
			variant: 'light',
			isBG: true,
		},
		{
			variant: 'dark',
			isBG: true,
		},
	]

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Default Alert</h4>

				<div className="pt-5">
					<div className="space-y-4">
						{(colors || []).map((color, idx) => (
							<div key={idx} className={`${defaultAlertVariants[idx].isBG ? 'border-0 text-white bg-' + defaultAlertVariants[idx].variant : 'bg-' + color + '/10' + ' text-' + color} ${color === 'light' ? '!text-slate-900' : ''}  border border-${color}/20 text-sm rounded - md py-3 px-5`} role="alert">
								<span className="font-bold">{color.charAt(0).toUpperCase() + color.slice(1)}</span> - A simple primary alert—check it out!
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const DismissibleAlerts = () => {
	const dismissibleAlertVariants: DefaultVariant[] = [
		{
			variant: 'primary',
			isBG: true,
		},
		{
			variant: 'secondary',
			isBG: true,
		},
		{
			variant: 'success',
			isBG: true,
		},
		{
			variant: 'danger',
			isBG: true,
		},
		{
			variant: 'warning',
			isBG: false,
		},
		{
			variant: 'info',
			isBG: false,
		},
		{
			variant: 'light',
			isBG: false,
		},
		{
			variant: 'dark',
			isBG: false,
		},
	]

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Dismissing Alerts</h4>

				<div className="pt-5">
					<div className="space-y-4">
						{(colors || []).map((color, idx) => (
							<div key={idx} id={`dismiss-example-${idx}`} className={`${dismissibleAlertVariants[idx].isBG ? 'border-0 text-white bg-' + dismissibleAlertVariants[idx].variant : 'bg-' + color + '/10' + ' text-' + color} border   border-${color}/20 rounded-md py-3 px-5 flex justify-between items-center`}>
								<p>
									<span className="font-bold">{color.charAt(0).toUpperCase() + color.slice(1)}</span> - A simple primary alert—check it out!
								</p>
								<button className="text-xl/[0]" type="button" onClick={() => handleDismiss(`dismiss-example-${idx}`)}>
									<i className="ri-close-line text-xl"></i>
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const CustomAlert = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Custom Alerts</h4>

				<div className="pt-5">
					<div className="space-y-4">
						{(colors || []).map((color, idx) => (
							<div key={idx} className={`text-${color} border border-${color}/20 text-sm rounded-md py-3 px-5`} role="alert">
								This is a <span className="font-bold">{color.charAt(0).toUpperCase() + color.slice(1)}</span> alert—check it out!
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const LinkColor = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Link Color</h4>
				<div className="pt-5">
					<div className="space-y-4">
						{(colors || []).map((color, idx) => (
							<div key={idx} className={`bg-${color}/10 text-${color} border border-${color}/20 text-sm rounded-md py-3 px-5`} role="alert">
								A simple {color.charAt(0).toUpperCase() + color.slice(1)} alert with{' '}
								<Link to="#" className="alert-link">
									<span className="font-bold">an example link</span>
								</Link>
								. Give it a click if you like.
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const IconWithAlert = () => {
	const iconAlertVariants: IconAlertVariant[] = [
		{
			variant: 'success',
			icon: 'ri-check-line',
		},
		{
			variant: 'danger',
			icon: 'ri-close-circle-line',
		},
		{
			variant: 'warning',
			icon: 'ri-alert-line',
		},
		{
			variant: 'info',
			icon: 'ri-information-line',
		},
	]

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Icons with Alerts</h4>

				<div className="pt-5">
					<div className="space-y-4">
						{(iconAlertVariants || []).map((item, idx) => (
							<div key={idx} className={`bg-${item.variant}/10 text-${item.variant} border border-${item.variant}/20 text-sm rounded-md py-3 px-5`}>
								<div className="flex items-center gap-1.5">
									<i className={`${item.icon} text-base`}></i>
									<p className="text-sm">
										This is a <span className="font-bold">{item.variant.charAt(0).toUpperCase() + item.variant.slice(1)}</span> alert - check it out!
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const AdditionalContent = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Additional content</h4>
				<div className="pt-5">
					<div className="bg-info/10 border border-info/20 text-info rounded-md p-4" role="alert">
						<div className="flex flex-col items-center text-center">
							<div className="bg-info inline-flex items-center justify-center rounded-full h-12 w-12">
								<i className="ri-check-line text-xl text-white font-bold"></i>
							</div>
							<div className="mt-3">
								<h3 className="font-semibold text-lg mb-2">Well done!</h3>
								<p className="text-sm">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
								<hr className="my-4 border-info/20" />
								<p className="text-sm">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
const Alerts = () => {
	return (
		<>
			<PageBreadcrumb title="Alerts" subName="Base UI" />
			<div className="grid 2xl:grid-cols-2 gap-6">
				<DefaultAlerts />
				<DismissibleAlerts />
				<CustomAlert />
				<LinkColor />
				<IconWithAlert />
				<AdditionalContent />
			</div>
		</>
	)
}

export default Alerts
