import { Routes, Route ,Link, NavLink} from "react-router-dom";
import Home from "./pages/home-layout/Home";
import Service from "./pages/service-layout/Service";
import Company from "./pages/company-layout/Company";
import Header from "./components/Header/Header"; 
import Career from "./pages/career-layout/career";
import Error from "./pages/error-layout/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
