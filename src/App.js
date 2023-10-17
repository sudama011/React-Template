import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { setPageTitle, setTheme } from "./utils";
import NotFound from "./components/common/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    setTheme();
  }, []);

  useEffect(() => {
    setPageTitle(location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
