import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "../../features/food/foodSlice";
import FoodCard from "../../components/cards/FoodCard";
import Loader from "../../components/common/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { foods, loading } = useSelector((state) => state.food);

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Restaurants</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((item) => (
          <FoodCard key={item._id} food={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
