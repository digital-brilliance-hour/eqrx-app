import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

//images
import logo from '@/assets/images/logo.png'
import logoDark from '@/assets/images/logo-dark.png'

// style
import 'swiper/css'

interface AccountLayoutProps {
	pageImage?: string
	title: string
	helpText?: string
	bottomLinks?: any
	isCombineForm?: boolean
	children?: any
	hasThirdPartyLogin?: boolean
	starterClass?: boolean
}

const AuthLayout2 = ({ pageImage, title, helpText, bottomLinks, children, hasThirdPartyLogin, starterClass }: AccountLayoutProps) => {
	return (
		<div className="flex items-stretch h-screen bg-cover bg-center relative bg-no-repeat  bg-[url('../images/bg-auth.jpg')]">
			<div className="bg-white lg:max-w-[480px] z-10 p-12 relative w-full h-full border-t-[3px] border-primary dark:bg-gray-800">
				<div className="flex flex-col h-full gap-4">
					<div className="mb-8 text-center lg:text-start">
						<Link to="/" className="flex justify-center lg:justify-start">
							<img src={logo} alt="logo" className="h-6 hidden dark:block" />
							<img src={logoDark} alt="logo" className="h-6 block dark:hidden" />
						</Link>
					</div>
					<div className={`my-auto ${starterClass ? 'text-center' : ''}`}>
						{pageImage && <img src={pageImage} alt="" className="rounded-full shadow h-16 mx-auto" />}

						<h4 className={`text-dark/70 text-lg font-semibold dark:text-light/80 mb-2 ${pageImage ? 'mt-6' : ''}`}>{title}</h4>
						<p className="text-gray-400 mb-9">{helpText}</p>

						{children}

						{hasThirdPartyLogin && (
							<div className="text-center mt-9">
								<p className="text-gray-400 text-base mb-6">Sign in with</p>
								<ul className="inline-flex gap-2">
									<li className="">
										<Link to="" className="rounded-full border-2 border-primary text-primary w-8 h-8 inline-flex items-center justify-center">
											<i className="ri-facebook-circle-fill"></i>
										</Link>
									</li>
									<li className="">
										<Link to="" className="rounded-full border-2 border-danger text-danger w-8 h-8 inline-flex items-center justify-center">
											<i className="ri-google-fill"></i>
										</Link>
									</li>
									<li className="">
										<Link to="" className="rounded-full border-2 border-info text-info w-8 h-8 inline-flex items-center justify-center">
											<i className="ri-twitter-fill"></i>
										</Link>
									</li>
									<li className="">
										<Link to="" className="rounded-full border-2 border-secondary text-secondary w-8 h-8 inline-flex items-center justify-center">
											<i className="ri-github-fill"></i>
										</Link>
									</li>
								</ul>
							</div>
						)}
					</div>

					{bottomLinks}
				</div>
			</div>

			<div className="bg-black/30 w-full h-full relative hidden lg:block">
				<div className="absolute start-0 end-0 bottom-0 flex mt-auto justify-center text-center">
					<div className="xl:w-1/2 w-full mx-auto">
						<div className="swiper mt-auto cursor-col-resize" id="swiper_one">
							<div className="swiper-wrapper mb-12">
								<Swiper spaceBetween={50} slidesPerView={1} modules={[Autoplay]} loop={true} autoplay={{ delay: 5000 }}>
									<SwiperSlide>
										<div className="swiper-slide-content">
											<h2 className="text-3xl text-white mb-6">I love the color!</h2>
											<p className="text-lg text-white mb-5">
												<i className="ri-double-quotes-l"></i> Everything you need is in this template. Love the overall look and feel. Not too flashy, and still very professional and smart.
											</p>
											<p className="text-white mx-auto">- Admin User</p>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide-content">
											<h2 className="text-3xl text-white mb-6">Flexibility !</h2>
											<p className="text-lg text-white mb-5">
												<i className="ri-double-quotes-l"></i> Pretty nice theme, hoping you guys could add more features to this. Keep up the good work.
											</p>
											<p className="text-white mx-auto">- Admin User</p>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide-content">
											<h2 className="text-3xl text-white mb-6">Feature Availability!</h2>
											<p className="text-lg text-white mb-5">
												<i className="ri-double-quotes-l"></i> This is a great product, helped us a lot and very quick to work with and implement.
											</p>
											<p className="text-white mx-auto">- Admin User</p>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AuthLayout2
