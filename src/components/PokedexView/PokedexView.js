import { useEffect, useState, React } from 'react';
import { fetchPokemonData, fetchPokemons } from '../../api';
import { Card } from '../Card';
import { DetailsView } from '../DetailsView';
import { Navigation } from '../Navigation';
import { Loader } from '../Loader';
import './PokedexView.css';

function PokedexView({ generation })
{
	const [ pokemons, setPokemons ] = useState( [] );
	const [ selectedPokemon, setSelectedPokemon ] = useState( -1 );
	const [ isLoading, setIsLoading ] = useState( false );

	// load all pokemons on mount & generation change
	useEffect( () => {

		fillPokemonsArray();

	// eslint-disable-next-line
	}, [ generation ] );


	// fetch all pokemons and push to array
	const fillPokemonsArray = () => {

		// set loading state and reset pokemons array
		setIsLoading( true );
		setPokemons( [] );

		if( generation.limit == null || generation.offset == null )
		{
			return;
		}

		// fetch first original 151 pokemons
		fetchPokemons( generation.limit, generation.offset ).then( async ({ results }) => {
	
			let newPokemons = []
			
			// iterate over each pokemon an add to array
			await Promise.all( results.map( async ( pokemon, i ) => {

				await fetchPokemonData( pokemon.name ).then( async ( json ) => {

					newPokemons[i] = json;

				});
				
			}));
			
			setPokemons( newPokemons );
			setIsLoading( false );
	
		});
		
	}


	if( isLoading )
	{
		return <Loader />;
	}


    return (
		<>
			<Navigation />
			
			<div className="pokedex-view">
				{
					pokemons.map( ( p, i ) => {
						return (
							<Card pokemon={ p } key={ p.id } onClick={ () => setSelectedPokemon( i ) } />
						);
					})
				}
			</div>

			{ selectedPokemon !== -1 &&
				<DetailsView pokemon={ pokemons[selectedPokemon] } setSelectedPokemon={ setSelectedPokemon } />
			}
		</>
    )
}

export default PokedexView;