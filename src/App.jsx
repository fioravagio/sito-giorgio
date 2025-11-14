import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import CivicaPoliticaPage from "./pages/civica.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/civica" element={<CivicaPoliticaPage />} />
    </Routes>
  );
}
