import React, { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navItems = [
		{ label: 'Home', href: '/#home' },
		{ label: 'About', href: '/#about' },
		{ label: 'Experience', href: '/#experience' },
		{ label: 'Skills', href: '/#skills' },
		{ label: 'Projects', href: '/#projects' },
		{ label: 'Contact', href: '/#contact' },
		{ label: 'Blog', href: '/blog' } // Add Blog Link
	];	  

	return (
		<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
			isScrolled 
				? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm' 
				: 'bg-transparent'
		}`}>
			<nav className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<a 
						href="#home" 
						className="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
					>
						Raja Namdeo
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium"
							>
								{item.label}
							</a>
						))}
						<ThemeToggle />
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center gap-4">
						<ThemeToggle />
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							aria-label="Toggle menu"
						>
							<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								{isMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg">
						<div className="container mx-auto px-6 py-4 space-y-4">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	)
}

export default Navbar

