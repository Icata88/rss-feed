import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import News from './News';


class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isHomeClicked: true,
			isNewsClicked: false,
			onScrollBottom: false
		}

		this.onClick = this.onClick.bind(this);
		this.onWheel = this.onWheel.bind(this);
	}

	onClick(e) {
		let clickedTab = e.target.getAttribute('data-tab'); 
		if (clickedTab === 'Home') {
			setTimeout(() => { this.setState({isHomeClicked: true, isNewsClicked: false, onScrollBottom: false}); }, 200);
			
		} else {
			setTimeout(() => { this.setState({isNewsClicked: true, isHomeClicked: false}); }, 200);			
		}
	}

	onWheel(e) {
		if (e.nativeEvent.wheelDelta < 0) {
			setTimeout(() => { this.setState({onScrollBottom: true, isHomeClicked: false}); }, 200);	
		}
	}	

	render() {

		let homeClicked = this.state.isHomeClicked ? 'active' : '';
		let newsClicked = (this.state.isNewsClicked || this.state.onScrollBottom) ? 'active' : '';

		return (			
			<div onWheel={this.onWheel} className='main row'>
				<div className='menu col-xs-12'>
					<ul className='row center-xs'>
						<li data-tab='Home' onClick={this.onClick} className={`nav col-md-6 col-sm-6 col-xs-12 ${homeClicked}`}>Home</li>
						<li data-tab='News' onClick={this.onClick} className={`nav col-md-6 col-sm-6 col-xs-12 ${newsClicked}`}>News</li>
			        </ul>
		        </div>	
				<div className='content col-xs-12'>   
					{(this.state.isNewsClicked || this.state.onScrollBottom) ? <News news={this.props.news} /> : <Home />}
	            </div>
            </div>
		); 
	}
}

function mapStateToProps(state) {
	return {
		news: state.items
	};
}

export default connect(mapStateToProps)(Main);