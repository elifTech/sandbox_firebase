import uiRouter from 'angular-ui-router';
import {AuthService} from '../auth';
import {HomeCtrl} from './HomeCtrl.controller';
import homePageTemplate from './home.html';

const moduleName = 'component.home';
export default moduleName;

angular.module(moduleName, [
  uiRouter
])
  .config(config)
  .service(AuthService.$name, AuthService)
  .controller(HomeCtrl.$name, HomeCtrl)
;

config.$inject = ['$stateProvider'];
function config($stateProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    template: homePageTemplate,
    controller: HomeCtrl.$name,
    controllerAs: 'vm'
  });
}