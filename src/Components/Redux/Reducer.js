export const reducer = (state=[],action) => {

    if(action.type === "inputData"){
        return action
    }
    return state;
}