import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main";
import PortFolioPage from "./pages/portfolio/index";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/portfolio" exact element={<PortFolioPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
