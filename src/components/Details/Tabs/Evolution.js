import { Loader } from '../../Loader';
import { useEvolutionChain } from '../../../hooks';
import { EvolutionItem } from '../../EvolutionItem';

function Evolution( { pokemon, onPokemonChange } ) {
	const { isLoading, evolutionChain } = useEvolutionChain( pokemon.id );

	return (
		<div className="tab tab-evolution">

			<h3>Evolution Chain</h3>

			{ isLoading &&
                <Loader />
			}

			{ ! isLoading && ! evolutionChain.length &&
                <div>
                    This pokemon doesn't evolove
                </div>
			}

			{ ! isLoading &&
				evolutionChain.map( ( evolution ) => (
					<EvolutionItem
						key={ `${ evolution.currentId }-${ evolution.nextId }` }
						onPokemonChange={ onPokemonChange }
						{ ...evolution }
					/>
				) )
			}

		</div>
	);
}

export default Evolution;
