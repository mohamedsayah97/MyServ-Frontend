import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addrh from "./pages/Addrh";
import Ajoutcand from "./pages/ajoutcand";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Suivientre from "./pages/Suivientre";
import Suivirec from "./pages/Suivirec";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="addrh" element={<Addrh />} />
          <Route path="suivientretien" element={<Suivientre />} />
          <Route path="suivirecruteur" element={<Suivirec />} />
          <Route path="ajoutcandidat" element={<Ajoutcand />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
