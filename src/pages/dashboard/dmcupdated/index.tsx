//import { useState } from 'react'
import Select from 'react-select'
//import { MaskedInput } from 'rsuite'

// components
import { GoogleApiWrapper } from 'google-maps-react'
import ContactOfficer from './components/ContactOfficer.tsx'
import ContactRace from './components/ContactRace.tsx'
import TotalCountRace from './components/TotalCountRace.tsx'
import CountRef from './components/CountRef.tsx'
import AgeRaceInteraction from './components/AgeRaceInteraction.tsx'
import OfficerInteractions from './components/OfficerInteractions.tsx'
import InteractionComp from './components/InteractionComp.tsx'
import RefTypesInteractions from './components/RefTypesInteractions.tsx'
import FirstChargeBvsW from './components/firstChargeBvsW.tsx'
import BvsWContact from './components/BvsWContact.tsx'
import InteractionRef from './components/InteractionRef.tsx'

interface MapContainerProps {
	google: any
}

const Components = ({}: MapContainerProps) => {
	return (
		<>
		<ContactRace/>
		<ContactOfficer/>
		<TotalCountRace/>
		<InteractionRef/>
		<CountRef/>
		<BvsWContact/>
		<AgeRaceInteraction/>
		<OfficerInteractions/>
		<InteractionComp/>
		<FirstChargeBvsW/>
		<RefTypesInteractions/>
		</>
	)
}

const DMC = ({ google }: MapContainerProps) => {
	return (
		<>
			<header className="text-slate-900 dark:text-slate-200 text-lg font-medium mb-6">DMC</header>
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<Components google={google} />
			</div>
		</>
	)
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBsHtI7Ed8ZeQ-yvYIMw9VKORe5WdPo5yg',
	libraries: ['visualization'],
})(DMC)
