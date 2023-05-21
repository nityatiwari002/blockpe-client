import React, { useState, useEffect } from "react";
import Theme from "./components/Theme";
import LeftCard from "./components/LeftCard";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
	const [showPanel, toggler] = useState(false);
	const [smSize, resizer] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener("resize", () => {
			resizer(window.innerWidth);
			smSize < 1000 ? toggler(false) : toggler(true);
		}, false);
	}, [smSize]);
	return (
		<>
			<div
				className="side-panel-but"
				onClick={() => {
					toggler(!showPanel);
				}}
			>
				<div className="side-panel-but-icon">
					<FontAwesomeIcon icon={faBars} className="panel-icon"/>
				</div>
			</div>
			<Header />
			<Theme />
			<LeftCard visible={showPanel ? "Y" : "N"} />
			<Outlet />
		</>
	);
}

export default Dashboard;
