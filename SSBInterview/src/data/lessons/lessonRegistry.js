import SetRealpreviousQuestion from "./Algebra/Foundation/Set/SetRealpreviousQuestion.js";
import quadraticEquationQuestion from "./Algebra/Foundation/QuadraticEquation/QuadraticEquationQuestion.js";
import algebraSequencesSeriesQuestion from "./Algebra/Foundation/Progressions/progessionsQuestion.js";
import complexNumberQuestion from "./Algebra/Foundation/ComplexNumber/complexNumbersQuestion.js";
import permutationAndCombinationsQuestion from "./Algebra/Foundation/PermutationAndCombinations/PermutationandCombinations.js";
import angleAndTrigonometricRatioQuestion from "./trigonometry/Foundation/AngleAndTrigonometic-Ratio/AngleAndTrigonometic-Ratio.js";
import heightAndDistanceQuestion from "./trigonometry/Foundation/HeightandDistance/HeightandDistance.js";
import propertiesOfTriangleQuestion from "./trigonometry/Foundation/propertiesOfTrangles/propertiesOfTrangles.js";
import inverseTrigonometryQuestion from "./trigonometry/Foundation/Inverse_Trigonometry/InverseTrigonometry.js";
import hyperbolicFunctionsQuestion from "./trigonometry/Hyperbolic_02Function/Hyperbolic_02Function.js";
import propertiesOfDeterminantsQuestion from "./MatricesAndDeterminants/Foundation/Determinant/determinant.js";
import matricesAndDeterminantsQuestion from "./MatricesAndDeterminants/Foundation/Matrices/matrices.js";
import twoDimensionalGeometryQuestion from "./AnalyticalGeometry/Foundation/TwoDimensionalGeometry/twoDimensionalGeometry.js";
import threeDimensionalGeometryQuestion from "./AnalyticalGeometry/Foundation/ThreeDimensionalGeometry/ThreeDimensionalgeometry.js";
import meanAndSummationQuestion from "./StatisticsProbability/Foundation/Statistics/statistics.js";
import probabilityOfDiceQuestion from "./StatisticsProbability/Foundation/Probability/probability.js";


import monotonicFunctionAndMaximaMinima from "./DifferentialCalculus/Foundation/MonotonicFunctionAndMaximaMinima/MonotonicFunctionAndMaximaMinima.js";
import limitContinuityAndDifferentiabilityQuestion from "./DifferentialCalculus/Foundation/Limit_Continuity_And_Differentiability/Limit_Continuity_And_Differentiability.js";
import derivativeQuestion from "./DifferentialCalculus/Foundation/Derivative/derivative.js";


import initeIntegralQuestion from "./IntegralCalculus/Foundation/IndefiniteCalculus/IndefiniteCalculus.js";
import definiteIntegralQuestion from "./IntegralCalculus/Foundation/DefiniteIntegral/DefiniteIntegral.js";
import areaUnderTheCurves from "./IntegralCalculus/Foundation/AreaUnderTheCurves/AreaUnderTheCurves.js";
import differentialEquations from "./IntegralCalculus/Foundation/DifferentialEquations/DifferentialEquations.js";

const lessonCatalog = {
  // keys are mission ids from roadmap.mjs
  "set-relationandfunction": SetRealpreviousQuestion,
  complex0Number: complexNumberQuestion,
  progession02: algebraSequencesSeriesQuestion,
  "Quadratic04-Equation": quadraticEquationQuestion,

  //angleAndTrigonometic_Ratio: angleTestLesson,
permulationandcombinations:permutationAndCombinationsQuestion,
  // old key, kept so saved progress still works
  "algebra-foundation-arithmetic-operations": SetRealpreviousQuestion,
  "angleAndTrigonometic_Ratio":angleAndTrigonometricRatioQuestion,
"height_and_Distances":heightAndDistanceQuestion,
"propertiesOf_Trangles":propertiesOfTriangleQuestion,
"Inverse_Trigonometry":inverseTrigonometryQuestion,
"Hyperbolic_02Function": hyperbolicFunctionsQuestion,
"Determinant_01":propertiesOfDeterminantsQuestion,
"Matrices_02":matricesAndDeterminantsQuestion,

"Two_Dimensional_Geometry":twoDimensionalGeometryQuestion,
"Three_Dimensional_Geometry":threeDimensionalGeometryQuestion,

"Statistics_12":meanAndSummationQuestion,
"probability_13":probabilityOfDiceQuestion,

"Limit_Continuity_And_Differentiability":limitContinuityAndDifferentiabilityQuestion,
"Derivative_02":derivativeQuestion,
"Monotonic_FunctionAndMaxima_Minima":monotonicFunctionAndMaximaMinima,
"Indefinite_Calculus":initeIntegralQuestion,
"Definite_Integral":definiteIntegralQuestion,
"Area_Under_TheCurves":areaUnderTheCurves,
"Differential_Equations":differentialEquations
};

export function resolveLessonById(lessonId) {
  return lessonCatalog[lessonId] ?? null;
}

export default lessonCatalog;