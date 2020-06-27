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
const Header = () => {
  return (
    <header
      css={css`
        background-color: #222;
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
        <EnlaceHome to='/'>
        <h1
          css={css`
            color: #fff;
            text-align: center;
          `}
        >
          Gatsby
        </h1>
        </EnlaceHome>
       
            <Nav/>
      </div>
    </header>
  )
}

export default Header
