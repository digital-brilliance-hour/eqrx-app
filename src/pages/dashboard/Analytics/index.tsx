// components
import Statistics from './Components/Statistics'
import SessionsByBrowser from './Components/SessionsByBrowser'
import SessionsByOS from './Components/SessionsByOS'
import ViewsPerMinute from './Components/ViewsPerMinute'
import SessionsOverview from './Components/SessionsOverview'
import SessionsByCountry from './Components/SessionsByCountry'
import TableCharts from './Components/TableCharts'
import { PageBreadcrumb } from '../../../components'

const Analytics = () => {
	return (
		<>
			<PageBreadcrumb title="Analytics" subName="Menu" />

			<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mb-6">
				<Statistics />
				<SessionsByBrowser />
				<SessionsByOS />
				<ViewsPerMinute />
			</div>

			<div className="grid 2xl:grid-cols-2 gap-6 mb-6">
				<SessionsOverview />
				<SessionsByCountry />
			</div>

			<div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
				<TableCharts />
			</div>
		</>
	)
}

export default Analytics
