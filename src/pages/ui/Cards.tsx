import { Link } from 'react-router-dom'

//components
import { PageBreadcrumb } from '../../components'

//image
import Img1 from '@/assets/images/small/small-1.jpg'
import Img2 from '@/assets/images/small/small-2.jpg'
import Img3 from '@/assets/images/small/small-3.jpg'
import Img4 from '@/assets/images/small/small-4.jpg'

interface CardGroupDetailsTypes {
	id: number
	image: string
	title: string
	text: string
	subtext: string
}

const CardWithImage = () => {
	return (
		<div className="card">
			<img className="w-full h-auto rounded-t-md" src={Img1} alt="Image Description" />
			<div className="p-6">
				<h3 className="card-title">Card title </h3>
				<p className="mt-1 text-gray-800 dark:text-gray-400 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up</p>
				<Link className="btn bg-primary text-white mt-2" to="#">
					Button
				</Link>
			</div>
		</div>
	)
}

const CardWithImage2 = () => {
	return (
		<div className="card">
			<img className="w-full h-auto rounded-t-md" src={Img2} alt="Image Description" />
			<div className="p-6">
				<h3 className="card-title"> Card title</h3>
				<p className="mt-1 text-gray-800 dark:text-gray-400"> Some quick example text to build on the card..</p>
				<p className="mt-5 py-5 text-xs text-gray-500 dark:text-gray-500">Cras justo odio</p>
				<div className="pt-6 flex gap-5">
					<Link to="" className="text-primary">
						Card link
					</Link>
					<Link to="" className="text-primary">
						Another link
					</Link>
				</div>
			</div>
		</div>
	)
}

const CardWithImage3 = () => {
	return (
		<div className="card">
			<img className="w-full h-auto rounded-t-md" src={Img3} alt="Image Description" />
			<div className="p-6">
				<p className="mt-1 text-gray-800 dark:text-gray-400 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up.</p>
				<Link className="btn bg-primary text-white mt-2" to="#">
					Button
				</Link>
			</div>
		</div>
	)
}

const CardWithTitleAndImage = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title">Card title</h3>
				<p className="mt-1 text-xs text-gray-500 dark:text-gray-500">Support card subtitle</p>
			</div>
			<img className="w-full h-auto" src={Img4} alt="Image Description" />
			<div className="p-6">
				{' '}
				Some quick example text to build on the card title and make up the bulk of the card's content.
				<div className="pt-6 flex gap-5">
					<Link to="" className="text-primary">
						Card link
					</Link>
					<Link to="" className="text-primary">
						Another link
					</Link>
				</div>
			</div>
		</div>
	)
}

const CardWithSpecialTitle = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-title"> Special title treatment</h3>
				<p className="mt-1 text-gray-800 dark:text-gray-400 mb-4">With supporting text below as a natural lead-in to additional content. </p>
				<Link className="btn bg-primary text-white mt-2 w-full" to="#">
					Go somewhere
				</Link>
			</div>
		</div>
	)
}

const CardWithHeader = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-titlepb-3">Featured</h3>
				<h5 className="text-sm font-medium pt-6">Special title treatment</h5>
				<p className="mt-1 text-gray-800 dark:text-gray-400 mb-4">With supporting text below as a natural lead-in to additional content. </p>
				<Link className="btn bg-primary text-white mt-2" to="#">
					Go somewhere
				</Link>
			</div>
		</div>
	)
}

const CardWithHeaderAndQuote = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-titlepb-3">Quote</h3>
				<p className="mt-1 text-gray-800 dark:text-gray-400 mb-4 pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
				<footer className="pb-6">
					Someone famous in
					<cite title="Source Title">Source Title</cite>
				</footer>
			</div>
		</div>
	)
}

const CardWithHeaderAndFooter = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h3 className="card-titlepb-6">Featured</h3>
				<Link className="btn bg-primary text-white mt-2" to="#">
					Go somewhere
				</Link>
			</div>
			<hr />
			<div className="p-6">
				<p className="text-gray-400">2 days ago</p>
			</div>
		</div>
	)
}

const ColoredCards = () => {
	const colors = ['primary', 'success', 'info', 'warning', 'danger']

	return (
		<>
			<div className="my-7">
				<h4 className="card-title">Card Colored</h4>
			</div>
			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
				<div className="card bg-secondary">
					<div className="p-6">
						<h3 className="text-base font-bold text-white">Special title treatment</h3>
						<p className="mt-2 text-white"> With supporting text below as a natural lead-in to additional content.</p>
						<Link className="btn bg-primary text-white mt-2" to="#">
							Button
						</Link>
					</div>
				</div>

				{(colors || []).map((color, idx) => (
					<div key={idx} className={`card bg-${color}`}>
						<div className="p-6">
							<p className="mt-1 text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
							<footer className="pb-4 text-white">
								Someone famous in
								<cite title="Source Title">Source Title</cite>
							</footer>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

const BorderdCards = () => {
	const colors: string[] = ['secondary', 'primary', 'success']

	return (
		<>
			<div className="my-7">
				<h4 className="card-title">Card Bordered</h4>
			</div>
			<div className="grid sm:grid-cols-3 gap-6">
				{(colors || []).map((color, idx) => {
					return (
						<div key={idx} className={`card border border-${color}`}>
							<div className="p-6">
								<h3 className="text-base font-bold text-secondary dark:text-white mb-2">Special title treatment</h3>
								<p className="mt-1 text-gray-800 dark:text-gray-400 mb-3">With supporting text below as a natural lead-in to additional content.</p>
								<Link className={`btn bg-${color} text-white mt-2`} to="#">
									Button
								</Link>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

const HorizontalCards = () => {
	return (
		<>
			<div className="my-7">
				<h4 className="card-title">Horizontal Card</h4>
			</div>
			<div className="grid lg:grid-cols-2 gap-6">
				<div className="card">
					<div className="grid sm:grid-cols-3">
						<img src={Img4} className="rounded-s-md my-auto" alt="" />
						<div className="p-6 sm:col-span-2">
							<h3 className="card-title mb-4">Card title</h3>
							<p className="mt-1 text-gray-800 dark:text-gray-400">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="mt-5">
								<small>Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="grid sm:grid-cols-3">
						<div className="p-6 sm:col-span-2">
							<h3 className="card-title mb-4">Card title</h3>
							<p className="mt-1 text-gray-800 dark:text-gray-400">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="mt-5">
								<small>Last updated 3 mins ago</small>
							</p>
						</div>
						<img src={Img1} className="rounded-e-md my-auto" alt="" />
					</div>
				</div>
			</div>
		</>
	)
}

const CardwithstretchedLink = () => {
	return (
		<>
			<div className="my-7">
				<h4 className="card-title">Stretched link</h4>
			</div>

			<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
				<div className="card relative">
					<img className="w-full h-auto rounded-t-md" src={Img2} alt="Image Description" />
					<div className="p-6">
						<h3 className="card-title mb-3">Card with stretched link</h3>
						<Link className="btn bg-primary text-white mt-2 after:absolute after:inset-0" to="#">
							Go somewhere
						</Link>
					</div>
				</div>

				<div className="card relative">
					<img className="w-full h-auto rounded-t-md" src={Img3} alt="Image Description" />
					<div className="p-6">
						<h3 className="card-title mb-4">
							<Link to="#" className="after:absolute after:inset-0 text-success">
								Card with stretched link
							</Link>
						</h3>
						<p className="mt-1 text-gray-800 dark:text-gray-400">Some quick example text to build on the card up the bulk of the card's content.</p>
					</div>
				</div>

				<div className="card relative">
					<img className="w-full h-auto rounded-t-md" src={Img4} alt="Image Description" />
					<div className="p-6">
						<h3 className="card-title mb-3">Card with stretched link</h3>
						<Link className="btn bg-info text-white mt-2 after:absolute after:inset-0" to="#">
							Go somewhere
						</Link>
					</div>
				</div>

				<div className="card relative">
					<img className="w-full h-auto rounded-t-md" src={Img1} alt="Image Description" />
					<div className="p-6">
						<h3 className="card-title mb-4">
							<Link to="#" className="after:absolute after:inset-0 text-primary">
								Card with stretched link
							</Link>
						</h3>
						<p className="mt-1 text-gray-800 dark:text-gray-400">Some quick example text to build on the card up the bulk of the card's content.</p>
					</div>
				</div>
			</div>
		</>
	)
}

const CardWithGroup = () => {
	const CardGroupDetails: CardGroupDetailsTypes[] = [
		{
			id: 1,
			image: Img1,
			title: 'Card title',
			text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
			subtext: 'Last updated 3 mins ago',
		},
		{
			id: 2,
			image: Img2,
			title: 'Card title',
			text: 'This card has supporting text below as a natural lead-in to additional content.',
			subtext: 'Last updated 3 mins ago',
		},
		{
			id: 3,
			image: Img3,
			title: 'Card title',
			text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
			subtext: 'Last updated 3 mins ago',
		},
	]

	return (
		<>
			<div className="my-7">
				<h4 className="card-title">Card Group</h4>
			</div>
			<div className="grid sm:grid-cols-3 gap-6 sm:gap-0">
				{(CardGroupDetails || []).map((item, idx) => {
					return (
						<div key={idx} className="card sm:rounded-none sm:rounded-s-md h-full">
							<img className="w-full h-auto sm:rounded-tl-md sm:rounded-none rounded-t-md" src={item.image} alt="Image Description" />
							<div className="p-6">
								<h3 className="card-title mb-4">{item.title}</h3>
								<p className="mt-1 text-gray-800 dark:text-gray-400">{item.text}</p>
								<p className="mt-5 pb-5">
									<small>{item.subtext}</small>
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
const Cards = () => {
	return (
		<>
			<PageBreadcrumb title="Cards" subName="Base UI" />
			<div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
				<CardWithImage />
				<CardWithImage2 />
				<CardWithImage3 />
				<CardWithTitleAndImage />
			</div>

			<div className="grid sm:grid-cols-2 gap-6 mt-4">
				<CardWithSpecialTitle />
				<CardWithSpecialTitle />
			</div>

			<div className="grid sm:grid-cols-3 gap-6 mt-6">
				<CardWithHeader />
				<CardWithHeaderAndQuote />
				<CardWithHeaderAndFooter />
			</div>

			<ColoredCards />
			<BorderdCards />
			<HorizontalCards />
			<CardwithstretchedLink />
			<CardWithGroup />
		</>
	)
}

export default Cards
