import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Overlay.css';

export default class Overlay extends Component
{
    componentWillUnmount()
    {
        document.body.classList.remove( 'has-overlay' );
    }

    render()
    {
        document.body.classList.add( 'has-overlay' );

        return ReactDOM.createPortal(
            <div 
                onClick={ this.props.onClick }
                className={ `overlay ${ this.props.hidden ? 'hidden' : '' }` }
            ></div>, document.body
        )
    }
}
