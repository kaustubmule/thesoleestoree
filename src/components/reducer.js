export const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => (item.price * (item.quantity || 1)) + amount, 0);

export const finalAmount = getBasketTotal;

const reducer = (state, action) => {
    console.log("to", state, action);
    let newState;

    switch (action.type) {
        case "SET_USER":
            newState = {
                ...state,
                user: action.user,
            };
            break;

        case "ADD_TO_BASKET":
            const existingItemIndex = state.basket.findIndex(
                (item) => item.id === action.item.id
            );

            if (existingItemIndex >= 0) {
                const newBasket = [...state.basket];
                newBasket[existingItemIndex] = {
                    ...newBasket[existingItemIndex],
                    quantity: (newBasket[existingItemIndex].quantity || 1) + 1
                };
                newState = {
                    ...state,
                    basket: newBasket,
                };
            } else {
                newState = {
                    ...state,
                    basket: [...state.basket, { ...action.item, quantity: 1 }],
                };
            }
            break;

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                if (newBasket[index].quantity > 1) {
                    newBasket[index] = {
                        ...newBasket[index],
                        quantity: newBasket[index].quantity - 1
                    };
                } else {
                    newBasket.splice(index, 1);
                }
            } else {
                console.warn(
                    `can't remove this product as id ${action.id} doesn't exists`
                );
            }
            newState = { ...state, basket: newBasket };
            break;

        case "ADD_TO_FAVORITES":
            const newFavorites = [...state.favorites, action.item];
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            newState = {
                ...state,
                favorites: newFavorites,
            };
            break;

        case "REMOVE_FROM_FAVORITES":
            const newFavorites2 = state.favorites.filter(
                (item) => item.id !== action.id
            );
            localStorage.setItem('favorites', JSON.stringify(newFavorites2));
            newState = {
                ...state,
                favorites: newFavorites2,
            };
            break;

        default:
            newState = state;
    }

    // Save basket to localStorage whenever it changes
    if (action.type === "ADD_TO_BASKET" || action.type === "REMOVE_FROM_BASKET" || action.type === "ADD_TO_FAVORITES" || action.type === "REMOVE_FROM_FAVORITES") {
        localStorage.setItem('basket', JSON.stringify(newState.basket));
        localStorage.setItem('favorites', JSON.stringify(newState.favorites));
    }

    return newState;
};

export default reducer;
