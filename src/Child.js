import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(){
    let val = useContext(ValueContext);
    let updateVal = val[1];
    return (
        <div>Child {val[0]}
        <button onClick={()=> updateVal(++val[0])}>Update Value</button>
        </div>
    );
}

export default Child;