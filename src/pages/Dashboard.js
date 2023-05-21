import React, { useState, useEffect } from "react";
import Theme from "./components/Theme";
import LeftCard from "./components/LeftCard";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



function Dashboard() {
	const [user, setUser] = useState(localStorage.getItem("user"));
	const [showPanel, toggler] = useState(false);
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
			<LeftCard visible={showPanel ? "Y" : "N"} user={user}/>
			<Outlet />
		</>
	);
}

export default Dashboard;
