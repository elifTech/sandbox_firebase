import ngFirebase from 'angularfire';
import uiRouter from 'angular-ui-router';
import models from '../../models';
import {AuthService} from './AuthService.service';
import {LoginFormCtrl} from './LoginFormCtrl.controller';
import loginPageTemplate from './loginForm.html';
import './loginForm.scss';

const moduleName = 'component.auth';
export default moduleName;
export {AuthService};

angular.module(moduleName, [
  models,
  ngFirebase,
  uiRouter
])

  .config(config)
  .service(AuthService.$name, AuthService)
  .controller(LoginFormCtrl.$name, LoginFormCtrl)
;


config.$inject = ['$stateProvider'];
function config($stateProvider) {
  $stateProvider.state({
    name: 'signin',
    url: '/signin',
    template: loginPageTemplate,
    controller: LoginFormCtrl.$name,
    controllerAs: 'vm'
  });
}