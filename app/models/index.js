import firebase from 'firebase';
import ngFirebase from 'angularfire';
import configVars from '../config';
import {CompanyModel} from './CompanyModel.service';

const moduleName = 'models';
export default moduleName;
export {
  CompanyModel
};

angular.module(moduleName, [
  ngFirebase
])
  .config(config)
  .factory(CompanyModel.$name, CompanyModel)
;

config.$inject = [];
function config() {
  // Initialize Firebase
  firebase.initializeApp(configVars.firebase);
}