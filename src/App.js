import React from 'react';
import './App.css';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Result from './steps/Result';
import { Button, Paper, Container, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons'
import SimpleSimplex  from './lib/index'

class App extends React.Component{
  state = {
    step: 4,
    objective: {
      a: 0,
      b: 0,
      c: 0,
    },
    constraints: [],
    optimizationType: 'max',
  }

  handleStep1 = (values) => {
    this.setState({ 
        step: 2,
        objective: values
      })
    console.log('state', this.state)
  }
  handleEditStep1 = () => {
    this.setState({ step: 1 })
  }
  handleEditStep2 = () => {
    this.setState({ step: 2 })
  }
  handleEditStep3 = () => {
    this.setState({ step: 3 })
  }
  addConstraint = (values) => {
    let constraints = this.state.constraints;
    constraints.push(values)
    this.setState({ constraints })
  }
  deleteConstraint = (index) => {
    let constraints = this.state.constraints;
    constraints.splice(index, 1);
    this.setState({ constraints })
  }
  handleStep2 = () => {
    this.setState({
      step: 3
    })
  }
  handleStep3 = (optimizationType) => {
    this.setState({optimizationType, step: 4})
  }
  calculate = () => {
    const solver = new SimpleSimplex({
      objective: this.state.objective,
      constraints: this.state.constraints,
      optimizationType: this.state.optimizationType 
    });
    this.result = solver.solve({methodName: 'simplex'});
    console.log('result:', this.result);
    this.setState({ result: this.result, step: 5 })
  }
  handleBackButton = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1
    }))
  }
  step = () => {
    switch (this.state.step) {
     case 1:
       return (
         <Step1
           handleNext={this.handleStep1}
           handleEdit={this.handleEditStep1}
           objective={this.state.objective}
           step={this.state.step}
         />
       )
     case 2:
       return (
         <Step2
           addConstraint={this.addConstraint}
           handleEdit={this.handleEditStep1}
           step={this.state.step}
           constraints={this.state.constraints}
           deleteConstraint={this.deleteConstraint}
           handleNext={this.handleStep2}
         />
       )
     case 3:
       return (
         <Step3
           step={this.state.step}
           optimizationType={this.state.optimizationType}
           handleNext={this.handleStep3}
         />
       )
     case 4:
       return (
         <div className='step4Container'>
           <h2> Datos cargados: </h2>
           <Step1
             handleNext={this.handleStep1}
             handleEdit={this.handleEditStep1}
             objective={this.state.objective}
             step={this.state.step}
           />
           <Step2
             addConstraint={this.addConstraint}
             handleEdit={this.handleEditStep2}
             step={this.state.step}
             constraints={this.state.constraints}
             deleteConstraint={this.deleteConstraint}
             handleNext={this.handleStep2}
             />
           <Step3
             step={this.state.step}
             handleEdit={this.handleEditStep3}
             handleNext={this.handleStep3}
             optimizationType={this.state.optimizationType}
           />
           <Button className='calculateButton' color='secondary' onClick={this.calculate}>
             Calcular
           </Button>
         </div>
       )
      case 5 :
        return <Result result={this.result} />
     default:
       break;
   }

  }
  render(){
      return (
        <Container className='app-container'>
          <h1> Calculadora simplex </h1>
          <Paper className="app-paper">
            <IconButton onClick={this.handleBackButton} > <ArrowBack /> </IconButton>
           {this.step(this.state.step)}
          </Paper>
        </Container>
      );
  }
}

export default App;
