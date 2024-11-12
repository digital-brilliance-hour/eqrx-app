import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormInput, PageBreadcrumb, VerticalForm } from '../../components'
import { Link, Navigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
//actions
import { resetAuth, signupUser } from '../../redux/actions'
import { RootState, AppDispatch } from '../../redux/store'
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'
import AuthLayout from '../../components/AuthPageLayout/AuthLayout'

interface UserData {
	fullname: string
	email: string
	password: string
}

const BottomLink = () => {
	return (
		<div className="text-center my-4">
			<p className="text-muted">
				Already have account?{' '}
				<Link to="/auth/login" className="text-muted ms-1 link-offset-3 underline underline-offset-4">
					<b>Log In</b>
				</Link>
			</p>
		</div>
	)
}

const Register = () => {
	const dispatch = useDispatch<AppDispatch>()

	const { userSignUp } = useSelector((state: RootState) => ({
		loading: state.Auth.loading,
		error: state.Auth.error,
		userSignUp: state.Auth.userSignUp,
	}))

	useEffect(() => {
		dispatch(resetAuth())
	}, [dispatch])

	/*
	 * form validation schema
	 */

	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			fullname: yup.string().required('Please enter Fullname'),
			email: yup.string().required('Please enter Email').email('Please enter valid Email'),
			password: yup.string().required('Please enter Password'),
		})
	)

	/*
	 * handle form submission
	 */
	const onSubmit = (formData: UserData) => {
		dispatch(signupUser(formData['fullname'], formData['email'], formData['password']))
	}

	return (
		<>
			<PageBreadcrumb title="Sign Up" />
			{userSignUp ? <Navigate to={'/auth/confirm-mail'}></Navigate> : null}
			<AuthContainer>
				<AuthLayout authTitle="Free Sign Up" helpText="Don't have an account? Create your account, it takes less than a minute." bottomLinks={<BottomLink />}>
					<VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
						<FormInput label="Full Name" type="text" name="fullname" labelClassName="font-semibold text-gray-500" placeholder="Enter your name" containerClass="mb-6 space-y-2" className="form-input" />
						<FormInput label="Email address" type="text" name="email" labelClassName="font-semibold text-gray-500" placeholder="Enter your email" containerClass="mb-6 space-y-2" className="form-input" />
						<FormInput label="Password" type="password" name="password" labelClassName="font-semibold text-gray-500" placeholder="Enter your password" containerClass="mb-6 space-y-2" className="form-input" />
						<div className="mb-6">
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="checkbox-signin" />
								<label className="ms-2 font-semibold text-gray-600" htmlFor="checkbox-signin">
									I accept{' '}
									<Link to="#" className="text-gray-500">
										Terms and Conditions
									</Link>
								</label>
							</div>
						</div>
						<div className="text-center mb-6">
							<button className="btn bg-primary text-white" type="submit">
								{' '}
								Sign Up{' '}
							</button>
						</div>
					</VerticalForm>
				</AuthLayout>
			</AuthContainer>
		</>
	)
}

export default Register
