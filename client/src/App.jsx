import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForms from "./components/auth-form";
import LandingPage from "./pages/landing-page";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthForms />} />
                <Route path="/auth/login" element={<AuthForms />} />
                <Route path="/auth/signup" element={<AuthForms />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
