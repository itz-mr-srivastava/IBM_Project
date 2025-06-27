import React from 'react';

export default function ProductCard({ product, addToCart }) {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '12px',
                padding: '16px',
                width: 240,
                backgroundColor: '#fefefe',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                fontFamily: 'Segoe UI, sans-serif'
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
        >
            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '10px'
                }}
            />
            <h3 style={{ margin: '6px 0', color: '#333', fontSize: '18px' }}>{product.name}</h3>
            <p style={{ fontSize: '14px', color: '#666', minHeight: '45px' }}>{product.description}</p>
            <strong style={{ fontSize: '16px', color: '#222' }}>₹{product.price}</strong>
            <br />
            <button
                onClick={() => addToCart(product)}
                style={{
                    marginTop: '12px',
                    padding: '10px 14px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
                Add to Cart
            </button>
        </div>
    );
}
