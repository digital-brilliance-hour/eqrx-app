import React from 'react'
import { remixIconsList } from './data'
import { PageBreadcrumb } from '../../../components'

// components

const RemixIcons = () => {
	const headings: string[][] = []
	headings.push(Object.keys(remixIconsList[0]))

	return (
		<>
			<PageBreadcrumb title="Remix Icons" subName="Icons" />
			<div className="flex flex-col gap-6" id="icons">
				{(headings[0] || []).map((heading, idx) => {
					return (
						<div className="card" key={heading + idx}>
							<div className="p-6">
								<h5 className="card-title mb-2">{heading}</h5>
								<p className="card-title-desc mb-2">
									Use <code>&lt;i class="ri-home-line"&gt;&lt;/i&gt;</code> or <code>&lt;i class="ri-home-fill"&gt;&lt;/i&gt;</code>
								</p>

								<div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 icons-list-demo" id="icons">
									{heading !== 'Editor'
										? remixIconsList[0][heading].map((icon: string, idx: number) => {
												return (
													<React.Fragment key={idx}>
														<div className="flex items-center">
															<i className={`ri-${icon}-line`} />
															&nbsp;<div>ri-{icon}-line</div>
														</div>
														<div className="flex items-center">
															<i className={`ri-${icon}-fill`} />
															&nbsp;<div>ri-{icon}-fill</div>
														</div>
													</React.Fragment>
												)
										  })
										: (remixIconsList[0]['Editor'] || []).map((icon, idx) => {
												return (
													<div key={idx} className="flex items-center">
														<i className={`ri-${icon}`} />
														&nbsp;<div>ri-{icon}</div>
													</div>
												)
										  })}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default RemixIcons
