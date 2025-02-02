import React from 'react'

const Experience = () => {
	const experiences = [
		{
			title: "Senior Software Engineer",
			company: "Tata Consultancy Services",
			period: "2021 - Present",
			description: [
				"Led development of microservices-based applications using Node.js and React",
				"Implemented CI/CD pipelines reducing deployment time by 40%",
				"Mentored junior developers and conducted code reviews",
				"Optimized application performance improving load times by 30%"
			]
		},
		{
			title: "Software Engineer",
			company: "Infosys",
			period: "2019 - 2021",
			description: [
				"Developed full-stack web applications using MERN stack",
				"Created RESTful APIs and integrated third-party services",
				"Implemented responsive designs using modern CSS frameworks",
				"Collaborated with cross-functional teams for project delivery"
			]
		}
	]

	return (
		<section id="experience" className="py-20 bg-white dark:bg-black transition-colors duration-300">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
					Professional Experience
				</h2>

				<div className="max-w-4xl mx-auto">
					{experiences.map((exp, index) => (
						<div key={index} className="relative pl-8 mb-12 last:mb-0">
							{/* Timeline line */}
							<div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800">
								<div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black"></div>
							</div>

							{/* Content */}
							<div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 ml-6 shadow-lg border border-gray-200 dark:border-gray-800">
								<h3 className="text-xl font-bold text-black dark:text-white">
									{exp.title}
								</h3>
								<div className="text-gray-600 dark:text-gray-300 font-medium mt-1">
									{exp.company}
								</div>
								<div className="text-gray-500 dark:text-gray-400 text-sm mt-1">
									{exp.period}
								</div>

								<ul className="mt-4 space-y-2">
									{exp.description.map((item, idx) => (
										<li key={idx} className="flex items-start">
											<span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full mt-2 mr-3"></span>
											<span className="text-gray-700 dark:text-gray-300">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
