export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// remove the token before deployed
	// token:
	// 	"BQBfxmncV7S6ZtArKZF8gHmDGZzWjuBEI3G37dv36TaG3EgqcU…sPSXwxc5kRNv-d5Jv468vInhN7CFOBQYVGhoKeO9S6e1b2sUQ",
};

const reducer = (state, action) => {
	console.log({ action });

	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.user };
		case "SET_TOKEN":
			return { ...state, token: action.token };
		case "SET_PLAYLISTS":
			return { ...state, playlists: action.playlists };
		default:
			return state;
	}
};

export default reducer;
