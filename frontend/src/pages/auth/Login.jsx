import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { loginUser } from "../../features/auth/authSlice";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(loginUser(formData));
  };

  // 🔥 REDIRECT AFTER LOGIN
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);


  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 border rounded shadow"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <div className="space-y-4">
          <Input name="email" label="Email" required />
          <Input name="password" type="password" label="Password" required />

          <Button className="w-full" type="submit">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
