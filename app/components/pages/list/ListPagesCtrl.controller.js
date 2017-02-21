export {ListPagesCtrl};

ListPagesCtrl.$name = 'ListCompaniesCtrl';
ListPagesCtrl.$inject = ['$scope', 'PageModel', 'AuthService', '$firebaseArray'];
function ListPagesCtrl($scope, PageModel, AuthService, $firebaseArray) {
  const vm = this;

  $scope.listOptions = {
    sort: 'timestamp'
  };

  let ref = PageModel.getList($scope.listOptions);

  vm.pages = $firebaseArray(ref);
}