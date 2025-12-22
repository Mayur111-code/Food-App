import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikedFoods } from "../../features/likeSave/likeSaveSlice";
import FoodCard from "../../components/cards/FoodCard";
import Loader from "../../components/common/Loader";

const LikedFoods = () => {
  const dispatch = useDispatch();
  const { likedFoods, loading } = useSelector((state) => state.likeSave);

  useEffect(() => {
    dispatch(fetchLikedFoods());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Liked Foods</h1>

      {likedFoods.length === 0 ? (
        <p className="text-gray-500">No liked foods</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {likedFoods.map((item) => (
            <FoodCard key={item._id} food={item.food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedFoods;
