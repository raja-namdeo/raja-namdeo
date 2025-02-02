import { motion } from 'framer-motion';
import { styles } from '../../styles';

const ExperienceCard = ({ title, company, date, points }) => (
	<div className="bg-black-200 p-5 rounded-2xl sm:w-[360px] w-full">
		<div className="relative w-full">
			<h3 className="text-white text-[24px] font-bold">{title}</h3>
			<p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
				{company}
			</p>
			<p className="mt-2 text-secondary text-[14px]">{date}</p>
		</div>

		<ul className="mt-5 list-disc ml-5 space-y-2">
			{points.map((point, index) => (
				<li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
					{point}
				</li>
			))}
		</ul>
	</div>
);

const Experience = () => {
	const experiences = [
		{
			title: "Full Stack Developer",
			company: "Company Name",
			date: "Jan 2022 - Present",
			points: [
				"Developing and maintaining web applications using React.js and other related technologies.",
				"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
				"Implementing responsive design and ensuring cross-browser compatibility.",
				"Participating in code reviews and providing constructive feedback to other developers.",
			],
		},
		// Add more experiences here
	];

	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
				<span className="hash-span" id="experience">
					&nbsp;
				</span>

				<div>
					<p className={styles.sectionSubText}>What I have done so far</p>
					<h2 className={styles.sectionHeadText}>Work Experience.</h2>
				</div>

				<div className="mt-20 flex flex-col">
					<div className="flex flex-wrap gap-7">
						{experiences.map((experience, index) => (
							<ExperienceCard key={index} {...experience} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;