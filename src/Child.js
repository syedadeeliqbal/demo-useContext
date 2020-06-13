import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(){
    let val = useContext(ValueContext);

    return (
        <div>Child {val}</div>
    );
}

export default Child;