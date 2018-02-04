export default (state=[], action) => {
	switch(action.type) {
		case 'GOT_FEED':
			return action.feed;
		default:
			return state;
	}
}