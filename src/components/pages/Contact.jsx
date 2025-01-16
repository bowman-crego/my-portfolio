import React, { useState } from "react";
import Header from "../Header";
import Modal from "../Modal";

function Contact() {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div>
			<Header />
			<div className='flex flex-col items-center justify-center text-center px-2 py-4'>
				<h1 className='font-semibold'>Let's Connect</h1>
				<p>If you like what you see and want to have a chat, feel free to reach out to me!</p>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<button onClick={toggleModal} className='mt-4 bg-black text-white px-4 py-2 rounded'>
					Contact
				</button>
			</div>
			<Modal show={showModal} onClose={toggleModal} />
		</div>
	);
}

export default Contact;
