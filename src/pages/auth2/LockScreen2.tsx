import { Link } from 'react-router-dom'
import AuthLayout2 from './AuthLayout2'

// components
import { FormInput, VerticalForm } from '../../components'

const BottomLink = () => {
	return (
		<footer className="text-center justify-center h-14 -mb-12">
			<p className="text-gray-400">
				Not you? return{' '}
				<Link to="/auth/login2" className="text-gray-500 ms-1">
					<b>Sign In</b>
				</Link>
			</p>
		</footer>
	)
}

const LockScreen2 = () => {
	return (
		<>
			<AuthLayout2 pageImage="/images/users/avatar-1.jpg" title="Hi ! Tosha" helpText="Enter your password to access the admin." starterClass hasThirdPartyLogin bottomLinks={<BottomLink />}>
				<VerticalForm onSubmit={() => null}>
					<FormInput label={'Password'} labelClassName="font-semibold text-gray-500" className="form-input rounded-e-none" type="password" name="password" placeholder={'Enter your password'} containerClass={'mb-6 space-y-2'} labelContainerClassName="text-start" />
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

export default LockScreen2
