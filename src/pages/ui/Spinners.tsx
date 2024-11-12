// components
import { PageBreadcrumb } from '../../components'

const colors: string[] = ['bg-primary/75', 'bg-secondary/75', 'bg-success/75', 'bg-danger/75', 'bg-warning/75', 'bg-info/75', 'bg-light/75', 'bg-dark/75']

const BorderSpinner = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Border Spinner</h5>
				<div className="pt-5">
					<div className="animate-spin w-8 h-8 border-[3px] border-current border-t-transparent text-secondary rounded-full" role="status" aria-label="loading">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			</div>
		</div>
	)
}

const GrowingSpinner = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Growing Spinner</h5>
				<div className="pt-5">
					<div className="h-5 w-5">
						<span className="animate-ping inline-flex h-full w-full rounded-full bg-secondary/75"></span>
					</div>
				</div>
			</div>
		</div>
	)
}

const ColorsSpinner = () => {
	const colors: string[] = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-light', 'text-dark']

	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Colors</h5>

				<div className="pt-5">
					<div className="flex flex-wrap gap-6">
						{(colors || []).map((color, idx) => {
							return (
								<div key={idx} className={`animate-spin w-8 h-8 border-[3px] border-current border-t-transparent ${color} rounded-full`} role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

const ColorGrowingSpinner = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Color Growing Spinner</h5>
				<div className="pt-5">
					<div className="flex flex-wrap gap-10">
						{(colors || []).map((color, idx) => (
							<div key={idx} className="h-5 w-5">
								<span className={`animate-ping inline-flex h-full w-full rounded-full ${color}`}></span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const AlignmenSpinner = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Alignment</h5>
				<div className="pt-5">
					<div className="flex justify-center items-center">
						<div className="animate-spin w-8 h-8 border-[3px] border-current border-t-transparent text-secondary rounded-full" role="status" aria-label="loading">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const PlacementSpinner = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Placement</h5>
				<div className="pt-5">
					<div className="flex justify-between items-center">
						<strong>Loading...</strong>
						<div className="animate-spin w-8 h-8 border-[3px] border-current border-t-transparent text-secondary rounded-full" role="status" aria-label="loading">
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const SpinnerSize = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Size</h5>
				<div className="pt-5">
					<div className="grid sm:grid-cols-2 gap-6">
						<div className="flex items-center gap-12">
							<div className="animate-spin w-24 h-24 border-[3px] border-current border-t-transparent text-primary rounded-full" role="status" aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
							<div className="h-14 w-14">
								<span className="animate-ping inline-flex h-full w-full rounded-full bg-secondary/75"></span>
							</div>
						</div>
						<div className="flex items-center gap-12">
							<div className="animate-spin w-20 h-20 border-[3px] border-current border-t-transparent text-primary rounded-full" role="status" aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
							<div className="h-12 w-12">
								<span className="animate-ping inline-flex h-full w-full rounded-full bg-secondary/75"></span>
							</div>
						</div>
						<div className="flex items-center gap-12">
							<div className="animate-spin w-14 h-14 border-[3px] border-current border-t-transparent text-primary rounded-full" role="status" aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
							<div className="h-8 w-8">
								<span className="animate-ping inline-flex h-full w-full rounded-full bg-secondary/75"></span>
							</div>
						</div>
						<div className="flex items-center gap-12">
							<div className="animate-spin w-5 h-5 border-[3px] border-current border-t-transparent text-primary rounded-full" role="status" aria-label="loading">
								<span className="sr-only">Loading...</span>
							</div>
							<div className="h-3 w-3">
								<span className="animate-ping inline-flex h-full w-full rounded-full bg-secondary/75"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const ButtonsSpinner = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Buttons Spinner</h5>
				<div className="pt-5">
					<div className="grid sm:grid-cols-2 gap-6">
						<div className="flex items-center gap-4">
							<button type="button" className="btn bg-primary/60 text-white cursor-default">
								<div className="animate-spin w-5 h-5 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
							</button>
							<button type="button" className="btn bg-primary/60 text-white cursor-default gap-3">
								<div className="animate-spin w-5 h-5 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading">
									<span className="sr-only">Loading...</span>
								</div>
								Loading...
							</button>
						</div>
						<div className="flex items-center gap-4">
							<button type="button" className="btn bg-primary/60 text-white cursor-default">
								<div className="flex items-center h-5 w-5">
									<span className="animate-ping inline-flex h-3 w-3 rounded-full bg-white"></span>
								</div>
							</button>
							<button type="button" className="btn bg-primary/60 text-white cursor-default gap-3">
								<div className="flex items-center h-5 w-5">
									<span className="animate-ping inline-flex h-3 w-3 rounded-full bg-white"></span>
								</div>
								Loading...
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Spinners = () => {
	return (
		<>
			<PageBreadcrumb title="Spinners" subName="Base UI" />
			<div className="grid lg:grid-cols-2 gap-6">
				<BorderSpinner />
				<GrowingSpinner />
				<ColorsSpinner />
				<ColorGrowingSpinner />
				<AlignmenSpinner />
				<PlacementSpinner />
				<SpinnerSize />
				<ButtonsSpinner />
			</div>
		</>
	)
}

export default Spinners
