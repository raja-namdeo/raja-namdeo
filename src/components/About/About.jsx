import React from 'react'

const About = () => {
	return (
		<section id="about" className="py-20 bg-white dark:bg-black transition-colors duration-300">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
					About Me
				</h2>
				
				<div className="max-w-3xl mx-auto">
					<div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
						<p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
							I am a passionate Full Stack Developer with over 5 years of experience in building web applications 
							and microservices. Specializing in React.js, Node.js, and cloud technologies, I focus on creating 
							efficient, scalable, and user-friendly solutions.
						</p>

						<div className="space-y-8">
							<div className="border-l-4 border-black dark:border-white pl-6">
								<h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
									Professional Summary
								</h3>
								<ul className="space-y-3 text-gray-700 dark:text-gray-300">
									<li className="flex items-start">
										<span className="mr-2">•</span>
										Full Stack Developer with expertise in MERN stack development
									</li>
									<li className="flex items-start">
										<span className="mr-2">•</span>
										Experience in building scalable microservices and RESTful APIs
									</li>
									<li className="flex items-start">
										<span className="mr-2">•</span>
										Strong background in front-end development using React.js
									</li>
									<li className="flex items-start">
										<span className="mr-2">•</span>
										Proficient in cloud services (AWS, GCP) and DevOps practices
									</li>
								</ul>
							</div>

							<div className="border-l-4 border-black dark:border-white pl-6">
								<h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
									Education
								</h3>
								<div className="text-gray-700 dark:text-gray-300">
									<p className="font-medium">Bachelor of Technology in Computer Science</p>
									<p className="text-gray-600 dark:text-gray-400">2014 - 2018</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
