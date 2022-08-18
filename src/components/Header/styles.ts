import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${props => props.theme["heights"]["header-height"]};
  background-color: ${props => props.theme["colors"]["base-colors"]["gray-700"]};
`