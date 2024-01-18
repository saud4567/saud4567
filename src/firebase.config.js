
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import { getStorage} from "firebase/storage"
 
// const firebaseConfig = {
//   apiKey: "AIzaSyDnPzKiUjiezNa4Ou838KMKMhau_w7J1o4",
//   authDomain: "miekia.firebaseapp.com",
//   projectId: "miekia",
//   storageBucket: "miekia.appspot.com",
//   messagingSenderId: "585811391965",
//   appId: "1:585811391965:web:f94f76dc55569dae1af234"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA6GCOx6JGDYi_PX7Fsyjj19TBe9OSa45g",
  authDomain: "nike-ad69d.firebaseapp.com",
  projectId: "nike-ad69d",
  storageBucket: "nike-ad69d.appspot.com",
  messagingSenderId: "112528967162",
  appId: "1:112528967162:web:86dd6b16d2f57b685b5043",
  measurementId: "G-29WBBEPWCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app); 
export const storage = getStorage(app); 

export default app 