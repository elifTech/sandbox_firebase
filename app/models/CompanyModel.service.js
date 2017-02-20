export {CompanyModel};

CompanyModel.$name = 'CompanyModel';
CompanyModel.$inject = ['$firebaseObject', '$firebaseArray'];
function CompanyModel($firebaseObject, $firebaseArray) {
  const ref = firebase.database().ref('companies');

  return {
    create,
    getById,
    getList
  };

  function create() {
    return $firebaseObject(ref.push());
  }

  function getById(uid) {
    return $firebaseObject(ref.child(uid));
  }

  function getList(options) {
    options = options || {};
    var curRef = ref;
    if (options.sort) {
      curRef = curRef.orderByChild(options.sort);
    }
  //.orderByChild("timestamp").limitToLast(3);

    return curRef;
  }
}