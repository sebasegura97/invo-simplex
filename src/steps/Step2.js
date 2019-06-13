import React from 'react'
import { Button, Typography, IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import './steps.css'

const useStyles = makeStyles({
    constraintSelector: {
        border: '1px solid rgb(105, 169, 224)',
        borderRadius: 3,
        position: '',
        zIndex: 10,
        padding: 10,
        marginRight: 5,
        marginLeft: 5, 
        '& :hover': {
            cursor: 'pointer'
        },
    }
})

const ConstraintInput = (props) => {
    const [state, setState] = React.useState({
        namedVector: { a: 0, b: 0, c: 0 },
        constraint: '=',
        constant: 0
    })
    const classes = useStyles(state)

    const handleConstraintSelect = (e) => {
        console.log(e.target.id)
        document.getElementById('=').style.background = 'white'
        document.getElementById('>=').style.background = 'white'
        document.getElementById('<=').style.background = 'white'
        const element = document.getElementById(`${e.target.id}`)
        element.style.background = 'rgb(105, 169, 224)'
        setState({ ...state, constraint: `${e.target.id}` })
    }
    return (
        <div className='step2-container'>
            <h3 className='stepSubtitle' variant='h6'> Agregar restricción: </h3>
            <div className='functionContainer'>
                <div className='variableContainer'>
                    <input type="text" name='a'
                        className='coeficientInput'
                        onChange={(e) => setState({ ...state, namedVector: { ...state.namedVector, a: parseInt(e.target.value)} })} />
                    <p className='variables' >A</p>
                </div>
                <div className='variableContainer'>
                    <input type="text" name='b'
                        className='coeficientInput'
                        onChange={(e) => setState({ ...state, namedVector: { ...state.namedVector, b: parseInt(e.target.value)} })} />
                    <p className='variables' >B</p>
                </div>
                <div className='variableContainer'>
                    <input type="text" name='c'
                        className='coeficientInput'
                        onChange={(e) => setState({ ...state, namedVector: { ...state.namedVector, c: parseInt(e.target.value)} })} />
                    <p className='variables' >C</p>
                </div>
                <div 
                    className={classes.constraintSelector} 
                    id='>='
                    onClick={handleConstraintSelect}>
                    <span id='>=' className='constraintText'> >= </span>
                </div>
                <div 
                    className={classes.constraintSelector} 
                    id='='
                    onClick={handleConstraintSelect}>
                    <span id='=' className='constraintText'> = </span>
                </div>
                <div 
                    className={classes.constraintSelector} 
                    id='<='
                    onClick={handleConstraintSelect}>
                    <span id='<=' className='constraintText'> {`<=`} </span>
                </div>
                <div className='variableContainer'>
                    <input type="text" name='constant'
                        className='coeficientInput'
                        onChange={(e) => setState({ ...state, constant: parseInt(e.target.value) })} />
                </div>
                <Button className='buttonNext' color="secondary" onClick={() => props.addConstraint(state)} >
                    Agregar
                </Button>
            </div>
            <div className='inlineButtonsContainer'>
                
            </div>
        </div>
    )
}

const ConstraintView = (props) => {
    const { namedVector, constraint, constant } = props.constraint
    return (
        <div className='steps-container'>
            <div className='constraintViewContainer'>
                <p>{namedVector.a}A {namedVector.b}B {namedVector.c}C {constraint} {constant}</p>
                <Button className='buttonNext' color="secondary" onClick={props.delete} >
                    Eliminar
                </Button>
            </div>
        </div>
    )
}

export default function Step2(props) {
    const { step } = props
    var restrictions = null;
    if (props.constraints.length > 0) {
        restrictions = props.constraints.map((constraint, index) => {
            return <ConstraintView key={index} delete={() => props.deleteConstraint(index)} constraint={constraint} />
        })
    }
    return(
        <div className='steps-container'>
            <Typography variant='h6'> Restricciones: </Typography>
            {restrictions}
            {step === 2 ? <ConstraintInput handleNext={props.handleNext} addConstraint={props.addConstraint} /> : null}
            {step === 2 ? <Button className='buttonNext' color="primary" onClick={props.handleNext} > Continuar </Button> : null }
            {step === 4 ? (<Button className='buttonNext' color='primary' onClick={props.handleEdit}> Editar </Button>) : null}
        </div>
    )   

}
