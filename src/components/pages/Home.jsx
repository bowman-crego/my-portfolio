// Home.js
import React from "react";
import Header from "../Header";
import BeachImg from "../../images/beach.jpeg";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Home() {
	return (
		<div>
			<header>
				<Header />
			</header>
			<div>
				<img src={BeachImg} className='bg-scroll bg-cover w-full' alt='beach' />
				<p className='text-sm px-8 py-4'>
					Welcome to my portfolio. I am a full-stack developer with experience in React, Node.js, Express, and
					MongoDB.
				</p>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default Home;
