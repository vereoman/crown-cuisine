import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForms from "./components/auth-form";
import LandingPage from "./pages/landing-page";
import CustomerDashboard from "./pages/customer/customer-dashboard";
import RestaurantDetails from "./pages/customer/restaurant-details"; // Import the restaurant details page
import OwnerDashboard from "./pages/owner/owner-dashboard"; // Import the owner dashboard

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
                <Route path="/restaurant/:id" element={<RestaurantDetails />} />{" "}
                {/* Add this line */}
                <Route
                    path="/owner-dashboard"
                    element={<OwnerDashboard />}
                />{" "}
                {/* Add owner dashboard route */}
            </Routes>
        </Router>
    );
};

export default App;
