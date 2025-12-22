import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/user/Home";
import Orders from "../pages/user/Orders";
import Profile from "../pages/user/Profile";
import LikedFoods from "../pages/user/LikedFoods";
import SavedFoods from "../pages/user/SavedFoods";
import RestaurantProfile from "../pages/restaurant/Profile";
import Dashboard from "../pages/restaurant/Dashboard";
import AddFood from "../pages/restaurant/AddFood";
import RestaurantOrders from "../pages/restaurant/Orders";



const AppRoutes = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PROTECTED USER ROUTES */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
  path="/liked"
  element={
    <ProtectedRoute>
      <LikedFoods />
    </ProtectedRoute>
  }
/>

<Route
  path="/saved"
  element={
    <ProtectedRoute>
      <SavedFoods />
    </ProtectedRoute>
  }
/>
<Route
  path="/restaurant/profile"
  element={
    <ProtectedRoute allowedRole="restaurant">
      <RestaurantProfile />
    </ProtectedRoute>
  }
/>

<Route
  path="/restaurant/dashboard"
  element={
    <ProtectedRoute allowedRole="restaurant">
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/restaurant/add-food"
  element={
    <ProtectedRoute allowedRole="restaurant">
      <AddFood />
    </ProtectedRoute>
  }
/>

<Route
  path="/restaurant/orders"
  element={
    <ProtectedRoute allowedRole="restaurant">
      <RestaurantOrders />
    </ProtectedRoute>
  }
/>



    </Routes>
  );
};

export default AppRoutes;
