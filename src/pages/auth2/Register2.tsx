import { Link } from 'react-router-dom'

// components
import AuthLayout2 from './AuthLayout2'
import { FormInput, VerticalForm } from '../../components'

const BottomLink = () => {
	return (
		<footer className="text-center justify-center h-14 -mb-12">
			Already have account?{' '}
			<Link to="/auth/login2" className="text-muted ms-1 link-offset-3 underline-offset-4">
				<b>Log In</b>
			</Link>
		</footer>
	)
}

const Register2 = () => {
	return (
		<>
			<AuthLayout2 title="Free Sign Up" helpText="EnDon't have an account? Create your account, it takes less than a minute" bottomLinks={<BottomLink />} hasThirdPartyLogin>
				<VerticalForm onSubmit={() => null}>
					<FormInput label="Full Name" type="text" labelClassName="font-semibold text-gray-500" name="fullname" className="form-input" placeholder={'Enter your Name'} containerClass={'mb-6 space-y-2'} />

					<FormInput label="Email address" type="email" name="email" className="form-input" labelClassName="font-semibold text-gray-500" placeholder={'Enter your email'} containerClass={'mb-6 space-y-2'} />
					<FormInput label={'Password'} type="password" name="password" labelClassName="font-semibold text-gray-500" className="form-input rounded-e-none" placeholder={'Enter your password'} containerClass={'mb-6 space-y-2'} labelContainerClassName="flex justify-between items-center mb-2">
						<Link to="/auth/recover-password2" className="text-muted text-xs">
							Forgot your password?
						</Link>
					</FormInput>
					<FormInput label="Remember me" labelClassName="ms-2 text-sm font-medium" type="checkbox" name="checkbox" className="form-checkbox rounded text-primary" containerClass={'mb-6'} labelContainerClassName="flex items-center" />
					<div className=" text-center">
						<button className="btn bg-primary text-white w-full" type="submit">
							<i className="ri-login-box-line me-1"></i> Log In{' '}
						</button>
					</div>
				</VerticalForm>
			</AuthLayout2>
		</>
	)
}

export default Register2
