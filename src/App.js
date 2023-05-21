import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/components/Profile";
import { useState } from "react";

function App() {
	const [isLoggedIn, logIn] = useState(true);
	return (
		<>
			<Router>
				<Routes>
					
					<Route path="/" element={<Base />}>
						<Route index element={<Home />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard/" element={<Dashboard />}>
						<Route index  element={<Profile />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
