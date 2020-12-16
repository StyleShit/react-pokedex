import React from 'react';
import CustomNavLink from './CustomNavLink';
import generations from '../../generations';
import './Navigation.css';

function Navigation()
{
    return (
        <div className="navigation-container">
            <h3 className="navigation-title">Select Gen:</h3>

            <div className="links-container">
                {
                    generations.map( ( gen, i ) => (

                        <CustomNavLink exact key={ i } to={ gen.link }>
                            { gen.text }
                        </CustomNavLink>

                    ))
                }
            </div>
        </div>
    )
}

export default Navigation;