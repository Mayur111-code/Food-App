import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import foodReducer from "../features/food/foodSlice";
import orderReducer from "../features/order/orderSlice"; 
import likeSaveReducer from "../features/likeSave/likeSaveSlice";
import restaurantReducer from "../features/restaurant/restaurantSlice";


const rootReducer = {
  auth: authReducer,
  user: userReducer,
  food: foodReducer,
  order: orderReducer,
  likeSave: likeSaveReducer, 
  restaurant: restaurantReducer,
};

export default rootReducer;
