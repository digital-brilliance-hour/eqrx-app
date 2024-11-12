// components
import { PageBreadcrumb } from '../../components'

const Ratio = () => {
	return (
		<>
			<PageBreadcrumb title="Aspect Ratio" subName="Aspect Ratio" />
			<div className="grid lg:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Aspect Ratio 21:9</h4>
						<div className="aspect-w-7 aspect-h-3">
							<iframe src="https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0" title="iframe" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Aspect Ratio 16:9</h4>
						<div className="aspect-w-16 aspect-h-9">
							<iframe src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1" title="iframe" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Aspect Ratio 1:1</h4>
						<div className="aspect-w-1 aspect-h-1">
							<iframe src="https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0" title="iframe" />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Aspect Ratio 4:3</h4>
						<div className="aspect-w-4 aspect-h-3">
							<iframe src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1" title="iframe" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Ratio
