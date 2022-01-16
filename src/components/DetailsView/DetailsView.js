import { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePokemons } from '../../context/PokemonsProvider';
import BackButton from '../BackButton/BackButton';
import { Card } from '../Card';
import { Details } from '../Details';
import { Overlay } from '../Overlay';
import './DetailsView.css';

export default function DetailsView() {
	const detailsViewRef = useRef( null );
	const { setCurrentPokemonId, currentPokemon } = usePokemons();
	const [ hasOverlay, setHasOverlay ] = useState( true );

	if ( ! currentPokemon ) {
		return null;
	}

	// Handle modal close.
	const closeModal = () => {
		setHasOverlay( false );
		detailsViewRef.current.classList.add( 'hidden' );

		// Wait for transition to finish.
		setTimeout( () => {
			setHasOverlay( true );
			setCurrentPokemonId( -1 );
		}, 500 );
	};

	return ReactDOM.createPortal(
		<>
			<Overlay hidden={ ! hasOverlay } onClick={ closeModal } />

			<div className={ `details-view-container shown` } ref={ detailsViewRef }>
				<BackButton onClick={ closeModal } />
				<Card pokemon={ currentPokemon }/>
				<Details pokemon={ currentPokemon } />
			</div>
		</>, document.body,
	);
}
