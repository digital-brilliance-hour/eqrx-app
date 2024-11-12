// components
import Statistics from './components/Statistics'
import RevenueChart from './components/RevenueChart'
import TotalSalesChart from './components/TotalSalesChart'
import TopSellingProducts from './components/TopSellingProducts'
import RevenueByLocation from './components/RevenueByLocation'
import { PageBreadcrumb } from '../../../components'

// dummy data
import { products } from './data'

const Ecommerce = () => {
	return (
		<>
			<PageBreadcrumb title="Dashboard" subName="Menu" />
			<Statistics />

			<div className="grid lg:grid-cols-3 gap-6 mb-6">
				<RevenueChart />
				<TotalSalesChart />
			</div>
			<div className="grid grid-cols-12 gap-6">
				<div className="xl:col-span-5 col-span-12">
					<TopSellingProducts products={products} />
				</div>
				<div className="xl:col-span-7 col-span-12">
					<RevenueByLocation />
				</div>
			</div>
		</>
	)
}

export default Ecommerce
