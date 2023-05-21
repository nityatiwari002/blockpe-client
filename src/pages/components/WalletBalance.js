import React from "react";
import ProfileHeader from "./ProfileHeader";

function WalletBalance() {
    const user = JSON.parse(localStorage.getItem("user"));
	return (
		<div className="window-card">
			<ProfileHeader user={user} />
            WalletBalance
		</div>
	);
}

export default WalletBalance;
