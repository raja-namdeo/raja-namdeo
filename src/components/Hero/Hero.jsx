import React from 'react'

const Hero = () => {
	return (
		<section id="home" className="pt-20 min-h-screen flex items-center bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Hi, I'm Raja Namdeo
					</h1>
					<p className="text-xl md:text-2xl text-gray-600 mb-8">
						Full Stack Developer specializing in building exceptional digital experiences
					</p>
					<div className="flex justify-center gap-4">
						<a
							href="#projects"
							className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
						>
							View My Work
						</a>
						<a
							href="#contact"
							className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
						>
							Contact Me
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
