import React, { useState } from 'react'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Add form submission logic here
		console.log('Form submitted:', formData)
	}

	return (
		<section id="contact" className="py-20 bg-white dark:bg-black transition-colors duration-300">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">

						Get In Touch
					</h2>

					<div className="max-w-3xl mx-auto">
						<div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-black dark:text-white mb-2 font-medium">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 
                           border border-gray-300 dark:border-gray-700
                           text-black dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600
                           focus:border-transparent transition-all duration-300"
									required
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-black dark:text-white mb-2 font-medium">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 
                           border border-gray-300 dark:border-gray-700
                           text-black dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600
                           focus:border-transparent transition-all duration-300"
									required
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-black dark:text-white mb-2 font-medium">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows="5"
									className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 
                           border border-gray-300 dark:border-gray-700
                           text-black dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600
                           focus:border-transparent transition-all duration-300"
									required
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full py-3 bg-black dark:bg-white text-white dark:text-black 
                         rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100
                         transition-all duration-300 shadow-lg hover:shadow-xl"
							>
								Send Message
							</button>
						</form>

						<div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
							<h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
								Other Ways to Connect
							</h3>
							<div className="space-y-3">
								<a 
									href="mailto:cse.rajanamdeo@gmail.com"
									className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
								>
									<span className="font-medium">Email:</span>
									<span className="ml-2">cse.rajanamdeo@gmail.com</span>
								</a>
								<a 
									href="https://github.com/raja-namdeo"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
								>
									<span className="font-medium">GitHub:</span>
									<span className="ml-2">github.com/raja-namdeo</span>
								</a>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
