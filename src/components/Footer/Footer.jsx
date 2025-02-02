import React from 'react'

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-sm">© 2024 Raja Namdeo. All rights reserved.</p>
					</div>
					<div className="flex space-x-4">
						<a href="https://github.com/raja-namdeo" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
							GitHub
						</a>
						<a href="mailto:cse.rajanamdeo@gmail.com" className="hover:text-primary">
							Email
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer