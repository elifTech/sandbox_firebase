export {ShowPageCtrl};

ShowPageCtrl.$name = 'ShowPageCtrl';
ShowPageCtrl.$inject = ['$scope', 'page', 'PageModel'];
function ShowPageCtrl($scope, page, PageModel) {
  const vm = this;

  page.$bindTo($scope, 'item')
    .then(() => {
      console.log($scope.item);
    });
}