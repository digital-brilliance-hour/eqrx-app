import { PopoverLayout } from '@/components/HeadlessUI'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'

const Part1Types = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	
    const basicBarOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: true,
            },
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'bottom',
                },
            },
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff'],
            },
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
            },
            offsetX: 0,
            dropShadow: {
                enabled: false,
            },
        },
        series: [
            {
                data: [40, 30, 48, 70, 20, 30, 40, 33, 20, 58],
            },
        ],
        colors: ['#3e60d5', '#47ad77', '#fa5c7c', '#6c757d', '#39afd1', '#2b908f', '#ffbc00'],
        xaxis: {
            categories: [
                "Aggravated assault", "Arson", "Burglary", "Larceny From A Motor Vehicle", "Murder", "Alcohol Violation", "Drug Violation", "Robbery", "Preferred Crime", "Domestic Violation"],
                labels: {
                    show: false,
                },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: true,
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    },
                },
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
    }

return(

	
	<div className="lg:col-span-2">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Top 10 Violent Crime</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicBarOpts} height={380} series={basicBarOpts.series} type="bar" />
						</div>
                        Categorizes different types of crimes along with their frequency. "Larceny From A Motor Vehicle" is the most common offense, followed by domestic violence and drug violations. Crimes such as murder and "Preferred Crime" are the least frequent. The chart highlights which crimes are more prevalent, giving insight into areas that might need more attention.

					</div>
				</div>
                </div>
				
          



)

}
const Part2Types = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	
    const basicBarOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        series: [
            {
                data: [80, 30, 28, 70, 40, 50, 20],
            },
        ],
        colors: ['#39afd1'],
        xaxis: {
            categories: ['Simple Assault ', 'Fraud', 'Vandalism', 'Gambling', 'Disorderly Conduct', 'Resist Delay and Obstruct', 'Runaways'],
        },
        // states: {
        //     // hover: {
        //     //     // filter: 'none'
        //     // }
        // },
        grid: {
            borderColor: '#f1f3fa',
        },
    }

return(

	
	<div className="lg:col-span-2">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4"> Break Down By Type</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicBarOpts} height={380} series={basicBarOpts.series} type="bar" />
						</div>
                        The horizontal bar chart visualizes the frequency of various offenses, with the offenses listed on the y-axis and their frequencies on the x-axis. Simple Assault has the highest frequency, indicating it is the most common offense. It is followed by Gambling, which also shows a significant occurrence. Vandalism, Resist Delay and Obstruct, Fraud, and Disorderly Conduct follow in descending order, with Runaways having the lowest frequency. This chart effectively highlights the prevalence of different offenses, providing valuable insights into crime patterns and helping prioritize law enforcement resources.
					</div>
				</div>
                </div>


)

}
const Part3Types = () => {
    const PopoverToggle = () => {
		return <i className="ri-more-2-fill text-xl" />
	}

	
    const basicBarOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        series: [
            {
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
            },
        ],
        colors: ['#39afd1'],
        xaxis: {
            categories: ['Aggravated Assault ', 'Weapons Violations', 'Robbery', 'Armed Robbery', 'Domestic Violence', 'Strangulation', 'Kidnapping', 'Manslaughter', 'Intimate Partner Violence', 'Assault with Deadly Weapon'],
        },
        // states: {
        //     // hover: {
        //     //     // filter: 'none'
        //     // }
        // },
        grid: {
            borderColor: '#f1f3fa',
        },
    }

return(

	
	<div className="lg:col-span-2">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4"> Break Down By Type</h4>
						<div dir="ltr">
							<ReactApexChart className="apex-charts" options={basicBarOpts} height={380} series={basicBarOpts.series} type="bar" />
						</div>
					</div>
				</div>
                </div>


)

}

export  {Part1Types, Part2Types,Part3Types}