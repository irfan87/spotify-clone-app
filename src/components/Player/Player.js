import React from "react";

import BodySpotify from "../Body/BodySpotify";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

import "./Player.css";

const Player = ({ spotify }) => {
	return (
		<div className="player">
			<div className="player__body">
				{/* sidebar */}
				<Sidebar />
				{/* body */}
				<BodySpotify spotify={spotify} />
			</div>
			{/* footer */}
			<Footer />
		</div>
	);
};

export default Player;
