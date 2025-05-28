import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import SupervisorsPage from "./components/pages/SupervisorsPage";
import LoginPage from "./components/pages/LoginPage";
import FacultyPage from "./components/pages/FacultyPage";
import HomePage from "./components/pages/Homepage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/supervisors" element={<SupervisorsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/faculty" element={<FacultyPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
