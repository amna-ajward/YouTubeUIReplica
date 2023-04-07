import { ReactNode, Ref } from "react";
import "./SearchBox.scss";

interface Props {
	children?: ReactNode;
	isMobile?: boolean;
}

function SearchBox({ children, isMobile = false }: Props) {
	return (
		<div className={`search-box ${isMobile && "shrink-search"}`}>
			<div className="search-bar">
				<img src="assets/search-icon.svg" alt="" className="search-icon " />
				<form action="">
					<input type="text" placeholder="Search" className="search-input" />
				</form>
			</div>
			<button className="search-btn">
				<img src="assets/search-icon.svg" alt="" />
			</button>
			{children}
			<button className="rounded-btn voice-search" title="Search by voice">
				<img src="assets/microphone.png" alt="voice search" />
			</button>
		</div>
	);
}

export default SearchBox;
