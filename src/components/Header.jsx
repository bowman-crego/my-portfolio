import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className=''>
			<div className=''>
				<div className='flex justify-between items-center px-2 py-2 shadow-lg'>
					{/* Logo Section */}
					<h1 className='text-3xl font-semibold text-gray-800 px-8'>
						<Link to='/'>Bowman</Link>
					</h1>

					{/* Navbar */}
					<div className='flex justify-end px-2 py-4'>
						<NavBar />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
