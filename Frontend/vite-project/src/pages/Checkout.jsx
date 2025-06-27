import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const items = cart.map((item) => ({
        productId: item._id,
        quantity: item.quantity,
    }));

    const handleCheckout = async () => {
        await API.post('/orders', { items, total });
        localStorage.removeItem('cart');
        alert('Order placed successfully');
        navigate('/');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <p>Total: ₹{total}</p>
            <button onClick={handleCheckout}>Place Order</button>
        </div>
    );
}
