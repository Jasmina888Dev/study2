import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";

function App() {
  let router = [
    {
      id: 1,
      link: "/",
      element: <Hero />,
    },
    {
      id: 2,
      link: "/about",
      element: <About />,
    },
    {
      id: 3,
      link: "/services",
      element: <Services />,
    },
    {
      id: 4,
      link: "/*",
      element: <Contact />,
    },
    {
      id: 5,
      link: "/details",
      element: <Details />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {router.map((el) => (
          <Route path={el.link} element={el.element} key={el.id}/>
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
