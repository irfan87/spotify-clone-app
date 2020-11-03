import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getTokenFromUrl } from "./spotify";

// is a Spotify constructor - which is a class from the Spotify itself
const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();

		// apply this to hide the access token from the url
		window.location.hash = "";

		const _token = hash.access_token;

		if (_token) {
			console.log("my token is", _token);
			setToken(_token);

			// tell the Spotify class that we have the access token and want Spotify grant it
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => console.log("User:", user));
		}
	}, []);

	return (
		<div className="app">
			{/* Spotify logo */}
			{/* Login with Spotify button */}
			{token ? <h1>I am logged in!</h1> : <Login />}
		</div>
	);
}

export default App;
