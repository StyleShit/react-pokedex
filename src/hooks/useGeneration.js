import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchPokemonData, fetchPokemons } from '../api';
import generations from '../data/generations';

/**
 * Hook to get Pokemons generation data by ID.
 *
 * @param {number} generationId - Generation ID to get data for.
 *
 * @return {Object}
 */
export default function useGeneration( generationId ) {
	const [ pokemons, setPokemons ] = useState( [] );
	const [ isLoading, setIsLoading ] = useState( false );

	const generation = useMemo( () => {
		return generations.find( ( gen ) => gen.id === generationId );
	}, [ generationId ] );

	// Fetch pokemons data by generation.
	const fetchData = useCallback( () => {
		if ( generation.limit === null || generation.offset === null ) {
			return;
		}

		setIsLoading( true );
		setPokemons( [] );

		// Get all Pokemons for the selected generation.
		fetchPokemons( generation.limit, generation.offset ).then( async ( { results } ) => {
			const data = [];

			// Get data for each specific Pokemon.
			await Promise.all( results.map( async ( { name } ) => {
				const pokemon = await fetchPokemonData( name );

				data[ pokemon.id ] = pokemon;
			} ) );

			setPokemons( data );
			setIsLoading( false );
		} );
	}, [] );

	// Refetch on generation change.
	useEffect( () => {
		if ( generationId ) {
			fetchData();
		}
	}, [ generationId ] );

	return {
		data: pokemons,
		refetch: fetchData,
		isLoading,
	};
}
