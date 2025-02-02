import React from 'react'

const Projects = () => {
	const projects = [
		{
			title: "E-commerce Platform",
			description: "Full-stack e-commerce platform with React, Node.js, and MongoDB",
			tech: ["React", "Node.js", "MongoDB", "Express"],
			github: "https://github.com/raja-namdeo/ecommerce",
			live: "https://ecommerce-demo.com"
		},
		{
			title: "Task Management System",
			description: "Real-time task management application with collaborative features",
			tech: ["React", "Firebase", "Material-UI"],
			github: "https://github.com/raja-namdeo/task-manager",
			live: "https://task-manager-demo.com"
		},
		{
			title: "Portfolio Website",
			description: "Personal portfolio website built with React and Tailwind CSS",
			tech: ["React", "Tailwind CSS", "Vite"],
			github: "https://github.com/raja-namdeo/portfolio",
			live: "https://portfolio-demo.com"
		}
	]

	return (
		<section id="projects" className="py-20 bg-white dark:bg-black transition-colors duration-300">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
					Featured Projects
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div 
							key={index} 
							className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg 
											 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
						>
							{/* Project Image Placeholder */}
							<div className="aspect-video bg-gray-200 dark:bg-gray-800"></div>
							
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 text-black dark:text-white">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech, idx) => (
										<span 
											key={idx} 
											className="px-3 py-1 text-sm bg-white dark:bg-gray-800 
															 text-gray-700 dark:text-gray-300 rounded-full
															 border border-gray-300 dark:border-gray-700"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black 
														 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 
														 transition-all duration-300"
									>
										GitHub
									</a>
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white 
														 rounded-lg border border-black dark:border-white
														 hover:bg-gray-100 dark:hover:bg-gray-700 
														 transition-all duration-300"
									>
										Live Demo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects

