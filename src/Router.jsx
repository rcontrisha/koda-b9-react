import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import ProductPage from "./pages/ProductPage";
import PokePage from "./pages/PokePage";
import Footer from "./components/Footer";
import PokeDetail from "./pages/PokeDetail";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pokemon">
          <Route index element={<PokePage />} />
          <Route path=":id" element={<PokeDetail />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
