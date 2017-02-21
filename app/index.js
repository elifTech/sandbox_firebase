import angular from 'angular';
import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import './global.scss';

import {GlobalCtrl} from './GlobalCtrl.controller';

import models from './models';
import auth from './components/auth';
import home from './components/home';
import companies from './components/companies';
import pages from './components/pages';

angular.module('app', [
  models,
  auth,
  home,
  companies,
  pages
])
  .controller(GlobalCtrl.$name, GlobalCtrl)
;