import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const FirstChargeBvsW = () => {

    const firstCharge: ApexOptions = {
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
                name: 'Black',
                data: [4,1,6,1,2,1,25,2,2,5,6,5,10,24,22,4,2,30,1,3,1,1,2,13,1,13,2,1,4,2,41,3,21,9,1,1],
            },
            {
                name: 'White',
                data: [0,0,0,1,0,1,4,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,9,0,1,1],
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
        colors: [ '#3e60d5','#eb1e1e'],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + 'K'
                },
            },
        },
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
                                <h4 className="card-title mb-4">1st Charge vs Black and White</h4>
                                <div dir="ltr">
                                    <ReactApexCharts className="apex-charts" options={firstCharge} height={820} series={firstCharge.series} type="bar" />
                                </div>
                                <div className="pt-6">
                                    <h3>Implications:</h3>
                                    <b>Racial Disparity:</b> The pronounced difference suggests potential racial disparities in arrest or charging practices.<br/>
                                    <b>Criminal Justice Concerns:</b> It may reflect systemic biases within law enforcement or judicial processes.<br/>
                                    <b>Policy Impact:</b> The data can inform discussions on criminal justice reform, aiming to address these disparities through equitable law enforcement policies.
                                </div>
                            </div>
                        </div>
                </div>
                
	)
}

export default FirstChargeBvsW
