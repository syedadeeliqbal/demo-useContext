import React, {useContext, useReducer} from 'react';
import numberReducer from './numberReducer';

function Child2(){
  let [number, dispatch] = useReducer(numberReducer, 52);

    return (
        <div>
            Child 2 {number}
            <button onClick={() => {dispatch({type: 'INCREMENT'})}}>Increment</button>
            <button onClick={() => {dispatch({type: 'DECRMENT'})}}>Decrement</button>
        </div>
    );
}

export default Child2;