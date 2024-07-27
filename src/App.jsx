import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="#" element={<CountryDetails />} />
    </Routes>
    </>
  );
}

export default App;
