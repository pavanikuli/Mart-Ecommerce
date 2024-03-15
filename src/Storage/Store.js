import { createStore } from "redux";

const initialState = {
    cartList: [],
    oneProduct: [],
    cartCount: 0,
};

const cartListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            const existingProductIndex = state.cartList.findIndex(item => item.id === action.payload.id);
            if (existingProductIndex !== -1) {
                const updatedCart = state.cartList.map((item, index) => {
                    if (index === existingProductIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return { ...state, cartList: updatedCart };
            } else {
                const newCartList = [...state.cartList, { ...action.payload, quantity: 1 }];
                localStorage.setItem('cartList', JSON.stringify(newCartList));
                return {
                    ...state,
                    cartList: newCartList,
                    cartCount: state.cartCount + 1
                };
            }
        case "DELETE":
            const updatedCart = state.cartList.filter(item => item !== action.payload);
            localStorage.setItem('cartList', JSON.stringify(updatedCart));
            return { ...state, cartList: updatedCart, cartCount: state.cartCount - 1 };
        case "INCREASE":
            const cartIncrease = state.cartList.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            localStorage.setItem('cartList', JSON.stringify(cartIncrease));
            return { ...state, cartList: cartIncrease };
        case "DECREASE":
            const cartDecrease = state.cartList.map(item => {
                if (item.id === action.payload.id) {
                    const updatedQuantity = item.quantity > 1 ? item.quantity - 1 : 0;
                    if (updatedQuantity === 0) {
                        return null;
                    } else {
                        return { ...item, quantity: updatedQuantity };
                    }
                }
                return item;
            }).filter(item => item !== null);
            localStorage.setItem('cartList', JSON.stringify(cartDecrease));
            return { ...state, cartList: cartDecrease };
        case "VESITE":
            return { ...state, oneProduct: [action.payload] };
        default:
            return state;
    }
};

const savedCartList = localStorage.getItem('cartList');
const savedState = savedCartList ? { ...initialState, cartList: JSON.parse(savedCartList) } : initialState;
const store = createStore(cartListReducer, savedState);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('cartList', JSON.stringify(state.cartList));
});

export default store;




// import { createStore } from "redux";

// const initialState = {
//     cartList: [],
//     oneProduct: [],
//     cartCount: 0,
// };

// const cartListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD":
//             const existingProductIndex = state.cartList.findIndex(item => item.id === action.payload.id);
//             if (existingProductIndex !== -1) {
//                 const updatedCart = state.cartList.map((item, index) => {
//                     if (index === existingProductIndex) {
//                         return { ...item, quantity: item.quantity + 1 };
//                     }
//                     return item;
//                 });
//                 return { ...state, cartList: updatedCart };
//             } else {
//                 return {
//                     ...state,
//                     cartList: [...state.cartList, { ...action.payload, quantity: 1 }],
//                     cartCount: state.cartCount + 1
//                 };
//             }
//         case "DELETE":
//             const updatedCart = state.cartList.filter(item => item !== action.payload);
//             return { ...state, cartList: updatedCart, cartCount: state.cartCount - 1 };
//         case "INCREASE":
//             const cartIncrease = state.cartList.map(item => {
//                 if (item.id === action.payload.id) {
//                     return { ...item, quantity: item.quantity + 1 };
//                 }
//                 return item
//             })
//             return { ...state, cartList: cartIncrease };
//         case "DECREASE":
//             const cartDecrease = state.cartList.map(item => {
//                 if (item.id === action.payload.id) {
//                     const updatedQuantity = item.quantity > 1 ? item.quantity - 1 : 0;
//                     if (updatedQuantity === 0) {
//                         return null;
//                     } else {
//                         return { ...item, quantity: updatedQuantity };
//                     }
//                 }
//                 return item;
//             }).filter(item => item !== null)
            

//             return { ...state, cartList: cartDecrease};
//         case "VESITE":
//             return { ...state, oneProduct: [action.payload] }

//         default:
//             return state;
//     }
// };

// const store = createStore(cartListReducer);

// export default store;
