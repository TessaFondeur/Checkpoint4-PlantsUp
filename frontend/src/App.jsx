import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnregistrationPage from "./pages/loginpage/EnregistrationPage";
import PlantChoicePage from "./pages/choicepage/PlantChoicePage";
import GamePage from "./pages/gamepage/GamePage";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div className="app-pages">
        <Routes>
          <Route path="/" element={<EnregistrationPage />} />
          <Route path="/chooseplant" element={<PlantChoicePage />} />
          <Route path="/homegame" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}
