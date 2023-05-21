import { useState } from "react";
import "../../Styles/components/Profile.css";

const profileDetails = [
	{ title: "Email", body: "email" },
	{ title: "Phone Number", body: "phone" },

	{ title: "Username", body: "username" },
	{ title: "Password", body: "password" },
	{ title: "Account Type", body: "accountType" },
	{ title: "Account Number", body: "accountNumber" },
	{ title: "Account Balance", body: "WalletBal" },
	{ title: "Currency Type", body: "CurrType" },
];

function Profile(props) {
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(localStorage);
	const [disabled, toggleDisable] = useState(false);
	return (
		<div className="window-card">
			<div className="profile-header">
				<div className="profile-pic">
					<img
						src={user.pfp}
						alt={user.name}
						className="pfp profile-pfp"
					/>
				</div>
				<div className="profile-name">{user.name}</div>
				<div className="edit-button">
					<button
						className="edit-button-but"
						onClick={() => {
							toggleDisable(true);
						}}
					>
						Edit Profile
					</button>
				</div>
			</div>
			<div className="profile-body">
				<div className="profile-info">
					<div className="profile-info-title">
						Profile Information
					</div>
					<div className="profile-info-body">
						{profileDetails.map((detail, index) => (
							<div className="profile-info-body-item" key={index}>
								<div className="profile-info-body-item-title">
									{detail.title}
								</div>
								<input
									className={
										disabled
											? "profile-info-body-item-body enabled"
											: "profile-info-body-item-body"
									}
									type="text"
									value={user[detail.body]}
									onInput={() => {
										console.log("changed");
									}}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="save-profile">
				<button
					className={disabled ? "save-profile-but" : "save-profile-but but-hidden"}
					onClick={() => {
						toggleDisable(false);
					}}
				>
					Save
				</button>
			</div>
		</div>
	);
}

export default Profile;
