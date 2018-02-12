import angular from 'angular';
import simpleComponent from './simple.component';
// import ResultComponent from '../result/result.component';

const simpleModule = angular.module('simple', [
  // ResultComponent.name
]).component('simple', simpleComponent);

export default simpleModule;