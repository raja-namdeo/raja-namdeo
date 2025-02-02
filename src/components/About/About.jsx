import { motion } from 'framer-motion';
import { styles } from '../../styles';

const About = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
				<span className="hash-span" id="about">
					&nbsp;
				</span>

				<div>
					<p className={styles.sectionSubText}>Introduction</p>
					<h2 className={styles.sectionHeadText}>Overview.</h2>
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					I'm a skilled software developer with experience in TypeScript, JavaScript,
					and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and
					collaborate closely with clients to create efficient, scalable, and user-friendly
					solutions that solve real-world problems. Let's work together to bring your ideas to life!
				</motion.p>

				<div className="mt-20 flex flex-wrap gap-10">
					{/* Add service cards or additional content here */}
				</div>
			</div>
		</section>
	);
};

export default About;