import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCIV2Bv_heC_uS5WINrKihEtRmkXp48ZFI",
  authDomain: "busapp-ed656.firebaseapp.com",
  databaseURL: "https://busapp-ed656.firebaseio.com",
  projectId: "busapp-ed656",
  storageBucket: "",
  messagingSenderId: "871466590627",
  appId: "1:871466590627:web:290431ee57f48561bc7a16"
};

class Firebase{
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();

        this.serverValue = app.database.ServerValue;
    }
    
    doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: "http://localhost:3000", 
    });

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

    // *** Merge Auth and DB User API *** //
    onAuthUserListener = (next, fallback) =>
      this.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified, 
              providerData: authUser.providerData,
              ...dbUser,
            };
            
            next(authUser);
          });
        } 
        else {
          fallback();
        } 
      });
}

export default Firebase;