import React from 'react';
import CustomNavLink from './CustomNavLink';
import generations from '../../data/generations';
import './Navigation.css';

function Navigation() {
	return (
		<div className="navigation-container">
			<h3 className="navigation-title">Select Generation:</h3>

			<div className="links-container">
				{
					generations.map( ( { id, link, text } ) => (
						<CustomNavLink exact key={ id } to={ link }>
							{ text }
						</CustomNavLink>
					) )
				}
			</div>
		</div>
	);
}

export default Navigation;
