import "../Styles/Home.css";
import AboutCard from "./components/AboutCard";
import Landing from "./components/Landing";
import benefits from "../data/benefits";

function Home() {
	return (
		<div className="Home">
			<Landing />
			<AboutCard title={"Why BlockPe?"} data={benefits} small={"false"} />
		</div>
	);
}

export default Home;
