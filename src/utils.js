// Recursively iterate over an evolution chain and normalize into an array.
export const normalizeEvolutionChain = ( evolution ) => {
	if ( evolution.length === 0 || evolution.evolves_to.length === 0 ) {
		return [];
	}

	const triggersDisplayName = {
		'level-up': 'Lvl',
		trade: 'Trade',
		'use-item': 'Use',
	};

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

// Extract pokemon id from URL.
export const extractId = ( url ) => {
	return url.match( /\/(\d+)\// )[ 1 ];
};

// Get pokemon image by id.
export const getImageURL = ( pokemonId ) => {
	const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

	// Has only PNG.
	if ( parseInt( pokemonId ) >= 650 ) {
		return `${ baseURL }/official-artwork/${ pokemonId }.png`;
	}

	// Has SVG.
	return `${ baseURL }/dream-world/${ pokemonId }.svg`;
};
