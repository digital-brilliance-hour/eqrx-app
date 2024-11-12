import ReactApexChart from 'react-apexcharts'

// components
import { PageBreadcrumb } from '../../../../components'

// data
import { chart1Opts, chart2Opts, chart3Opts, chart4Opts, chart5Opts, chart6Opts, chart7Opts, chart8Opts, spark1Opts, spark2Opts, spark3Opts } from './data'

const SparklinesApex = () => {
	return (
		<>
			<PageBreadcrumb title="Sparklines Charts" subName="Apex" />
			<div className="card">
				<div className="p-6">
					<div className="grid 2xl:grid-cols-3 grid-cols-2 gap-6">
						<div>
							<ReactApexChart className="apex-charts" options={spark1Opts} height={160} series={spark1Opts.series} type="area" />
						</div>
						<div>
							<ReactApexChart className="apex-charts" options={spark2Opts} height={160} series={spark2Opts.series} type="area" />
						</div>
						<div>
							<ReactApexChart className="apex-charts" options={spark3Opts} height={160} series={spark3Opts.series} type="area" />
						</div>
					</div>

					<div className="flex flex-col mt-5">
						<div className="-m-1.5 overflow-x-auto">
							<div className="p-1.5 min-w-full inline-block align-middle">
								<div className="overflow-hidden">
									<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
										<thead>
											<tr className="bg-gray-100 dark:bg-gray-900/50">
												<th scope="col" className="px-6 py-3 text-start font-semibold">
													Total Value
												</th>
												<th scope="col" className="px-6 py-3 text-start font-semibold">
													Percentage of Portfolio
												</th>
												<th scope="col" className="px-6 py-3 text-center font-semibold">
													Last 10 days
												</th>
												<th scope="col" className="px-6 py-3 text-center font-semibold">
													Volume
												</th>
											</tr>
										</thead>

										<tbody className="divide-y divide-gray-200 dark:divide-gray-700">
											<tr>
												<td className="px-6 py-4 whitespace-nowrap">$32,554</td>
												<td className="px-6 py-4 whitespace-nowrap">15%</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<ReactApexChart options={chart1Opts} series={chart1Opts.series} type="line" width={140} height={60} />
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<ReactApexChart options={chart5Opts} series={chart5Opts.series} type="bar" width={100} height={60} />
												</td>
											</tr>

											<tr>
												<td className="px-6 py-4 whitespace-nowrap">$23,533</td>
												<td className="px-6 py-4 whitespace-nowrap">7%</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<ReactApexChart options={chart2Opts} series={chart2Opts.series} type="line" width={140} height={60} />
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<ReactApexChart options={chart6Opts} series={chart6Opts.series} type="bar" width={100} height={60} />
												</td>
											</tr>

											<tr>
												<td className="px-6 py-4 whitespace-nowrap">$54,276</td>
												<td className="px-6 py-4 whitespace-nowrap">9%</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<ReactApexChart options={chart3Opts} series={chart3Opts.series} type="line" width={140} height={60} />
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<ReactApexChart options={chart7Opts} series={chart7Opts.series} type="bar" width={100} height={60} />
												</td>
											</tr>

											<tr>
												<td className="px-6 py-4 whitespace-nowrap">$11,533</td>
												<td className="px-6 py-4 whitespace-nowrap">2%</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<ReactApexChart options={chart4Opts} series={chart4Opts.series} type="line" width={140} height={60} />
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<ReactApexChart options={chart8Opts} series={chart8Opts.series} type="bar" width={100} height={60} />
												</td>
											</tr>
											<tr></tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SparklinesApex
