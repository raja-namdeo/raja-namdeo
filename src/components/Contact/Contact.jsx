import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../../styles';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs.send(
			'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
			'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
			{
				from_name: form.name,
				to_name: 'Raja',
				from_email: form.email,
				to_email: 'cse.rajanamdeo@gmail.com',
				message: form.message,
			},
			'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
		).then(() => {
			setLoading(false);
			alert('Thank you. I will get back to you as soon as possible.');
			setForm({
				name: '',
				email: '',
				message: '',
			});
		}, (error) => {
			setLoading(false);
			console.log(error);
			alert('Something went wrong. Please try again.');
		});
	};

	return (
		<section className="relative w-full h-screen mx-auto">
			<div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
				<span className="hash-span" id="contact">
					&nbsp;
				</span>

				<div>
					<p className={styles.sectionSubText}>Get in touch</p>
					<h2 className={styles.sectionHeadText}>Contact.</h2>
				</div>

				<div className="mt-12 flex flex-col gap-8">
					<div className="flex-[0.75] bg-black-200 p-8 rounded-2xl">
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="mt-12 flex flex-col gap-8"
						>
							<label className="flex flex-col">
								<span className="text-white font-medium mb-4">Your Name</span>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									placeholder="What's your name?"
									className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
								/>
							</label>
							<label className="flex flex-col">
								<span className="text-white font-medium mb-4">Your Email</span>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									placeholder="What's your email?"
									className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
								/>
							</label>
							<label className="flex flex-col">
								<span className="text-white font-medium mb-4">Your Message</span>
								<textarea
									rows="7"
									name="message"
									value={form.message}
									onChange={handleChange}
									placeholder="What do you want to say?"
									className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
								/>
							</label>

							<button
								type="submit"
								className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
							>
								{loading ? 'Sending...' : 'Send'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;