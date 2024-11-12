import { Link } from 'react-router-dom'
import AuthLayout2 from './AuthLayout2'

//image
import mail from '@/assets/images/svg/mail_sent.svg'

const BottomLink = () => {
	return (
		<footer className="text-center justify-center h-14 -mb-12">
			<p className="text-muted">{new Date().getFullYear()} © Attex - Coderthemes.com</p>
		</footer>
	)
}

const ConfirmMail2 = () => {
	return (
		<>
			<AuthLayout2 title="" starterClass bottomLinks={<BottomLink />}>
				<div className="text-center">
					<img src={mail} alt="mail sent image" className="h-16 mx-auto" />
					<h4 className="text-dark/70 text-center text-lg font-bold dark:text-light/80 mb-2 mt-9">Please check your email</h4>
					<p className="text-gray-400 mb-9">A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
				</div>
				<div className="text-center mb-6">
					<Link to="/" className="btn bg-primary text-white w-full" type="submit">
						<i className="ri-home-4-line me-1.5"></i> Back To Home{' '}
					</Link>
				</div>
			</AuthLayout2>
		</>
	)
}

export default ConfirmMail2
