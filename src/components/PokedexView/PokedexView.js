import { memo, useEffect } from 'react';
import { Card } from '../Card';
import { DetailsView } from '../DetailsView';
import { Navigation } from '../Navigation';
import { Loader } from '../Loader';
import './PokedexView.css';
import { usePokemons } from '../../context/PokemonsProvider';
import { useGeneration } from '../../hooks';

function PokedexView( { generation } ) {
	const { pokemons, setPokemons, setCurrentPokemonId } = usePokemons();
	const { data, isLoading } = useGeneration( generation );

	useEffect( () => {
		setPokemons( data );
	}, [ data ] );

	if ( isLoading ) {
		return <Loader />;
	}

	return (
		<>
			<Navigation />

			<div className="pokedex-view">
				{
					pokemons.map( ( pokemon ) => {
						return (
							<Card pokemon={ pokemon } key={ pokemon.id } onClick={ () => setCurrentPokemonId( pokemon.id ) } />
						);
					} )
				}
			</div>

			<DetailsView />
		</>
	);
}

export default PokedexView;
