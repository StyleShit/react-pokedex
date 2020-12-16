import React from 'react';
import CustomNavLink from './CustomNavLink';
import './Navigation.css';

function Navigation()
{
    const generations = [
        
        {
            link: 'gen-i',
            text: 'I',
            offset: 0,
            limit: 151
        },
        
        {
            link: 'gen-ii',
            text: 'II',
            offset: 151,
            limit: 100
        },

        {
            link: 'gen-iii',
            text: 'III',
            offset: 251,
            limit: 135
        },

        {
            link: 'gen-iv',
            text: 'IV',
            offset: 386,
            limit: 107
        },

        {
            link: 'gen-v',
            text: 'V',
            offset: 493,
            limit: 156
        },

        {
            link: 'gen-vi',
            text: 'VI',
            offset: 649,
            limit: 72
        },

        {
            link: 'gen-vii',
            text: 'VII',
            offset: 721,
            limit: 88
        },

        {
            link: 'gen-viii',
            text: 'VIII',
            offset: 809,
            limit: 89
        },

    ];

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