import Header from "../Header";
import Footer from "../Footer";
import BowmanImg from "../../images/bowman-img.jpg";

function AboutMe() {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='pg-4'>
				<Header />
			</div>
			<div className='flex-grow p-4 font-semibold bg-cover bg-center w-full'>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<section className='text-balance p-4 w-full md:w-1/2'>
						<h1 className='text-lg font-bold'>My Story</h1>
						<br />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo necessitatibus beatae,
							voluptate nulla, provident vel accusantium quo deleniti veniam, nisi similique totam earum
							error aspernatur distinctio ullam hic pariatur inventore?
						</p>
					</section>
					<div className='w-full md:flex flex-col p-4 px-8 py-8'>
						<img
							src={BowmanImg}
							className='object-scale-down h-48 w-96 
                                       sm:h-64 sm:w-80 
                                       md:h-80 md:w-96 
                                       lg:h-96 lg:w-full 
                                       xl:h-auto xl:w-full'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default AboutMe;
