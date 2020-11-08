import React from 'react';
import { RangeView } from '../../RangeView';

function BaseStats({ stats })
{
    // calculate total stats value
    const total = stats.reduce( ( sum, current ) => {
        return sum + parseInt( current.base_stat );
    }, 0 );
    
    return (
        <div className="tab tab-base-stats">
            
            <table>

                <tbody>
                    <tr>
                        <td>HP</td>
                        <td>
                            { stats[0].base_stat }
                            <RangeView value={ stats[0].base_stat } />
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Attack</td>
                        <td>
                            { stats[1].base_stat }
                            <RangeView value={ stats[1].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>Defense</td>
                        <td>
                            { stats[2].base_stat }
                            <RangeView value={ stats[2].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>Sp. Atk</td>
                        <td>
                            { stats[3].base_stat }
                            <RangeView value={ stats[3].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>Sp. Def</td>
                        <td>
                            { stats[4].base_stat }
                            <RangeView value={ stats[4].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>Speed</td>
                        <td>
                            { stats[5].base_stat }
                            <RangeView value={ stats[5].base_stat } />
                        </td>
                    </tr>

                    <tr>
                        <td>Total</td>
                        <td>
                            { total }
                            <RangeView value={ total } max="600" />
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default BaseStats;