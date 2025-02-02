import React from 'react'

const Hero = () => {
	return (
		<section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
			<div className="container mx-auto px-4 text-center">
				<h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
					Hi, I'm Raja Namdeo
				</h1>
				
				<p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300">
					Full Stack Developer specializing in modern web technologies
				</p>
				
				<div className="flex flex-col sm:flex-row gap-6 justify-center">
					<a 
						href="#projects" 
						className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black 
										 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 
										 transition-all duration-300 shadow-lg hover:shadow-xl"
					>
						View Projects
					</a>
					<a 
						href="https://github.com/raja-namdeo"
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-3 bg-white dark:bg-gray-800 text-black dark:text-white 
										 border-2 border-gray-900 dark:border-white rounded-lg
										 hover:bg-gray-100 dark:hover:bg-gray-700
										 transition-all duration-300 shadow-lg hover:shadow-xl"
					>
						GitHub Profile
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero

