import { collection, addDoc, getDocs } from "firebase/firestore"; 

import { database } from "./firebaseConfig";
import { useState } from "react";



  const addStatus = async (message) => {
    console.log(Date.now());
    try {
        const docRef = await addDoc(collection(database, "statuses"), {
          date: Date.now() || null,
          message: message
        });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}

export default addStatus;