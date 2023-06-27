

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

const removeProduct = (product) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: product
    }
}

export {addProduct, clearCart, getOrder, removeProduct}