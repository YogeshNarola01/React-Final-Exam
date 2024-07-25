import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Pages/Add";
import View from "./Pages/View";
import Edit from "./Pages/Edit";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add></Add>}></Route>
        <Route path="/View" element={<View></View>}></Route>
        <Route path="/Edit" element={<Edit></Edit>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
