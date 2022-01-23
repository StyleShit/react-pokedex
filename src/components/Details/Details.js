import { memo, useState } from 'react';
import About from './Tabs/About';
import BaseStats from './Tabs/BaseStats';
import Evolution from './Tabs/Evolution';
import { getImageURL } from '../../utils';
import './Details.css';

const TAB_ABOUT = 'about';
const TAB_STATS = 'base-stats';
const TAB_EVOLUTION = 'evolution';
const TAB_DEFAULT = TAB_ABOUT;

const tabs = [
	{
		id: TAB_ABOUT,
		label: 'About',
	},
	{
		id: TAB_STATS,
		label: 'Base Stats',
	},
	{
		id: TAB_EVOLUTION,
		label: 'Evolution',
	},
];

function Details( { pokemon } ) {
	const [ currentTab, setCurrentTab ] = useState( TAB_DEFAULT );
	const imgURL = getImageURL( pokemon?.id );

	if ( ! pokemon ) {
		return null;
	}

	// Return tab switch class name.
	const getClassName = ( tabName ) => {
		return `tab-switch ${ currentTab === tabName ? 'active' : '' }`;
	};

	// Change pokemon data & go to first tab.
	const onPokemonChange = () => {
		setCurrentTab( TAB_DEFAULT );
	};

	return (
		<div className="details">

			<img src={ imgURL } className="pokemon-image" alt={ pokemon.name } />

			<div className="tabs-switch-container">
				{
					tabs.map( ( { id, label } ) => (
						<button key={ id } className={ getClassName( id ) } onClick={ () => setCurrentTab( id ) }>
							{ label }
						</button>
					) )
				}
			</div>

			{
				( () => {
					switch ( currentTab ) {
						case TAB_ABOUT:
							return <About pokemon={ pokemon } />;

						case TAB_STATS:
							return <BaseStats stats={ pokemon.stats } />;

						case TAB_EVOLUTION:
							return <Evolution pokemon={ pokemon } onPokemonChange={ onPokemonChange } />;

						default:
							return null;
					}
				} )()
			}

		</div>
	);
}

export default memo( Details );
