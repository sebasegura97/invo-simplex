(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},201:function(e,t,a){e.exports=a(632)},206:function(e,t,a){},207:function(e,t,a){},632:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(50),r=a.n(i),l=(a(206),a(184)),o=a(185),s=a(194),m=a(186),d=a(195),u=(a(207),a(36)),p=a(69),E=a(645),v=a(646),h=(a(119),function(e){var t=c.a.useState({a:0,b:0,c:0}),a=Object(p.a)(t,2),n=a[0],i=a[1];return c.a.createElement("div",{className:"steps-container"},c.a.createElement(E.a,{variant:"h6"}," Funcion objetivo: "),c.a.createElement("div",{className:"functionContainer"},c.a.createElement("p",{className:"objectiveFunction"}," Z =  "),c.a.createElement("div",{className:"variableContainer"},c.a.createElement("input",{type:"text",name:"a",className:"coeficientInput",onChange:function(e){return i(Object(u.a)({},n,{a:parseInt(e.target.value)}))}}),c.a.createElement("p",{className:"variables"},"A")),c.a.createElement("div",{className:"variableContainer"},c.a.createElement("input",{type:"text",name:"b",className:"coeficientInput",onChange:function(e){return i(Object(u.a)({},n,{b:parseInt(e.target.value)}))}}),c.a.createElement("p",{className:"variables"},"B")),c.a.createElement("div",{className:"variableContainer"},c.a.createElement("input",{type:"text",name:"c",className:"coeficientInput",onChange:function(e){return i(Object(u.a)({},n,{c:parseInt(e.target.value)}))}}),c.a.createElement("p",{className:"variables"},"C"))),c.a.createElement(v.a,{className:"buttonNext",color:"primary",onClick:function(){e.handleNext(n)}},"Continuar"))}),b=function(e){return c.a.createElement("div",{className:"objectiveFunction"},c.a.createElement(E.a,{variant:"h6"}," Funcion objetivo: "),c.a.createElement("p",null,"Z = ",e.objective.a,"A ",e.objective.b,"B ",e.objective.c,"C "),c.a.createElement(v.a,{className:"buttonNext",color:"primary",onClick:e.handleEdit},"Editar"))};function N(e){return 1===e.step?c.a.createElement(h,{handleNext:e.handleNext}):c.a.createElement(b,{objective:e.objective,handleEdit:e.handleEdit})}var C=a(653),f=Object(C.a)({constraintSelector:{border:"1px solid rgb(105, 169, 224)",borderRadius:3,position:"",zIndex:10,padding:10,marginRight:5,marginLeft:5,"& :hover":{cursor:"pointer"}}}),g=function(e){var t=c.a.useState({namedVector:{a:0,b:0,c:0},constraint:"=",constant:0}),a=Object(p.a)(t,2),n=a[0],i=a[1],r=f(n),l=function(e){console.log(e.target.id),document.getElementById("=").style.background="white",document.getElementById(">=").style.background="white",document.getElementById("<=").style.background="white",document.getElementById("".concat(e.target.id)).style.background="rgb(105, 169, 224)",i(Object(u.a)({},n,{constraint:"".concat(e.target.id)}))};return c.a.createElement("div",{className:"step2-container"},c.a.createElement("h3",{className:"stepSubtitle",variant:"h6"}," Agregar restricci\xf3n: "),c.a.createElement("div",{className:"functionContainer"},c.a.createElement("div",{className:"variableContainer"},c.a.createElement("input",{type:"text",name:"a",className:"coeficientInput",onChange:function(e){return i(Object(u.a)({},n,{namedVector:Object(u.a)({},n.namedVector,{a:parseInt(e.target.value)})}))}}),c.a.createElement("p",{className:"variables"},"A")),c.a.createElement("div",{className:"variableContainer"},c.a.createElement("input",{type:"text",name:"b",className:"coeficientInput",onChange:function(e){return i(Object(u.a)({},n,{namedVector:Object(u.a)({},n.namedVector,{b:parseInt(e.target.value)})}))}}),c.a.createElement("p",{className:"variables"},"B")),c.a.createElement("div",{className:"variableContainer"},c.a.createElement("input",{type:"text",name:"c",className:"coeficientInput",onChange:function(e){return i(Object(u.a)({},n,{namedVector:Object(u.a)({},n.namedVector,{c:parseInt(e.target.value)})}))}}),c.a.createElement("p",{className:"variables"},"C")),c.a.createElement("div",{className:r.constraintSelector,id:">=",onClick:l},c.a.createElement("span",{id:">=",className:"constraintText"}," >= ")),c.a.createElement("div",{className:r.constraintSelector,id:"=",onClick:l},c.a.createElement("span",{id:"=",className:"constraintText"}," = ")),c.a.createElement("div",{className:r.constraintSelector,id:"<=",onClick:l},c.a.createElement("span",{id:"<=",className:"constraintText"}," ","<="," ")),c.a.createElement("div",{className:"variableContainer"},c.a.createElement("input",{type:"text",name:"constant",className:"coeficientInput",onChange:function(e){return i(Object(u.a)({},n,{constant:parseInt(e.target.value)}))}})),c.a.createElement(v.a,{className:"buttonNext",color:"secondary",onClick:function(){return e.addConstraint(n)}},"Agregar")),c.a.createElement("div",{className:"inlineButtonsContainer"}))},y=function(e){var t=e.constraint,a=t.namedVector,n=t.constraint,i=t.constant;return c.a.createElement("div",{className:"steps-container"},c.a.createElement("div",{className:"constraintViewContainer"},c.a.createElement("p",null,a.a,"A ",a.b,"B ",a.c,"C ",n," ",i),c.a.createElement(v.a,{className:"buttonNext",color:"secondary",onClick:e.delete},"Eliminar")))};function x(e){var t=e.step,a=null;return e.constraints.length>0&&(a=e.constraints.map(function(t,a){return c.a.createElement(y,{key:a,delete:function(){return e.deleteConstraint(a)},constraint:t})})),c.a.createElement("div",{className:"steps-container"},c.a.createElement(E.a,{variant:"h6"}," Restricciones: "),a,2===t?c.a.createElement(g,{handleNext:e.handleNext,addConstraint:e.addConstraint}):null,2===t?c.a.createElement(v.a,{className:"buttonNext",color:"primary",onClick:e.handleNext}," Continuar "):null,4===t?c.a.createElement(v.a,{className:"buttonNext",color:"primary",onClick:e.handleEdit}," Editar "):null)}var j=a(647),S=a(648);function k(e){var t=e.step,a=e.optimizationType,n=c.a.useState({optimizationType:"max"}),i=Object(p.a)(n,2),r=i[0],l=i[1],o=function(e){document.getElementById("min").style.background="white",document.getElementById("max").style.background="white",document.getElementById(e.target.id).style.background="rgb(105, 169, 224)",l({optimizationType:e.target.id})};return 3===t?c.a.createElement("div",{className:"steps-container"},c.a.createElement(E.a,{variant:"h6"}," Tipo de optimizacion: "),c.a.createElement("div",{className:"optimization-container"},c.a.createElement("div",{className:"optmization-type",id:"max",onClick:o}," ",c.a.createElement(j.a,{id:"max"})," ",c.a.createElement("p",{id:"max"},"Maximizar")),c.a.createElement("div",{className:"optmization-type",id:"min",onClick:o}," ",c.a.createElement(S.a,{id:"min"})," ",c.a.createElement("p",{id:"min"},"Minimizar"))),c.a.createElement(v.a,{className:"buttonNext",color:"primary",onClick:function(){return e.handleNext(r.optimizationType)}},"Continuar")):4===t?c.a.createElement("div",{className:"steps-container"},c.a.createElement(E.a,{variant:"h6"}," Tipo de optimizacion: "),c.a.createElement("div",{className:"optimization-container"},"max"===a?c.a.createElement("div",{className:"optmization-type",id:"max",style:{backgroundColor:"rgb(105, 169, 224)"},onClick:o}," ",c.a.createElement(j.a,{id:"max"})," ",c.a.createElement("p",{id:"max"},"Maximizar")):c.a.createElement("div",{className:"optmization-type",style:{backgroundColor:"rgb(105, 169, 224)"},id:"min",onClick:o}," ",c.a.createElement(S.a,{id:"min"})," ",c.a.createElement("p",{id:"min"},"Minimizar"))),c.a.createElement(v.a,{className:"buttonNext",color:"primary",onClick:e.handleEdit},"Editar")):void 0}function z(e){var t=e.result.details.isOptimal,a=e.result.solution,n=a.coefficients,i=a.optimum;return t?c.a.createElement("div",null,c.a.createElement("h3",null," Se ha encontrado una solucion optima! "),c.a.createElement("h4",null," Coeficientes: "),c.a.createElement("p",null," A = ",n.a," "),c.a.createElement("p",null," B = ",n.b," "),c.a.createElement("p",null," C = ",n.c," "),c.a.createElement("h4",null," Valor optimo de la funcion: "),c.a.createElement("p",null," ",i," ")):c.a.createElement("div",null,c.a.createElement("h3",null," No se ha encontrado solucion optima \ud83d\ude22 "))}var I=a(649),w=a(650),O=a(651),B=a(652),T=a(221),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={step:4,objective:{a:0,b:0,c:0},constraints:[],optimizationType:"max"},a.handleStep1=function(e){a.setState({step:2,objective:e}),console.log("state",a.state)},a.handleEditStep1=function(){a.setState({step:1})},a.handleEditStep2=function(){a.setState({step:2})},a.handleEditStep3=function(){a.setState({step:3})},a.addConstraint=function(e){var t=a.state.constraints;t.push(e),a.setState({constraints:t})},a.deleteConstraint=function(e){var t=a.state.constraints;t.splice(e,1),a.setState({constraints:t})},a.handleStep2=function(){a.setState({step:3})},a.handleStep3=function(e){a.setState({optimizationType:e,step:4})},a.calculate=function(){var e=new T({objective:a.state.objective,constraints:a.state.constraints,optimizationType:a.state.optimizationType});a.result=e.solve({methodName:"simplex"}),console.log("result:",a.result),a.setState({result:a.result,step:5})},a.handleBackButton=function(){a.setState(function(e){return{step:e.step-1}})},a.step=function(){switch(a.state.step){case 1:return c.a.createElement(N,{handleNext:a.handleStep1,handleEdit:a.handleEditStep1,objective:a.state.objective,step:a.state.step});case 2:return c.a.createElement(x,{addConstraint:a.addConstraint,handleEdit:a.handleEditStep1,step:a.state.step,constraints:a.state.constraints,deleteConstraint:a.deleteConstraint,handleNext:a.handleStep2});case 3:return c.a.createElement(k,{step:a.state.step,optimizationType:a.state.optimizationType,handleNext:a.handleStep3});case 4:return c.a.createElement("div",{className:"step4Container"},c.a.createElement("h2",null," Datos cargados: "),c.a.createElement(N,{handleNext:a.handleStep1,handleEdit:a.handleEditStep1,objective:a.state.objective,step:a.state.step}),c.a.createElement(x,{addConstraint:a.addConstraint,handleEdit:a.handleEditStep2,step:a.state.step,constraints:a.state.constraints,deleteConstraint:a.deleteConstraint,handleNext:a.handleStep2}),c.a.createElement(k,{step:a.state.step,handleEdit:a.handleEditStep3,handleNext:a.handleStep3,optimizationType:a.state.optimizationType}),c.a.createElement(v.a,{className:"calculateButton",color:"secondary",onClick:a.calculate},"Calcular"));case 5:return c.a.createElement(z,{result:a.result})}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(I.a,{className:"app-container"},c.a.createElement("h1",null," Calculadora simplex "),c.a.createElement(w.a,{className:"app-paper"},c.a.createElement(O.a,{onClick:this.handleBackButton}," ",c.a.createElement(B.a,null)," "),this.step(this.state.step)))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[201,1,2]]]);
//# sourceMappingURL=main.ea72d017.chunk.js.map