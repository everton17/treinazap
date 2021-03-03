import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyAnuWNMGgwbK0h_AszUMQ8XDjHI5Spbzr4",
    authDomain: "treinazap-cobrador.firebaseapp.com",
    projectId: "treinazap-cobrador",
    storageBucket: "treinazap-cobrador.appspot.com",
    messagingSenderId: "129393318987",
    appId: "1:129393318987:web:8b9ed628aaf467c6c101ce"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
