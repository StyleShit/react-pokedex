import React from 'react';
import CustomNavLink from './CustomNavLink';
import './Navigation.css';

function Navigation()
{
    return (
        <div className="navigation-container">
            <h3 className="navigation-title">Select Gen:</h3>

            <div className="links-container">
                <CustomNavLink exact to="/gen-i">I</CustomNavLink>
                <CustomNavLink exact to="/gen-ii">II</CustomNavLink>
                <CustomNavLink exact to="/gen-iii">III</CustomNavLink>
                <CustomNavLink exact to="/gen-iv">IV</CustomNavLink>
                <CustomNavLink exact to="/gen-v">V</CustomNavLink>
                <CustomNavLink exact to="/gen-vi">VI</CustomNavLink>
                <CustomNavLink exact to="/gen-vii">VII</CustomNavLink>
                <CustomNavLink exact to="/gen-viii">VIII</CustomNavLink>
            </div>
        </div>
    )
}

export default Navigation;