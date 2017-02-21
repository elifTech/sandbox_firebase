export {EditPageCtrl};

EditPageCtrl.$name = 'EditPageCtrl';
EditPageCtrl.$inject = ['$scope', 'page', 'PageModel'];
function EditPageCtrl($scope, page, PageModel) {
  const vm = this;

  vm.saveItem = saveItem;
  vm.add = add;
  vm.del = del;

  page.$bindTo($scope, 'item')
    .then(() => {
      // vm.add();
    });

  function add () {
    $scope.item.sections = $scope.item.sections || [];
    $scope.item.sections.push({
      title: '',
      text: ''
    });
  }

  function del(ind) {
    delete $scope.item.sections[ind];
  }

  function saveItem(item) {
    console.info(item);

    item.$save().then(function() {
      console.info('Profile saved!');
    }).catch(function(error) {
      console.info('Error!');
    });
  }
}