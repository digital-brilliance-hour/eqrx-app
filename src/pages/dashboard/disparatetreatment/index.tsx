//import { useState } from 'react'
import Select from 'react-select'
//import { MaskedInput } from 'rsuite'

// components
import { GoogleApiWrapper } from 'google-maps-react'
import FirstChargeBvsW from './components/firstChargeBvsW.tsx'
import Shoplifting from './components/Shoplifting.tsx'
import BurglaryForce from './components/BurglaryForce.tsx'
import DrugViolation from './components/DrugViolation.tsx'
import SimpleCharge from './components/SimpleCharge.tsx'
import UniqueContact from './components/UniqueContact.tsx'
import BvsWContact from './components/BvsWContact.tsx'
import CompLocation from './components/CompLocation.tsx'
import ContactOfficer from './components/ContactOfficer.tsx'
import UniqueLocation from './components/UniqueLocation.tsx'
import Interactions from './components/Interactions.tsx'

interface MapContainerProps {
	google: any
}

const Components = ({}: MapContainerProps) => {
	return (
		<>
			<FirstChargeBvsW/>
			<Shoplifting/>
			<BurglaryForce/>
			<DrugViolation/>
			<SimpleCharge/>
			<UniqueContact/>
			<BvsWContact/>
			<CompLocation/>
			<ContactOfficer/>
			<UniqueLocation/>
			<Interactions/>
		</>
	)
}
const DisparateTreatment = ({ google }: MapContainerProps) => {
	return (
		<>
			{/* <PageBreadcrumb title="Dashboard" subName="Menu" /> */}
			<header className="text-slate-900 dark:text-slate-200 text-lg font-medium mb-6">Disparate Treatment</header>
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<Components google={google} />
			</div>
		</>
	)
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBsHtI7Ed8ZeQ-yvYIMw9VKORe5WdPo5yg',
	libraries: ['visualization'],
})(DisparateTreatment)
