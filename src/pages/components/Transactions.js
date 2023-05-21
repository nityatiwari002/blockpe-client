import ProfileHeader from "./ProfileHeader";

function Transactions() {
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<div className="window-card">
			<ProfileHeader user={user} />
            Transactions
		</div>
	);
}

export default Transactions;
