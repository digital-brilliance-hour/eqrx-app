import { Link } from 'react-router-dom'

const SocialLinks = () => {
	const socialLinks = [
		{
			variant: 'primary',
			icon: 'ri-facebook-circle-fill',
		},
		{
			variant: 'danger',
			icon: 'ri-google-fill',
		},
		{
			variant: 'info',
			icon: 'ri-twitter-fill',
		},
		{
			variant: 'secondary',
			icon: 'ri-github-fill',
		},
	]

	return (
		<ul className="social-list list-inline mt-3">
			{(socialLinks || []).map((item, idx) => {
				return (
					<li className="list-inline-item" key={idx}>
						<Link to="/" className={`social-list-item border-${item.variant} text-${item.variant}`}>
							<i className={item.icon} />
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default SocialLinks
