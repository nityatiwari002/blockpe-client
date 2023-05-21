import ProfileHeader from "./pages/components/ProfileHeader";

function Settings() {
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<div className="window-card">
			<ProfileHeader user={user} />
            Settings
		</div>
	);
}

export default Settings;
