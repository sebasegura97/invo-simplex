import React from 'react'

export default function Result(props) {
    const { isOptimal } = props.result.details;
    const { coefficients, optimum } = props.result.solution;
    if (isOptimal) {
        return (
            <div>
                <h3> Se ha encontrado una solucion optima! </h3>
                <h4> Coeficientes: </h4>
                <p> A = {coefficients.a} </p> 
                <p> B = {coefficients.b} </p> 
                <p> C = {coefficients.c} </p>
                <h4> Valor optimo de la funcion: </h4> 
                <p> {optimum} </p>
            </div>
        )
    } else {
        return(
            <div>
                <h3> No se ha encontrado solucion optima 😢 </h3>
            </div>
        )
    }
}
