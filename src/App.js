import { useEffect, useState } from 'react';
import { fetchPokemonData, fetchPokemons } from './api';
import { Loader } from './components/Loader';
import { PokedexView } from './components/PokedexView';
import DetailsView from './components/DetailsView/DetailsView';
import './App.css';

function App()
{
	const [ pokemons, setPokemons ] = useState( [] );
	const [ selectedPokemon, setSelectedPokemon ] = useState( -1 );
	const [ isLoading, setIsLoading ] = useState( false );


	// load all pokemons on mount
	useEffect( () => {

		fillPokemonsArray();

	}, [] );


	// fetch all pokemons and push to array
	const fillPokemonsArray = () => {

		// set loading state and reset pokemons array
		setIsLoading( true );
		setPokemons( [] );

		// fetch first original 151 pokemons
		fetchPokemons( 151 ).then( async ({ results }) => {
	
			// iterate over each pokemon an add to array
			await Promise.all( results.map( async ( pokemon, i ) => {

				await fetchPokemonData( pokemon.name ).then( async ( json ) => {

					await setPokemons( prev => {
						
						let tmp = prev.slice();
						tmp[i] = json;
						return tmp;

					});

				});

			}));

			setIsLoading( false );
	
		});
		
	}


	// render
	return (
		<div className="pokedex-app">

			<h1>
				Pok&#xE9;dex
			</h1>

			{ selectedPokemon !== -1 &&
				<DetailsView pokemon={ pokemons[selectedPokemon] } setSelectedPokemon={ setSelectedPokemon } />
			}

			{ isLoading 
				? <Loader />
				: <PokedexView pokemons={ pokemons } setSelectedPokemon={ setSelectedPokemon } />
			}

		</div>
	);
}

export default App;