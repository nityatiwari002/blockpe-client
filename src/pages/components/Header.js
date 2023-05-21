import "../../Styles/components/Header.css";
function Header() {
	return (
		<>
			<div className="header">
				<div className="header-title">BlockPe</div>
				<div className="header-right">
					<a href="logout" className="log-out-link header-logout">
						Log Out
					</a>
				</div>
			</div>
		</>
	);
}

export default Header;
