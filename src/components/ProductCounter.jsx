import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
/** PRODUCT CONTEXT **/
import { CurrentProductContext } from "../context/CurrentProduct";

const ProductCounter = ({ item, counter, setCounter }) => {
  // const [productCount, setProductCount] = useState(amt);
  // const { selectedProduct: currProduct } = useContext(CurrentProductContext);

  // const { cart, setCart, productCount, setProductCount } =
  //   useContext(CartContext);

  // const setQuantity =
  // let item = productData[0];

  return (
    <div
      className={`flex justify-between w-full sm:w-1/3 rounded-lg bg-light-gray relative border ${
        counter === item.stock && "border-orange"
      }`}
    >
      <button
        onClick={() => setCounter(counter === 1 ? 1 : counter - 1)}
        className=" px-4 text-orange"
      >
        <FaMinus />
      </button>
      <span
        className={`ext-base font-bold py-4 ${
          counter === item.stock && "text-orange"
        }`}
      >
        {counter}
      </span>
      <button
        onClick={() => setCounter(counter < item.stock ? counter + 1 : counter)}
        className="px-4 text-orange"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default ProductCounter;
