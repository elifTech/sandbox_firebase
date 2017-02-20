import uiRouter from 'angular-ui-router';
import models from '../../../models';
import {PagincationService} from './PagincationService.service';
import {ListCompaniesCtrl} from './ListCompaniesCtrl.controller';
import listCompaniesPageTemplate from './listCompanies.html';
import './listCompanies.scss';

const moduleName = 'component.companies.list';
export default moduleName;

angular.module(moduleName, [
  models,
  uiRouter
])
  .config(config)
  .factory(PagincationService.$name, PagincationService)
  .controller(ListCompaniesCtrl.$name, ListCompaniesCtrl)
;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
  $stateProvider
    .state({
      name: 'companies',
      url: '/companies',
      template: listCompaniesPageTemplate,
      controller: ListCompaniesCtrl.$name,
      controllerAs: 'vm'
    })
  ;
}