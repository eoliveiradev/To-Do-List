import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./src/layouts/DefaultLayout/DefaultLayout";
import { Home } from "./src/pages/Home/Home";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Route>
    </Routes>
  )
}