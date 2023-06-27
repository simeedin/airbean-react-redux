

const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }    
}

const getOrder = (order) => {
    return {
        type: 'GET_ORDER',
        payload: order
    }
}

export {addProduct, clearCart, getOrder}