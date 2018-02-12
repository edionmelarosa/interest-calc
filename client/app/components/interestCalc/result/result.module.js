import angular from 'angular';
import resultComponent from './result.component';

const resultModule = angular.module('result', [])
  .component('result', resultComponent);
  
export default resultModule;