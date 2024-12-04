import { FC, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Button from "../Button/Button";

const ItemList: FC = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, addToCart } =
    useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_URL + `products`
        );
        const data = await response.json();
        data.array.forEach((element) =>
          addToCart({
            id: element.id,
            title: element.title,
            price: element.price,
            quantity: 1,
          })
        );
      } catch (err) {
      } finally {
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {cart.map((item) => (
              <li key={item.id} className={`py-3 sm:py-4 pb-3 sm:pb-4`}>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.title}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.title} - ${item.price} x {item.quantity}
                  </div>
                  <Button
                    handleClick={() => removeFromCart(item.id)}
                    type="button"
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice().toFixed(2)}</p>
          <Button handleClick={clearCart} type="button">
            Clear Cart
          </Button>
        </div>
      )}
    </>
  );
};

export default ItemList;
