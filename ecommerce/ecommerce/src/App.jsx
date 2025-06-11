import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import MainPages from "./components/pages/main/MainPages";
import Admin from "./components/pages/Admin/admin";
import ProductForm from "./components/pages/productForm/productForm";
import Login from "./components/pages/login/login";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <MainPages />,
    },
    {
      id: 2,
      path: "/basket",
      element: <MainPages />,
    },
    {
      id: 3,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 4,
      path: "/productForm",
      element: <ProductForm />,
    },
    {
      id: 5,
      path: "/login",
      element: <Login />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
