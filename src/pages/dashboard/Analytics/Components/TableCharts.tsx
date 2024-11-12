import { Link } from 'react-router-dom'

// dummy data
import { records } from '../data'

const Channels = () => {
	return (
		<div className="card">
			<div className="card-header flex justify-between items-center">
				<h4 className="card-title">Channels</h4>
				<Link to="" className="btn btn-sm bg-light !text-sm text-gray-800 dark:bg-light/20 dark:text-white">
					Export <i className="ri-download-line ms-1.5"></i>
				</Link>
			</div>

			<div className="">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead className="bg-light/40 border-b border-gray-100 dark:bg-light/5 dark:border-b-gray-700">
							<tr>
								<th className="p-2 text-start">Channel</th>
								<th className="p-2 text-start">Visits</th>
								<th className="p-2 text-start w-2/5">Progress</th>
							</tr>
						</thead>
						<tbody>
							{(records || []).map((record, idx) => {
								return (
									<tr key={idx}>
										<td className="p-2">{record.channel}</td>
										<td className="p-2">{record.visits}</td>
										<td className="p-2">
											<div className="flex w-full h-[3px] bg-light rounded-full overflow-hidden dark:bg-gray-700">
												<div className={`flex flex-col justify-center overflow-hidden bg-${record.color}`} role="progressbar" style={{ width: `${record.now}%` }} aria-valuenow={record.now} aria-valuemin={0} aria-valuemax={100}></div>
											</div>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

const SocialMediaTraffic = () => {
	return (
		<div className="card">
			<div className="card-header flex justify-between items-center">
				<h4 className="card-title">Social Media Traffic</h4>
				<Link to="" className="btn btn-sm bg-light !text-sm text-gray-800 dark:bg-light/20 dark:text-white">
					Export <i className="ri-download-line ms-1.5"></i>
				</Link>
			</div>

			<div className="">
				<table className="w-full">
					<thead className="bg-light/40 border-b border-gray-100 dark:bg-light/5 dark:border-b-gray-700">
						<tr>
							<th className="p-2 text-start">Network</th>
							<th className="p-2 text-start">Visits</th>
							<th className="p-2 text-start w-2/5">Progress</th>
						</tr>
					</thead>
					<tbody>
						{(records || []).map((record, idx) => {
							return (
								<tr key={idx}>
									<td className="p-2">{record.network}</td>
									<td className="p-2">{record.visits}</td>
									<td className="p-2">
										<div className="flex w-full h-[3px] bg-light rounded-full overflow-hidden dark:bg-gray-700">
											<div className="flex flex-col justify-center overflow-hidden bg-primary" role="progressbar" style={{ width: `${record.now}%` }} aria-valuenow={record.now} aria-valuemin={0} aria-valuemax={100}></div>
										</div>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

const EngagementOverview = () => {
	return (
		<div className="card">
			<div className="card-header flex justify-between items-center">
				<h4 className="card-title">Engagement Overview</h4>
				<Link to="" className="btn btn-sm bg-light !text-sm text-gray-800 dark:bg-light/20 dark:text-white">
					Export <i className="ri-download-line ms-1.5"></i>
				</Link>
			</div>

			<div className="">
				<table className="w-full">
					<thead className="bg-light/40 border-b border-gray-100 dark:bg-light/5 dark:border-b-gray-700">
						<tr>
							<th className="p-2 text-start w-1/3">Duration (Secs)</th>
							<th className="p-2 text-start w-1/3">Sessions</th>
							<th className="p-2 text-start w-1/3">Views</th>
						</tr>
					</thead>
					<tbody>
						{(records || []).map((record, idx) => {
							return (
								<tr key={idx}>
									<td className="p-2">{record.duration}</td>
									<td className="p-2">{record.session}</td>
									<td className="p-2">{record.views}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

const TableCharts = () => {
	return (
		<>
			<Channels />
			<SocialMediaTraffic />
			<EngagementOverview />
		</>
	)
}

export default TableCharts
