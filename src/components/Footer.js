//dependencias
import React from "react";
import {Link} from 'gatsby'
//estilos
import { css } from "@emotion/core";
import styled from "@emotion/styled";
//componentes
import Nav from './Nav'


const EnlaceHome = styled(Link)`
color:#fff;
text-align:center;
text-decoration:none;
`
const Footer = ({title}) => {
    const year = new Date().getFullYear()
  return (
      <>
    <footer
      css={css`
        background-color: rgba(44,62,80);
        margin-top:5rem;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Nav/>
        <EnlaceHome to='/'><h1>{title}   </h1></EnlaceHome>
       
      </div>
    </footer>
    <p css={css`
    text-align:center;
    color:#fff;
    background-color:rgb(33,44,55);
    margin :0;
    padding:1rem;
    `}
    
    > Hoter gatsby . todos los derechos reservados  &copy; {year}  </p>
    </>
  )
}

export default Footer
