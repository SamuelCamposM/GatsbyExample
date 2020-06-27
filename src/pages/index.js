import React from "react"
import Layout from "../components/Layout"
import Imagen from "../components/Imagen"
import ContenidoInicio from "../components/ContenidoInicio"
import useHabitacion from "../hooks/useHabitacion"
import { css } from "@emotion/core"
import HabitacionPreview from "../components/HabitacionPreview"
import styled from "@emotion/styled"


const ListadoHabitaciones = styled.ul`
max-width: 1200px;
width: 80%;
margin: 4rem auto 0 auto;
@media (min-width: 768px){
    display:grid;
    grid-template-columns: repeat(3 , 1fr);
    column-gap: 3rem;
}
`


const IndexPage = (props) => {
    const habitaciones =  useHabitacion()
    console.log(habitaciones);
    
    return (
        <Layout>
        <Imagen /> 
        <ContenidoInicio/>
        <h2 
        css={css`
        text-align:center;
        margin-top:5rem;
        font-size:3rem;
        `}
        >Nuestras habitaciones</h2>
        <ListadoHabitaciones>
        {habitaciones.map(habitacion=> (
<HabitacionPreview 
key={habitacion.id}
habitacion={habitacion}/>

        ))}
       </ListadoHabitaciones>
        </Layout>
    )
}

export default IndexPage
