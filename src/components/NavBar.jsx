import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='mx-auto flex max-w-7xl items-right justify-between p-6 lg:px-8'>
			<div className='md:hidden'>
				<button
					onClick={toggleMenu}
					className='text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600'
				>
					<svg
						className='h-6 w-6'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path d='M4 6h16M4 12h16M4 18h16'></path>
					</svg>
				</button>
			</div>
			<div className={`md:flex justify-end space-x-8 ${isOpen ? "block" : "hidden"}`}>
				<Link to='/about' className='hover:text-blue-600'>
					About Me
				</Link>
				<Link to='/contact' className='hover:text-blue-600'>
					Contact
				</Link>
				<Link to='/projects' className='hover:text-blue-600'>
					Projects
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
