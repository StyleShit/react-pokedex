import { memo } from 'react';
import ReactDOM from 'react-dom';
import './Overlay.css';

function Overlay( { onClick, hidden } ) {
	return ReactDOM.createPortal(
		<div
			onClick={ onClick }
			className={ `overlay ${ hidden && 'hidden' }` }
		/>,
		document.body,
	);
}

export default memo( Overlay );
