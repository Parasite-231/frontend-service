import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GetUser from "./components/admin/dashboard/GetUser";
import CVLayout from "./components/cv generator/CVLayout";
import Collection from "./components/cv generator/Collection";
import DashboardPage from "./pages/admin/DashboardPage";
import CarSellPage from "./pages/client/CarSellPage";
import LoginPage from "./pages/client/LoginPage";
import OTPVerificationPage from "./pages/client/OTPVerificationPage";
import ProfilePage from "./pages/client/ProfilePage";
import RegisterPage from "./pages/client/RegisterPage";
import ErrorPage from "./pages/error/ErrorPage";
import ErrorServerPage from "./pages/error/ErrorServerPage";
import HomePage from "./pages/home/HomePage";
import OTPSuccessPage from "./pages/success/OTPSuccessPage";
import "./styles/client/auth.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/client/login" element={<LoginPage />} />
          <Route path="/client/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/client/otp-verification"
            element={<OTPVerificationPage />}
          />
          <Route path="/client/otp-verified" element={<OTPSuccessPage />} />
          <Route path="/client/profile" element={<ProfilePage />} />
          <Route path="/client/car-sell" element={<CarSellPage />} />

          {/* admin */}

          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/generate/:id" element={<CVLayout />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/demo" element={<GetUser />} />
          <Route path="/server-failed" element={<ErrorServerPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
