import React from 'react'
import { Button, Typography } from '@material-ui/core'
import './steps.css'

const ObjectiveFunctionInput = (props) => {
    const [state, setState] = React.useState({
        a: 0,
        b: 0,
        c: 0
    })
    return (
        <div className='steps-container'>
            <Typography variant='h6'> Funcion objetivo: </Typography>
            <div className='functionContainer'>
                <p className='objectiveFunction'> Z =  </p>
                <div className='variableContainer'>
                    <input type="text" name='a'
                        className='coeficientInput'
                        onChange={(e) => setState({ ...state, a: parseInt(e.target.value)})} />
                    <p className='variables' >A</p>
                </div>
                <div className='variableContainer'>
                    <input type="text" name='b'
                        className='coeficientInput'
                        onChange={(e) => setState({ ...state, b: parseInt(e.target.value)})} />
                    <p className='variables' >B</p>
                </div>
                <div className='variableContainer'>
                    <input type="text" name='c'
                        className='coeficientInput'
                        onChange={(e) => setState({ ...state, c: parseInt(e.target.value)})} />
                    <p className='variables' >C</p>
                </div>

            </div>
            <Button className='buttonNext' color="primary" onClick={() => { props.handleNext(state) }} >
                Continuar
            </Button>
        </div>
    )
}

const ObjectiveFunctionView = (props) => {
    return(
        <div className='objectiveFunction'>
            <Typography variant='h6'> Funcion objetivo: </Typography>
            <p>Z = {props.objective.a}A {props.objective.b}B {props.objective.c}C </p>
            <Button className='buttonNext' color="primary" onClick={props.handleEdit} >
                Editar
            </Button>
        </div>
    )
}

export default function Step1(props) {
    if (props.step === 1) {
        return(<ObjectiveFunctionInput handleNext={props.handleNext} />)
    } else{
        return(<ObjectiveFunctionView objective={props.objective} handleEdit={props.handleEdit} />)
    }
}
