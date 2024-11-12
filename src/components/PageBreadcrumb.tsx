import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

interface PageTitleProps {
	subName?: string
	title: string
	addedChild?: ReactNode
}

const PageBreadcrumb = ({ subName, title, addedChild }: PageTitleProps) => {
	const breadcrumbItems = ['Attex', subName, title]
	return (
		<>
			<Helmet>
				<title>{title} | Attex - Responsive Tailwind CSS 3 Admin Dashboard</title>
			</Helmet>
			{subName && (
				<div className="flex justify-between items-center mb-6">
					<div className="flex gap-4">
						<h4 className="text-slate-900 dark:text-slate-200 text-lg font-medium">{title}</h4>
						{addedChild}
					</div>
					<div className="md:flex hidden items-center gap-2.5 font-semibold">
						{(breadcrumbItems || []).map((item, idx) => (
							<div className="flex items-center gap-2" key={idx}>
								{idx != 0 && <i className="ri-arrow-right-s-line text-base text-slate-400 rtl:rotate-180" />}
								<Link to="#" className="text-sm font-medium text-slate-700 dark:text-slate-400">
									{item}
								</Link>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default PageBreadcrumb
