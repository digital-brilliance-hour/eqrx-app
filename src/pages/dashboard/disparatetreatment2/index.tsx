//import { useState } from 'react'
import Select from 'react-select'
//import { MaskedInput } from 'rsuite'

// components

import { GoogleApiWrapper } from 'google-maps-react'

// dummy data

import FirstChargeGroupe1 from './components/FirstChargeGroupe1'
import FirstChargeGroupe2 from './components/FirstChargeGroupe2'
import FirstChargeGroupe3 from './components/FirstChargeGroupe3'
import FirstChargeGroupe4 from './components/FirstChargeGroupe4'
import FirstChargeGroupe5 from './components/FirstChargeGroupe5'
import FirstChargeGroupe6 from './components/FirstChargeGroupe6'
import CountOfFirstCharge from './components/CountOfFirstCharge'
import ContactByOfficerName from './components/ContactByOfficerName'
import CompConByYearGenRace from './components/CompConByYearGenRace'
import TotalInterByRaceAndGen from './components/TotalInterByRaceAndGen'



const Disparatetreatment2 = () => {
	return (
		<>
			{/* <PageBreadcrumb title="Dashboard" subName="Menu" /> */}
			<header className="text-slate-900 dark:text-slate-200 text-lg font-medium mb-6">KPD DMC/RED Analysis</header>
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<FirstChargeGroupe1/>
				<FirstChargeGroupe2/>
				<FirstChargeGroupe3/>
				<FirstChargeGroupe4/>
				<FirstChargeGroupe5/>
				<FirstChargeGroupe6/>
				<CountOfFirstCharge/>
				<ContactByOfficerName/>
				<CompConByYearGenRace/>
				<TotalInterByRaceAndGen/>

			</div>
			{/* <div className="grid lg:grid-cols-6 gap-6 mb-6">
				<ResponseAnalysis />
			</div>
			<div className="grid lg:grid-cols-6 gap-6 mb-6">
				<PatternRecognition />
			</div> */}
		</>
	)
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBsHtI7Ed8ZeQ-yvYIMw9VKORe5WdPo5yg',
	libraries: ['visualization'],
})(Disparatetreatment2)
