import { useState } from 'react'
import { Rate } from 'rsuite'

// components
import { PageBreadcrumb } from '../../components'

// style
import 'rsuite/dist/rsuite-no-reset.min.css'

const DefaultRater = () => {
	return (
		<div className="card">
			<div className="p-6">
				<div className="flex justify-between items-center">
					<h4 className="card-title mb-1">Rater Js Example</h4>
				</div>
				<div className="pt-5">
					<Rate size="sm" defaultValue={3} />
				</div>
			</div>
		</div>
	)
}

const RaterWithStep = () => {
	return (
		<div className="card">
			<div className="p-6">
				<div className="flex justify-between items-center">
					<h4 className="card-title mb-1">5 star rater with step</h4>
				</div>
				<div className="pt-5">
					<Rate size="sm" allowHalf defaultValue={1.5} />
				</div>
			</div>
		</div>
	)
}

const RaterWithRandomNumber = () => {
	const [randomValue, setRandomValue] = useState<number>(0)

	const handleRandomValue = () => {
		const randomNumber = Math.floor(Math.random() * 5)
		setRandomValue(randomNumber)
	}
	return (
		<div className="card">
			<div className="p-6">
				<div className="flex justify-between items-center">
					<h4 className="card-title mb-1">Random Number Betweeen</h4>
				</div>
				<div className="pt-5">
					<Rate size="sm" onClick={handleRandomValue} value={randomValue} defaultValue={randomValue} />
				</div>
			</div>
		</div>
	)
}

const RaterWithHover = () => {
	const count = [1, 2, 3, 4, 5]
	const [hoverValue, setHoverValue] = useState<number>(1)
	return (
		<div className="card">
			<div className="p-6">
				<div className="flex justify-between items-center">
					<h4 className="card-title mb-1">On hover Event</h4>
				</div>
				<div className="pt-5">
					<div>
						<Rate size="sm" onChangeActive={setHoverValue} defaultValue={1} />
						<span className="ratingnum inline-block text-center rounded-full w-6 h-full text-sm bg-info text-white align-middle ms-2">{count[hoverValue - 1]}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

const ResetRater = () => {
	const [ratingsCount, setRatingsCount] = useState<number>(2)

	const resetRating = () => {
		setRatingsCount(0)
	}
	return (
		<div className="card">
			<div className="p-6">
				<div className="flex justify-between items-center">
					<h4 className="card-title mb-1">Clear/Reset rater</h4>
				</div>
				<div className="pt-5">
					<div className="flex items-center">
						<Rate size="sm" value={ratingsCount} onChange={setRatingsCount} />
						<button id="raterreset-button" className="btn btn-sm bg-primary text-white ms-4" onClick={resetRating}>
							Reset
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

const Ratings = () => {
	return (
		<>
			<PageBreadcrumb title="Ratings" subName="Extended UI" />
			<div className="grid md:grid-cols-2 gap-6">
				<DefaultRater />
				<RaterWithStep />
				<RaterWithRandomNumber />
				<RaterWithHover />
				<ResetRater />
			</div>
		</>
	)
}

export default Ratings
