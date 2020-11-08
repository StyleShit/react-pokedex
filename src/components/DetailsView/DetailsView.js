import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import BackButton from '../BackButton/BackButton';
import { Card } from '../Card';
import { Details } from '../Details';
import { Overlay } from '../Overlay';
import './DetailsView.css';

class DetailsView extends Component
{
    constructor( props )
    {
        super( props );
        this.detailsViewRef = createRef( null );

        this.state = {
            hideOverlay: false
        };

        this.handleBackClick = this.handleBackClick.bind( this );
    }

    // handle back button clicking
    handleBackClick()
    {
        this.setState({
            hideOverlay: true
        });

        this.detailsViewRef.current.classList.add( 'hidden' );

        setTimeout( () => {
            this.props.setSelectedPokemon( -1 );
        }, 500 );
    }

    render()
    {
        return ReactDOM.createPortal(
            <>
                <Overlay hidden={ this.state.hideOverlay } onClick={ this.handleBackClick } />
                <div className="details-view-container shown" ref={ this.detailsViewRef }>

                    <BackButton onClick={ this.handleBackClick } />
                    <Card pokemon={ this.props.pokemon } />
                    <Details pokemon={ this.props.pokemon } />

                </div>
            </>, document.body
        )
    }
}

export default DetailsView;