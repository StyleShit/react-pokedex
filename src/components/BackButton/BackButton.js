import React from 'react';
import './BackButton.css';

function BackButton({ onClick })
{
    return (
        <div className="back-button" onClick={ onClick }></div>
    )
}

export default BackButton;