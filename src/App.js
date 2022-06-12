import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RightAverage from "./panel/components/rightPage/RightAverage";
import RightCreateUpdate from "./panel/components/rightPage/RightCreateUpdate";
import RightDel from "./panel/components/rightPage/RightDel";
import RightGetAll from "./panel/components/rightPage/RightGetAll";
import Panel from "./panel/pages/Panel";
import PanelNav from "./panelNav/PanelNav";
import RightUpdateList from "./panel/components/rightPage/RightUpdateList";
import RightUpdate from "./panel/components/rightPage/RightUpdate";
import RightMembers from "./panel/components/rightPage/RightMembers";
import RightAdmin from "./panel/components/rightPage/RightAdmin";
import BlankUI from "./panel/pages/BlankUI";
import ResponsivePanel from "./panel/components/rightPage/ResponsivePanel";

const App = () => {
  return (
    <Router>
      <PanelNav />
      <Routes>
        <Route path="/" element={<BlankUI />} />
        <Route path="/panel" element={<ResponsivePanel />} />
        <Route path="/chart" element={<RightAverage />} />
        <Route path="/getusers" element={<RightGetAll />} />
        <Route path="/members" element={<RightMembers />} />
        <Route path="/admin" element={<RightAdmin />} />
        <Route path="/delete" element={<RightDel />} />
        <Route path="/create" element={<RightCreateUpdate />} />
        <Route path="/updatelist" element={<RightUpdateList />} />
        <Route path="/updatelist/:id" element={<RightUpdate />} />
      </Routes>
    </Router>
  );
};

export default App;
