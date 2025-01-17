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
			</div>

			<Footer />
		</div>
	);
}

export default Home;
