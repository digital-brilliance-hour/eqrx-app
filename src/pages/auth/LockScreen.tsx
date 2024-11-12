import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'

// components
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'
import AuthLayout from '../../components/AuthPageLayout/AuthLayout'
import { FormInput, VerticalForm } from '../../components'

interface UserData {
	password: string
}

/**
 * bottom links
 */
const BottomLink = () => {
	return (
		<div className="text-center my-4">
			<p className="text-muted">
				{' '}
				Not you? return{' '}
				<Link to="/auth/register" className="text-muted ms-1 link-offset-3 underline underline-offset-4">
					<b>Sign Up</b>
				</Link>
			</p>
		</div>
	)
}

const LockScreen = () => {
	const schemaResolver = yupResolver(
		yup.object().shape({
			password: yup.string().required('Please enter Password'),
		})
	)

	/*
	 * handle form submission
	 */
	const onSubmit = (formData: UserData) => {
		console.log(formData.password)
	}

	return (
		<>
			<AuthContainer>
				<AuthLayout authTitle="Reset Password" helpText="Enter your email address and we'll send you an email with instructions to reset your password." bottomLinks={<BottomLink />}>
					<VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
						<FormInput label="Password" labelClassName="font-semibold text-gray-500" type="password" name="password" placeholder="Enter your password" containerClass="mb-6 space-y-2" className="form-input" />

						<div className="text-center mb-6">
							<button className="btn bg-primary text-white" type="submit">
								{' '}
								Reset Password{' '}
							</button>
						</div>
					</VerticalForm>
				</AuthLayout>
			</AuthContainer>
		</>
	)
}

export default LockScreen
