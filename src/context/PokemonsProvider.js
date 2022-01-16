import { useState, useContext, createContext, useMemo } from 'react';

export const PokemonsContext = createContext();

export default function PokemonsProvider( { children } ) {
	const [ pokemons, setPokemons ] = useState( [] );
	const [ currentPokemonId, setCurrentPokemonId ] = useState( -1 );

	const currentPokemon = useMemo( () => pokemons[ currentPokemonId ], [ pokemons, currentPokemonId ] );

	return (
		<PokemonsContext.Provider value={ { pokemons, setPokemons, currentPokemonId, setCurrentPokemonId, currentPokemon } }>
			{ children }
		</PokemonsContext.Provider>
	);
}

export const usePokemons = () => {
	return useContext( PokemonsContext );
};
