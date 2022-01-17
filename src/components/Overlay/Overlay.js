import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Overlay.css';

export default function Overlay( props ) {
	useFadeInFadeOut();

	return ReactDOM.createPortal(
		<div
			onClick={ props.onClick }
			className={ `overlay ${ props.hidden ? 'hidden' : '' }` }
		/>,
		document.body,
	);
}

const useFadeInFadeOut = () => {
	const className = 'has-overlay';

	useEffect( () => {
		document.body.classList.add( className );

		return () => {
			document.body.classList.remove( className );
		};
	}, [] );
};
