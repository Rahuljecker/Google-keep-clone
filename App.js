import React, { useState } from 'react';
import CreateNode from './GOOGLE KEEP/CreateNode'
import Header2 from './GOOGLE KEEP/Header2'
import Note from './GOOGLE KEEP/Note';
import Footer from './GOOGLE KEEP/Footer';



function App() {
  const [additem,SetaddItem]=useState([]);
  const addNote=(note)=>{
    // alert("clicked");
    SetaddItem((prevData)=>{
     return[...prevData,note]; 
    });
    console.log(note)
  }


  const onDelete=(id)=>{
    SetaddItem((oldData)=>
      oldData.filter((currData,indx)=>{
        return indx!==id;
      })
    )
  }
  return (
   <>
   <Header2/>
  <CreateNode
    passNote={addNote}
  />
 
  {
    additem.map((val,index)=>{
      return  <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        DeleteItem={onDelete}
      />
    })
  }
  <Footer/>
   </>
  )
}

export default App