 
 import { Link } from "react-router-dom";
 
 
 function NavBar() {
    return (
      <nav className="mx-auto flex max-w-7xl items-right justify-between p-6 lg:px-8" aria-label="Global">
        <div className="hidden md:flex items-center space-x-8">
        <Link to="/about" className="hover:text-blue-600">
							About Me
						</Link>
        <Link to="/contact" className="hover:text-blue-600">
							Contact
						</Link>
            
        <Link to="/projects" className="hover:text-blue-600">
							Projects
						</Link>
            </div>
        {/* <a href="#AboutMe"></a>
        <a href="#Contact"></a>
        // <a href="#Projects"></a> */} 
       </nav>
 );
}

export default NavBar; 