import firebase from 'firebase';
import ngFirebase from 'angularfire';
import configVars from '../config';
import {CompanyModel} from './CompanyModel.service';
import {PageModel} from './PageModel.service';

const moduleName = 'models';
export default moduleName;
export {
  CompanyModel,
  PageModel
};

angular.module(moduleName, [
  ngFirebase
])
  .config(config)
  .factory(CompanyModel.$name, CompanyModel)
  .factory(PageModel.$name, PageModel)
;

config.$inject = [];
function config() {
  // Initialize Firebase
  firebase.initializeApp(configVars.firebase);
}