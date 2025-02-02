import React from 'react'
import { FaReact, FaNode, FaDocker, FaGitAlt, FaAws, FaLinux } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiMongodb, SiRedux, SiExpress } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
	const skillCategories = [
		{
			title: "Frontend",
			skills: [
				{ name: "React.js", icon: <FaReact size={24} /> },
				{ name: "JavaScript", icon: <SiJavascript size={24} /> },
				{ name: "Next.js", icon: <TbBrandNextjs size={24} /> },
				{ name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
				{ name: "Redux", icon: <SiRedux size={24} /> }
			]
		},
		{
			title: "Backend",
			skills: [
				{ name: "Node.js", icon: <FaNode size={24} /> },
				{ name: "Express.js", icon: <SiExpress size={24} /> },
				{ name: "MongoDB", icon: <SiMongodb size={24} /> }
			]
		},
		{
			title: "DevOps & Tools",
			skills: [
				{ name: "Git", icon: <FaGitAlt size={24} /> },
				{ name: "Docker", icon: <FaDocker size={24} /> },
				{ name: "AWS", icon: <FaAws size={24} /> },
				{ name: "Linux", icon: <FaLinux size={24} /> }
			]
		}
	]

	return (
		<section id="skills" className="py-20 bg-white dark:bg-black transition-colors duration-300">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
					Technical Skills
				</h2>
				
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{skillCategories.map((category, index) => (
						<div 
							key={index}
							className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
						>
							<h3 className="text-xl font-semibold mb-6 text-black dark:text-white">
								{category.title}
							</h3>
							
							<div className="grid grid-cols-2 gap-4">
								{category.skills.map((skill, idx) => (
									<div 
										key={idx}
										className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 
														 hover:shadow-md transition-all duration-300"
									>
										<span className="text-gray-700 dark:text-gray-300">{skill.icon}</span>
										<span className="text-gray-800 dark:text-gray-200 font-medium">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills