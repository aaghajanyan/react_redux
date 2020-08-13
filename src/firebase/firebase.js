import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/analytics";
import "firebase/storage";

import { MConfig } from "../configs";

class Firebase {
  constructor() {
    app.initializeApp(MConfig.firebaseConfig);

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();
    this.mStorage = app.storage();
    this.analytics = app.analytics();

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider).then((res) => {
      this.logEvent("google_login");
      return res;
    });

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider).then((res) => {
      this.logEvent("facebook_login");
      return res;
    });

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) =>
    this.auth.sendPasswordResetEmail(email).then((res) => {
      this.logEvent("password_reset");
      return res;
    });

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then((snapshot) => {
            const dbUser = snapshot.val();
            if (!dbUser) {
              next({});
              return;
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
          })
          .catch(() => {
            /* TODO: handle */
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");

  // *** Users Storage API ***
  userStorageRef = (uid) => this.mStorage.ref(`users/${uid}`);

  /** Google Analytics */
  logEvent = (event) => this.analytics.logEvent(event);
}

export default Firebase;
