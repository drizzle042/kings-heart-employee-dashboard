import { HashRouter, Route, Routes } from "react-router-dom";
import ResetPasswordpage from "./Pages/Authentication/ResetPasswordpage";
import Overview from "./Pages/Overview/Overview";
import Scoresheets from "./Pages/Scoresheets/Scoresheets";
import Exams from "./Pages/Exams/Exams";
import SignIn from "./Pages/Authentication/SignIn";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home />} path="" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<ResetPasswordpage />} path="/reset-password" />
        <Route element={<Overview />} path="/overview" />
        <Route element={<Scoresheets />} path="/scoresheets" />
        <Route element={<Exams />} path="/exams" />
      </Routes>
    </HashRouter>
  );
}

export default App;
