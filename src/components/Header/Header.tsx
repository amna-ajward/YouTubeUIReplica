import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import "./Header.scss";

function Header() {
	const [showSearch, setShowSearch] = useState(false);

	useEffect(() => {}, [showSearch]);

	return (
		<header>
			<div className={`header-search ${!showSearch && "hide"}`}>
				<div>
					<button
						className="menu-btn"
						title="Back"
						onClick={() => setShowSearch(false)}
					>
						<img src="assets/arrow-left.svg" alt="Menu" />
					</button>
				</div>
				<SearchBox isMobile={true} />
			</div>

			<div className="header-main">
				<div>
					<button className="menu-btn" title="Collapse Menu">
						<img src="assets/collapse-menu.svg" alt="Menu" />
					</button>
					<img
						src="/assets/youtube-logo.png"
						width="110px"
						alt="YouTube"
						title="YouTube Home"
					/>
				</div>

				<div>
					<SearchBox>
						<button
							title="Search"
							className="rounded-btn show-search-btn"
							onClick={() => setShowSearch(true)}
						>
							<img src="/assets/search-icon.svg" alt="show search" />
						</button>
					</SearchBox>
				</div>

				<div className="nav-links">
					<button title="Create">
						<img src="/assets/video-add.svg" alt="create" />
					</button>
					<button title="Notifications">
						<img src="/assets/notification.svg" alt="notifications" />
					</button>
					<button className="profile-btn" id="profile">
						<img src="/assets/avatar.png" alt="profile" />
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
