import React from 'react';

function About({ pokemon })
{
    // join type names
    const types = pokemon.types.map( ( t ) => {
        return t.type.name;
    }).join( ', ' );


    // join ability names
    const abilities = pokemon.abilities.map( ( t ) => {
        return t.ability.name.replace( '-', ' ' );
    }).join( ', ' );


    // calculate height in cm
    const height = pokemon.height * 10;

    // calculate weight in kg
    const weight = pokemon.weight / 10;

    return (
        <div className="tab tab-about">
            
            <table>

                <tbody>
                    <tr>
                        <td>Species</td>
                        <td>{ types }</td>
                    </tr>
                    
                    <tr>
                        <td>Height</td>
                        <td>{ height }cm</td>
                    </tr>

                    <tr>
                        <td>Weight</td>
                        <td>{ weight }kg</td>
                    </tr>

                    <tr>
                        <td>Abilities</td>
                        <td>{ abilities }</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default About;