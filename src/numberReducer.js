const numberReducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return ++state;
        case 'DECRMENT':
            return --state;
    }

}

export default numberReducer;