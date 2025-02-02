import React from 'react'
import { 
	FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaLinux,
	FaHtml5, FaCss3Alt, FaDatabase
} from 'react-icons/fa'
import { 
	SiJavascript, SiTypescript, SiTailwindcss, SiMongodb,
	SiRedux, SiExpress, SiNextdotjs
} from 'react-icons/si'

const iconMap = {
	react: FaReact,
	node: FaNodeJs,
	javascript: SiJavascript,
	typescript: SiTypescript,
	html: FaHtml5,
	css: FaCss3Alt,
	tailwind: SiTailwindcss,
	redux: SiRedux,
	mongodb: SiMongodb,
	express: SiExpress,
	nextjs: SiNextdotjs,
	git: FaGitAlt,
	docker: FaDocker,
	aws: FaAws,
	linux: FaLinux,
	sql: FaDatabase
}

const SkillIcon = ({ name, size = 24 }) => {
	const Icon = iconMap[name.toLowerCase()]
	if (!Icon) return null

	return (
		<div className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-gray-800 
										hover:shadow-md transition-all duration-300">
			<Icon size={size} className="text-gray-700 dark:text-gray-300" />
			<span className="text-gray-800 dark:text-gray-200 font-medium">
				{name}
			</span>
		</div>
	)
}

export default SkillIcon