import uiRouter from 'angular-ui-router';
import models from '../../../models';
import {EditPageCtrl} from './EditPageCtrl.controller';
import editPageTemplate from './edit.html';

const moduleName = 'component.pages.edit';
export default moduleName;

angular.module(moduleName, [
  models,
  uiRouter
])
  .config(config)
  .controller(EditPageCtrl.$name, EditPageCtrl)
;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
  $stateProvider
    .state({
      name: 'pages.new',
      url: '/pages/new',
      template: editPageTemplate,
      controller: EditPageCtrl.$name,
      controllerAs: 'vm',
      resolve: {
        page: ['PageModel', (PageModel) => PageModel.create()]
      }
    })
    .state({
      name: 'pages.edit',
      url: '/pages/:id',
      template: editPageTemplate,
      controller: EditPageCtrl.$name,
      controllerAs: 'vm',
      resolve: {
        page: ['PageModel', '$stateParams', (PageModel, $stateParams) => PageModel.getById($stateParams.id).$loaded()]
      }
    })
  ;
}