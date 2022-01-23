import { usePokemons } from '../../context/PokemonsProvider';
import './EvolutionItem.css';

export default function EvolutionItem( props ) {
	const { setCurrentPokemonId } = usePokemons();

	const {
		currentId,
		currentName,
		currentImage,
		nextId,
		nextName,
		nextImage,
		trigger,
		triggerValue,
		onPokemonChange,
	} = props;

	const handleClick = ( pokemonId ) => {
		setCurrentPokemonId( pokemonId );
		onPokemonChange();
	};

	return (
		<div className="evolution-container">
			<div className="evolve-container evolve-from">
				<div className="image-container" onClick={ () => handleClick( currentId ) }>
					<div className="bg-pokeball"></div>
					<img alt={ currentName } src={ currentImage } />
				</div>

				<span>{ currentName }</span>
			</div>

			<div className="trigger-container">
				<div className="arrow"></div>
				{ trigger } { triggerValue }
			</div>

			<div className="evolve-container evolve-to" onClick={ () => handleClick( nextId ) }>
				<div className="image-container">
					<div className="bg-pokeball"></div>
					<img alt={ nextName } src={ nextImage } />
				</div>

				<span>{ nextName }</span>
			</div>
		</div>
	);
}
