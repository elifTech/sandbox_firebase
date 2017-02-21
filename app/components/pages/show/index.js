import uiRouter from 'angular-ui-router';
import models from '../../../models';
import {ShowPageCtrl} from './ShowPageCtrl.controller';
import showPageTemplate from './show.html';

const moduleName = 'component.pages.show';
export default moduleName;

angular.module(moduleName, [
  models,
  uiRouter
])
  .config(config)
  .controller(ShowPageCtrl.$name, ShowPageCtrl)
;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
  $stateProvider
    .state({
      name: 'pages.show',
      url: '/pages/show/:id',
      template: showPageTemplate,
      controller: ShowPageCtrl.$name,
      controllerAs: 'vm',
      resolve: {
        page: ['PageModel', '$stateParams', (PageModel, $stateParams) => PageModel.getById($stateParams.id).$loaded()]
      }
    })
  ;
}