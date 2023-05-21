import React from "react";
import AboutCard from "./components/AboutCard";
import contactDetails from "../data/contact";

function Contact() {
	return (
		<div className="Home">
			<AboutCard
				title={"Contact us At"}
				data={contactDetails}
				small={"true"}
			/>
		</div>
	);
}

export default Contact;
