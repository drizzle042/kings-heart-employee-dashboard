import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./Pages/Overview/Overview";
import Scoresheets from "./Pages/Scoresheets/Scoresheets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Overview />} path="/overview" />
        <Route element={<Scoresheets />} path="/scoresheets" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
