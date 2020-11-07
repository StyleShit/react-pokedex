import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card } from '../Card';
import { Details } from '../Details';
import './DetailsView.css';

class DetailsView extends Component
{
    render()
    {
        return ReactDOM.createPortal(
            <div className="details-view-container">

                {/* TODO: Go back button */}

                <Card pokemon={ this.props.pokemon } />
                <Details pokemon={ this.props.pokemon } />

            </div>, document.body
        )
    }
}

export default DetailsView;