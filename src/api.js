const API_URL = 'https://pokeapi.co/api/v2/';


// make an API call to 'PokeAPI'
const apiCall = async ( endpoint ) => {

    return fetch( API_URL + endpoint )
        .then( res => res.json() );

}


// fetch all pokemons
export const fetchPokemons = async ( count = 151 ) => {

    return apiCall( `pokemon?limit=${ count }` );

}


// fetch specific pokemon data
export const fetchPokemonData = async ( id ) => {

    return apiCall( `pokemon/${ id }` );

}