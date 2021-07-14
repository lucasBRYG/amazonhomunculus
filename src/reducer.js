export const initialState = {
    basket: []
};

//selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            console.log(state.basket);
            let newBasket = [...state.basket];
            console.log(newBasket);
            console.log(index);

            if (index >=0) {
                newBasket.splice(index, 1);
                
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as its not in basket!`);
            }
            console.log(newBasket);
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;