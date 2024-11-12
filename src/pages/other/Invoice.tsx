//image
import logoDark from '@/assets/images/logo-dark.png'
import barCode from '@/assets/images/barcode.png'

// components
import { PageBreadcrumb } from '../../components'

const InvoicePages = () => {
	return (
		<>
			<PageBreadcrumb title="Invoice" subName="Extra Pages" />
			<div className="card">
				<div className="p-6">
					<div className="mb-10">
						<div className="flex justify-between items-center">
							<div>
								<img src={logoDark} alt="logo-dark" className="h-6" />
							</div>
							<div>
								<h4 className="text-lg">Invoice</h4>
							</div>
						</div>
					</div>

					<div className="mb-14">
						<div className="grid sm:grid-cols-2 gap-6">
							<div className="col-span-1">
								<p className="font-medium mb-4">
									<b>Hello, Tosha Minner</b>
								</p>
								<p className="text-xs">Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.</p>
							</div>

							<div className="col-span-1">
								<div className="flex sm:justify-end space-y-2">
									<div className="grid gap-3">
										<div className="grid grid-cols-4 gap-x-3">
											<h6 className="col-span-2 font-semibold text-gray-500 dark:text-gray-200">Order Date:</h6>
											<p className="col-span-2 sm:text-end text-gray-400">Jan 17, 2023</p>
										</div>

										<div className="grid grid-cols-4 gap-x-3">
											<h6 className="col-span-2 font-semibold text-gray-500 dark:text-gray-200">Order Status:</h6>
											<p className="col-span-2 sm:text-end text-gray-400">
												<span className="inline-flex items-center px-1 rounded-full text-xs font-medium bg-success text-white">Paid</span>
											</p>
										</div>

										<div className="grid grid-cols-4 gap-x-3">
											<h6 className="col-span-2 font-semibold text-gray-500 dark:text-gray-200">Order ID:</h6>
											<p className="col-span-2 sm:text-end text-gray-400">#123456</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mb-10">
						<div className="grid sm:grid-cols-3 gap-6">
							<div className="col-span-1">
								<h6 className="text-xs mb-3">Billing Address</h6>
								<address className="not-italic">
									Lynne K. Higby <br /> 795 Folsom Ave, Suite 600 <br /> San Francisco, CA 94107 <br /> P: (123) 456-7890{' '}
								</address>
							</div>

							<div className="col-span-1">
								<h6 className="text-xs mb-3">Shipping Address</h6>
								<address className="not-italic">
									Tosha Minner <br /> 795 Folsom Ave, Suite 600 <br /> San Francisco, CA 94107 <br /> P: (123) 456-7890{' '}
								</address>
							</div>

							<div className="col-span-1">
								<img src={barCode} alt="barcode" className="sm:ms-auto" />
							</div>
						</div>
					</div>

					<div className="mb-5">
						<div className="flex flex-col">
							<div className="-m-1.5 overflow-x-auto">
								<div className="p-1.5 min-w-full inline-block align-middle">
									<div className="overflow-hidden">
										<table className="min-w-full">
											<thead className="border-t border-b py-3 bg-gray-100 border-gray-200 dark:border-gray-600">
												<tr>
													<th scope="col" className="px-6 py-2 whitespace-nowrap text-left font-semibold text-gray-500">
														#
													</th>
													<th scope="col" className="px-6 py-2 whitespace-nowrap text-left font-semibold text-gray-500">
														Item
													</th>
													<th scope="col" className="px-6 py-2 whitespace-nowrap text-left font-semibold text-gray-500">
														Quantity
													</th>
													<th scope="col" className="px-6 py-2 whitespace-nowrap text-left font-semibold text-gray-500">
														Unit Cost
													</th>
													<th scope="col" className="px-6 py-2 whitespace-nowrap text-right font-semibold text-gray-500">
														Total
													</th>
												</tr>
											</thead>

											<tbody>
												<tr className="text-gray-500 transition-all duration-300 hover:bg-gray-100 dark:text-gray-200">
													<td className="px-6 py-2 whitespace-nowrap font-medium">1</td>
													<td className="px-6 py-2 whitespace-nowrap">
														<b>Laptop</b> <br /> Brand Model VGN-TXN27N/B 11.1" Notebook PC{' '}
													</td>
													<td className="px-6 py-2 whitespace-nowrap"></td>
													<td className="px-6 py-2 whitespace-nowrap">$1799.00</td>
													<td className="px-6 py-2 whitespace-nowrap text-right">$1799.00</td>
												</tr>

												<tr className="text-gray-500 transition-all duration-300 hover:bg-gray-100 dark:text-gray-200">
													<td className="px-6 py-2 whitespace-nowrap font-medium">2</td>
													<td className="px-6 py-2 whitespace-nowrap">
														<b>Warranty</b> <br /> Two Year Extended Warranty - Parts and Labor{' '}
													</td>
													<td className="px-6 py-2 whitespace-nowrap">3</td>
													<td className="px-6 py-2 whitespace-nowrap">$499.00</td>
													<td className="px-6 py-2 whitespace-nowrap text-right">$1497.00</td>
												</tr>

												<tr className="text-gray-500 transition-all duration-300 hover:bg-gray-100 dark:text-gray-200">
													<td className="px-6 py-2 whitespace-nowrap font-medium">1</td>
													<td className="px-6 py-2 whitespace-nowrap">
														<b>LED</b> <br /> 80cm (32) HD Ready LED TV
													</td>
													<td className="px-6 py-2 whitespace-nowrap">2</td>
													<td className="px-6 py-2 whitespace-nowrap"> $412.00</td>
													<td className="px-6 py-2 whitespace-nowrap text-right">$824.00</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid sm:grid-cols-2 gap-6">
						<div className="col-span-1">
							<p className="font-medium text-xs mb-2">Notes:</p>
							<p className="text-xs">All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</p>
						</div>
						<div className="col-span-1">
							<div className="flex sm:justify-end space-y-2">
								<div className="grid gap-3">
									<div className="grid grid-cols-4 gap-x-3">
										<h6 className="col-span-2 font-semibold text-gray-500 dark:text-gray-200">Sub-total:</h6>
										<p className="col-span-2 sm:text-end text-gray-400">$4120.00</p>
									</div>

									<div className="grid grid-cols-4 gap-x-3">
										<h6 className="col-span-2 font-semibold text-gray-500 dark:text-gray-200">VAT (12.5):</h6>
										<p className="col-span-2 sm:text-end text-gray-400">$515.00</p>
									</div>

									<div className="grid grid-cols-4 gap-x-3">
										<h6 className="col-span-5 sm:text-xl text-lg font-medium text-gray-500 dark:text-gray-200">$4635.00 USD</h6>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-10">
						<div className="flex sm:justify-end gap-2 items-center print:hidden">
							<button type="button" className="btn bg-primary text-white" onClick={() => window.print()}>
								{' '}
								<i className="ri-printer-line me-1"></i> Print
							</button>
							<button type="button" className="btn bg-primary text-white">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default InvoicePages
