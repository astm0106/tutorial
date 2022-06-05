import React, { useEffect, useState } from 'react';
import db from "./firebase_old";
import { collection, getDocs, onSnapshot} from "firebase/firestore";


function Req(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapshot) =>{
     //console.log(snapshot.docs.map((doc) => ({ ...doc.data()})));
     setPosts(snapshot.docs.map((doc) => ({ ...doc.data()})));
    });
    
    
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({ ...doc.data()})));
    });

  }, []);

  return (<div>
    {posts.map((post) => (
      <div key={post.name}>
        <h1>{post.name}</h1>
        <p>{post.text}</p>
      </div>
    ))


    }

  </div>)

}



  


export default Req