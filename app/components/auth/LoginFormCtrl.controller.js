import {AuthService} from './AuthService.service';

export {LoginFormCtrl};

LoginFormCtrl.$name = 'LoginFormCtrl';
LoginFormCtrl.$inject = ['$firebaseAuth', AuthService.$name];
function LoginFormCtrl($firebaseAuth, AuthService) {
  const vm = this;

  vm.user = {
    email: 'esvit666@gmail.com',
    password: 'awdawd'
  };

  vm.authAsUser = authAsUser;

  function authAsUser(user) {
    const auth = $firebaseAuth();

    auth.$signInWithEmailAndPassword(user.email, user.password).then(function (firebaseUser) {
      console.log("Signed in as:", firebaseUser);
    }).catch(function (error) {
      console.log("Authentication failed:", error);
    });
  }
}