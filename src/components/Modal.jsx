import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
function Modal({ show, onClose }) {
	const form = useRef();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_l7uh4ia", "template_ihr9agv", form.current, "bCnLHJ3ZAjQ28-aFi").then(
			(result) => {
				console.log("Email sent successfully:", result.text);
				alert("Email sent");
				setFormData({ name: "", email: "", message: "" });
				onClose();
			},
			(error) => {
				console.log("Error sending email:", error.text);
				alert("Error sending email");
			}
		);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	if (!show) {
		return null;
	}

	return (
		<div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center'>
			<div className='bg-white p-8 rounded shadow-lg'>
				<div className='text-2xl font-sem mb-4'>Contact Form</div>
				<form ref={form} onSubmit={sendEmail}>
					Name:
					<input
						type='text'
						name='name'
						className='border border-gray-400 rounded px-2 py-1 mb-4 block'
						value={formData.name}
						onChange={handleChange}
						required
					></input>
					Email:
					<input
						type='text'
						name='email'
						className='border border-gray-400 rounded px-2 py-1 mb-4 block'
						value={formData.email}
						onChange={handleChange}
						required
					></input>
					Message:
					<textarea
						type='text'
						name='message'
						value={formData.message}
						onChange={handleChange}
						className='border border-gray-400 rounded px-2 py-1 mb-4 block'
						required
					></textarea>
					<button className='bg-black text-white px-4 py-2 rounded'>Submit</button>
				</form>
				<button onClick={onClose} className='mt-4 bg-black text-white px-4 py-2 rounded'>
					Close
				</button>
			</div>
		</div>
	);
}

export default Modal;
