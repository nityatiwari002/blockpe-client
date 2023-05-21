import React from "react";

function ProfileHeader(props) {
	return (
		<>
			<div className="profile-header">
				<div className="profile-pic">
					<img
						src={props.user.pfp}
						alt={props.user.name}
						className="pfp profile-pfp"
					/>
				</div>
				<div className="profile-name">{props.user.name}</div>
				{props.buttonState ? (
					<div className="edit-button">
						<button
							className="edit-button-but"
							onClick={() => {
								props.toggleDisable(true);
							}}
						>
							Edit Profile
						</button>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
}

export default ProfileHeader;
