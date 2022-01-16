const BASE_URL = 'https://pokeapi.co/api/v2/';

// Make a GET request to 'PokeAPI'.
const get = async ( endpoint ) => {
	return fetch( BASE_URL + endpoint ).then( ( res ) => res.json() );
};

// Fetch all pokemons.
export const fetchPokemons = async ( limit = 151, offset = 0 ) => {
	return get( `pokemon?limit=${ limit }&offset=${ offset }` );
};

// Fetch specific pokemon data.
export const fetchPokemonData = async ( pokemonId ) => {
	return get( `pokemon/${ pokemonId }` );
};

// Fetch pokemon evolutions.
export const fetchPokemonEvolutionChain = async ( pokemonId ) => {
	return get( `pokemon-species/${ pokemonId }` ).then( ( data ) => {
		const evolutionChainId = data.evolution_chain.url.match( /\/(\d+)\// )[ 1 ];

		return get( `evolution-chain/${ evolutionChainId }` );
	} );
};
