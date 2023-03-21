import "./Header.scss";
import SearchBox from "./SearchBox";

function Header() {
	return (
		<header>
			<div className="guide">
				<button className="btn-menu">
					<img src="/assets/icon.svg" alt="Menu collapse" />
				</button>
				<a href="/">
					<img
						src="/assets/youtube-logo.png"
						alt="YouTube logo"
						width="110px"
					/>
				</a>
			</div>
			<SearchBox />
			<div className="nav-icons">
				<button className="btn-create" title="create">
					<img src="/assets/video-add.svg" alt="create video" />
				</button>
				<button className="btn-notifications" title="notifications">
					<img src="/assets/notification.svg" alt="notification" />
				</button>
				<button className="btn-profile" title="Amna Ajward">
					<img src="/assets/avatar.png" alt="profile" />
				</button>
			</div>
		</header>
	);
}

export default Header;
