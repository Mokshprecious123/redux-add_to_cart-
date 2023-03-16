const initialState = {
    items : [],
}

const cartReducer = (state = initialState , action) => {
 // eslint-disable-next-line default-case
 switch (action.type) {
    case 'ADD_ITEMS':

    console.log(action.payload);
        return{
            ...state,
           items : [...state.items, action.payload],
 }

    case 'REMOVE_ITEMS':
        return{
            ...state,
            items : state.items.filter((item) => item.id !== action.payload),
        }
        default:
            return state;
 }
}
export default cartReducer;