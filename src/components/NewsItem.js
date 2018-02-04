import React, { Component } from 'react';


class NewsItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			descriptionExpanded: false
		}

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState((state) => ({descriptionExpanded: !state.descriptionExpanded}));
	}


	render() {

		let style = {};
		let description = this.props.content ? this.props.content : "Sorry, currently we don't have description for this news.";
		if (!this.props.content) {
			style.color = 'red';
		}		
		let transition = this.state.descriptionExpanded ? 'fadeIn' : 'fadeOut';

		return (
			<div className='news-items news-items__item col-xs-12 col-md-6 col-md-offset-3 start-md center-xs'>
				<h3 onClick={this.onClick} className='news-items news-items__title'>{this.props.title}</h3>
				<p className='news-items news-items__date'>{this.props.pubDate}</p>
				<p className={`news-items news-items__description ${transition}`} style={style}>{description}</p>
			</div>				
		);
	}
}

export default NewsItem;