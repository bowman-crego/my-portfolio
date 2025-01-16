import React from "react";

function Modal({ show, onClose }) {
	if (!show) {
		return null;
	}

	return (
		<div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center'>
			<div className='bg-white p-8 rounded shadow-lg'>
				<h2 className='text-2xl mb-4'>Contact Form</h2>
				<form>
					Name: <input type='text' className='border border-gray-400 rounded px-2 py-1 mb-4 block' />
					Email: <input type='email' className='border border-gray-400 rounded px-2 py-1 mb-4 block' />
					Message: <textarea className='border border-gray-400 rounded px-2 py-1 mb-4 block'></textarea>
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
