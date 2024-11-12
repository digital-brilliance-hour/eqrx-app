// components
import { PageBreadcrumb } from '../../components'

const PricingPages = () => {
	return (
		<>
			<PageBreadcrumb title="Pricing" subName="Extra Pages" />
			<div className="2xl:px-32 mx-auto ">
				<div className="max-w-lg mx-auto text-center">
					<h2 className="text-2xl font-medium dark:text-white mb-2">
						Our <span className="font-bold">Plans</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-400">We have plans and prices that fit your business perfectly. Make your client site a success with our products.</p>
				</div>

				<div className="mt-10">
					<div className="grid lg:grid-cols-3 gap-6">
						<div className="card">
							<div className="text-center p-6">
								<h6 className="uppercase">Professional Pack</h6>
								<div className="bg-primary/20 text-primary border border-primary/50 rounded-full text-2xl flex items-center justify-center w-16 h-16 mx-auto my-6">
									<i className="ri-group-line"></i>
								</div>
								<h2 className="text-3xl mb-6">
									$19 <span className="text-sm uppercase font-medium text-gray-400">/ Month</span>
								</h2>

								<ul className="flex flex-col gap-6">
									<li>10 GB Storage</li>
									<li>500 GB Bandwidth</li>
									<li>No Domain</li>
									<li>1 User</li>
									<li>Email Support</li>
									<li>24x7 Support</li>
								</ul>

								<div className="mt-14">
									<button type="button" className="btn bg-primary text-white w-full">
										Change Plan
									</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="text-center p-6">
								<h6 className="uppercase">Business Pack</h6>
								<div className="bg-danger/20 text-danger border border-danger/50 rounded-full text-2xl flex items-center justify-center w-16 h-16 mx-auto my-6">
									<i className="ri-briefcase-2-line"></i>
								</div>
								<h2 className="text-3xl mb-6">
									$29 <span className="text-sm uppercase font-medium text-gray-400">/ Month</span>
								</h2>

								<ul className="flex flex-col gap-6">
									<li>50 GB Storage</li>
									<li>900 GB Bandwidth</li>
									<li>2 Domain</li>
									<li>10 User</li>
									<li>Email Support</li>
									<li>24x7 Support</li>
								</ul>

								<div className="mt-14">
									<button type="button" className="btn bg-danger/70 text-white w-full">
										Current Plan
									</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="text-center p-6">
								<h6 className="uppercase">Enterprise Pack</h6>
								<div className="bg-primary/20 text-primary border border-primary/50 rounded-full text-2xl flex items-center justify-center w-16 h-16 mx-auto my-6">
									<i className="ri-community-line"></i>
								</div>
								<h2 className="text-3xl mb-6">
									$39 <span className="text-sm uppercase font-medium text-gray-400">/ Month</span>
								</h2>

								<ul className="flex flex-col gap-6">
									<li>100 GB Storage</li>
									<li>Unlimited Bandwidth</li>
									<li>10 Domain</li>
									<li>Unlimited User</li>
									<li>Email Support</li>
									<li>24x7 Support</li>
								</ul>

								<div className="mt-14">
									<button type="button" className="btn bg-primary text-white w-full">
										Change Plan
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PricingPages
