import uiRouter from 'angular-ui-router';
import models from '../../../models';
import {EditCompanyCtrl} from './EditCompanyCtrl.controller';
import editCompanyPageTemplate from './editCompany.html';

const moduleName = 'component.companies.edit';
export default moduleName;

angular.module(moduleName, [
  models,
  uiRouter
])
  .config(config)
  .controller(EditCompanyCtrl.$name, EditCompanyCtrl)
;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
  $stateProvider
    .state({
      name: 'companies.new',
      url: '/companies/new',
      template: editCompanyPageTemplate,
      controller: EditCompanyCtrl.$name,
      controllerAs: 'vm',
      resolve: {
        company: ['CompanyModel', (CompanyModel) => CompanyModel.create()]
      }
    })
    .state({
      name: 'companies.edit',
      url: '/companies/:id',
      template: editCompanyPageTemplate,
      controller: EditCompanyCtrl.$name,
      controllerAs: 'vm',
      resolve: {
        company: ['CompanyModel', '$stateParams', (CompanyModel, $stateParams) => CompanyModel.getById($stateParams.id).$loaded()]
      }
    })
  ;
}