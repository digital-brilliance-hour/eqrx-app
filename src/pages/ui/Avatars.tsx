//image
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'
import avatar7 from '@/assets/images/users/avatar-7.jpg'
import avatar8 from '@/assets/images/users/avatar-8.jpg'

import Img2 from '@/assets/images/small/small-2.jpg'
import Img3 from '@/assets/images/small/small-3.jpg'

// components
import { PageBreadcrumb } from '../../components'

const Avatars = () => {
	return (
		<>
			<PageBreadcrumb title="Avatars" subName="Base UI" />
			<div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
				<div className="card p-6">
					<h4 className="card-title">Sizing - Images</h4>
					<div className="flex flex-wrap items-end gap-6">
						<img src={avatar2} alt="image" className="h-8 w-8 rounded" />
						<img src={avatar3} alt="image" className="h-12 w-12 rounde/d" />
						<img src={avatar4} alt="image" className="h-16 w-16 rounded" />
						<img src={avatar5} alt="image" className="h-24 w-24 rounded" />
						<img src={avatar6} alt="image" className="h-32 w-32 rounded" />
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Rounded Circle</h4>
					<div className="flex flex-wrap items-end gap-6">
						<img src={avatar4} alt="image" className="h-16 w-16 rounded-full" />
						<img src={avatar5} alt="image" className="h-24 w-24 rounded-full" />
						<img src={avatar6} alt="image" className="h-32 w-32 rounded-full" />
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Sizing - Background Color</h4>
					<div className="flex flex-wrap items-end gap-6">
						<div className="w-8 h-8 justify-center items-center flex bg-primary text-white rounded-md">
							<span className="">CT</span>
						</div>
						<div className="w-12 h-12 justify-center items-center flex bg-success text-white rounded-md">
							<span className="text-lg">CT</span>
						</div>
						<div className="w-16 h-16 justify-center items-center flex bg-info/20 text-info rounded-md">
							<span className="text-xl">CT</span>
						</div>
						<div className="w-24 h-24 justify-center items-center flex bg-danger text-white rounded-md">
							<span className="text-2xl">CT</span>
						</div>
						<div className="w-32 h-32 justify-center items-center flex bg-warning/25 text-warning rounded-md">
							<span className="text-4xl">CT</span>
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Rounded Circle Background</h4>

					<div className="flex flex-wrap items-end gap-3">
						<div className="w-16 h-16 justify-center items-center flex bg-info/20 text-info rounded-full">
							<span className="text-xl">CT</span>
						</div>

						<div className="w-24 h-24 justify-center items-center flex bg-danger text-white rounded-full">
							<span className="text-2xl">CT</span>
						</div>

						<div className="w-32 h-32 justify-center items-center flex bg-warning/25 text-warning rounded-full">
							<span className="text-4xl">CT</span>
						</div>
					</div>
				</div>

				<div className="xl:col-span-2">
					<div className="card p-6">
						<h4 className="card-title">Rounded Circle Background</h4>
						<div className="flex flex-wrap gap-3">
							<div className="lg:w-1/6 md:1/3 px-3">
								<img src={Img2} alt="" className="w-52 rounded" />
								<p className="text-info mt-2">
									<code>.rounded</code>
								</p>
							</div>
							<div className="lg:w-1/6 md:1/3 px-3">
								<img src={avatar6} alt="" className="w-32 rounded mx-auto" />
								<p className="text-info mt-2 text-center">
									<code>.rounded</code>
								</p>
							</div>
							<div className="lg:w-1/6 md:1/3 px-3">
								<img src={avatar7} alt="" className="w-32 rounded-full mx-auto" />
								<p className="text-info mt-2 text-center">
									<code>.rounded-full</code>
								</p>
							</div>
							<div className="lg:w-1/6 md:1/3 px-3">
								<img src={Img3} alt="" className="w-52 p-1 border border-gray-200 rounded bg-slate-100" />
								<p className="text-info mt-2">
									<code>.rounded .border</code>
								</p>
							</div>
							<div className="lg:w-1/6 md:1/3 px-3">
								<img src={avatar8} alt="" className="w-32 rounded-full p-1 border border-gray-200 bg-slate-100" />
								<p className="text-info mt-2 text-start">
									<code>.rounded-full .border</code>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Rounded Circle Background Top Status</h4>
					<div className="flex flex-wrap items-end gap-3">
						<div className="relative inline-flex">
							<div className="w-8 h-8 justify-center items-center flex bg-primary rounded-full">
								<span className="text-white">CT</span>
							</div>
							<div className="absolute end-0 h-2 w-2 rounded-full border border-white bg-success"></div>
						</div>

						<div className="relative inline-flex">
							<div className="w-12 h-12 justify-center items-center flex bg-dark rounded-full">
								<span className="text-white text-lg">CT</span>
							</div>
							<div className="absolute end-0 m-0.5 h-2.5 w-2.5 rounded-full border border-white bg-success"></div>
						</div>

						<div className="relative inline-flex">
							<div className="w-16 h-16 justify-center items-center flex bg-success/25 rounded-full">
								<span className="text-success text-xl">CT</span>
							</div>
							<div className="absolute end-0 m-1 h-3 w-3 rounded-full border border-white bg-gray-400"></div>
						</div>

						<div className="relative inline-flex">
							<div className="w-20 h-20 justify-center items-center flex bg-info rounded-full">
								<span className="text-white text-2xl">CT</span>
							</div>
							<div className="absolute end-0 m-1.5 h-3 w-3 rounded-full border border-white bg-danger"></div>
						</div>

						<div className="relative inline-flex">
							<div className="w-24 h-24 justify-center items-center flex bg-danger rounded-full">
								<span className="text-white text-2xl">CT</span>
							</div>
							<div className="absolute end-0 m-2 h-3.5 w-3.5 rounded-full border-2 border-white bg-primary"></div>
						</div>

						<div className="relative inline-flex">
							<div className="w-28 h-28 justify-center items-center flex bg-info/25 rounded-full">
								<span className="text-info text-3xl">CT</span>
							</div>
							<div className="absolute end-0 m-2.5 h-4 w-4 rounded-full border-2 border-white bg-primary"></div>
						</div>

						<div className="relative inline-flex">
							<div className="w-32 h-32 justify-center items-center flex bg-primary/25 rounded-full">
								<span className="text-primary text-4xl">CT</span>
							</div>
							<div className="absolute end-0 m-2.5 h-5 w-5 rounded-full border-4 border-white bg-success"></div>
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Circular avatars with bottom status</h4>
					<div className="flex flex-wrap items-end gap-3">
						<div className="relative inline-block">
							<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar1} alt="Image Description" />
							<span className="absolute bottom-0 end-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
						</div>
						<div className="relative inline-block">
							<img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar2} alt="Image Description" />
							<span className="absolute bottom-0 end-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-400"></span>
						</div>
						<div className="relative inline-block">
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar3} alt="Image Description" />
							<span className="absolute bottom-0 end-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
						</div>
						<div className="relative inline-block">
							<img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar4} alt="Image Description" />
							<span className="absolute bottom-0 end-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-orange-400"></span>
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Rounded avatars with bottom status</h4>
					<div className="flex flex-wrap items-end gap-3">
						<div className="relative inline-block">
							<img className="inline-block h-8 w-8 rounded-md ring-2 ring-white dark:ring-gray-800" src={avatar1} alt="Image Description" />
							<span className="absolute bottom-0 end-0 block h-1.5 w-1.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-gray-400"></span>
						</div>
						<div className="relative inline-block">
							<img className="inline-block h-9 w-9 rounded-md ring-2 ring-white dark:ring-gray-800" src={avatar2} alt="Image Description" />
							<span className="absolute bottom-0 end-0 block h-2.5 w-2.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-red-400"></span>
						</div>
						<div className="relative inline-block">
							<img className="inline-block h-12 w-12 rounded-md ring-2 ring-white dark:ring-gray-800" src={avatar3} alt="Image Description" />
							<span className="absolute bottom-0 end-0 block h-3 w-3 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-green-400"></span>
						</div>
						<div className="relative inline-block">
							<img className="inline-block h-16 w-16 rounded-md ring-2 ring-white dark:ring-gray-800" src={avatar4} alt="Image Description" />
							<span className="absolute bottom-0 end-0 block h-3.5 w-3.5 rounded-full transform translate-y-1/2 translate-x-1/2 ring-2 ring-white bg-orange-400"></span>
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Media</h4>
					<div className="flex flex-wrap items-end gap-3">
						<div className="flex-shrink-0 group block">
							<div className="flex items-center">
								<img className="inline-block flex-shrink-0 h-16 w-16 rounded-full" src={avatar5} alt="Image Description" />
								<div className="ms-3">
									<h3 className="font-semibold text-gray-800 dark:text-white">Scote Wanner</h3>
									<p className="text-sm font-medium text-gray-400">scote@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Stack</h4>
					<div className="flex-col space-y-2">
						<div className="flex">
							<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar1} alt="Image Description" />
							<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar2} alt="Image Description" />
							<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar3} alt="Image Description" />
							<img className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar4} alt="Image Description" />
						</div>
						<div className="flex">
							<img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar1} alt="Image Description" />
							<img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar2} alt="Image Description" />
							<img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar3} alt="Image Description" />
							<img className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar4} alt="Image Description" />
						</div>
						<div className="flex">
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar1} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar2} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar3} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar4} alt="Image Description" />
						</div>
						<div className="flex">
							<img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar1} alt="Image Description" />
							<img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar2} alt="Image Description" />
							<img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar3} alt="Image Description" />
							<img className="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar4} alt="Image Description" />
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Grid</h4>
					<div className="flex flex-wrap items-end gap-3">
						<div className="grid grid-cols-3 gap-4">
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar1} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar2} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar3} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar4} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar5} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar6} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar7} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white dark:ring-gray-800" src={avatar8} alt="Image Description" />
							<div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-slate-300 focus:outline-none focus:bg-primary/25 focus:text-primary focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-primary/25 dark:focus:text-primary dark:focus:ring-offset-gray-800">
								<span className="font-medium leading-none">9+</span>
							</div>
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Border color</h4>
					<div className="flex flex-col gap-3">
						<div className="flex">
							<img className="inline-block h-8 w-8 rounded-full border-2 border-primary" src={avatar1} alt="Image Description" />
							<img className="inline-block h-8 w-8 rounded-full border-2 border-primary" src={avatar2} alt="Image Description" />
							<img className="inline-block h-8 w-8 rounded-full border-2 border-primary" src={avatar3} alt="Image Description" />
							<img className="inline-block h-8 w-8 rounded-full border-2 border-primary" src={avatar4} alt="Image Description" />
						</div>
						<div className="flex">
							<img className="inline-block h-9 w-9 rounded-full border-2 border-red-300" src={avatar1} alt="Image Description" />
							<img className="inline-block h-9 w-9 rounded-full border-2 border-red-300" src={avatar2} alt="Image Description" />
							<img className="inline-block h-9 w-9 rounded-full border-2 border-red-300" src={avatar3} alt="Image Description" />
							<img className="inline-block h-9 w-9 rounded-full border-2 border-red-300" src={avatar4} alt="Image Description" />
						</div>
						<div className="flex">
							<img className="inline-block h-12 w-12 rounded-full border-2 border-teal-500" src={avatar1} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full border-2 border-teal-500" src={avatar2} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full border-2 border-teal-500" src={avatar3} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full border-2 border-teal-500" src={avatar4} alt="Image Description" />
						</div>
						<div className="flex">
							<img className="inline-block h-16 w-16 rounded-full border-2 border-purple-400" src={avatar1} alt="Image Description" />
							<img className="inline-block h-16 w-16 rounded-full border-2 border-purple-400" src={avatar2} alt="Image Description" />
							<img className="inline-block h-16 w-16 rounded-full border-2 border-purple-400" src={avatar3} alt="Image Description" />
							<img className="inline-block h-16 w-16 rounded-full border-2 border-purple-400" src={avatar4} alt="Image Description" />
						</div>
					</div>
				</div>

				<div className="card p-6">
					<h4 className="card-title">Image - Background Color</h4>
					<div className="flex gap-3">
						<div className="flex -space-x-2">
							<img className="inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-800" src={avatar1} alt="Image Description" />
							<div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-warning text-white border-2 border-white dark:border-gray-800">
								<span className="font-medium leading-none">CT</span>
							</div>
							<img className="inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-800" src={avatar2} alt="Image Description" />
							<img className="inline-block h-12 w-12 rounded-full border-2 border-white dark:border-gray-800" src={avatar3} alt="Image Description" />
							<div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-info text-white border-2 border-white dark:border-gray-800">
								<span className="font-medium leading-none">CT</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Avatars
