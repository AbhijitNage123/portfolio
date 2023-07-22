// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
	return (
		<section id="projects" className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-10 mx-auto text-left lg:px-40">
				<div className="flex flex-col w-full text-center mb-20">
					<CodeIcon className="mx-auto inline-block w-10 mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						Latest projects
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						I am excited to present some of my latest projects that I have had the privilege to work on.
						Each project represents a unique challenge and an opportunity for creative problem-solving. 
					</p>
				</div>
				<div className="flex-1 flex-wrap -m-4">
					{projects.map((project) => (
						<a
							key={0}
							href={project.link}
							className="sm:w-1/2 w-100 p-4">
							<div className="flex relative">
								<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
									{/* <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
										{project.subtitle}
									</h2> */}
									<h1 className="title-font text-lg font-medium text-white mb-3">
										Project : {project.title}
									</h1>
									<p className="leading-relaxed mb-3">Description : {project.description}</p>
									<p className="leading-relaxed mb-3">Responsibility : {project.responsibility}</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}