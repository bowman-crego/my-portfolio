import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className='min-h-screen flex flex-col w-full overflow-x-hidden'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<AboutMe />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
