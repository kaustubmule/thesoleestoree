import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { products } from '../data/products';
import './css/ProductDetail.css';

function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [{ basket, favorites }, dispatch] = useStateValue();
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    // Find the product from our products array
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="productDetail">
                <div className="productDetail__container">
                    <h1>Product not found</h1>
                    <button onClick={() => navigate('/')}>Return to Home</button>
                </div>
            </div>
        );
    }

    const addToBasket = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                ...product,
                selectedSize,
                selectedColor
            },
        });
    };

    const toggleFavorite = () => {
        const isFavorite = favorites?.some(item => item.id === product.id);
        if (isFavorite) {
            dispatch({
                type: 'REMOVE_FROM_FAVORITES',
                id: product.id,
            });
        } else {
            dispatch({
                type: 'ADD_TO_FAVORITES',
                item: product,
            });
        }
    };

    const isFavorite = favorites?.some(item => item.id === product.id);

    return (
        <div className="productDetail">
            <div className="productDetail__container">
                <div className="productDetail__left">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="productDetail__right">
                    <div className="productDetail__brand">
                        <img src={product.brandLogo} alt={product.brand} />
                        <h2>{product.brand}</h2>
                    </div>
                    <h1>{product.title}</h1>
                    <p className="productDetail__price">
                        <small>₹</small>
                        <strong>{product.price}</strong>
                    </p>

                    <div className="productDetail__colors">
                        <h3>Colors</h3>
                        <div className="productDetail__colorOptions">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    className={`productDetail__colorOption ${selectedColor === color ? 'selected' : ''}`}
                                    onClick={() => setSelectedColor(color)}
                                    style={{ backgroundColor: color.toLowerCase() }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="productDetail__sizes">
                        <h3>Size</h3>
                        <div className="productDetail__sizeOptions">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`productDetail__sizeOption ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="productDetail__actions">
                        <button onClick={addToBasket} className="productDetail__addToBasket">
                            Add to Basket
                        </button>
                        <button
                            onClick={toggleFavorite}
                            className={`productDetail__favorite ${isFavorite ? 'favorited' : ''}`}
                        >
                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail; 