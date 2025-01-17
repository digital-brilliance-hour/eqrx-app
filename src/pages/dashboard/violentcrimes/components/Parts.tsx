import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import Chart, { type ChartItem } from 'chart.js/auto'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import TotalCrimes from '../components/TotalCrime1'
import TotalCrime1 from './TotalCrime1'
import { Part1Types, Part2Types, Part3Types } from './BreakdownByType'


// components
//import { PopoverLayout } from '../../../components/HeadlessUI'
//import { PageBreadcrumb } from '../../../components'
import { experienceData, messages, productConfig, projectTableData } from '../data'
//image
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar6 from '@/assets/images/users/avatar-6.jpg'


const PartsCharts = () => {
    const PopoverToggle = () => <i className="ri-more-2-fill" />

    useEffect(() => {
        const productTag = document.getElementById('high-performing-product') as ChartItem
        const chart = new Chart(productTag, productConfig)

        return () => {
            chart.destroy()
        }
    }, [])


    return (
		<>
				<div className="xl:col-span-6">
				<div className="xl:col-span-3">
    <div className="card p-6">
    <Tab.Group>
        <Tab.List as="nav" className="flex flex-wrap space-x-2 bg-light dark:bg-gray-700/60 mb-6" aria-label="Tabs">
            <Tab type="button" className={({ selected }) => `${selected ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary  bg-transparent'} flex-auto py-2 px-4 inline-flex justify-center items-center gap-2 text-center text-sm font-semibold  dark:hover:text-gray-400 first:rounded-s-md last:rounded-e-md`}>
                Part 1 Crimes
            </Tab>
            <Tab type="button" className={({ selected }) => `${selected ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary  bg-transparent'} flex-auto py-2 px-4 inline-flex justify-center items-center gap-2 text-center text-sm font-semibold  dark:hover:text-gray-400 first:rounded-s-md last:rounded-e-md`}>
                Part 2 Crimes
            </Tab>
        </Tab.List>

        <Tab.Panels className="mt-3">
            <Tab.Panel id="fill-and-justify-1" aria-labelledby="fill-and-justify-item-1">
                <h5 className="text-base uppercase mb-6">
                    <i className="ri-briefcase-line me-1"></i> Part 1 Crime Analysis
                </h5>
                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    <TotalCrime1 />
                    <Part1Types />
                </div>

            </Tab.Panel>

            <Tab.Panel id="fill-and-justify-2" aria-labelledby="fill-and-justify-item-2">
                <h5 className="text-base uppercase mb-6">
                    <i className="ri-briefcase-line me-1"></i> Part 2 Crime Analysis
                </h5>
                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    <TotalCrime1 />
                    <Part2Types />
                </div>

            </Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
    </div>
    </div>
    </div>

    </>
)
}
export default PartsCharts