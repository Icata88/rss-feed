import Parser from 'rss-parser';

const parser = new Parser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const URL = 'http://rss.cnn.com/rss/edition.rss';

export default () => {
	return (dispatch) => {
		parser.parseURL(`${CORS_PROXY}${URL}`, function(err, feed) {
			dispatch({type: 'GOT_FEED', feed});
		});
	}	
}