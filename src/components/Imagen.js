import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgrounImage from "gatsby-background-image"
import styled from '@emotion/styled'

 const ImageFondo = styled(BackgrounImage)`
 height:700px;
 `
 const Texto = styled.div`
 
   background-image: linear-gradient(to top, rgba(34,49 ,63 ,.8), rgba(34,49 ,63 ,.8) ) ;

 color: #FFF;
 height: 100%;
 display :flex;
 flex-direction:column;
 flex:1;
 align-items:center;
 justify-content:center;
 h2{
     font-size:4rem;
     margin: 0%;
 }
 @media (min-width: 992px){
     font-size:5.8rem;
       
 }
p{
    font-size:2rem;
    @media (min-width: 992px){
     font-size:2.6rem;
       
 }  
}

  `;
const Imagen = () => {
  const { image } = useStaticQuery(graphql`
  query{
    image: file(relativePath:{eq:"8.jpg"}){
  sharp:childImageSharp{
    fluid  {
      ...GatsbyImageSharpFluid_withWebp 
    }
  }
}
}
  `)


  return (
    <ImageFondo tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <Texto>
      <h1>Bienvenido a Gatsby </h1>
      <p>El mejor SSR para Reacr</p>
      </Texto>
    </ImageFondo>
  )
}

export default Imagen
