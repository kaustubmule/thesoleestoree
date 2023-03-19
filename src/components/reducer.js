export const initialState = {
    basket: [
        {
            id: "23",
            title: "Adidas Superstar Shoes",
            price: 11999,
            image: "https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/70/711/8350/100/1/736338250/736338250_1_360x464.webp",
        },
        {
            id: "32",
            title: "NB 991 Eclipse Running Shoes",
            price: 29999,
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRR2itqkEJBZ2F9s43EJfssWDm02vgzAs0gz74YxhOUIwyCvQgU",
        }
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

export const finalAmount = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log("to", state, action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `can't remove this product as id ${action.id} doesn't exists`
                );
            }
            return { ...state, basket: newBasket };

        default:
            return state;
    }
};
export default reducer;
