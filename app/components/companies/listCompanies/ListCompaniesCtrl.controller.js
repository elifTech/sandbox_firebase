export {ListCompaniesCtrl};

ListCompaniesCtrl.$name = 'ListCompaniesCtrl';
ListCompaniesCtrl.$inject = ['$scope', 'CompanyModel', 'AuthService', '$firebaseArray'];
function ListCompaniesCtrl($scope, CompanyModel, AuthService, $firebaseArray) {
  const vm = this;

  $scope.listOptions = {
    sort: 'timestamp'
  };

  let ref = CompanyModel.getList($scope.listOptions);

  vm.companies = $firebaseArray(ref);
}