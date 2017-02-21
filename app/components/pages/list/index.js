import uiRouter from 'angular-ui-router';
import models from '../../../models';
import {PagincationService} from './PagincationService.service';
import {ListPagesCtrl} from './ListPagesCtrl.controller';
import listPagesTemplate from './list.html';
import './list.scss';

const moduleName = 'component.pages.list';
export default moduleName;

angular.module(moduleName, [
  models,
  uiRouter
])
  .config(config)
  .factory(PagincationService.$name, PagincationService)
  .controller(ListPagesCtrl.$name, ListPagesCtrl)
;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
  $stateProvider
    .state({
      name: 'pages',
      url: '/pages',
      template: listPagesTemplate,
      controller: ListPagesCtrl.$name,
      controllerAs: 'vm'
    })
  ;
}