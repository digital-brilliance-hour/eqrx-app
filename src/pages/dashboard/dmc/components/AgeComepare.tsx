import { Link } from 'react-router-dom'
import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'

// components
import { PopoverLayout } from '../../../../components/HeadlessUI'

const AgeChart = () => {

     const apexAgeOpts: ApexOptions = {
        chart: {
            height: 200,
            type: 'bar',
            stacked: false,
            toolbar: {
                show: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: true
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        series: [
            {
                name: 'Black',
                data: [2, 9, 87, 50, 157, 22],
            },
        ],
        xaxis: {
            categories: ['Young Child (4-7)', 'Child (8-10)', 'Pre-Teen (11-13)', 'Teen (14-15)', 'Juvenile (16-17)', 'Young Adult (18-25)'],
        },
        colors: ['#39afd1', '#6c757d', '#ffbc00', '#e3eaef', '#e3eaef', '#3e60d5'],
        tooltip: {
            y: {
                formatter: function (value) {
                    //const sum = opts.series.reduce((a:any, b:any) => a + b[opts.dataPointIndex], 0);
                    //const percent = (value / sum) * 100;
                    //return percent.toFixed(0) + '%'
                    return value +'';
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
        <div className="lg:col-span-2">
            <div className="card">
                    <div className="p-6">
                        <h4 className="card-title mb-4">Age Interactions</h4>
                        <div dir="ltr">
                            <ReactApexCharts className="apex-charts" options={apexAgeOpts} height={380} series={apexAgeOpts.series} type="bar" />
                        </div>
                        <div className="mt-6">
                            <h2>Police Contact by Age Group - Analysis</h2>
                            <h3>Key Insights:</h3>
                            <ul>
                                <li><strong>Teenagers/Juveniles (14-17) Have the Highest Contact:</strong> With a total<strong>207 interactions</strong> with <strong>157</strong> belonging to Juveniles, this group experiences the most engagement with police, significantly surpassing all other age groups.</li>
                                <li><strong>Pre-Teens (11-13) Show Significant Contact:</strong> At <strong>87 interactions</strong>, this group also has substantial police presence, though much lower than teens.</li>
                                <li><strong>Minimal Contact for Younger Children (4-10):</strong> The <strong>4-7</strong> and <strong>8-10</strong> age groups have very low police interactions (<strong>barely registering and 9, respectively</strong>), indicating limited engagement.</li>
                                <li><strong>Sharp Decline After Age 16:</strong> Contact drops drastically from <strong>207 (14-16 years old) to just 22 (16-19 years old)</strong>, suggesting a major shift in police interactions as teens transition to young adulthood.</li>
                            </ul>
                            <h3>Implications:</h3>
                            <p>This data highlights a peak in police contact during teenage years, raising concerns about enforcement practices, youth behavior, and community policies. Understanding the causes behind this surge could help develop better intervention strategies.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AgeChart
