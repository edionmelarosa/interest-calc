import template from './result.component.html';
import controller from './result.controller.js';
import './result.component.scss';

let resultComponent = {
  restrict: 'E',
  bindings: {
    results: '='
  },
  template,
  controller,
  controllerAs: 'resultController'
};

export default resultComponent;