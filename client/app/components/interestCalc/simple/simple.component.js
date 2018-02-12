import template from './simple.component.html';
import controller from './simple.controller.js';
import './simple.component.scss';

let simpleComponent = {
  restrict: 'E',
  bindings: {
    tab: '='
  },
  template,
  controller,
  controllerAs: 'simpleController'
};
export default simpleComponent;