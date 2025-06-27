import { useEffect, useState } from 'react';
import API from '../api';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        API.get('/products').then((res) => setProducts(res.data));
    }, []);

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find(item => item._id === product._id);
        if (existing) existing.quantity += 1;
        else cart.push({ ...product, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to cart');
    };

    return (
        <div>
            <h2 style={{ marginBottom: '20px' }}>Products</h2>
            <div
                style={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start'
                }}
            >
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}
