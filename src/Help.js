import ProfileHeader from "./pages/components/ProfileHeader";

function Help() {
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<div className="window-card">
			<ProfileHeader user={user} />
            Help
		</div>
	);
}

export default Help;
