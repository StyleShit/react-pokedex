import ReactDOM from 'react-dom';
import { useCallback, useState } from 'react';
import { usePokemons } from '../../context/PokemonsProvider';
import { BackButton } from '../BackButton';
import { Card } from '../Card';
import { Details } from '../Details';
import { Overlay } from '../Overlay';
import './DetailsView.css';

export default function DetailsView() {
	const { currentPokemon, setCurrentPokemonId } = usePokemons();
	const [ isHidden, seIsHidden ] = useState( false );

	const closeModal = useCallback( () => {
		seIsHidden( true );
	}, [] );

	const handleAnimationEnd = useCallback( ( { animationName } ) => {
		if ( animationName !== 'pull-down-center' ) {
			return;
		}

		seIsHidden( false );
		setCurrentPokemonId( -1 );
	} );

	if ( ! currentPokemon ) {
		return null;
	}

	return ReactDOM.createPortal(
		<>
			<Overlay hidden={ isHidden } onClick={ closeModal } />

			<div className={ `details-view-container ${ isHidden && 'hidden' }` } onAnimationEnd={ handleAnimationEnd }>
				<BackButton onClick={ closeModal } />
				<Card pokemon={ currentPokemon }/>
				<Details pokemon={ currentPokemon } />
			</div>
		</>, document.body,
	);
}
