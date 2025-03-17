import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForms from "./components/auth-form";
import LandingPage from "./pages/landing-page";
import CustomerDashboard from "./pages/customer/customer-dashboard";
import OwnerDashboard from "./pages/owner/owner-dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthForms />} />
                <Route path="/auth/login" element={<AuthForms />} />
                <Route path="/auth/signup" element={<AuthForms />} />
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/customer-dashboard"
                    element={<CustomerDashboard />}
                />
                <Route path="/owner-dashboard" element={<OwnerDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
