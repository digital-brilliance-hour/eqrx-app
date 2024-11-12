import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// components
import { PageBreadcrumb } from '../../components'
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'

//image
import logo from '@/assets/images/logo.png'
import startMan from '@/assets/images/svg/startman.svg'

const Error500 = () => {
	useEffect(() => {
		if (document.body) {
			document.body.classList.add('authentication-bg')
		}
		return () => {
			if (document.body) {
				document.body.classList.remove('authentication-bg')
			}
		}
	}, [])

	return (
		<>
			<PageBreadcrumb title="Error 500" />
			<AuthContainer>
				<div className="relative flex flex-col items-center justify-center h-screen">
					<div className="flex justify-center">
						<div className="max-w-md px-4 mx-auto">
							<div className="card overflow-hidden">
								<div className="p-9 bg-primary">
									<Link to="/" className="flex justify-center">
										<img src={logo} alt="logo-light" className="h-6" />
									</Link>
								</div>

								<div className="px-6 py-10">
									<div className="text-center">
										<img src={startMan} alt="startman-svg" className="h-32 mx-auto mb-10" />
										<h1 className="text-primary text-7xl drop-shadow-xl">500</h1>
										<h4 className="text-danger text-lg uppercase my-7">INTERNAL SERVER ERROR</h4>
										<p>
											Why not try refreshing your page? or you can contact{' '}
											<Link to="#" className="font-semibold">
												Support
											</Link>{' '}
										</p>
										<Link type="button" className="btn bg-info text-white mt-10" to="/">
											<i className="ri-home-4-line me-2"></i> Return Home
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<footer className="absolute bottom-0 inset-x-0">
					<p className="font-medium text-center p-6">{new Date().getFullYear()} © Attex - Coderthemes.com</p>
				</footer>
			</AuthContainer>
		</>
	)
}

export default Error500
