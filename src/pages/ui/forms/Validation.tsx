// components
import { FormInput, PageBreadcrumb } from '../../../components'

const Validation = () => {
	return (
		<>
			<PageBreadcrumb title="Validation" subName="Forms" />
			<div className="card">
				<div className="p-6">
					<div className="flex justify-between items-center">
						<h4 className="card-title mb-1">Browser defaults</h4>
					</div>

					<div className="pt-5">
						<form className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
							<FormInput name="FirstName" type="text" label="First name" labelClassName="mb-2" className="form-input" key="first-Name" placeholder="Mark" required />
							<FormInput name="LastName" type="text" label="Last name" labelClassName="mb-2" className="form-input" key="last-Name" placeholder="Otto" required />

							<div>
								<label htmlFor="validationDefaultUsername" className="mb-2">
									Username
								</label>
								<div className="flex items-center ">
									<span className="btn bg-light border border-gray-200 rounded-e-none dark:border-gray-600 dark:bg-gray-600" id="inputGroupPrepend2">
										@
									</span>
									<input type="text" className="form-input border-s-0 rounded-s-none" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
								</div>
							</div>

							<FormInput name="City" type="text" label="City" labelClassName="mb-2" className="form-input" key="city" required />

							<FormInput name="State" type="select" label="State" labelClassName="mb-2" className="form-input" key="state">
								<option disabled defaultValue="selected">
									Choose...
								</option>
								<option>...</option>
							</FormInput>

							<FormInput name="Zip" type="text" label="Zip" labelClassName="mb-2" className="form-input" key="zip" required />

							<div className="lg:col-span-3">
								<div className="flex items-center">
									<FormInput name="checkbox" type="checkbox" className="form-checkbox rounded" key="check" required />
									<label className="ms-1.5" htmlFor="invalidCheck2">
										Agree to terms and conditions
									</label>
								</div>
							</div>
							<div className="lg:col-span-3">
								<button className="btn bg-primary text-white" type="submit">
									Submit form
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Validation
