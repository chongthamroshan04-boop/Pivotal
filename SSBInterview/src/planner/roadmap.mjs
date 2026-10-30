
const MathMission ={
id:"math_mission",
subject:"math",
order:1,

algebra:[
    {
id:"set-relationandfunction",
title:"mission1",
topic:"Sets,Relations and Functions"

},
  {
id:"complex0Number",
title:"mission2",
topic:"complex Number"
},
 {
id:"progession02",
title:"mission3",
topic:"Progression"
},
 {
id:"Quadratic04-Equation",
title:"mission4",
topic:"Quadratic Equation"
},
 {
id:"permulationandcombinations",
title:"mission5",
topic:"Permutation and Combinations",
},
],
trigonometry:[
 {
id:"angleAndTrigonometic_Ratio",
title:"mission6",
topic:"Angle and Trigonometic-Ratio"

},
  {
id:"height_and_Distances",
title:"mission7",
topic:"height and Distances"
},
 {
id:"propertiesOf_Trangles",
title:"mission8",
topic:"Properties of Triangle"
},
 {
id:"Inverse_Trigonometry",
title:"mission9",
topic:"Inverse Trigonometry"
},
 {
id:"Hyperbolic_02Function",
title:"mission10",
topic:"Hyperbolic Function",
},
],
MatricesAndDeterminants:[
 {
id:"Determinant_01",
title:"mission11",
topic:"Determinant"

},
  {
id:"Matrices_02",
title:"mission12",
topic:"Matrices"
},
],
AnalyticalGeometry:[
    {
   id:"Two_Dimensional_Geometry" ,
   title:"mission13",
   topic:"TwoDimensionalGeometry"    
    },
     {
   id:"Three_Dimensional_Geometry",
   title:"mission14",
   topic:"ThreeDimensionalGeometry"    
    },
],
StatisticsProbability:[
    {
   id:"Statistics_12",
   title:"mission15",
   topic:"Statistics"    
    },
     {
   id:"probability_13",
   title:"mission16",
   topic:"probability"    
    }, 

],
DifferentialCalculus:[
    {
   id:"Limit_Continuity_And_Differentiability",
   title:"mission17",
   topic:"Limit,ContinuityAndDifferentiability"    
    },
     {
   id:"Derivative_02",
   title:"mission18",
   topic:"Derivative"    
    }, 
     {
   id:"Monotonic_FunctionAndMaxima_Minima",
   title:"mission19",
   topic:"MonotonicFunctionAndMaxima,Minima"    
    }, 
],
IntegralCalculus:[
 {
   id:"Indefinite_Calculus",
   title:"mission20",
   topic:"IndefiniteCalculus"    
    },
     {
   id:"Definite_Integral",
   title:"mission21",
   topic:"Definite Integral"    
    }, 
     {
   id:"Area_Under_TheCurves",
   title:"mission22",
   topic:"AreaUnderTheCurves"    
    }, 
     {
   id:"Differential_Equations",
   title:"mission23",
   topic:"DifferentialEquations"    
    }, 
    
]}




export function roadmap() {




//value.map((mission) => ({
//...mission,
//group: key,
 //lessonId: mission.lessonId ?? mission.id,
//}))




  return Object.entries(MathMission)
    .filter(([key, value]) => Array.isArray(value))
    .flatMap(([key, value]) =>
      value.map((mission) => ({ ...mission, group: key }))
    );
}


export default roadmap;