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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/client/login" element={<LoginPage />} />
          <Route path="/client/register" element={<RegisterPage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route
            path="/client/otp-verification"
            element={<OTPVerificationPage />}
          />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/generate/:id" element={<CVLayout />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/demo" element={<GetUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
