// src/components/Contact.js

import React from "react";

export default function Contact() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", name, email, message }),
		})
			.then(() => alert("Message sent!"))
			.catch((error) => alert(error));
	}

	return (
		<section id="contact" className="relative">
			<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="flex flex-col w-full text-center mb-20">
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						Get in touch
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-4">
						Please feel free to contact me on
					</p>
					<div className="flex-col w-full px-6 mb-4">
						<div class="flex flex-row justify-center">
							<div class="text-gray-700 text-center bg-blue-400 px-4 py-2 m-2"><a href="https://www.linkedin.com/in/abhijit-nage/" className="text-white leading-relaxed">Linkedin</a></div>
							<div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"><a href="https://github.com/AbhijitNage123" className="text-white leading-relaxed">
								GitHub
							</a></div>
							<div class="text-gray-700 text-center bg-red-400 px-4 py-2 m-2"><a href="nageabhijit@email.com" className="text-white leading-relaxed">
								Email
							</a></div>
						</div>
					</div>
				</div>
			</div>
			
		</section>
	);
}