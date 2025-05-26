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
import AdminDb from "./pages/AdminDb";
import AnalysteCS from "./pages/AnalysteCS";
import Erp from "./pages/Erp";
import Fullstack from "./pages/Fullstack";
import Ia from "./pages/Ia";
import Reseau from "./pages/Reseau";
import Cloud from "./pages/Cloud";


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="addrh" element={<Addrh />} />
          <Route path="suivientretien" element={<Suivientre />} />
          <Route path="suivirecruteur" element={<Suivirec />} />
          <Route path="ajoutcandidat" element={<Ajoutcand />} />
          <Route path="admindb" element={<AdminDb />} />
          <Route path="analyste_cyber_securite" element={<AnalysteCS />} />
          <Route path="erp" element={<Erp />} />
          <Route path="full_stack" element={<Fullstack />} />
          <Route path="inteligence_artificiel" element={<Ia />} />
          <Route path="reseau" element={<Reseau />} />
          <Route path="cloud" element={<Cloud />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
