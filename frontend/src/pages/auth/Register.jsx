import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { registerUser } from "../../features/auth/authSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  const [role, setRole] = useState("user"); // default user

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: role,
    };

    dispatch(registerUser(formData));
  };

  // Redirect after successful registration
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center py-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 border rounded shadow space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        <Input name="name" label="Name" required />
        <Input name="email" label="Email" required />
        <Input name="password" type="password" label="Password" required />

        {/* ROLE SELECT */}
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === "user"}
              onChange={() => setRole("user")}
            />
            User
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value="restaurant"
              checked={role === "restaurant"}
              onChange={() => setRole("restaurant")}
            />
            Restaurant
          </label>
        </div>

        <Button className="w-full" type="submit">
          {loading ? "Creating..." : "Register"}
        </Button>
      </form>
    </div>
  );
};

export default Register;