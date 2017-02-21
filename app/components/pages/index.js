import list from './list';
import edit from './edit';
import show from './show';

const moduleName = 'component.pages';
export default moduleName;

angular.module(moduleName, [
  list,
  edit,
  show
]);