import template from './interestCalc.component.html';
import controller from './interestCalc.controller.js';
import './interestCalc.component.scss';

let interestCalcComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'interestCalcController'
};
export default interestCalcComponent;