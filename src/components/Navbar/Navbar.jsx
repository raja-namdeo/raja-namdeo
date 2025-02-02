import React, { useState } from 'react'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navItems = [
		{ label: 'Home', href: '#home' },
		{ label: 'About', href: '#about' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Contact', href: '#contact' }
	]

	return (
		<nav className="bg-white shadow-md fixed w-full z-50">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<a href="#" className="text-xl font-bold text-gray-800">Raja Namdeo</a>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-4">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
						>
							<span className="sr-only">Open main menu</span>
							{/* Hamburger Icon */}
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar