import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { DefaultLayoutContainer } from "./styles";

export function DefaultLayout(){
  return(
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}