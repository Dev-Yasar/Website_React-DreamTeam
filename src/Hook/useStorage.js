import { useState,useEffect } from "react";
import{projectStorage,projectFirestore,timestamp} from "../firebase/config"



const useStorage =(file)=>{
const[progress, setProgress]=useState(0);
const[error, setError]=useState(0);
const[url, setUrl]=useState(0);

useEffect(() =>{

    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
      storageRef.put(file).on('state_changed',(snap) =>{
      var bytesTransferred = (storageRef).bytesTransferred;
      var totalBytes = (storageRef).totalBytes;
      const percentage = (snap.bytesTransferred/snap.totalBytes)*100;
        setProgress(percentage);
       
    },(err)=>{
      setError(err);
    },async() => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      collectionRef.add({url,createdAt});
      setUrl(url);
    
    })

},[file]);

return{progress,url,error}

}

export default useStorage;