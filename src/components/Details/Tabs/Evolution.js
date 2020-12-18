import React, { useState, useEffect } from 'react';
import { Loader } from '../../Loader';
import { fetchPokemonEvolutionChain, fetchPokemonData } from '../../../api';

function Evolution({ pokemon, changePokemon })
{
    const [ currentEvolution, setCurrentEvolution ] = useState( [] );
    const [ evolutionChain, setEvolutionChain ] = useState( [] );
    const [ loading, setLoading ] = useState( true );
    

    // map trigger names to display text
    const triggersDisplayName = {

        'level-up': 'Lvl',
        'trade': 'Trade',
        'use-item': 'Use'

    };


    // load evolution on mount
    useEffect( () => {

        setLoading( true );

        fetchPokemonEvolutionChain( pokemon.id ).then( ( data ) => {

            setEvolutionChain( [] );
            setCurrentEvolution( data.chain );
            setLoading( false );

        });

        // eslint-disable-next-line
    }, [ pokemon ]);


    useEffect( () => {

        getNextEvolution();

        // eslint-disable-next-line
    }, [ currentEvolution ])


    // get next pokemon evolution
    const getNextEvolution = () => {

        if( currentEvolution.length === 0 || currentEvolution.evolves_to.length === 0 )
            return null;


        const nextEvolution = currentEvolution.evolves_to[0];
        const details       = nextEvolution.evolution_details[0];
        

        // extract useful data
        const current       = currentEvolution.species.name;
        const next          = nextEvolution.species.name;
        const trigger       = triggersDisplayName[details.trigger.name];
        const triggerValue  = details.min_level || details.min_happiness || details.item?.name.replace( '-', ' ' ) || '';
        const currentId     = extractId( currentEvolution.species.url );
        const nextId        = extractId( nextEvolution.species.url );

        // get images URL
        const currentImage  = getImageURL( currentId );
        const nextImage     = getImageURL( nextId );


        // set current evolution to next evolution
        setCurrentEvolution( prev => ( prev.evolves_to[0] ));

        // push new evolution object
        setEvolutionChain( prev => {

            return [ ...prev, { 
                current,
                next,
                trigger,
                triggerValue,
                currentId,
                nextId,
                currentImage,
                nextImage
            }];
            
        });

    }


    // get pokemon image by id
    const getImageURL = ( id ) => {

        // base URL for images
        const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

        // has svg
        if( parseInt( id ) <= 649 )
        {
            return `${ baseURL }/dream-world/${ id }.svg`;
        }

        // has only png
        else
        {
            return `${ baseURL }/official-artwork/${ id }.png`;
        }
        
    }
    
    
    // fetch pokemon from evolution chain and show its details
    const fetchPokemon = ( name ) => {

        if( !name || pokemon.name === name )
        {
            return;
        }


        // get pokemon data & show it
        setLoading( true );
        fetchPokemonData( name ).then( data => { changePokemon( data ); });

    }


    return (
        <div className="tab tab-evolution">

            <h3>Evolution Chain</h3>

            { loading &&
                <Loader />
            }

            { !loading && evolutionChain.length === 0 &&
                <div>
                    This pokemon doesn't evolove
                </div>
            }

            { !loading &&
                evolutionChain.map(( e, i ) => {
                    return (
                        <div className="evolution-container" key={ i }>

                            <div className="evolve-container evolve-from">
                                <div className="image-container" onClick={ () => { fetchPokemon( e.current ); } }>
                                    <div className="bg-pokeball"></div>
                                    <img alt={ e.current } src={ e.currentImage } />
                                </div>

                                <span>{ e.current }</span>
                            </div>

                            <div className="trigger-container">
                                <div className="arrow"></div>
                                { e.trigger } { e.triggerValue }
                            </div>

                            <div className="evolve-container evolve-to" onClick={ () => { fetchPokemon( e.next ); } }>
                                <div className="image-container">
                                    <div className="bg-pokeball"></div>
                                    <img alt={ e.next } src={ e.nextImage } />
                                </div>

                                <span>{ e.next }</span>
                            </div>
                        </div>
                    );
                })
            }

        </div>
    )
}


// extract pokemon id from url
const extractId = ( url ) => {

    return url.match( /\/(\d+)\// )[1];

}

export default Evolution;