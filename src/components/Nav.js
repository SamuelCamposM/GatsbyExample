import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (min-width: 768) {
    padding-bottom: 0px;
  }
`
const NavLInk = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  padding-top: 1rem;
  transition:all 500ms;

  &:last-of-type{
      margin-right:0;
  }
  &.pagina-actual{
      border-bottom:2px solid #FFF;
  }
`
const Navegacion = () => {
  return (
    <Nav>
      <NavLInk 
      activeClassName="pagina-actual"
      to={"/"}>Inicio</NavLInk>
      <NavLInk 
      activeClassName="pagina-actual"
      to={"/Nosotros"}>Nosotros</NavLInk>
    </Nav>
  )
}

export default Navegacion
