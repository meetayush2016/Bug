import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMBFYwXjgDDtpo2cRLYI3kiSJe4FMUPYA",
  authDomain: "bugg-cb65f.firebaseapp.com",
  projectId: "bugg-cb65f",
  storageBucket: "bugg-cb65f.appspot.com",
  messagingSenderId: "203999591529",
  appId: "1:203999591529:web:11416222e6825ded01b6f8",
  measurementId: "G-P8NRK5E5EY"
};

  firebase.initializeApp(config);

  export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;

    const  userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt=new Date();
  
        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
        }catch(error){
           console.log('error creating user', error.message); 
        }
      }
      return userRef;
    };
    export const addCollectionAndDocuments=async(collectionKey, objectsToAdd)=>{
        const collectionRef= firestore.collection(collectionKey);
        console.log(collectionRef);
    
        const batch=firestore.batch();
        objectsToAdd.forEach(obj => {
          const newDocRef=collectionRef.doc();
          batch.set(newDocRef, obj);
        });
    
        return await batch.commit();
      };
    
      export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map((doc) => {
          const { title, items } = doc.data();
      
          return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
          };
        });
        return transformedCollection.reduce((accumulator, collection)=> {
            accumulator[collection.title.toLowerCase()]=collection;
            return accumulator;
          } ,{});
        };
        
       export const getCurrentUser=()=>{
         return new Promise((resolve, reject)=>{
           const unsubscribe=auth.onAuthStateChanged(userAuth=>{
             unsubscribe();
             resolve(userAuth);
           }, reject)
         });
       }
      
        export const auth= firebase.auth();
        export const firestore= firebase.firestore();
        export const googleProvider=new firebase.auth.GoogleAuthProvider();
        googleProvider.setCustomParameters({prompt: 'select_account'});
        export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);
      
        export default firebase;            