import { Link } from 'react-router-dom'

// components
import AuthLayout2 from './AuthLayout2'
import { FormInput, VerticalForm } from '../../components'

const BottomLink = () => {
	return (
		<footer className="text-center justify-center h-14 -mb-12">
			Back to{' '}
			<Link to="/auth/login2" className="text-muted ms-1 link-offset-3 underline-offset-4">
				<b>Log In</b>
			</Link>
		</footer>
	)
}

const RecoverPassword2 = () => {
	return (
		<>
			<AuthLayout2 title="Reset Password" helpText="Enter your email address and we'll send you an email with instructions to reset your password." bottomLinks={<BottomLink />}>
				<VerticalForm onSubmit={() => null}>
					<FormInput label="Email address" name="email" type="email" placeholder="Enter your email" className="form-input" labelClassName="font-semibold text-gray-500" containerClass="mb-6 space-y-2" required />
					<div className="text-center">
						<button className="btn bg-primary text-white w-full" type="submit">
							<i className="ri-login-box-line me-1"></i> Reset Password{' '}
						</button>
					</div>
				</VerticalForm>
			</AuthLayout2>
		</>
	)
}

export default RecoverPassword2
