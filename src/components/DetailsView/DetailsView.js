import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BackButton from '../BackButton/BackButton';
import { Card } from '../Card';
import { Details } from '../Details';
import './DetailsView.css';

class DetailsView extends Component
{
    constructor( props )
    {
        super( props );

        this.handleBackClick = this.handleBackClick.bind( this );
    }

    // handle back button clicking
    handleBackClick()
    {
        this.props.setSelectedPokemon( -1 );
    }

    render()
    {
        return ReactDOM.createPortal(
            <div className="details-view-container">

                <BackButton onClick={ this.handleBackClick } />
                <Card pokemon={ this.props.pokemon } />
                <Details pokemon={ this.props.pokemon } />

            </div>, document.body
        )
    }
}

export default DetailsView;