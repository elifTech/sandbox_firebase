export {AuthService};

AuthService.$name = 'AuthService';
AuthService.$inject = ['$rootScope', '$firebaseAuth'];
function AuthService($rootScope, $firebaseAuth) {
  const auth = $firebaseAuth();
  let currentUser = null;

  auth.$onAuthStateChanged(function (user) {
    currentUser = user;
    $rootScope.$broadcast('userChanged', user);
  });
  return {
    getUser,
    signOut
  };

  function getUser() {
    return auth.$getAuth();
  }

  function signOut() {
    return auth.$signOut();
  }
}