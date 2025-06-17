import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const RefTypesInteractions = () => {

const minorReferrals: ApexOptions = {
	chart: {
		height: 240,
		type: 'bar',
		stacked: true,
		toolbar: {
			show: true,
		},
	},
	plotOptions: {
		bar: {
			horizontal: true,
		},
	},
	stroke: {
		width: 1,
		colors: ['#fff'],
	},
	series: [
		{
			name: 'Reffered to Juvenile Authorities',
			data: [4,1,5,2,0,1,25,0,0,0,2,3,5,10,16,2,0,24,1,3,1,1,2,9,1,9,2,0,4,1,13,2,17,7,0,0],
		},
		{
			name: 'Handled within Deparment and Released',
			data: [0,0,1,0,2,1,4,2,2,5,4,2,5,13,2,1,2,7,0,0,0,0,1,5,0,5,0,1,0,1,37,1,5,2,1,1],
		},
		{
			name: 'Social Services',
			data: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		},
		{
			name: 'Teen court',
			data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
		},
		{
			name: 'None',
			data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		},
	],
	xaxis: {
		categories: ['AGGRAVATED ASSAULT', 'ALL OTHER DRUG VIOLATIONS','All Other Larceny','ALL OTHER SEX OFFENSES','ALL OTHER SIMPLE ASSAULT',
			'ALL TRAFFIC','BURGLARY-FORCIBLE ENTRY','BURGLARY NON-FORCED ENTRY','CALLS FOR SERVICE','CITY ORDINANCE VIOLATIONS',
			'CRIMINAL DAMAGE TO PROPERTY','DISORDERLY CONDUCT','DRUG VIOLATIONS','ESCAPE FROM CUSTODY OR RESIST ARREST','FIGHTING (AFFRAY)',
			'LARCENY','LARCENY FROM BUILDINGS','LARCENY FROM MOTOR VEHICLE','MOTOR VEHICLE THEFT OF ALL OTHER VEHICLES',
			'MOTOR VEHICLE THEFT OF AUTOMOBILE','MURDER & NON-NEGLIGENT MANSLAUGHTER','NON-CRIMINAL DETAINMENT (INV. COMMITMENT)',
			'OtherWeapons Violations','POSSESSING/CONCEALING STOLEN PROPERTY','Possessing/ concealing weapons','POSSESSING/CONCEALING STOLEN PROPERTY',
			'PURSE SNATCHING','RESIST/OBSTRUCT PUBLIC OFFICER','ROBBERY','ROD','SHOPLIFTING','SIMPLE NON-PHYSICAL THREAT INTIMIDATION',
			'SIMPLE PHYSICAL ASSAULT','TRESPASSING','UNAUTHORIZED USE OF CONVEYANCE','YOUTH PROTECTION ORDINANCE'],
	},
	colors: [ '#3e60d5','#eb1e1e','#ffbc00d9','#47ad77d9','#f48024d9'],
	fill: {
		opacity: 1,
	},
	states: {
		// hover: {
		//     filter: 'none'
		// }
	},
	legend: {
		position: 'top',
		horizontalAlign: 'center',
		offsetY: 10,
	},
	grid: {
		borderColor: '#f1f3fa',
		padding: {
			top: 0,
		},
	},
}

	return (
			<div className="xl:col-span-6">
				<div className="card">
						<div className="p-6">
							<h4 className="card-title mb-4">Referrals Types used after Interactions</h4>
							<div dir="ltr">
								<ReactApexCharts className="apex-charts" options={minorReferrals} height={820} series={minorReferrals.series} type="bar" />
							</div>
							<div className="pt-6">
								<h3>Implications:</h3>
								<b>High Referral to Juvenile Authorities:</b> Offenses like "Criminal Larceny," "City Ordinance Violations," and "Aggravated Assault" predominantly result in referrals to juvenile authorities, indicating their seriousness.<br/>
								<b>Department Handling Dominates Minor Offenses:</b> Less severe infractions like "Shoplifting - Third" and "Simple Physical Assault" are mostly handled within the department and released, reflecting a focus on in-house resolution for minor offenses.<br/>
								<b>Limited Use of Alternative Programs:</b> Referrals to social services, teen court, or no referrals are rare, suggesting limited reliance on alternative intervention programs.<br/>
								There's a strong dependency on formal juvenile justice interventions for serious crimes, which could impact youth recidivism rates.<br/>
								Minor offenses are often resolved internally, possibly to avoid burdening the juvenile system.<br/>
								The minimal use of social services and teen court highlights an opportunity to expand restorative justice approaches for certain cases.
	
							</div>
						</div>
					</div>
			</div>
                
	)
}

export default RefTypesInteractions
