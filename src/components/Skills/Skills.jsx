import { motion } from 'framer-motion';
import { styles } from '../../styles';

const SkillCard = ({ name, level }) => (
	<motion.div
		className="bg-black-200 rounded-xl p-4 w-full sm:w-[200px]"
		whileHover={{ scale: 1.05 }}
	>
		<h3 className="text-white font-bold text-[20px]">{name}</h3>
		<div className="mt-2 h-2 w-full bg-gray-700 rounded-full">
			<div
				className="h-full bg-[#915eff] rounded-full"
				style={{ width: `${level}%` }}
			/>
		</div>
		<p className="mt-1 text-secondary text-[14px]">{level}%</p>
	</motion.div>
);

const Skills = () => {
	const skills = [
		{ name: "React", level: 90 },
		{ name: "JavaScript", level: 85 },
		{ name: "Node.js", level: 80 },
		{ name: "TypeScript", level: 75 },
		{ name: "Python", level: 70 },
		{ name: "MongoDB", level: 75 },
		{ name: "SQL", level: 70 },
		{ name: "Git", level: 85 },
	];

	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
				<span className="hash-span" id="skills">
					&nbsp;
				</span>

				<div>
					<p className={styles.sectionSubText}>My technical expertise</p>
					<h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
				</div>

				<div className="mt-20 flex flex-wrap gap-7">
					{skills.map((skill, index) => (
						<SkillCard key={index} {...skill} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;