export {PageModel};

PageModel.$name = 'PageModel';
PageModel.$inject = ['$firebaseObject', '$firebaseArray'];
function PageModel($firebaseObject, $firebaseArray) {
  const ref = firebase.database().ref('pages');

  return {
    create,
    getById,
    getList
  };

  function create() {
    return $firebaseObject(ref.push({sections: []}));
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