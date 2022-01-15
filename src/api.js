const API_URL = 'https://pokeapi.co/api/v2/';

// make an API call to 'PokeAPI'
const apiCall = async ( endpoint ) => {
	return fetch( API_URL + endpoint )
		.then( ( res ) => res.json() );
};

// fetch all pokemons
export const fetchPokemons = async ( limit = 151, offset = 0 ) => {
	return apiCall( `pokemon?limit=${ limit }&offset=${ offset }` );
};

// fetch specific pokemon data
export const fetchPokemonData = async ( pokemonId ) => {
	return apiCall( `pokemon/${ pokemonId }` );
};

// fetch pokemon evolutions
export const fetchPokemonEvolutionChain = async ( pokemonId ) => {
	return apiCall( `pokemon-species/${ pokemonId }` ).then( ( data ) => {
		const evolutionChainId = data.evolution_chain.url.match( /\/(\d+)\// )[ 1 ];

		return apiCall( `evolution-chain/${ evolutionChainId }` );
	} );
};
