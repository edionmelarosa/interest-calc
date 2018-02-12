import angular from 'angular';
    import InterestCalcModule from './interestCalc/interestCalc.module';

const ComponentsModule = angular.module('app.components',[
       InterestCalcModule.name, 
]);

export default ComponentsModule;