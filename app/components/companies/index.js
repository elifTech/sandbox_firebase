import listCompanies from './listCompanies';
import editCompany from './editCompany';

const moduleName = 'component.companies';
export default moduleName;

angular.module(moduleName, [
  listCompanies,
  editCompany
]);