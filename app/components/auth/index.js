import uiRouter from 'angular-ui-router';

const appName = 'component.auth';
export default appName;

const app = angular.module(appName, [
  uiRouter
]);


app.config(config);


function config($stateProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    template: 'Home'
  });
  $stateProvider.state({
    name: 'signin',
    url: '/signin',
    template: template,
    controller: 'LoginFormCtrl',
    controllerAs: 'vm'
  });
}