import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<React.Fragment>
			<footer className="footer h-16 flex items-center px-6 bg-white shadow dark:bg-gray-800 mt-auto">
				<div className="flex md:justify-between justify-center w-full gap-4">
					<div>
						{new Date().getFullYear()} © Attex -{' '}
						<Link to="https://coderthemes.com/" target="_blank">
							Coderthemes
						</Link>
					</div>
					<div className="md:flex hidden gap-4 item-center md:justify-end">
						<Link to="/" className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
							About
						</Link>
						<Link to="/" className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
							Support
						</Link>
						<Link to="/" className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
							Contact Us
						</Link>
					</div>
				</div>
			</footer>
		</React.Fragment>
	)
}

export default Footer
