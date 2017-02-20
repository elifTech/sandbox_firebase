export {EditCompanyCtrl};

EditCompanyCtrl.$name = 'EditCompanyCtrl';
EditCompanyCtrl.$inject = ['$scope', 'company', 'CompanyModel'];
function EditCompanyCtrl($scope, company, CompanyModel) {
  const vm = this;

  company.$bindTo($scope, 'item');

  vm.saveItem = saveItem;

  function saveItem(item) {
    console.info(item);

    item.$save().then(function() {
      console.info('Profile saved!');
    }).catch(function(error) {
      console.info('Error!');
    });
  }
}