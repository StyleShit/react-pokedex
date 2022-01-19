/**
 * Recursively iterate over an evolution chain and normalize into an array.
 *
 * @param {Object} evolution - Evolution object from API.
 *
 * @returns {array}
 */
export const normalizeEvolutionChain = ( evolution ) => {
	if ( ! evolution.evolves_to.length ) {
		return [];
	}

	const triggersDisplayName = {
		'level-up': 'Lvl',
		trade: 'Trade',
		'use-item': 'Use',
	};

	// Extract pokemon ID from 'species' URL (https://pokeapi.co/api/v2/pokemon-species/{id}/).
	const extractId = ( url ) => url.match( /\/(\d+)\// )[ 1 ];

	const nextEvolution = evolution.evolves_to[ 0 ],
		details = nextEvolution.evolution_details[ 0 ],
		currentId = extractId( evolution.species.url ),
		nextId = extractId( nextEvolution.species.url );

	const normalized = {
		currentId,
		nextId,
		currentName: evolution.species.name,
		nextName: nextEvolution.species.name,
		currentImage: getImageURL( currentId ),
		nextImage: getImageURL( nextId ),
		trigger: triggersDisplayName[ details.trigger.name ],
		triggerValue: details.min_level || details.min_happiness || details.item?.name.replace( '-', ' ' ) || '',
	};

	return [
		normalized,
		...normalizeEvolutionChain( nextEvolution ),
	];
};

/**
 * Get pokemon image by id.
 *
 * @param {string} pokemonId
 *
 * @returns {string}
 */
export const getImageURL = ( pokemonId ) => {
	const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

	// Has only PNG.
	if ( parseInt( pokemonId ) >= 650 ) {
		return `${ baseURL }/official-artwork/${ pokemonId }.png`;
	}

	// Has SVG.
	return `${ baseURL }/dream-world/${ pokemonId }.svg`;
};
