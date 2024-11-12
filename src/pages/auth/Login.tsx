import { useEffect } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { AppDispatch, RootState } from '../../redux/store'
import { loginUser, resetAuth } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

// form validation
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// components
import AuthLayout from '../../components/AuthPageLayout/AuthLayout'
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'
import VerticalForm from '../../components/VerticalForm'
import FormInput from '../../components/FormInput'

interface UserData {
	username: string
	password: string
}

/**
 * Bottom Links goes here
 */
const BottomLink = () => {
	return (
		<div className="text-center my-4">
			<p className="text-muted">
				Don&apos;t have an account?&nbsp;
				<Link to="/auth/register" className="text-muted ms-1 link-offset-3 underline underline-offset-4">
					<b>Sign Up</b>
				</Link>
			</p>
		</div>
	)
}

const PasswordInputChild = () => {
	return (
		<Link to="/auth/recover-password" className="text-muted text-xs underline decoration-dashed underline-offset-4">
			Forgot your password?
		</Link>
	)
}

const Login = () => {
	const dispatch = useDispatch<AppDispatch>()

	const { user, userLoggedIn, loading } = useSelector((state: RootState) => ({
		user: state.Auth.user,
		loading: state.Auth.loading,
		error: state.Auth.error,
		userLoggedIn: state.Auth.userLoggedIn,
	}))

	useEffect(() => {
		dispatch(resetAuth())
	}, [dispatch])

	/*
  form validation schema
  */
	const schemaResolver = yupResolver(
		yup.object().shape({
			username: yup.string().required('Please enter Username'),
			password: yup.string().required('Please enter Password'),
		})
	)

	/*
  handle form submission
  */
	const onSubmit = (formData: UserData) => {
		dispatch(loginUser(formData['username'], formData['password']))
	}

	const location = useLocation()

	// redirection back to where user got redirected from
	const redirectUrl = location?.search?.slice(6) || '/'

	return (
		<>
			{(userLoggedIn || user) && <Navigate to={redirectUrl} />}

			<AuthContainer>
				<AuthLayout authTitle="Sign In" helpText="Enter your email address and password to access admin panel." bottomLinks={<BottomLink />}>
					<VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver} defaultValues={{ username: 'attex@coderthemes.com', password: 'attex' }}>
						<FormInput label="Email Address" type="email" name="username" className="form-input" placeholder="Enter your email" containerClass="mb-6 space-y-2" labelClassName="font-semibold text-gray-500" required />

						<FormInput label="Password" type="password" name="password" placeholder="Enter your password" className="form-input rounded-e-none" containerClass="mb-6 space-y-2" labelClassName="font-semibold text-gray-500" labelContainerClassName="flex justify-between items-center mb-2" required>
							<PasswordInputChild />
						</FormInput>

						<FormInput label="Remember me" type="checkbox" name="checkbox" className="form-checkbox rounded text-primary" containerClass="mb-6" labelClassName="ms-2" defaultChecked />

						<div className="text-center mb-6">
							<button className="btn bg-primary text-white" type="submit" disabled={loading}>
								Log In
							</button>
						</div>
					</VerticalForm>
				</AuthLayout>
			</AuthContainer>
		</>
	)
}

export default Login
