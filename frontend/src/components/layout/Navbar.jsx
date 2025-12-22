import { NavLink, useNavigate } from "react-router-dom";
import { User, LogOut, ShoppingBag, Store, Heart, Bookmark, House, PlusCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, role } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div
          className="text-xl font-bold text-orange-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          FoodApp
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">

          {/* USER */}
          {isAuthenticated && role === "user" && (
            <>
              <NavLink to="/" className="flex items-center gap-1 text-gray-600 hover:text-orange-600">
              <House size={18} />
                Home
              </NavLink>

              <NavLink to="/orders" className="flex items-center gap-1 text-gray-600 hover:text-orange-600">
                <ShoppingBag size={18} />
                Orders
              </NavLink>

              <NavLink to="/liked" className="flex items-center gap-1 text-gray-600 hover:text-orange-600">
              <Heart size={18} />
                Liked
              </NavLink>

              <NavLink to="/saved" className="flex items-center gap-1 text-gray-600 hover:text-orange-600">
              <Bookmark size={18} />
                Saved
              </NavLink>

              <NavLink to="/profile" className="flex items-center gap-1 text-gray-600 hover:text-orange-600">
                <User size={18} />
                Profile
              </NavLink>

            </>
          )}

          {/* RESTAURANT */}
{isAuthenticated && role === "restaurant" && (
  <>
    {/* Dashboard */}
    <NavLink
      to="/restaurant/dashboard"
      className={({ isActive }) =>
        `flex items-center gap-1 ${
          isActive
            ? "text-orange-600 font-medium"
            : "text-gray-600 hover:text-orange-600"
        }`
      }
    >
      <Store size={18} />
      Dashboard
    </NavLink>

    {/* Add Food */}
    <NavLink
      to="/restaurant/add-food"
      className={({ isActive }) =>
        `flex items-center gap-1 ${
          isActive
            ? "text-orange-600 font-medium"
            : "text-gray-600 hover:text-orange-600"
        }`
      }
    >
      <PlusCircle size={18} />
      Add Food
    </NavLink>

    {/* Orders */}
    <NavLink
      to="/restaurant/orders"
      className={({ isActive }) =>
        `flex items-center gap-1 ${
          isActive
            ? "text-orange-600 font-medium"
            : "text-gray-600 hover:text-orange-600"
        }`
      }
    >
      <ShoppingBag size={18} />
      Orders
    </NavLink>

 {/* Restaurant Profile */}
    <NavLink
      to="/restaurant/profile"
      className={({ isActive }) =>
        `flex items-center gap-1 ${
          isActive
            ? "text-orange-600 font-medium"
            : "text-gray-600 hover:text-orange-600"
        }`
      }
    >
      <User size={18} />
      Profile
    </NavLink>


  </>
)}


          {/* AUTH */}
          {!isAuthenticated ? (
            <>
              <NavLink to="/login" className="px-4 py-1 border rounded hover:bg-gray-100">
                Login
              </NavLink>

              <NavLink to="/register" className="px-4 py-1 bg-orange-600 text-white rounded hover:bg-orange-700">
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-4 py-1 border rounded text-red-500 hover:bg-red-50"
            >
              <LogOut size={18} />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
