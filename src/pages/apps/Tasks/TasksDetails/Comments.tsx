import { Link } from 'react-router-dom'

//images
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'

const Comments = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="text-base">Comments (51)</h4>

				<div className="mt-7">
					<div className="flex gap-3">
						<img src={avatar3} alt="" className="h-8 rounded-full" />
						<div className="w-full">
							<h5 className="mb-2">
								Jeremy Tomlinson
								<small className="float-right">5 hours ago</small>
							</h5>
							<p>Nice work, makes me think of The Money Pit.</p>
							<Link to="" className="block mt-2 font-light">
								<i className="ri-reply-line"></i> Reply
							</Link>

							<div className="mt-5">
								<div className="flex gap-3">
									<img src={avatar4} alt="" className="h-8 rounded-full" />
									<div className="w-full">
										<h5 className="mb-2">
											Thelma Fridley
											<small className="float-right">3 hours ago</small>
										</h5>
										<p>i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.</p>
										<Link to="" className="block mt-2 font-light">
											<i className="ri-reply-line"></i> Reply
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-5">
						<div className="flex gap-3">
							<img src={avatar3} alt="" className="h-8 rounded-full" />
							<div className="w-full">
								<h5 className="mb-2">
									Kevin Martinez
									<small className="float-right">1 day ago</small>
								</h5>
								<p>It would be very nice to have.</p>
								<Link to="" className="block mt-2 font-light">
									<i className="ri-reply-line"></i> Reply
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center mt-3">
					<Link to="" className="text-danger">
						<i className="ri-loader-2-line me-1"></i> Load more{' '}
					</Link>
				</div>

				<div className="mt-7 border rounded-md">
					<textarea rows={3} className="border-0 w-full focus:outline-0 focus:border-0 focus:ring-0" placeholder="Your comment..."></textarea>
					<div className="px-3 py-2 bg-gray-50 flex justify-between items-center">
						<div>
							<Link to="#" className="btn btn-sm px-1 hover:bg-light hover:text-slate-900">
								<i className="ri-upload-line"></i>
							</Link>
							<Link to="#" className="btn btn-sm px-1 hover:bg-light hover:text-slate-900">
								<i className="ri-at-line"></i>
							</Link>
						</div>
						<button type="submit" className="btn bg-success text-white py-1">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Comments
