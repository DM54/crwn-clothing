import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const config ={
    
        apiKey: "AIzaSyCrSWZ-IM1o30ApXy-GeNTLegJY7GpYEyY",
        authDomain: "crwn-clothing-c52cf.firebaseapp.com",
        databaseURL: "https://crwn-clothing-c52cf.firebaseio.com",
        projectId: "crwn-clothing-c52cf",
        storageBucket: "crwn-clothing-c52cf.appspot.com",
        messagingSenderId: "1058502045181",
        appId: "1:1058502045181:web:51791c2725afba3c0bfd94",
        measurementId: "G-EZ6TH9JZRB"
     
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

     console.log(snapShot);

     if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
           await userRef.set({
                   displayName,
                   email,
                   createdAt,
                   ...additionalData
           })
        }catch (error){
             console.log('error creating user', error.message);   
        }
        
     }
     return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
