import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const TextoInicio = styled.div`
padding-top:4rem;
max-width:1000px auto;
width:80%;
margin:0 auto;
padding-bottom: 2rem;
@media (min-width:768px){
    display:grid;
    grid-template-columns: repeat(2, 1fr) ;
    column-gap : 100px;
}

p{
    line-height:2;
    
}
`;
const ContenidoInicio = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  console.log(info.allDatoCmsPagina.nodes[0])
  const { titulo, contenido, imagen } = info.allDatoCmsPagina.nodes[0]
  return (
    <>
      <h2
      css={css`
      text-align:center;
      font-size: 4rem;
      margin-top:4rem;  
      `}
      >{titulo}</h2>

      <TextoInicio className="">
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </TextoInicio>
    </>
  )
}

export default ContenidoInicio
