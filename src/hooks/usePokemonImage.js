import { useMemo } from 'react';
import { getImageURL } from '../utils';

const usePokemonImage = ( pokemonId ) => {
	return useMemo( () => getImageURL( pokemonId ), [ pokemonId ] );
};

export default usePokemonImage;
