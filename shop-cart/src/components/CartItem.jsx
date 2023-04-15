import { toast } from "react-hot-toast";
import { FcDeleteRow } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed")

  }
  return (
    <div>
      <div className="flex  ms-40 gap-4  max-w-xl mt-10 max-h-96 border-b-2 border-stone-800 ">
        <div className="flex justify-between gap-4 mb-3 w-40">
          <img src={item.image} />
        </div>

        <div className=" ms-5 ">
          <h1 className="font-thin text-gray-800 ">{item.title}</h1>
          <h1 className="mt-2 text-gray-600">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          <div>
            <div className="flex gap-40">
              <p className="text-green-600 mt-2 font-bold">${item.price}</p>
              <div className="gap-25 mt-2 font-bold w-20">
                <FcDeleteRow onClick={removeFromCart} width="100" />

              </div>
            </div>
          </div>
        </div>

      </div>





    </div>
  )

};

export default CartItem;
