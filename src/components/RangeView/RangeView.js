import React from 'react';
import './RangeView.css';

function RangeView({ value = 50, max = 100 })
{
    value = parseInt( value );
    max = parseInt( max );
    const percent = value / max * 100;
    const colorClass = percent >= 50 ? 'range-view-positive' : 'range-view-negative';

    return (
        <div className={ `range-view ${ colorClass }` } style={{ '--percent': `${ percent }%` }}></div>
    )
}

export default RangeView
