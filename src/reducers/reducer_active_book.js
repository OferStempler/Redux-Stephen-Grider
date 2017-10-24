
//state argument here is not an application state, only the state
// this reducer is responsible for. the state flows into the function with the action.

export default function (state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }

    //if we dont care about the action, and nothing happens, we return the same state.
    //for example when the app first boots up.
    return state
}