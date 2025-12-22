import { Heart, Bookmark } from "lucide-react";
import { useDispatch } from "react-redux";
import Button from "../common/Button";
import {
  toggleLike,
  toggleSave,
} from "../../features/likeSave/likeSaveSlice";

const FoodCard = ({ food }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{food.name}</h3>
        <p className="text-sm text-gray-500">₹{food.price}</p>

        <div className="flex justify-between items-center pt-2">
          <Button>Order</Button>

          <div className="flex gap-3">
            <button onClick={() => dispatch(toggleLike(food._id))}>
              <Heart size={20} className="text-red-500" />
            </button>

            <button onClick={() => dispatch(toggleSave(food._id))}>
              <Bookmark size={20} className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
