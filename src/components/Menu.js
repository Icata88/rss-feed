import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


let Menu = () => {
	return (
		<div className='menu row'>
			<div className='col-xs-12'>
				<div className='row center-xs'>
			        <NavLink className='nav col-md-6 col-sm-6 col-xs-12' to='/home'>Home</NavLink>
			        <NavLink className='nav col-md-6 col-sm-6 col-xs-12' to='/news'>News</NavLink>
		        </div>
	        </div>
        </div>
	);	
}

export default Menu;