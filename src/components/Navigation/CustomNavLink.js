import React from 'react';
import { NavLink } from 'react-router-dom';

function CustomNavLink( { children, ...props } ) {
	return (
		<NavLink className="navigation-link" activeClassName="active" { ...props }>
			{ children }
		</NavLink>
	);
}

export default CustomNavLink;
