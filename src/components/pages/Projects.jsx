import Header from "../Header";
import Footer from "../Footer";
import GameImg from "../../images/gamers-journal-img.jpg";
import VehicleImg from "../../images/vehicle-builder-img.jpg";
import EmployeeImg from "../../images/employee-tracker-img.jpg";

const projects = [
	{
		id: 1,
		img: GameImg,
		description: "A journal for gamers to keep track of their games",
		body: "This project is a full-stack application that allows users to keep track of their games. Users can add, edit, and delete games from their journal.",
		title: "Game Journal"
	},
	{
		id: 2,
		img: VehicleImg,
		description: "A vehicle builder for car enthusiasts",
		body: "This project is a full-stack application that allows users to build their dream vehicle. Users can add, edit, and delete vehicles from their garage.",
		title: "Vehicle Builder"
	},
	{
		id: 3,
		img: EmployeeImg,
		description: "A tracker for employees to keep track of their employees",
		body: "This project is a full-stack application that allows users to keep track of their employees. Users can add, edit, and delete employees from their tracker.",
		title: "Employee Tracker"
	}
];

function Projects() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<div className='p-4'>
				<div className='flex flex-col sm:flex-row gap-12 items-center justify-center'>
					{/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'> */}
					{projects.map((item) => (
						<div
							key={item.id}
							className='shadow-box-sm bg-white p-4 rounded-lg shadow-md space-y-4 max-w-[300px]'
						>
							<img src={item.img} alt={item.title} className='aspect-video w-full rounded-t-lg' />
							<div className='p-4'>
								<h2 className='text-xl font-bold mb-2'>{item.title}</h2>
								<p className='text-gray-700 mb-2'>{item.description}</p>
								<p className='text-gray-600'>{item.body}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Projects;
