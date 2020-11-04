import React from "react";
import Header from "../Header/Header";

import "./BodySpotify.css";

const BodySpotify = ({ spotify }) => {
	return (
		<div className="bodySpotify">
			<Header spotify={spotify} />
		</div>
	);
};

export default BodySpotify;
