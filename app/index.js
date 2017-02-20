import angular from 'angular';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './global.scss';

import {GlobalCtrl} from './GlobalCtrl.controller';

import models from './models';
import auth from './components/auth';
import home from './components/home';
import companies from './components/companies';

angular.module('app', [
  models,
  auth,
  home,
  companies
])
  .controller(GlobalCtrl.$name, GlobalCtrl)
;