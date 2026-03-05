import { collection, getDocs } from "firebase/firestore"; 
import { database } from "./firebaseConfig";



const getStatus = async (message) => {
    const querySnapshot = await getDocs(collection(database, "statuses"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    });
}

export default getStatus();