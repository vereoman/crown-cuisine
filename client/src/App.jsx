import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForms from "./components/auth-form";
import LandingPage from "./pages/landing-page";
import CustomerDashboard from "./pages/customer/customer-dashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth" element={<AuthForms />} />
                <Route
                    path="/customer-dashboard"
                    element={<CustomerDashboard />}
                />
            </Routes>
        </Router>
    );
};

export default App;
