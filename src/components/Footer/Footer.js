import React from "react";

import { Grid, Slider } from "@material-ui/core";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import SkipPerviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/en/b/ba/Incubus_make_yourself.jpg"
					alt=""
					className="footer__albumLogo"
				/>
				<div className="footer__songInfo">
					<h4>Incubus</h4>
					<p>Drive</p>
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPerviousIcon className="footer__icon" />
				<PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
