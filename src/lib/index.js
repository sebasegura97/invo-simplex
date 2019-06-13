const mathjs = require('mathjs');
const simplex = require('./algorithms/simplex');

const {
  mapVector,
  assertCoefficientParallelism,
  generateTableauRow,
  constraintToPreRow,
  extractNamedSolution,
} = require('./simplex-helpers');

export default class SimpleSimplex {
  constructor ({
    optimizationType,
    objective,
    constraints,
  }) {
    // 
    assertCoefficientParallelism({
      objective,
      constraints,
    });

    this.objective = objective;
    this.constraints = constraints;
    this.optimizationType = optimizationType;
    this.numRows = constraints.length + 1;

    const {
      varNames,
      indicesToNames,
      namesToIndices,
      vectorValues,
    } = mapVector(objective);
    this.varNames = varNames;
    this.indicesToNames = indicesToNames;
    this.namesToIndices = namesToIndices;
    this.objectiveVectorValues = vectorValues;
    this.tableau = this.generateTableau();
  }

  generateTableau () {
    if (this.optimizationType !== 'max') throw new Error('No es un problema de maximizacion');
    const constraintPreRows = this.constraints.map(constraintToPreRow);
    const constraintTableauRows = constraintPreRows.map((preRow, index) => generateTableauRow({
      ...preRow,
      rowNo: index,
      numRows: this.numRows,
    }));
    const objectiveTableauRow = generateTableauRow({
      vectorValues: mathjs.multiply(this.objectiveVectorValues, -1),
      rowNo: this.numRows - 1,
      numRows: this.numRows,
    });
    const tableau = [
      ...constraintTableauRows,
      objectiveTableauRow,
    ];
    return tableau;
  }

  solve ({
    methodName,
  }) {
    if (methodName !== 'simplex') throw new Error('El metodo no se reconoce');
    const details = simplex({
      tableau: this.tableau,
    });
    if (!details.isOptimal) throw new Error('La solucion no es optima');
    const solution = extractNamedSolution({
      tableau: details.finalTableau,
      indicesToNames: this.indicesToNames,
      allNames: this.varNames,
    });
    return {
      details,
      solution,
    };
  }
};
