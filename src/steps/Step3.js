import React from 'react'
import { Typography, Button } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'


export default function Step3(props) {
    const {step, optimizationType} = props
    const [state, setState] = React.useState({
        optimizationType: 'max'
    })
    const handleOptimization = (e) =>{
        document.getElementById('min').style.background = 'white';
        document.getElementById('max').style.background = 'white';
        document.getElementById(e.target.id).style.background = 'rgb(105, 169, 224)'
        setState({optimizationType: e.target.id})
    }
    if (step === 3) {
        return (
            <div className='steps-container'>
                <Typography variant='h6'> Tipo de optimizacion: </Typography>
                <div className='optimization-container'>
                    <div 
                        className='optmization-type'
                        id='max'
                        onClick={handleOptimization}
                    > <ArrowUpward id='max'/> <p id='max'>Maximizar</p></div>
                    <div 
                        className='optmization-type'
                        id='min'
                        onClick={handleOptimization}
                    > <ArrowDownward id='min'/> <p id='min'>Minimizar</p></div>
                </div>
                <Button className='buttonNext' color="primary" onClick={()=>props.handleNext(state.optimizationType)} >
                    Continuar
                </Button>
            </div>
        )
    }
    if (step === 4) {
        return (
            <div className='steps-container'>
                <Typography variant='h6'> Tipo de optimizacion: </Typography>
                <div className='optimization-container'>
                { 
                    optimizationType === 'max' ?  
                    <div
                        className='optmization-type'
                        id='max'
                        style={{ backgroundColor: 'rgb(105, 169, 224)' }}
                        onClick={handleOptimization}
                    > <ArrowUpward id='max' /> <p id='max'>Maximizar</p></div>
                    :
                    <div
                        className='optmization-type'
                        style={{ backgroundColor: 'rgb(105, 169, 224)' }}
                        id='min'
                        onClick={handleOptimization}
                    > <ArrowDownward id='min' /> <p id='min'>Minimizar</p></div>
                }
                </div>
                <Button className='buttonNext' color="primary" onClick={props.handleEdit} >
                    Editar
                </Button>
            </div>
        )
    }
}
