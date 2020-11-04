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
		case "SET_DISCOVER_WEEKLY":
			return { ...state, discover_weekly: action.discover_weekly };
		case "SET_ITEM":
			return { ...state, item: action.item };
		case "SET_PLAYING":
			return { ...state, playing: action.playing };
		default:
			return state;
	}
};

export default reducer;
