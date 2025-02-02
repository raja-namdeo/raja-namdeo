import { motion } from 'framer-motion';
import { styles } from '../../styles';

const ProjectCard = ({ title, description, tags, image, source_code_link, live_demo_link }) => (
	<motion.div
		whileHover={{ y: -10 }}
		className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full"
	>
		<div className="relative w-full h-[230px]">
			<img
				src={image}
				alt={title}
				className="w-full h-full object-cover rounded-2xl"
			/>
			<div className="absolute inset-0 flex justify-end m-3 gap-2">
				<div
					onClick={() => window.open(source_code_link, "_blank")}
					className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
				>
					<img
						src="github.png"
						alt="github"
						className="w-1/2 h-1/2 object-contain"
					/>
				</div>
				{live_demo_link && (
					<div
						onClick={() => window.open(live_demo_link, "_blank")}
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
					>
						<img
							src="link.png"
							alt="live demo"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
				)}
			</div>
		</div>

		<div className="mt-5">
			<h3 className="text-white font-bold text-[24px]">{title}</h3>
			<p className="mt-2 text-secondary text-[14px]">{description}</p>
		</div>

		<div className="mt-4 flex flex-wrap gap-2">
			{tags.map((tag) => (
				<p key={tag.name} className={`text-[14px] ${tag.color}`}>
					#{tag.name}
				</p>
			))}
		</div>
	</motion.div>
);

const Projects = () => {
	const projects = [
		{
			title: "Project One",
			description: "A web application that demonstrates modern React development practices with responsive design and state management.",
			tags: [
				{ name: "react", color: "blue-text-gradient" },
				{ name: "mongodb", color: "green-text-gradient" },
				{ name: "tailwind", color: "pink-text-gradient" },
			],
			image: "project1.png",
			source_code_link: "https://github.com/raja-namdeo/project-one",
			live_demo_link: "https://project-one.demo",
		},
		// Add more projects here
	];

	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
				<span className="hash-span" id="projects">
					&nbsp;
				</span>

				<div>
					<p className={styles.sectionSubText}>My work</p>
					<h2 className={styles.sectionHeadText}>Projects.</h2>
				</div>

				<div className="w-full flex">
					<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
						The following projects showcase my skills and experience through real-world
						examples of my work. Each project is briefly described with links to code
						repositories and live demos. They reflect my ability to solve complex
						problems, work with different technologies, and manage projects effectively.
					</p>
				</div>

				<div className="mt-20 flex flex-wrap gap-7">
					{projects.map((project, index) => (
						<ProjectCard key={`project-${index}`} {...project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;