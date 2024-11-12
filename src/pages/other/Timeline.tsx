import { Link } from 'react-router-dom'

// components
import { PageBreadcrumb } from '../../components'

// images
import img1 from '@/assets/images/small/small-1.jpg'
import img2 from '@/assets/images/small/small-2.jpg'
import img3 from '@/assets/images/small/small-3.jpg'
import React, { Fragment } from 'react'

interface TimelineData {
	[key: string]: {
		title: string
		date: string
		text: string
		variant: string
		reactions?: {
			emoji: string
			count: string
		}[]
		images?: string[]
		avatar?: {
			position: string
			name: string
			image: string
		}[]
	}[]
}

const TimelinePages = () => {
	const timelineData: TimelineData = {
		Today: [
			{
				title: 'Completed UX design project for our client',
				date: '22 July, 2019',
				text: 'Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?',
				variant: 'bg-danger/30 text-danger',
				reactions: [
					{
						emoji: '👍',
						count: '17',
					},
					{
						emoji: '❤️',
						count: '89',
					},
				],
			},
			{
				title: 'Yay! We are celebrating our first admin release.',
				date: '22 July, 2019',
				text: 'Consectetur adipisicing elit. Iusto, optio, dolorum John deon provident rerum aut hic quasi placeat iure tempora laudantium',
				variant: 'bg-info/30 text-info',
				reactions: [
					{
						emoji: '🎉',
						count: '148',
					},
				],
			},
		],
		Yesterday: [
			{
				title: 'We released new version of our theme Attex.',
				date: '22 July, 2019',
				text: '3 new photo Uploaded on facebook fan page',
				variant: 'bg-warning/30 text-warning',
				images: [img1, img2, img3],
				reactions: [
					{
						emoji: '🏆',
						count: '94',
					},
				],
			},
			{
				title: 'We have archieved 25k sales in our themes.',
				date: '22 July, 2019',
				text: 'Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding to setup a new show room.',
				variant: 'bg-success/30 text-success',
				reactions: [
					{
						emoji: '👍',
						count: '1.4k',
					},
					{
						emoji: '🎉',
						count: '2k',
					},
				],
			},
			{
				title: 'Conference call with UX team',
				date: '22 July, 2019',
				text: 'Jonatha Smith added new milestone Pathek Lorem ipsum dolor sit amet consiquest dio',
				variant: 'bg-primary/30 text-primary',
				reactions: [
					{
						emoji: '❤️',
						count: '89',
					},
				],
			},
		],
		'Last Month': [
			{
				title: 'Join new team member Alex Smith',
				date: '10 December, 2018',
				text: 'Alex Smith is a Senior Software (Full Stack) engineer with a deep passion for building usable, functional & pretty web applications.',
				variant: 'bg-danger/30 text-danger',
				avatar: [
					{
						image: '/images/users/avatar-3.jpg',
						name: 'Alex Smith',
						position: 'Senior Software (Full Stack)',
					},
				],
			},
			{
				title: 'First release of Attex admin dashboard template',
				date: '05 May, 2023',
				text: 'Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding to setup a new show room.',
				variant: 'bg-primary/30 text-primary',
				reactions: [
					{
						emoji: '🎉',
						count: '10k',
					},
					{
						emoji: '👍',
						count: '3.2k',
					},
					{
						emoji: '❤️',
						count: '7.1k',
					},
				],
			},
		],
	}

	return (
		<>
			<PageBreadcrumb title="Timeline" subName="Extra Pages" />
			<div className="relative space-y-12 pb-6">
				<div className="absolute border-s-2 border border-gray-300 h-full top-0 start-10 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -z-10 dark:border-white/10"></div>

				{Object.keys(timelineData).map((day, idx) => {
					return (
						<Fragment key={idx}>
							<div className="md:text-center">
								<h5 className="py-2 px-4 bg-light inline rounded dark:bg-gray-700">{day}</h5>
							</div>
							{(timelineData[day] || []).map((item, idx) => {
								return idx % 2 === 0 ? (
									<div key={idx} className="md:text-end text-start">
										<div className="absolute start-10 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 mt-6">
											<div className={`w-6 h-6 flex justify-center items-center rounded-full ${item.variant}`}>
												<i className="ri-record-circle-fill text-sm"></i>
											</div>
										</div>
										<div className="grid grid-cols-2">
											<div className="md:col-span-1 col-span-2">
												<div className="relative md:me-10 md:ms-0 ms-20">
													<div className="card p-5">
														<h4 className="mb-1.5 text-base">{item.title}</h4>
														<p className="mb-4 text-gray-500 dark:text-gray-200">
															<small>{item.date}</small>
														</p>
														<p className="mb-4 text-gray-500 dark:text-gray-200">{item.text}</p>
														{item.images && (
															<div className="mb-6 flex items-center md:justify-end gap-2">
																{(item.images || []).map((img, idx) => {
																	return (
																		<Link to="" key={idx}>
																			<img className="h-9 rounded" alt="" src={img} />
																		</Link>
																	)
																})}
															</div>
														)}
														{item.reactions &&
															(item.reactions || []).map((item, idx) => {
																return (
																	<Link key={idx} to="" className="btn btn-sm bg-light !text-sm text-dark dark:text-white dark:bg-gray-700">
																		{item.emoji} {item.count}
																	</Link>
																)
															})}
														{item.avatar && (
															<div className="flex  items-center justify-end">
																{(item.avatar || []).map((item, idx) => {
																	return (
																		<React.Fragment key={idx}>
																			<img src={item.image} alt="Arya S" className="rounded-full me-3 h-6" />
																			<div>
																				<h5 className="mt-1.5 text-sm">
																					{item.name} <small>- {item.position}</small>
																				</h5>
																			</div>
																		</React.Fragment>
																	)
																})}
															</div>
														)}
													</div>
													<div className="bg-white dark:bg-gray-800 absolute h-4 w-4 rotate-45 rounded-sm top-7 md:-end-2 md:start-auto -start-2"></div>
												</div>
											</div>
										</div>
									</div>
								) : (
									<div className="text-start" key={idx}>
										<div className="absolute start-10 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 mt-6">
											<div className={`w-6 h-6 flex justify-center items-center rounded-full ${item.variant}`}>
												<i className="ri-record-circle-fill text-sm"></i>
											</div>
										</div>
										<div className="grid grid-cols-2">
											<div className="md:col-start-2 col-span-2">
												<div className="relative md:ms-10 ms-20">
													<div className="card p-5">
														<h4 className="mb-1.5 text-base">{item.title}</h4>
														<p className="mb-4 text-gray-500 dark:text-gray-200">
															<small>{item.date}</small>
														</p>
														<p className="mb-4 text-gray-500 dark:text-gray-200">{item.text}</p>
														{item.images && (
															<div className="mb-6 flex items-center md:justify-end gap-2">
																{(item.images || []).map((img, idx) => {
																	return (
																		<Link to="" key={idx}>
																			<img className="h-9 rounded" alt="" src={img} />
																		</Link>
																	)
																})}
															</div>
														)}
														{item.reactions &&
															(item.reactions || []).map((item, idx) => {
																return (
																	<Link key={idx} to="" className="btn btn-sm bg-light !text-sm text-dark dark:text-white dark:bg-gray-700">
																		{item.emoji} {item.count}
																	</Link>
																)
															})}
														{item.avatar && (
															<div className="flex items-center justify-start">
																{(item.avatar || []).map((item, idx) => {
																	return (
																		<React.Fragment key={idx}>
																			<img src={item.image} alt="Arya S" className="rounded-full me-3 h-6" />
																			<div>
																				<h5 className="mt-1.5 text-sm">
																					{item.name} <small>- {item.position}</small>
																				</h5>
																			</div>
																		</React.Fragment>
																	)
																})}
															</div>
														)}
													</div>
													<div className="bg-white dark:bg-gray-800 absolute h-4 w-4 rotate-45 rounded-sm top-7 -start-2"></div>
												</div>
											</div>
										</div>
									</div>
								)
							})}
						</Fragment>
					)
				})}
			</div>
		</>
	)
}

export default TimelinePages
