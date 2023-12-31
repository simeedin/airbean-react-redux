const initialState = {
    cart: [],
    total: 0,
    orderNr: ''
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': 
            let addedProduct = action.payload;
            let existingProduct = state.cart.find((product) => product.id === addedProduct.id);
            if (existingProduct) {
                existingProduct.quantity = existingProduct.quantity + 1;
                // existingProduct.price = addedProduct.price * existingProduct.quantity;
                return {
                    ...state,
                    cart: [...state.cart],
                    total: state.total + addedProduct.price
                }
            } else {
                let updatedTotal = state.total + addedProduct.price;
                return {
                    ...state,
                    cart: [...state.cart, addedProduct],
                    total: updatedTotal
                }
            }
        case 'REMOVE_PRODUCT':
            let removedProduct = action.payload;
            let removedQuantity = state.cart.find((product) => product.id === removedProduct.id);
            if (removedQuantity.quantity === 1) {
                let updatedCart = state.cart.filter((product) => product.id !== removedProduct.id);
                let updatedTotal = state.total - removedQuantity.price;
                return {
                    ...state,
                    cart: updatedCart,
                    total: updatedTotal
                }
            } else {
                removedQuantity.quantity = removedQuantity.quantity - 1;
                let updatedTotal = state.total - removedQuantity.price;
                return {
                    ...state,
                    total: updatedTotal
                }
            }           
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
                total: 0
            }
        case 'GET_ORDER':
            return {
                ...state,
                orderNr: action.payload
            }
        default:
            return state;
    }
}






export default cartReducer;