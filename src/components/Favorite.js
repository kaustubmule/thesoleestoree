import React from 'react';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
import './css/Favorite.css';

function Favorite() {
    const [{ favorites }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const removeFromFavorites = (id) => {
        dispatch({
            type: 'REMOVE_FROM_FAVORITES',
            id: id,
        });
    };

    const addToBasket = (item) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: item,
        });
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="favorite">
            <div className="favorite__header">
                <h1>Your Favorites</h1>
                <p>{favorites?.length} items in your favorites</p>
            </div>

            {favorites?.length === 0 ? (
                <div className="favorite__empty">
                    <h2>Your favorites list is empty</h2>
                    <p>Add some shoes to your favorites to see them here!</p>
                </div>
            ) : (
                <div className="favorite__container">
                    {favorites?.map((item) => (
                        <div key={item.id} className="favorite__item">
                            <div className="favorite__itemImage" onClick={() => handleProductClick(item.id)}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="favorite__itemInfo">
                                <h3 onClick={() => handleProductClick(item.id)}>{item.title}</h3>
                                <p className="favorite__itemPrice">
                                    <small>₹</small>
                                    <strong>{item.price}</strong>
                                </p>
                                <div className="favorite__itemActions">
                                    <button
                                        className="favorite__buyNow"
                                        onClick={() => addToBasket(item)}
                                    >
                                        Buy Now
                                    </button>
                                    <button
                                        className="favorite__remove"
                                        onClick={() => removeFromFavorites(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorite;
