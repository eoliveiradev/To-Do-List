import React from "react";
import { HeaderContainer } from "./styles";
import {Logo} from "../../assets/images"

export function Header(){
  return(
    <HeaderContainer>
      <img src={Logo} alt="" />
    </HeaderContainer>
  )
}