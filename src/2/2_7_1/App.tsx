// 2_7_1 Update an item in the shopping cart 
/*
    Заполните логику handleIncreaseClick так, чтобы нажатие "+" увеличивало соответствующее число.
*/

import { useState } from 'react';

const initialProducts = [
    {
        id: 0,
        name: 'Baklava',
        count: 1,
    },
    {
        id: 1,
        name: 'Cheese',
        count: 5,
    },
    {
        id: 2,
        name: 'Spaghetti',
        count: 2,
    },
];

export default function ShoppingCart() {
    const [products, setProducts] = useState(
        initialProducts
    );

    function handleIncreaseClick(productId: number) {
        setProducts(items => items.map(item => item.id === productId
            ? { ...item, count: item.count + 1 } : item));
    }

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} (<b>{product.count}</b>)
                    <button
                        onClick={() => {
                            handleIncreaseClick(product.id);
                        }}
                    >
                        +
                    </button>
                </li>
            ))}
        </ul>
    );
}