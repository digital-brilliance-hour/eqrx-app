// components
import { Link } from 'react-router-dom'

// components
import { PageBreadcrumb } from '../../components'

const Error404Alt = () => {
	return (
		<>
			<PageBreadcrumb title="Error 404" subName="Error Pages" />
			<div className="flex flex-col items-center justify-center">
				<div className="text-center max-w-xl">
					<h1 className="text-primary text-7xl drop-shadow-xl">404</h1>
					<h4 className="text-danger text-lg uppercase my-7">Page Not Found</h4>
					<p>It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. Here's a little tip that might help you get back on track.</p>
					<Link to="/" role="button" className="btn bg-info text-white mt-10">
						<i className="ri-home-4-line me-2"></i> Back to Home
					</Link>
				</div>
			</div>
		</>
	)
}

export default Error404Alt
