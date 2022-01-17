import { Loader } from '../../Loader';
import { useEvolutionChain } from '../../../hooks';

function Evolution( { pokemon, changePokemon } ) {
	const { isLoading, evolutionChain } = useEvolutionChain( pokemon.id );

	return (
		<div className="tab tab-evolution">

			<h3>Evolution Chain</h3>

			{ isLoading &&
                <Loader />
			}

			{ ! isLoading && evolutionChain.length === 0 &&
                <div>
                    This pokemon doesn't evolove
                </div>
			}

			{ ! isLoading &&
				evolutionChain.map( ( { currentId, currentName, currentImage, nextId, nextName, nextImage, trigger, triggerValue }, i ) => {
					return (
						<div className="evolution-container" key={ i }>

							<div className="evolve-container evolve-from">
								<div className="image-container" onClick={ () => changePokemon( currentId ) }>
									<div className="bg-pokeball"></div>
									<img alt={ currentName } src={ currentImage } />
								</div>

								<span>{ currentName }</span>
							</div>

							<div className="trigger-container">
								<div className="arrow"></div>
								{ trigger } { triggerValue }
							</div>

							<div className="evolve-container evolve-to" onClick={ () => changePokemon( nextId ) }>
								<div className="image-container">
									<div className="bg-pokeball"></div>
									<img alt={ nextName } src={ nextImage } />
								</div>

								<span>{ nextName }</span>
							</div>
						</div>
					);
				} )
			}

		</div>
	);
}

export default Evolution;
