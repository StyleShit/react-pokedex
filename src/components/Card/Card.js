import React from 'react';
import './Card.css';

function Card({ pokemon: { name, id, sprites, types }, onClick })
{
    // get pokemon image
    const imgURL = sprites.other.dream_world.front_default || sprites.other['official-artwork'].front_default;

    // add css classes according to pokemon type
    const cssClass = types.map( t => 'type-' + t.type.name ).join( ' ' );

    // pad pokemon id with zeros
    const paddedId = '#' + id.toString().padStart( 3, '000' );

    // render
    return (
        <div className="card-container" onClick={ onClick }>
            <div className={ `card ${ cssClass }` }>

                <div className="bg-pokeball"></div>
                <span className="pokemon-id">{ paddedId }</span>

                <div className="card-title">
                    <h2>
                        { name.replace( /-/g, ' ' ) }
                    </h2>

                    <div className="pokemon-types">
                        {
                            types.map(( t, i ) => {
                                return <span className="type" key={ i }>{ t.type.name }</span>
                            })
                        }
                    </div>
                </div>

                <div className="pokemon-image">
                    <img alt={ name } src={ imgURL } />
                </div>

            </div>
        </div>
    )
}

export default Card;