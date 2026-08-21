import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import ProductPage from "./pages/ProductPage";
import PokePage from "./pages/PokePage";
import Footer from "./components/Footer";
import PokeDetail from "./pages/PokeDetail";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Form from "./pages/Form";
import { Provider } from "react-redux";
import reduxStore from "../src/redux/store";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Provider store={reduxStore}>
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
          <Route path="/survey" element={<Form />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default Router;
