import { useForm } from 'react-hook-form'

// components
import { FormInput, PageBreadcrumb } from '../../../components'

const colors: string[] = ['primary', 'success', 'info', 'secondary', 'warning', 'danger', 'dark']
const BasicInputElements = () => {
	const methods = useForm({
		defaultValues: {
			password: 'password',
			statictext: 'email@example.com',
			color: '#727cf5',
		},
	})

	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = methods

	return (
		<div className="card mb-6">
			<div className="p-6">
				<h4 className="card-title mb-4">Input Types</h4>

				<div className="grid lg:grid-cols-2 gap-6">
					<div>
						<form>
							<FormInput label="Text" labelClassName="mb-2" type="text" name="text" className="form-input" containerClass="mb-3" register={register} key="text" errors={errors} control={control} />

							<FormInput label="Email" labelClassName="mb-2" type="email" name="email" placeholder="Email" className="form-input" containerClass="mb-3" register={register} key="email" errors={errors} control={control} />
							<FormInput label="Password" labelClassName="mb-2" type="password" name="password" containerClass="mb-3" className="form-input" register={register} key="password" errors={errors} control={control} />

							<FormInput label="Placeholder" labelClassName="mb-2" type="text" containerClass="mb-3" name="placeholder" placeholder="placeholder" className="form-input" register={register} key="placeholder" errors={errors} control={control} />

							<FormInput label="Text area" type="textarea" name="textarea" id="textarea" containerClass="mb-3" labelClassName="mb-2" rows={5} register={register} className="form-input" key="textarea" errors={errors} control={control} />

							<FormInput label="Readonly" type="text" name="text1" id="text1" placeholder="Readonly value" readOnly containerClass="mb-3" labelClassName="mb-2" register={register} className="form-input" key="text1" errors={errors} control={control} />

							<FormInput label="Disabled" type="text" name="text2" id="text2" placeholder="Disabled value" disabled className="form-input" containerClass="mb-3" labelClassName="mb-2" register={register} key="text2" errors={errors} control={control} />

							<FormInput label="Helping Text" type="text" name="helpText" id="helpingText" placeholder="Helping value" className="form-input" labelClassName="mb-2" register={register} key="helpText" errors={errors} control={control} />
							<div className="help-block mb-3">
								<small>A block of help text that breaks onto a new line and may extend beyond one line.</small>
							</div>

							<FormInput name="select" label="Input Select" type="select" containerClass="mb-3" labelClassName="mb-2" className="form-select" register={register} key="select" errors={errors} control={control}>
								<option defaultValue="selected">1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</FormInput>
						</form>
					</div>

					<div>
						<form onSubmit={() => handleSubmit}>
							<FormInput name="selectMulti" label="Multiple Select" type="select" multiple labelClassName="mb-2" containerClass="mb-3" className="form-select" register={register} key="selectMulti" errors={errors} control={control}>
								<option defaultValue="selected">1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</FormInput>

							<FormInput label="Default file input" type="file" name="file" labelClassName="mb-2" containerClass="mb-3" className="form-input border" register={register} key="file" errors={errors} control={control} />

							<FormInput label="Date" type="date" name="date" containerClass="mb-3" labelClassName="mb-2" className="form-input" register={register} key="date" errors={errors} control={control} />

							<FormInput label="Month" type="month" name="month" containerClass="mb-3" labelClassName="mb-2" className="form-input" register={register} key="month" errors={errors} control={control} />

							<FormInput label="Time" type="time" name="time" containerClass="mb-3" labelClassName="mb-2" className="form-input" register={register} key="time" errors={errors} control={control} />

							<FormInput label="Week" type="week" name="week" labelClassName="mb-2" containerClass="mb-3" className="form-input" register={register} key="week" errors={errors} control={control} />

							<FormInput label="Number" type="number" name="number" containerClass="mb-3" labelClassName="mb-2" className="form-input" register={register} key="number" errors={errors} control={control} />

							<FormInput label="Color" type="color" name="color" labelClassName="mb-2" containerClass="mb-3" className="form-input h-12" register={register} key="color" errors={errors} control={control} />
							<FormInput label="Range" type="range" name="range" labelClassName="mb-2" containerClass="mt-5" className="form-range mt-2" register={register} key="Range" errors={errors} control={control} />
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

const SelectInput = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Select</h4>

				<FormInput name="select1" type="select" className="form-select mb-3" key="select-1">
					<option defaultValue="selected">Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</FormInput>

				<FormInput name="select2" type="select" className="form-select mb-3 form-select-lg" key="select-2">
					<option defaultValue="selected">Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</FormInput>

				<FormInput name="select3" type="select" className="form-select mb-3 form-select-sm" key="select-3">
					<option defaultValue="selected">Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</FormInput>

				<div className="flex items-center mb-3">
					<label className="btn border border-gray-200 dark:border-gray-600 rounded-e-none" htmlFor="inputGroupSelect01">
						Options
					</label>
					<FormInput name="select4" type="select" className="form-select border-s-0 rounded-s-none" containerClass="w-full" key="select-4">
						<option defaultValue="selected">Choose...</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</FormInput>
				</div>

				<div className="flex">
					<FormInput name="select4" type="select" className="form-select border-e-0 rounded-e-none" containerClass="w-full" key="select-4">
						<option defaultValue="selected">Choose...</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</FormInput>
					<button className="btn border border-gray-200 dark:border-gray-600 rounded-s-none" type="button">
						Button
					</button>
				</div>
			</div>
		</div>
	)
}

const InputSizes = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Input Sizes</h4>

				<form>
					<FormInput label="Small" type="text" name="small" id="small1" className="form-input form-input-sm" labelClassName="mb-2" containerClass="mb-3" placeholder=".input-sm" />

					<FormInput label="Normal (Default)" type="text" name="normal" id="normal" className="form-input" labelClassName="mb-2" containerClass="mb-3" placeholder="Normal" />

					<FormInput label="Large" type="text" name="large" id="large" className="form-input form-input-lg" placeholder=".form-input-sm" labelClassName="mb-2" containerClass="mb-3" />
				</form>
			</div>
		</div>
	)
}

const Checkboxes = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title">Checkboxes</h4>

				<div>
					<div className="mt-4">
						<div className="flex flex-col gap-2">
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="customCheck1" defaultChecked />
								<label className="ms-1.5" htmlFor="customCheck1">
									Check this checkbox
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="customCheck2" />
								<label className="ms-1.5" htmlFor="customCheck2">
									Check this checkbox
								</label>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h6 className="text-sm mb-2">Inline</h6>
						<div className="flex gap-5">
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox1" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineCheckbox1">
									Check this checkbox
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="InlineCheckbox2" />
								<label className="ms-1.5" htmlFor="InlineCheckbox2">
									Check this checkbox
								</label>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h6 className="text-sm mb-2">Disabled</h6>

						<div className="flex gap-2">
							<div className="flex items-center opacity-75">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="customCheck5" defaultChecked disabled />
								<label className="ms-1.5" htmlFor="customCheck5">
									Check this checkbox
								</label>
							</div>
							<div className="flex items-center opacity-75">
								<input type="checkbox" className="form-checkbox rounded text-primary" id="customCheck6" disabled />
								<label className="ms-1.5" htmlFor="customCheck6">
									Check this checkbox
								</label>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3 mt-5">
						<h6>Colors</h6>

						{(colors || []).map((color, idx) => {
							return (
								<div key={idx} className="flex items-center">
									<input className={`form-checkbox rounded text-${color}`} type="checkbox" id={`customckeck${idx + 1}`} defaultChecked />
									<label className="ms-1.5" htmlFor={`customckeck${idx + 1}`}>
										{color.charAt(0).toUpperCase() + color.slice(1)} Checkbox
									</label>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

const Radios = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title">Radios</h4>
				<div>
					<div className="mt-4">
						<div className="flex flex-col gap-2">
							<div className="flex items-center">
								<input type="radio" className="form-radio text-primary" name="formRadio" id="formRadio01" defaultChecked />
								<label className="ms-1.5" htmlFor="formRadio01">
									Toggle this custom radio
								</label>
							</div>
							<div className="flex items-center">
								<input type="radio" className="form-radio text-primary" name="formRadio" id="formRadio02" />
								<label className="ms-1.5" htmlFor="formRadio02">
									Or toggle this other custom radio
								</label>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h6 className="text-sm mb-2">Inline</h6>
						<div className="flex gap-5">
							<div className="flex items-center">
								<input type="radio" className="form-radio text-primary" name="InlineRadio" id="InlineRadio01" defaultChecked />
								<label className="ms-1.5" htmlFor="InlineRadio01">
									Toggle this custom radio
								</label>
							</div>
							<div className="flex items-center">
								<input type="radio" className="form-radio text-primary" name="InlineRadio" id="InlineRadio02" />
								<label className="ms-1.5" htmlFor="InlineRadio02">
									Or toggle this other custom radio
								</label>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h6 className="text-sm mb-2">Disabled</h6>

						<div className="flex gap-5">
							<div className="opacity-75">
								<input type="radio" className="form-radio text-primary" id="formRadio04" defaultChecked disabled />
								<label className="ms-1.5" htmlFor="formRadio04">
									Toggle this custom radio
								</label>
							</div>

							<div className="opacity-75">
								<input type="radio" className="form-radio text-primary" id="formRadio05" disabled />
								<label className="ms-1.5" htmlFor="formRadio05">
									Or toggle this other custom radio
								</label>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-3 mt-5">
						<h4>Colors</h4>

						{(colors || []).map((color, idx) => {
							return (
								<div key={idx} className="flex items-center">
									<input className={`form-radio text-${color}`} type="radio" id={`"formRadio${idx + 1}`} defaultChecked />
									<label className="ms-1.5" htmlFor={`formRadio${idx + 1}`}>
										{color.charAt(0).toUpperCase() + color.slice(1)} Radio
									</label>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

const Switches = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title">Switch</h4>

				<div>
					<div className="mt-4">
						<div className="flex flex-col gap-2">
							<div className="flex items-center">
								<input type="checkbox" className="form-switch text-primary" id="chechThisSwitch" defaultChecked />
								<label className="ms-1.5" htmlFor="chechThisSwitch">
									Check this Switch
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-switch text-primary" id="chechThisSwitch2" />
								<label className="ms-1.5" htmlFor="chechThisSwitch2">
									Check this Switch
								</label>
							</div>
						</div>
					</div>

					<div className="mt-5">
						<h6 className="text-sm mb-2">Inline</h6>
						<div className="flex gap-5">
							<div className="flex items-center">
								<input type="checkbox" className="form-switch text-primary" id="formInlineSwitch1" defaultChecked />
								<label className="ms-1.5" htmlFor="formInlineSwitch1">
									Check this Switch
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-switch text-primary" id="formInlineSwitch2" />
								<label className="ms-1.5" htmlFor="formInlineSwitch2">
									Check this Switch
								</label>
							</div>
						</div>
					</div>

					<div className="mt-5">
						<h6 className="text-sm mb-2">Size</h6>
						<div className="flex gap-5">
							<div className="flex items-center">
								<input type="checkbox" className="form-switch form-switch-sm text-primary" id="formSwitchSmall" defaultChecked />
								<label className="ms-1.5" htmlFor="formSwitchSmall">
									Small Switch
								</label>
							</div>
							<div className="flex items-center">
								<input type="checkbox" className="form-switch form-switch-lg text-primary" id="formSwitchlarge" />
								<label className="ms-1.5" htmlFor="formSwitchlarge">
									Large Switch
								</label>
							</div>
						</div>
					</div>

					<div className="mt-5">
						<h6 className="text-sm mb-2">Disabled</h6>

						<div className="flex gap-2">
							<div className="flex items-center opacity-75">
								<input type="checkbox" className="form-switch text-primary" id="formSwitchDisabled" defaultChecked disabled />
								<label className="ms-1.5" htmlFor="formSwitchDisabled">
									Check this Switch
								</label>
							</div>
							<div className="flex items-center opacity-75">
								<input type="checkbox" className="form-switch text-primary" id="formSwitchDisabled2" disabled />
								<label className="ms-1.5" htmlFor="formSwitchDisabled2">
									Check this Switch
								</label>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6 mt-5">
						<div className="flex flex-col gap-3">
							<h6>Colors</h6>

							{(colors || []).map((color, idx) => {
								return (
									<div key={idx} className="flex items-center">
										<input className={`form-switch text-${color}`} type="checkbox" id={`formSwitch${idx + 1}`} defaultChecked />
										<label className="ms-1.5" htmlFor={`formSwitch${idx + 1}`}>
											Default Switch
										</label>
									</div>
								)
							})}
						</div>

						<div className="flex flex-col gap-3">
							<h6>Square Switch</h6>

							{(colors || []).map((color, idx) => {
								return (
									<div key={idx} className="flex items-center">
										<input className={`form-switch square text-${color}`} type="checkbox" id={`formSwitchSquare${idx + 1}`} defaultChecked />
										<label className="ms-1.5" htmlFor={`formSwitchSquare${idx + 1}`}>
											Default Switch
										</label>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const CustomSwitch = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Custom Switch</h4>

				<div className="flex flex-wrap items-center gap-2">
					<input type="checkbox" id="switch0" data-switch="none" />
					<label htmlFor="switch0" data-on-label="" data-off-label=""></label>

					<input type="checkbox" id="switch1" defaultChecked data-switch="bool" />
					<label htmlFor="switch1" data-on-label="On" data-off-label="Off"></label>

					<input type="checkbox" id="switch2" defaultChecked data-switch="primary" />
					<label htmlFor="switch2" data-on-label="On" data-off-label="Off"></label>

					<input type="checkbox" id="switch3" defaultChecked data-switch="success" />
					<label htmlFor="switch3" data-on-label="Yes" data-off-label="No"></label>

					<input type="checkbox" id="switch4" defaultChecked data-switch="info" />
					<label htmlFor="switch4" data-on-label="On" data-off-label="Off"></label>

					<input type="checkbox" id="switch5" defaultChecked data-switch="warning" />
					<label htmlFor="switch5" data-on-label="Yes" data-off-label="No"></label>

					<input type="checkbox" id="switch6" defaultChecked data-switch="danger" />
					<label htmlFor="switch6" data-on-label="On" data-off-label="Off"></label>

					<input type="checkbox" id="switch7" defaultChecked data-switch="secondary" />
					<label htmlFor="switch7" data-on-label="Yes" data-off-label="No"></label>

					<input type="checkbox" id="switchdis" data-switch="primary" defaultChecked disabled />
					<label htmlFor="switchdis" data-on-label="On" data-off-label="Off"></label>
				</div>
			</div>
		</div>
	)
}

const BasicElements = () => {
	return (
		<>
			<PageBreadcrumb title="Elements" subName="Forms" />
			<BasicInputElements />

			<div className="grid lg:grid-cols-2 gap-6">
				<SelectInput />
				<InputSizes />
				<Checkboxes />
				<Radios />
				<Switches />
				<CustomSwitch />
			</div>
		</>
	)
}

export default BasicElements
