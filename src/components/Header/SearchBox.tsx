function SearchBox() {
	return (
		<div className="search-box">
			<div className="search-bar">
				<img
					src="/assets/search-icon.svg"
					alt="Search"
					width="20px"
					// height="20px"
					className="magnifier"
				/>
				<form action="" method="post" className="search-form">
					<input
						type="text"
						name="search_query"
						id="search-input"
						placeholder="Search"
					/>
					<button id="search-button">
						<img src="/assets/search-icon.svg" alt="Search" width="25px" />
					</button>
				</form>
			</div>
			<button className="search-button-narrow">
				<img src="/assets/search-icon.svg" alt="Search" width="25px" />
			</button>
			<button className="btn-voice-search" title="Search with your voice">
				<img
					src="/assets/microphone.png"
					alt="Search with your voice"
					width="100%"
				/>
			</button>
		</div>
	);
}

export default SearchBox;
