import { useEffect } from 'react';
import { Card } from '../Card';
import { Loader } from '../Loader';
import { usePokemons } from '../../context/PokemonsProvider';
import { useGeneration } from '../../hooks';
import './PokedexView.css';

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
		<div className="pokedex-view">
			{
				pokemons.map( ( pokemon ) => {
					return (
						<Card pokemon={ pokemon } key={ pokemon.id } onClick={ () => setCurrentPokemonId( pokemon.id ) } />
					);
				} )
			}
		</div>
	);
}

export default PokedexView;
