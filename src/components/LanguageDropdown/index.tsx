// assets
import enFlag from './flags/us.jpg'
import germanyFlag from './flags/germany.jpg'
import italyFlag from './flags/italy.jpg'
import spainFlag from './flags/spain.jpg'
import russiaFlag from './flags/russia.jpg'
import PopoverLayout from '../HeadlessUI/PopoverLayout'
import usFlag from '@/assets/images/flags/us.jpg'

interface LanguageData {
	name: string
	flag: string
}

// get the languages and flags
const languages: LanguageData[] = [
	{
		name: 'English',
		flag: enFlag,
	},
	{
		name: 'German',
		flag: germanyFlag,
	},
	{
		name: 'Italian',
		flag: italyFlag,
	},
	{
		name: 'Spanish',
		flag: spainFlag,
	},
	{
		name: 'Russian',
		flag: russiaFlag,
	},
]

const LanguageDropdown = () => {
	const PopoverToggler = () => {
		return (
			<span className="flex items-center gap-2">
				<img src={usFlag} alt="flag-image" className="h-3" />
				<div className="lg:block hidden">
					<span>English</span>&nbsp;
					<i className="ri-arrow-down-s-line"></i>
				</div>
			</span>
		)
	}

	return (
		<PopoverLayout placement="bottom-end" togglerClass="nav-link p-2" toggler={<PopoverToggler />}>
			<div className="absolute end-0 w-40 mt-1 z-50 transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg py-2">
				{(languages || []).map((lang, idx) => (
					<section key={idx} className="flex items-center gap-2.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
						<img src={lang.flag} alt="user-image" className="h-4" />
						<span className="align-middle">{lang.name}</span>
					</section>
				))}
			</div>
		</PopoverLayout>
	)
}

export default LanguageDropdown
