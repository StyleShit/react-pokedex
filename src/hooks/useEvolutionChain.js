import { useEffect, useState } from 'react';
import { useNormalizeEvolutionChain } from '.';
import { fetchPokemonEvolutionChain } from '../api';

// Hook to get an evolution chain by Pokemon ID.
const useEvolutionChain = ( pokemonId ) => {
	const [ currentEvolution, setCurrentEvolution ] = useState( [] );
	const [ isLoading, setIsLoading ] = useState( false );
	const { evolutionChain } = useNormalizeEvolutionChain( currentEvolution );

	useEffect( () => {
		if ( pokemonId ) {
			setIsLoading( true );

			fetchPokemonEvolutionChain( pokemonId ).then( ( evolution ) => {
				setCurrentEvolution( evolution );
				setIsLoading( false );
			} );
		}
	}, [ pokemonId ] );

	return {
		currentEvolution,
		evolutionChain,
		isLoading,
	};
};

export default useEvolutionChain;
