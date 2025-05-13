import { useState } from "react";
import { Route, Router } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // let routes = [
  //   {
  //     id: 1,
  //     link: "elele",

  //     element: <Home/>,
  //   },
  // ];
  return (
    // <div className="app">
    //   <Router>
    //     {routes.map((el) => (
    //       <Route path={el.link} element={el.element} key={el.id} />
    //     ))}
    //   </Router>
    // </div>
    <Home />
  );
}

export default App;
