import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Header from './Header';
const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/product',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
  };
function LoginPage(props) {
    return (
        <>
        <Header/>
        <div className="login">
            <h1>Đăng nhập</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
        
        </>
    );
}

export default LoginPage;