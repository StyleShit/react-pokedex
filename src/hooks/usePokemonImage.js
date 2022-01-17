import { useMemo } from 'react';
import { getImageURL } from '../utils';

// Hook to get Pokemon image by pokemon ID.
const usePokemonImage = ( pokemonId ) => {
	return useMemo( () => getImageURL( pokemonId ), [ pokemonId ] );
};

export default usePokemonImage;
