
export const addToCart = (product) => ({
    type: 'ADD', payload: product
});

export const deleteFromCart = (product) => ({
    type: 'DELETE', payload: product
});

export const increaseQuantity = (product) => ({
    type: 'INCREASE', payload: product
});

export const decreaseQuantity = (product) => ({
    type: 'DECREASE', payload: product
});
export const visitProduct = (product) => ({
    type: 'VESITE', payload: product
});
