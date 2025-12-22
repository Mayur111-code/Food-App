import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AppRoutes />
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
