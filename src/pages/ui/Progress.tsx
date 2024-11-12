// Components
import { PageBreadcrumb } from '../../components'

const colors: string[] = ['bg-primary w-3/12', 'bg-success w-4/12', 'bg-info w-5/12', 'bg-warning w-6/12', 'bg-danger w-7/12']

interface HeightProgressbar {
	height: string
	valueNow: number
	variant: string
}

interface ProgressBar {
	variant: string
	valueNow: number
}

const heightProgress: HeightProgressbar[] = [
	{
		height: 'px',
		valueNow: 25,
		variant: 'bg-danger',
	},
	{
		height: '0.5',
		valueNow: 25,
		variant: 'bg-primary',
	},
	{
		height: '1',
		valueNow: 25,
		variant: 'bg-success',
	},
	{
		height: '2',
		valueNow: 50,
		variant: 'bg-info',
	},
	{
		height: '4',
		valueNow: 75,
		variant: 'bg-warning',
	},
	{
		height: '4',
		valueNow: 40,
		variant: 'bg-success',
	},
]

const backgroundProgress: ProgressBar[] = [
	{
		variant: 'bg-success',
		valueNow: 25,
	},
	{
		variant: 'bg-info',
		valueNow: 50,
	},
	{
		variant: 'bg-warning',
		valueNow: 75,
	},
	{
		variant: 'bg-danger',
		valueNow: 100,
	},
	{
		variant: 'bg-dark',
		valueNow: 65,
	},
	{
		variant: 'bg-secondary',
		valueNow: 50,
	},
]

const BasicProgressBar = () => {
	const Progress = [0, 25, 50, 75, 100]
	return (
		<div className="card">
			<div className="p-6">
				<div>
					<h3 className="card-title mb-5">Examples</h3>
				</div>
				<div className="flex flex-col gap-3">
					{(Progress || []).map((value, idx) => {
						return (
							<div key={idx} className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
								<div className="flex flex-col justify-center overflow-hidden bg-primary" style={{ width: `${value}%` }} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}></div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const HeightProgressBar = () => {
	return (
		<div className="card">
			<div className="p-6">
				<div>
					<h3 className="card-title mb-5">Height</h3>
				</div>
				<div className="flex flex-col gap-3">
					{(heightProgress || []).map((item, idx) => (
						<div key={idx} className={`flex w-full h-${item.height} bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700`}>
							<div className={`flex flex-col justify-center overflow-hidden ${item.variant}`} role="progressbar" style={{ width: `${item.valueNow}%` }} aria-valuenow={item.valueNow} aria-valuemin={0} aria-valuemax={100}></div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const MultipleProgressBar = () => {
	return (
		<div className="card">
			<div className="p-6">
				<div>
					<h3 className="card-title mb-5">Multiple bars</h3>
				</div>
				<div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
					<div className="flex flex-col justify-center overflow-hidden bg-primary" role="progressbar" style={{ width: '15%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
					<div className="flex flex-col justify-center overflow-hidden bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>
					<div className="flex flex-col justify-center overflow-hidden bg-info dark:bg-white" role="progressbar" style={{ width: '20%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>
				</div>
			</div>
		</div>
	)
}

const AnimatedStripesBar = () => {
	return (
		<div className="card">
			<div className="p-6">
				<div>
					<h3 className="card-title mb-5">Animated stripes</h3>
				</div>
				<div className="w-full h-4 bg-black/10 rounded-full">
					<div className="bg-danger h-4 rounded-s-full w-7/12 animate-strip" style={{ backgroundImage: 'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)', backgroundSize: '1rem 1rem' }}></div>
				</div>
			</div>
		</div>
	)
}

const LabelsProgressBar = () => {
	return (
		<div className="card">
			<div className="p-6">
				<div>
					<h3 className="card-title mb-5">Labels</h3>
				</div>
				<div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
					<div className="flex flex-col justify-center overflow-hidden bg-primary text-xs text-white text-center" role="progressbar" style={{ width: '25%' }} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100}>
						25%
					</div>
				</div>
			</div>
		</div>
	)
}

const BackGroundProgressBar = () => {
	return (
		<div className="card">
			<div className="p-6">
				<div>
					<h3 className="card-title mb-5">Backgrounds</h3>
				</div>
				<div className="flex flex-col gap-3">
					{(backgroundProgress || []).map((item, idx) => {
						return (
							<div key={idx} className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
								<div className={`flex flex-col justify-center overflow-hidden ${item.variant}`} role="progressbar" style={{ width: `${item.valueNow}%` }} aria-valuenow={item.valueNow} aria-valuemin={0} aria-valuemax={100}></div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const StripedProgressBar = () => {
	return (
		<div className="card">
			<div className="p-6">
				<div>
					<h3 className="card-title mb-5">Striped</h3>
				</div>
				<div className="flex flex-col items-center justify-center gap-3">
					{(colors || []).map((color, idx) => {
						return (
							<div key={idx} className="w-full h-4 bg-black/10 rounded-full">
								<div className={`${color} h-4 rounded-s-full animate-strip"`} style={{ backgroundImage: 'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)', backgroundSize: '1rem 1rem' }}></div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const Progress = () => {
	return (
		<>
			<PageBreadcrumb title="Progress" subName="Base UI" />
			<div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
				<div className="space-y-6">
					<BasicProgressBar />
					<HeightProgressBar />
					<MultipleProgressBar />
					<AnimatedStripesBar />
				</div>

				<div className="space-y-6">
					<LabelsProgressBar />
					<BackGroundProgressBar />
					<StripedProgressBar />
				</div>
			</div>
		</>
	)
}

export default Progress
