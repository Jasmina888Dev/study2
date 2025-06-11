import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./conponents/layout/header/header";
import Footer from "./conponents/layout/footer/footer";

function App() {
  const router = [
    {
      id: 1,
      path: "",
      element: "",
    },
    // {
    //   id: 1,
    //   path: "",
    //   element: <Home/>,
    // },u
  ];

  return (
    <div className="App">
      <Header />
      <Routes>
        {router.map((el) => (
          <Route path={el.link} element={el.element} />
        ))}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
