import React from 'react';
import { Card } from '../Card';
import './PokedexView.css';

function PokedexView({ pokemons })
{
    return (
        <div className="pokedex-view">
            {
				pokemons.map( p => {
					return (
						<Card pokemon={ p } key={ p.id } />
					);
				})
			}
        </div>
    )
}

export default PokedexView;