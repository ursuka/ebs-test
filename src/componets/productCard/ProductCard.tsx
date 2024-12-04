import { FC } from "react";
import { ProductCardProps } from "../../interfaces/props";

const ProductCard: FC<ProductCardProps> = ({
  category,
  image,
  price,
  title,
  addToCart
}) => {  
  return (
    <div className="w-full flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 rounded-t-lg w-[300px] h-[350px]"
        src={image}
        alt="product image"
      />
      <h5 className="text-lg self-start px-5 w-full h-[50px] font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="px-5 pb-5 gap-3 flex flex-col h-[200px] justify-end">
        <a>
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            Category: {category}
          </h5>
        </a>

        <div className="flex flex-col gap-3 justify-between w-full">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Price: {price}
          </span>
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none cursor-pointer focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={addToCart}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
