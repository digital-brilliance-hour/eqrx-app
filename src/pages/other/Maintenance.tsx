import { useEffect } from 'react'
import { Link } from 'react-router-dom'

//components
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'

//image
import maintenance from '@/assets/images/svg/maintenance.svg'

const Maintenance = () => {
	useEffect(() => {
		if (document.body) {
			document.body.classList.add('authentication-bg', 'position-relative')
		}
		return () => {
			if (document.body) {
				document.body.classList.remove('authentication-bg', 'position-relative')
			}
		}
	}, [])

	return (
		<>
			<AuthContainer>
				<div className="h-screen relative">
					<div className="absolute start-0 end-0 top-0 bottom-0 h-full"></div>
					<div className="flex justify-center items-center h-full relative">
						<div className="2xl:w-7/12 xl:w-4/5 w-11/12">
							<div className="card">
								<div className="p-10">
									<div className="">
										<img src={maintenance} alt="maintenance.svg" className="h-40 mx-auto" />
									</div>

									<div className="max-w-lg mx-auto text-center">
										<h2 className="card-title text-2xl dark:text-white mb-1 mt-9">Site is Under Maintenance</h2>
										<p className="font-normal text-gray-400 dark:text-gray-400">We're making the system more awesome. We'll be back shortly.</p>
									</div>

									<div className="pt-24">
										<div className="grid md:grid-cols-3 gap-6">
											<div className="px-3 text-center">
												<div className="bg-primary text-white text-xl rounded-full flex items-center justify-center h-14 w-14 mx-auto mb-8">
													<i className="ri-vip-diamond-line"></i>
												</div>
												<h5 className="font-semibold uppercase mb-2">Why is the Site Down?</h5>
												<p className="text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											</div>

											<div className="px-3 text-center">
												<div className="bg-primary text-white text-xl rounded-full flex items-center justify-center h-14 w-14 mx-auto mb-8">
													<i className="ri-time-line"></i>
												</div>
												<h5 className="font-semibold uppercase mb-2">What is the Downtime?</h5>
												<p className="text-gray-400">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical but the majority.</p>
											</div>

											<div className="px-3 text-center">
												<div className="bg-primary text-white text-xl rounded-full flex items-center justify-center h-14 w-14 mx-auto mb-8">
													<i className="ri-question-mark"></i>
												</div>
												<h5 className="font-semibold uppercase mb-2">Do you need Support?</h5>
												<p className="text-gray-400">
													If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar..{' '}
													<Link to="" className="text-gray-500 font-medium">
														no-reply@domain.com
													</Link>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<footer className="inline-flex items-center justify-center absolute start-0 end-0 bottom-0 font-medium bg-transparent h-14">
							<span className="">{new Date().getFullYear()} © Attex - Coderthemes.com</span>
						</footer>
					</div>
				</div>
			</AuthContainer>
		</>
	)
}

export default Maintenance
