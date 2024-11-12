import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector, useDispatch } from 'react-redux'

//actions
import { resetAuth, forgotPassword } from '../../redux/actions'
import { RootState, AppDispatch } from '../../redux/store'

// components
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'
import AuthLayout from '../../components/AuthPageLayout/AuthLayout'
import { FormInput, PageBreadcrumb, VerticalForm } from '../../components'

interface UserData {
	username: string
}

const BottomLink = () => {
	return (
		<div className="text-center my-4">
			<p className="text-muted">
				Back to{' '}
				<Link to="/auth/login" className="text-muted ms-1 link-offset-3 underline underline-offset-4">
					<b>Log In</b>
				</Link>
			</p>
		</div>
	)
}
const RecoverPassword = () => {
	const dispatch = useDispatch<AppDispatch>()
	useEffect(() => {
		dispatch(resetAuth())
	}, [dispatch])

	const { passwordReset } = useSelector((state: RootState) => ({
		passwordReset: state.Auth.passwordReset,
	}))
	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			username: yup.string().required('Please enter email'),
		})
	)
	/*
	 * handle form submission
	 */
	const onSubmit = (formData: UserData) => {
		dispatch(forgotPassword(formData.username))
	}
	return (
		<>
			<PageBreadcrumb title="Recover Password" />
			<AuthContainer>
				<AuthLayout authTitle="Reset Password" helpText="Enter your email address and we'll send you an email with instructions to reset your password." bottomLinks={<BottomLink />}>
					{!passwordReset && (
						<VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
							<FormInput label="Email address" type="text" name="username" placeholder="Enter your email" containerClass="mb-6 space-y-2" className="form-input" required />
							<div className="text-center">
								<button className="btn bg-primary text-white" type="submit">
									<i className="ri-login-box-line me-1"></i> Reset Password{' '}
								</button>
							</div>
						</VerticalForm>
					)}
				</AuthLayout>
			</AuthContainer>
		</>
	)
}

export default RecoverPassword
