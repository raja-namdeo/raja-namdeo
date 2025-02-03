import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* About Section */}
					<div>
						<h3 className="text-xl font-bold mb-4 text-black dark:text-white">Raja Namdeo</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							Full Stack Developer specializing in modern web technologies and cloud solutions.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-4 text-black dark:text-white">Quick Links</h3>
						<ul className="space-y-2">
							{['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
								<li key={item}>
									<a 
										href={`/#${item.toLowerCase()}`}
										className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h3 className="text-xl font-bold mb-4 text-black dark:text-white">Connect</h3>
						<div className="flex space-x-4 mb-4">
							<a 
								href="https://github.com/raja-namdeo" 
								target="_blank" 
								rel="noopener noreferrer"
								className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
							>
								<FaGithub size={24} />
							</a>
							<a 
								href="https://linkedin.com/in/raja-namdeo" 
								target="_blank" 
								rel="noopener noreferrer"
								className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
							>
								<FaLinkedin size={24} />
							</a>
							<a 
								href="mailto:cse.rajanamdeo@gmail.com"
								className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
							>
								<FaEnvelope size={24} />
							</a>
							<a 
								href="https://twitter.com/raja_namdeo" 
								target="_blank" 
								rel="noopener noreferrer"
								className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
							>
								<FaTwitter size={24} />
							</a>
						</div>
						<p className="text-gray-600 dark:text-gray-300">
							Email: cse.rajanamdeo@gmail.com
						</p>
					</div>
				</div>

				<div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
					<p className="text-gray-600 dark:text-gray-300">
						© {currentYear} Raja Namdeo. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer