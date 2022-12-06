import { HashRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Authentication/SignIn";
import RequestPasswordReset from "./Pages/Authentication/RequestPasswordReset/RequestPasswordReset";
import ResetPasswordSuccess from "./Pages/Authentication/RequestPasswordReset/ResetPasswordSuccess";
import ResetPasswordpage from "./Pages/Authentication/ResetPasswordpage";
// import Overview from "./Pages/Overview/Overview";
import Scoresheets from "./Pages/Scoresheets/Scoresheets";
// import Exams from "./Pages/Exams/Exams";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home />} path="" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<ResetPasswordpage />} path="/reset-password" />
        <Route element={<RequestPasswordReset />} path="/request-password-reset" />
        <Route element={<ResetPasswordSuccess />} path="/reset-password-success" />
        {/* <Route element={<Overview />} path="/overview" /> */}
        <Route element={<Scoresheets />} path="/scoresheets" />
        {/* <Route element={<Exams />} path="/exams" /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
