import React from 'react';
import { NavLink } from 'react-router-dom';

function CustomNavLink( props ) {
	return <NavLink className="navigation-link" activeClassName="active" { ...props } />;
}

export default CustomNavLink;
