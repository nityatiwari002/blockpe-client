import React from "react";
import AboutCard from "./components/AboutCard";
import about from '../data/about';

function About() {
	return (
		<div className="Home">
			<AboutCard title={"About BlockPe"} data={about}/>
		</div>
	);
}

export default About;
