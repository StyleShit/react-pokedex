import React, { useState, useEffect } from 'react';
import { fetchPokemonEvolutionChain } from '../../../api';

function Evolution({ pokemon })
{
    const [ currentEvolution, setCurrentEvolution ] = useState( [] );
    const [ evolutionChain, setEvolutionChain ] = useState( [] );

    // load evolution on mount
    useEffect( () => {

        fetchPokemonEvolutionChain( pokemon.id ).then( ( data ) => {
            setEvolutionChain( [] );
            setCurrentEvolution( data.chain );

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

        // extract useful data
        const current = currentEvolution.species.name;
        const next = currentEvolution.evolves_to[0].species.name;
        const level = currentEvolution.evolves_to[0].evolution_details[0].min_level;
        const currentId = currentEvolution.id || extractId( currentEvolution.species.url );
        const nextId = extractId( currentEvolution.evolves_to[0].species.url );


        // base URL for images
        const imgBaseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

        // get images URL
        const currentImage = imgBaseURL + currentId + '.svg';
        const nextImage = imgBaseURL + nextId + '.svg';

        // set current evolution to next evolution
        setCurrentEvolution( prev => {
            return prev.evolves_to[0]
        });

        // push new evolution object
        setEvolutionChain( prev => {
            return [ ...prev, { 
                current,
                next,
                level,
                currentId,
                nextId,
                currentImage,
                nextImage
            }];
        });

    }


    // extract pokemon id from url
    const extractId = ( url ) => {

        return url.match( /\/(\d+)\// )[1];

    }
    

    return (
        <div className="tab tab-evolution">

            <h3>Evolution Chain</h3>

            { evolutionChain.length === 0 &&
                <div>
                    This pokemon doesn't evolove
                </div>
            }

            {
                evolutionChain.map(( e, i ) => {
                    return (
                        <div className="evolution-container" key={ i }>

                            <div className="evolve-container evolve-from">
                                <div className="image-container">
                                    <div className="bg-pokeball"></div>
                                    <img alt={ e.current } src={ e.currentImage } />
                                </div>

                                <span>{ e.current }</span>
                            </div>

                            <div className="level-container">
                                <div className="arrow"></div>
                                Lvl { e.level }
                            </div>

                            <div className="evolve-container evolve-to">
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

export default Evolution;