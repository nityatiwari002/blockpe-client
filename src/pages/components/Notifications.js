import ProfileHeader from "./ProfileHeader";

function Notifications() {
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<div className="window-card">
			<ProfileHeader user={user} />
            Notifications
		</div>
	);
}

export default Notifications;
