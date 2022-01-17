import React, { useState } from 'react';
import About from './Tabs/About';
import BaseStats from './Tabs/BaseStats';
import Evolution from './Tabs/Evolution';
import './Details.css';
import { usePokemons } from '../../context/PokemonsProvider';
import { usePokemonImage } from '../../hooks';

const TAB_ABOUT = 'about';
const TAB_STATS = 'base-stats';
const TAB_EVOLUTION = 'evolution';
const TAB_DEFAULT = TAB_ABOUT;

function Details( { pokemon } ) {
	const [ currentTab, setCurrentTab ] = useState( TAB_DEFAULT );
	const { setCurrentPokemonId } = usePokemons();
	const imgURL = usePokemonImage( pokemon?.id );

	if ( ! pokemon ) {
		return null;
	}

	// Handle tab switching.
	const switchTab = ( e ) => {
		e.preventDefault();

		setCurrentTab( e.target.dataset.tab );
	};

	// Return tab switch class name.
	const getClassName = ( tabName ) => {
		return `tab-switch ${ currentTab === tabName ? 'active' : '' }`;
	};

	// Change pokemon data & go to first tab.
	const changePokemon = ( pokemonId ) => {
		setCurrentTab( TAB_DEFAULT );
		setCurrentPokemonId( pokemonId );
	};

	return (
		<div className="details">

			<img src={ imgURL } className="pokemon-image" alt={ pokemon.name } />

			<div className="tabs-switch-container">

				<button className={ getClassName( TAB_ABOUT ) } data-tab={ TAB_ABOUT } onClick={ switchTab }>About</button>
				<button className={ getClassName( TAB_STATS ) } data-tab={ TAB_STATS } onClick={ switchTab }>Base Stats</button>
				<button className={ getClassName( TAB_EVOLUTION ) } data-tab={ TAB_EVOLUTION } onClick={ switchTab }>Evolution</button>

			</div>

			{ currentTab === TAB_ABOUT &&
                <About pokemon={ pokemon } />
			}

			{ currentTab === TAB_STATS &&
                <BaseStats stats={ pokemon.stats } />
			}

			{ currentTab === TAB_EVOLUTION &&
                <Evolution pokemon={ pokemon } changePokemon={ changePokemon } />
			}

		</div>
	);
}

export default Details;
