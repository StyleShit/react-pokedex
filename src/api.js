const API_URL = 'https://pokeapi.co/api/v2/';


// make an API call to 'PokeAPI'
const apiCall = async ( endpoint ) => {

    return fetch( API_URL + endpoint )
        .then( res => res.json() );

}


// fetch all pokemons
export const fetchPokemons = async ( limit = 151, offset = 0 ) => {

    return apiCall( `pokemon?limit=${ limit }&offset=${ offset }` );

}


// fetch specific pokemon data
export const fetchPokemonData = async ( id ) => {

    return apiCall( `pokemon/${ id }` );

}


// fetch pokemon evolutions
export const fetchPokemonEvolutionChain = async ( id ) => {

    return apiCall( `pokemon-species/${ id }` )
    .then(( data ) => {
        const newId = data.evolution_chain.url.match( /\/(\d+)\// )[1];
        return apiCall( `evolution-chain/${ newId }` );
    });

}