import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/HomePage";
import "./pages/CountryDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="#" element={<CountryDetailsPage />} />
    </Routes>
  );
}

export default App;
