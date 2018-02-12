import angular from 'angular';
import compoundComponent from './compound.component';

const compoundModule = angular.module('compound', [])
  .component('compound', compoundComponent);
export default compoundModule;