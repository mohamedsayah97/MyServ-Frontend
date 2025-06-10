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
import CreateCan from "./pages/CreateCan";
import EditCan from "./pages/EditCan";
import ViewCan from "./pages/ViewCan";
import CompteDbAdmin from "./pages/CompteDbAdmin";
import CompteReseau from "./pages/CompteReseau";
import CompteErp from "./pages/CompteErp";
import CompteFull from "./pages/CompteFull";
import CompteIa from "./pages/CompteIa";
import CompteCS from "./pages/CompteCS";
import CompteCloud from "./pages/CompteCloud";


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
          <Route path="compte_rendu_admin_db" element={<CompteDbAdmin />} />
          <Route path="compte_rendu_reseau" element={<CompteReseau />} />
          <Route path="compte_rendu_erp" element={<CompteErp />} />
          <Route path="compte_rendu_full_stack" element={<CompteFull />} />
          <Route path="compte_rendu_ia" element={<CompteIa />} />
          <Route path="compte_rendu_analyste_cs" element={<CompteCS />} />
          <Route path="compte_rendu_cloud" element={<CompteCloud />} />
          {/* <Route path="edit_candidat/:id" element={<EditCan />} />
          <Route path="view_candidat/:id" element={<ViewCan />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
