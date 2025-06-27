import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(items);
    }, []);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.map((item) => (
                <div key={item._id}>
                    {item.name} x {item.quantity} - ₹{item.price * item.quantity}
                </div>
            ))}
            <h4>Total: ₹{total}</h4>
            <button onClick={() => navigate('/checkout')}>Checkout</button>
        </div>
    );
}
