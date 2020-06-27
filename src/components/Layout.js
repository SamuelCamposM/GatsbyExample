//dependencias
import React from "react"
import Helmet from "react-helmet"
//componentes
import Header from "./Header"
import Footer from './Footer'
//stylos
import { Global, css } from "@emotion/core"
//hook 
import useSeo from "../hooks/useSeo"


const Layout = props => {
  const seo = useSeo()
  const { fallbackSeo : {description , title}} =seo
  
  return (
    <>
      <Global styles={css`
      html{
          font-size: 62.5%;
          box-sizing:border-box;
      }
      body{
          font-size:18px;
          font-size:  1.8rem;
          line-height:1.5 ;  
          font-family :'PT Sans', sans-serif;

      }
      *,*:before,*:after{
        box-sizing:inherit;
      }
      h1,h2,h3{
          margin:0;
          line-height:1.5;
      }
      h1,h2{
          font-family:'Roboto',sans-serif;
      }
      h3{
          font-family: 'PT Sans', sans-serif;
      }
      ul{
          list-style:none;
          margin:0;
          padding:0;
      }
      `} />
      <Helmet>
        <title>{title}</title>
        <meta
        name="description" content={description}
         />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {props.children}
      <Footer 
      title={title}
      />
    </>
  )
}

export default Layout
