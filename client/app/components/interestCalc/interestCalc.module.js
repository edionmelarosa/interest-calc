import angular from 'angular';
import interestCalcComponent from './interestCalc.component';
import SimpleModule from './simple/simple.module';
import CompoundModule from './compound/compound.module';
import ResultModule from './result/result.module';

const interestCalcModule = angular.module('interestCalc', [
  SimpleModule.name, CompoundModule.name, ResultModule.name
])
  .component('interestCalc', interestCalcComponent);
export default interestCalcModule;