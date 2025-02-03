import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BlogList = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		// Fetch posts from the public/data/posts.json
		const fetchPosts = async () => {
			const response = await fetch('/data/posts.json') // Correct relative path
			const data = await response.json()
			setPosts(data)
		}

		fetchPosts()
	}, [])

	if (!posts.length) return <div>Loading...</div>

	return (
		<section id="blog" className="py-20 bg-white dark:bg-black transition-colors duration-300">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
					Blog Posts
				</h2>
				
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{posts.map((post, index) => (
						<motion.div
							key={post.slug}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
						>
							{/* If the post has an image, render it */}
							{post.coverImage && (
								<img 
									src={post.coverImage} 
									alt={post.title}
									className="w-full h-48 object-cover"
								/>
							)}
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 text-black dark:text-white">
									{post.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4">
									{post.excerpt}
								</p>
								<div className="flex justify-between items-center">
									<span className="text-gray-500 dark:text-gray-400 text-sm">
										{new Date(post.date).toLocaleDateString()}
									</span>
									<Link
										to={`/blog/${post.slug}`}
										className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
									>
										Read More →
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default BlogList
