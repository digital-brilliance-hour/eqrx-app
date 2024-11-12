import { useState } from 'react'
import Select from 'react-select'
import { MaskedInput } from 'rsuite'
import { BlockPicker, ChromePicker, CompactPicker, GithubPicker, HuePicker, SketchPicker, SwatchesPicker, TwitterPicker } from 'react-color'

// dummy data
import { options } from './data'

//components
import CustomFlatpickr from '../../../components/CustomFlatpickr'
import { PageBreadcrumb } from '../../../components'

// styles
import 'rsuite/dist/rsuite-no-reset.min.css'

const FormSelect = () => {
	return (
		<div className="card">
			<div className="card-header">
				<h4 className="card-title">React Select</h4>
			</div>

			<div className="p-6">
				<div className="section">
					<div className="mb-6">
						<h2 className="mb-4 text-base">Select inputs</h2>
						<div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
							<div>
								<label className="mb-2" htmlFor="choices-text-remove-button">
									Single Select
								</label>
								<Select className="select2 z-5" options={options} />
							</div>

							<div>
								<label className="mb-2" htmlFor="choices-text-unique-values">
									Multiple Select
								</label>
								<Select className="select2 select2-multiple" options={options} isMulti={true} />
							</div>

							<div>
								<label className="mb-2" htmlFor="choices-text-unique-values">
									Disable Select
								</label>
								<Select className="select2 select2-multiple" isDisabled options={options} isMulti={true} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const FlatpickrDate = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-2">Flatpickr - Date picker</h4>
				<p className="mb-4">A lightweight and powerful datetimepicker</p>

				<div className="grid lg:grid-cols-2 gap-6">
					<div>
						<div className="mb-3">
							<label className="mb-2">Basic</label>
							<CustomFlatpickr className="form-input" placeholder="Basic datepicker" />
						</div>

						<div className="mb-3">
							<label className="mb-2">Date & Time</label>
							<CustomFlatpickr
								className="form-input"
								placeholder="Date & Time"
								options={{
									enableTime: true,
									dateFormat: 'Y-m-d H:i',
								}}
							/>
						</div>

						<div className="mb-3">
							<label className="mb-2">Human-friendly Dates</label>
							<CustomFlatpickr
								className="form-input"
								value={new Date()}
								options={{
									altInput: true,
									altFormat: 'F j, Y',
									dateFormat: 'Y-m-d',
								}}
							/>
						</div>

						<div className="mb-3">
							<label className="mb-2">MinDate and MaxDate</label>
							<CustomFlatpickr
								className="form-input"
								placeholder="mindate - maxdate"
								options={{
									minDate: 'today',
									maxDate: new Date('2025-05-01'),
								}}
							/>
						</div>

						<div className="mb-3">
							<label className="mb-2">Disabling dates</label>
							<CustomFlatpickr
								className="form-input"
								placeholder="Disabling dates"
								options={{
									disable: [
										function (date: Date) {
											return date.getDay() === 0 || date.getDay() === 6
										},
									],
									locale: {
										firstDayOfWeek: 1, // start week on Monday
									},
								}}
							/>
						</div>

						<div className="mb-3">
							<label className="mb-2">Selecting multiple dates</label>
							<CustomFlatpickr
								className="form-input"
								placeholder="Multiple dates"
								options={{
									mode: 'multiple',
									dateFormat: 'Y-m-d',
									defaultDate: ['2016-10-20', '2016-11-04'],
								}}
							/>
						</div>
					</div>

					<div>
						<div className="mb-3">
							<label className="mb-2">Selecting multiple dates - Conjunction</label>
							<CustomFlatpickr
								placeholder="2018-10-10 :: 2018-10-11"
								className="form-input"
								value={[new Date(), new Date()]}
								options={{
									mode: 'multiple',
									dateFormat: 'Y-m-d',
									conjunction: ' :: ',
								}}
							/>
						</div>

						<div className="mb-3">
							<label className="mb-2">Range Calendar</label>
							<CustomFlatpickr
								className="form-input"
								placeholder="2018-10-03 to 2018-10-10"
								value={[new Date(), new Date()]}
								options={{
									mode: 'range',
								}}
							/>
						</div>

						<div>
							<label className="mb-2">Inline Calendar</label>
							<CustomFlatpickr
								className="form-input"
								placeholder="Inline calendar"
								options={{
									inline: true,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const FlatpickrTime = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-2">Flatpickr - Time Picker </h4>
				<p className="mb-4">A lightweight and powerful datetimepicker</p>

				<div className="grid lg:grid-cols-2 gap-6">
					<div>
						<div className="mb-3">
							<label className="mb-2">Default Time Picker</label>
							<div className="flex items-center ">
								<CustomFlatpickr
									className="form-input border-r-0 rounded-r-none"
									placeholder="Basic timepickr"
									options={{
										enableTime: true,
										noCalendar: true,
										dateFormat: 'H:i',
									}}
								/>
								<span className="btn bg-light border border-gray-200 rounded-s-none dark:border-gray-600 dark:bg-gray-600">
									<i className="ri-time-line"></i>
								</span>
							</div>
						</div>

						<div className="mb-0">
							<label className="mb-2">24-hour Time Picker</label>
							<div className="flex items-center ">
								<CustomFlatpickr
									className="form-input border-r-0 rounded-r-none"
									value={new Date()}
									options={{
										enableTime: true,
										noCalendar: true,
										dateFormat: 'H:i',
										time_24hr: true,
									}}
								/>
								<span className="btn bg-light border border-gray-200 rounded-s-none dark:border-gray-600 dark:bg-gray-600">
									<i className="ri-time-line"></i>
								</span>
							</div>
						</div>
					</div>

					<div>
						<div className="mb-3">
							<label className="mb-2">Time Picker w/ Limits</label>
							<div className="flex items-center">
								<CustomFlatpickr
									className="form-input border-r-0 rounded-r-none"
									placeholder="Limits"
									options={{
										enableTime: true,
										noCalendar: true,
										dateFormat: 'H:i',
										minTime: '16:00',
										maxTime: '22:30',
									}}
								/>
								<span className="btn bg-light border border-gray-200 rounded-s-none dark:border-gray-600 dark:bg-gray-600">
									<i className="ri-time-line"></i>
								</span>
							</div>
						</div>

						<div className="mb-0">
							<label className="mb-2">Preloading Time</label>
							<div className="flex items-center ">
								<CustomFlatpickr
									className="form-input border-r-0 rounded-r-none"
									value={new Date()}
									options={{
										enableTime: true,
										noCalendar: true,
										dateFormat: 'H:i',
										defaultDate: '13:45',
									}}
								/>
								<span className="btn bg-light border border-gray-200 rounded-s-none dark:border-gray-600 dark:bg-gray-600">
									<i className="ri-time-line"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const InputMasks = () => {
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Input Masks</h4>
				<p className="text-sm text-slate-700 dark:text-slate-400 mb-4">A Java-Script Plugin to make masks on form fields and HTML elements.</p>
				<div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
					<div>
						<form action="#">
							<div className="mb-3">
								<label className="mb-2">Date</label>
								<MaskedInput mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} placeholder="__/__/___" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="00/00/0000"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">Hour</label>
								<MaskedInput mask={[/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]} placeholder="__:__:__" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="00:00:00"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">Date & Hour</label>
								<MaskedInput mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]} placeholder="__/__/___ __:__:__" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="00/00/0000 00:00:00"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">ZIP Code</label>
								<MaskedInput mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]} placeholder="____-__" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="00000-000"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">Crazy Zip Code</label>
								<MaskedInput mask={[/\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} placeholder="_-__-__-__" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="0-00-00-00"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">Money</label>
								<MaskedInput mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, ',', /\d/, /\d/]} placeholder="__.___.__.__,__" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-mask-format="000.000.000.000.000,00" data-reverse="true"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">Money 2</label>
								<MaskedInput mask={[/\d/, '.', /\d/, /\d/, /\d/, ',', /\d/, /\d/]} placeholder="#.##0,00" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="#.##0,00" data-reverse="true"</code>
								</p>
							</div>
						</form>
					</div>

					<div>
						<form action="#">
							<div className="mb-3">
								<label className="mb-2">Telephone</label>
								<MaskedInput mask={[/[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} placeholder="____-____" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="0000-0000"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">Telephone with Code Area</label>
								<MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} placeholder="(__)____-____" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="(00) 0000-0000"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">US Telephone</label>
								<MaskedInput mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} placeholder="(___)___-____" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="(000) 000-0000"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">São Paulo Celphones</label>
								<MaskedInput mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} placeholder="(__)_____-____" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="(00) 00000-0000"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">CPF</label>
								<MaskedInput mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]} placeholder="___.___.____-__" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-mask-format="000.000.000-00" data-reverse="true"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">CNPJ</label>
								<MaskedInput mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]} placeholder="__.___.___/____-__" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="00.000.000/0000-00" data-reverse="true"</code>
								</p>
							</div>
							<div className="mb-3">
								<label className="mb-2">IP Address</label>
								<MaskedInput mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]} placeholder="___.___.___.___" className="form-input" />
								<p className="text-xs mt-1">
									Add attribute <code className="text-primary">data-toggle="input-mask" data-mask-format="099.099.099.099" data-reverse="true"</code>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

const ColorPicker = () => {
	const [color, setColor] = useState()

	const handleColorChange = (e: any) => {
		setColor(e)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Colorpicker</h4>
				<div>
					<h5 className="text-base mb-3">Themes</h5>
					<div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
						<div className="bg-light dark:bg-gray-700 p-4 rounded-md flex flex-col">
							<h5 className="text-base text-gray-400 mb-2 shrink-0 dark:text-gray-300">Classic Demo</h5>
							<p className="text-gray-400 grow">
								Use <code>Sketchpicker</code> to set Sketch colorpicker.
							</p>
							<SketchPicker color={color} onChangeComplete={(e: any) => handleColorChange(e)} />
						</div>
						<div className="bg-light dark:bg-gray-700 p-4 rounded-md flex flex-col">
							<h5 className="text-base text-gray-400 mb-2 shrink-0 dark:text-gray-300">Monolith Demo</h5>
							<p className="text-gray-400 grow">
								Use <code>Chromepicker</code> to set Chrome colorpicker.
							</p>
							<ChromePicker color={color} onChangeComplete={(e: any) => handleColorChange(e)} />
						</div>
						<div className="bg-light dark:bg-gray-700 p-4 rounded-md flex flex-col">
							<h5 className="text-base text-gray-400 mb-2 shrink-0 dark:text-gray-300">Nano Demo</h5>
							<p className="text-gray-400 grow">
								Use <code>Blockpicker</code>to set Block colorpicker..
							</p>
							<BlockPicker color={color} onChangeComplete={(e: any) => handleColorChange(e)} />
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h5 className="text-base mb-2">Options</h5>

					<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
						<div className="bg-light dark:bg-gray-700 p-4 rounded-md flex flex-col">
							<h5 className="text-base text-gray-400 mb-2 shrink-0">Demo</h5>
							<p className="text-gray-400 grow">
								Use <code>GithubPicker</code> to set GithubPicker option colorpicker.
							</p>
							<GithubPicker color={color} onChangeComplete={(e: any) => handleColorChange(e)} width={'240'} />
						</div>

						<div className="bg-light dark:bg-gray-700 p-4 rounded-md flex flex-col">
							<h5 className="text-base text-gray-400 mb-2 shrink-0">Picker with Opacity & Hue</h5>
							<p className="text-gray-400 grow">
								Use <code>colorpicker hue</code>to set colorpicker with hue.
							</p>
							<HuePicker color={color} onChangeComplete={(e: any) => handleColorChange(e)} width={'250'} />
						</div>

						<div className="bg-light dark:bg-gray-700 p-4 rounded-md flex flex-col">
							<h5 className="text-base text-gray-400 mb-2 shrink-0">Switches</h5>
							<p className="text-gray-400 grow">
								Use <code>switchesPicker</code> to set switch colorpicker.
							</p>
							<SwatchesPicker color={color} width={240} onChangeComplete={(e: any) => handleColorChange(e)} />
						</div>

						<div className="bg-light dark:bg-gray-700 p-4 rounded-md flex flex-col">
							<h5 className="text-base text-gray-400 mb-2 shrink-0">Picker with Input</h5>
							<p className="text-gray-400 grow">
								Use <code>CompactPicker</code> to set colorpicker with input.
							</p>
							<CompactPicker color={color} onChangeComplete={(e: any) => handleColorChange(e)} />
						</div>

						<div className="bg-light dark:bg-gray-700 p-4 rounded-md flex flex-col">
							<h5 className="text-base text-gray-400 mb-2 shrink-0">Color Format</h5>
							<p className="text-gray-400 grow">
								Use <code>TwitterPicker</code> to set colorpicker with format option.
							</p>
							<TwitterPicker color={color} onChangeComplete={(e: any) => handleColorChange(e)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
const FormAdvanced = () => {
	return (
		<>
			<PageBreadcrumb title="Form Advanced" subName="Forms" />
			<div className="grid grid-cols-1 gap-6 mt-6">
				<FormSelect />
				<FlatpickrDate />
				<FlatpickrTime />
				<InputMasks />
				<ColorPicker />
			</div>
		</>
	)
}

export default FormAdvanced
