import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header/Header";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Footer from "./components/layout/Footer/Footer";
import { useSelector } from "react-redux";

function App() {
  const {dark} = useSelector((s) => s)
  const route = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 1,
      link: "/about",
      element: <About />,
    },
  ];
  return (
    <div className="app" style={{
      background: dark ? "white" : "black",
      color: !dark ? "white" : "black"
    }}>
      <Header />
      <Routes>
        {route.map((el) => {
          return <Route path={el.link} element={el.element} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
