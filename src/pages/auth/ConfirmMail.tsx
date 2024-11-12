import { Link } from 'react-router-dom'

// components
import { PageBreadcrumb } from '../../components'
import AuthLayout from '../../components/AuthPageLayout/AuthLayout'
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'

const BottomLink = () => {
	return (
		<div className="text-center my-4">
			<p className="text-muted">
				Don't have an account?{' '}
				<Link to="/auth/register" className="text-muted ms-1 link-offset-3 underline underline-offset-4">
					<b>Sign Up</b>
				</Link>
			</p>
		</div>
	)
}

const ConfirmMail = () => {
	return (
		<>
			<PageBreadcrumb title="Confirm Mail" />
			<AuthContainer>
				<AuthLayout hasForm={false} bottomLinks={<BottomLink />} pageImage="/images/svg/mail_sent.svg" helpText="A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password." authTitle="Please check your email">
					<Link to="/">
						<div className="text-center mb-6">
							<button className="btn bg-primary text-white" type="submit">
								<i className="ri-home-4-line me-1.5"></i> Back To Home{' '}
							</button>
						</div>
					</Link>
				</AuthLayout>
			</AuthContainer>
		</>
	)
}

export default ConfirmMail
