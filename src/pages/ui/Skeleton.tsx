// components
import { PageBreadcrumb } from '../../components'

//image
import Img1 from '@/assets/images/small/small-1.jpg'

const BasicPlaceholders = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Placeholders</h5>
				<div className="pt-5">
					<div className="grid grid-cols-2 gap-6">
						<div className="card">
							<div className="rounded-md">
								<div className="card-img">
									<img src={Img1} className="rounded-t-md" />
								</div>
								<div className="p-6">
									<h5 className="card-title mb-2">Card title</h5>
									<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<button type="button" className="btn bg-primary text-white mt-5">
										Go somewhere
									</button>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="rounded-md">
								<div className="card-img">
									<div className="bg-teal-500 h-44 rounded-t-md"></div>
								</div>
								<div className="p-6">
									<div className="w-1/2 h-4 animate-pulse cursor-wait bg-gray-200 dark:bg-gray-700"></div>
									<ul className="space-y-2 mt-5">
										<div className="flex gap-1">
											<li className="w-3/5 h-4 animate-pulse cursor-wait bg-gray-200 dark:bg-gray-700"></li>
											<li className="w-2/5 h-4 animate-pulse cursor-wait bg-gray-200 dark:bg-gray-700"></li>
										</div>
										<div className="flex gap-1">
											<li className="w-2/5 h-4 animate-pulse cursor-wait bg-gray-200 dark:bg-gray-700"></li>
											<li className="w-3/5 h-4 animate-pulse cursor-wait bg-gray-200 dark:bg-gray-700"></li>
										</div>
										<li className="w-4/5 h-4 animate-pulse cursor-wait bg-gray-200 dark:bg-gray-700"></li>
									</ul>
									<div className="w-1/2 h-10 rounded-md bg-primary/50 dark:bg-gray-700 mt-5"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const ColorPlaceholder = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Color</h5>
				<div className="pt-5">
					<ul className="space-y-2">
						<li className="w-full h-4 cursor-wait bg-gray-200"></li>
						<li className="w-full h-4 cursor-wait bg-primary/50"></li>
						<li className="w-full h-4 cursor-wait bg-secondary/50"></li>
						<li className="w-full h-4 cursor-wait bg-success/50"></li>
						<li className="w-full h-4 cursor-wait bg-danger/50"></li>
						<li className="w-full h-4 cursor-wait bg-warning/50"></li>
						<li className="w-full h-4 cursor-wait bg-info/50"></li>
						<li className="w-full h-4 cursor-wait bg-light/50"></li>
						<li className="w-full h-4 cursor-wait bg-dark/50"></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const PlaceHolderWidth = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Width</h5>
				<div className="pt-5">
					<ul className="space-y-2">
						<li className="w-1/2 h-4 cursor-wait bg-gray-200"></li>
						<li className="w-3/4 h-4 cursor-wait bg-gray-200"></li>
						<li className="w-1/4 h-4 cursor-wait bg-gray-200"></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const PlacehoderSizing = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Sizing</h5>
				<div className="pt-5">
					<ul className="space-y-2">
						<li className="w-full h-5 cursor-wait bg-gray-200"></li>
						<li className="w-full h-4 cursor-wait bg-gray-200"></li>
						<li className="w-full h-3 cursor-wait bg-gray-200"></li>
						<li className="w-full h-2 cursor-wait bg-gray-200"></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const WorkPlaceholders = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">How it works</h5>
				<div className="pt-5">
					<ul className="space-y-5">
						<li className="w-1/2 h-4 cursor-wait bg-gray-200"></li>
						<li className="w-1/3 h-10 rounded-md bg-primary/50"></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const AnimationPlaceholder = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h5 className="card-title mb-1">Animation</h5>
				<div className="pt-5">
					<ul className="space-y-5">
						<li className="animate-pulse w-full h-4 cursor-wait bg-gray-200"></li>
						<li className="w-full h-4 cursor-wait bg-gray-200"></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const Skeleton = () => {
	return (
		<>
			<PageBreadcrumb title="Skeleton" subName="Base UI" />
			<div className="grid lg:grid-cols-2 gap-6">
				<BasicPlaceholders />
				<div className="space-y-6">
					<ColorPlaceholder />
					<PlaceHolderWidth />
				</div>
				<PlacehoderSizing />
				<WorkPlaceholders />
				<AnimationPlaceholder />
			</div>
		</>
	)
}

export default Skeleton
