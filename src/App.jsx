import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardPage from "./pages/admin/DashboardPage";
import LoginPage from "./pages/client/LoginPage";
import OTPVerificationPage from "./pages/client/OTPVerificationPage";
import RegisterPage from "./pages/client/RegisterPage";
import "./styles/client/auth.css";
import HomePage from "./pages/home/HomePage";
import CVLayout from "./components/cv generator/CVLayout";
import Collection from "./components/cv generator/Collection";
import GetUser from "./components/admin/dashboard/GetUser";
import OTPSuccessMesage from "./components/success/OTPSuccessMesage";
import OTPSuccessPage from "./pages/success/OTPSuccessPage";
import ErrorPage from "./pages/error/ErrorPage";
import ErrorServerPage from "./pages/error/ErrorServerPage";
import ProfilePage from "./pages/client/ProfilePage";
import CarSellPage from "./pages/client/CarSellPage";

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
