import { memo } from 'react';
import './BackButton.css';

function BackButton( { onClick } ) {
	return <div className="back-button" onClick={ onClick } />;
}

export default memo( BackButton );
