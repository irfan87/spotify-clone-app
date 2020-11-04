import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { useStateValue } from "./context/StateProvider";
import { getTokenFromUrl } from "./spotify";

// is a Spotify constructor - which is a class from the Spotify itself
const spotify = new SpotifyWebApi();

function App() {
	// get user and set user into the datalayer (StateProvider)
	const [{ user, token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromUrl();

		// apply this to hide the access token from the url
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			// tell the Spotify class that we have the access token and want Spotify grant it
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists: playlists,
				});
			});
		}
	}, []);

	return (
		<div className="app">
			{/* Spotify logo */}
			{/* Login with Spotify button */}
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
