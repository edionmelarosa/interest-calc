import template from './compound.component.html';
import controller from './compound.controller.js';
import './compound.component.scss';

let compoundComponent = {
  restrict: 'E',
  bindings: {
    tab: '='
  },
  template,
  controller,
  controllerAs: 'compoundController'
};
export default compoundComponent;