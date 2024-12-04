import { FC } from "react";
import { useCart } from "../context/CartContext";
import Button from "../componets/button/Button";
import Container from "../componets/container/Container";

const ShoppingCartPage: FC = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice, decreaseQuantity, increaseQuantity } =
    useCart();

  return (
    <Container>
      <h1 className="text-2xl" >Your Shopping Cart:</h1>
      {cart.length === 0 ? (
        <h1 className="text-2xl" >Your cart is empty.</h1>
      ) : (
        <div className="w-full">
          <ul className="w-full flex flex-col justify-center divide-y divide-gray-200 dark:divide-gray-700">
            {cart.map((item) => (
              <li key={item.id} className={`py-3 sm:py-4 pb-3 sm:pb-4`}>
                <div className="flex items-center space-x-4 rtl:space-x-reverse justify-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.title}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${item.price} x {item.quantity}
                  </div>
                  <Button
                    handleClick={() => decreaseQuantity(item.id)}
                    type="button"
                  >
                    -
                  </Button>
                  <Button
                    handleClick={() => increaseQuantity(item.id)}
                    type="button"
                  >
                    +
                  </Button>
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
          <div className="flex flex-col justify-center w-full gap-2 mb-10">
            <h1 className="text-2xl">Total: ${getTotalPrice().toFixed(2)}</h1>
            <Button handleClick={clearCart} type="button">
              Clear Cart
            </Button>
            <Button type="button">
              Order
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ShoppingCartPage;
