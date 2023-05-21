import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Base from "./pages/Base";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/components/Profile";
import { useState } from "react";
import WalletBalance from "./pages/components/WalletBalance";
import Transactions from "./pages/components/Transactions";
import Notifications from "./pages/components/Notifications";
import Settings from "./Settings";
import Help from "./Help";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	const [isLoggedIn, logIn] = useState(true);
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Base />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard/" element={<Dashboard />}>
						<Route index element={<Profile />} />
						<Route path="wallet" element={<WalletBalance />} />
						<Route path="history" element={<Transactions />} />
						<Route
							path="notifications"
							element={<Notifications />}
						/>
						<Route path="settings" element={<Settings />} />
						<Route path="help" element={<Help />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
