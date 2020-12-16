import React from 'react';
import { Card } from '../Card';
import { Navigation } from '../Navigation';
import './PokedexView.css';

function PokedexView({ pokemons, setSelectedPokemon })
{
    return (
		<>
			<Navigation />
			<div className="pokedex-view">
				{
					pokemons.map( p => {
						return (
							<Card pokemon={ p } key={ p.id } setSelectedPokemon={ setSelectedPokemon } />
						);
					})
				}
			</div>
		</>
    )
}

export default PokedexView;