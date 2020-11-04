import React from "react";
import { useStateValue } from "../../context/StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Header from "../Header/Header";

import "./BodySpotify.css";
import SongRow from "../SongRow/SongRow";

const BodySpotify = ({ spotify }) => {
	const [{ discover_weekly }, dispatch] = useStateValue();

	// this will play the song from the user playlist directly
	const playPlaylist = () => {
		spotify
			.play({
				context_uri: "spotify:playlist:37i9dQZEVXcLgQsjC6L1Pk",
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((response) => {
					dispatch({
						type: "SET_ITEM",
						item: response.item,
					});

					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((response) => {
					dispatch({
						type: "SET_ITEM",
						item: response.item,
					});

					dispatch({
						type: "SET_PLAYING",
						playing: true,
					});
				});
			});
	};

	return (
		<div className="bodySpotify">
			<Header spotify={spotify} />
			<div className="bodySpotify__info">
				<img src={discover_weekly?.images[0].url} alt="" />
				<div className="bodySpotify__infoText">
					<strong>PLAYLISTS</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className="bodySpotify__songs">
				<div className="bodySpotify__icons">
					<PlayCircleFilledIcon
						className="bodySpotify__shuffle"
						onClick={playPlaylist}
					/>
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>
				{/* a list of songs */}
				{discover_weekly?.tracks.items.map((item) => {
					return <SongRow playSong={playSong} track={item.track} />;
				})}
			</div>
		</div>
	);
};

export default BodySpotify;
