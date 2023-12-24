import { useSelector } from "react-redux";
import Button from "../../ui/Button.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import DeletItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import { getCurrentQuantityById } from "./cartSlice.js";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeletItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
