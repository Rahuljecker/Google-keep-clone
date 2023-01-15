import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./CreateNode.css";

function CreateNode(props) {
  const[expand,Setexpand]=useState(false);
  const expandIt=()=>{
    Setexpand(true);
  }
  const backToNormal=()=>{
    Setexpand(false);
  }


  const [note, SetNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    SetNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };


  const addEvent=()=>{
    props.passNote(note);
    SetNote({
      title: "",
      content: "",
    });
  }
  return (
    <>
      <div className="main_Node" onDoubleClick={backToNormal}>
        <form>
         {expand?
           <input
            type="text"
            name="title"
            value={note.title}
            placeholder="Title"
            autoComplete="off"
            onChange={InputEvent}
          />:null
        }
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            placeholder="write a note......"
            onChange={InputEvent}
            onClick={expandIt}
            
          />
          {expand?
          <Button variant="contained" className="plus_sign" onClick={addEvent}>
            <AddIcon />
          </Button>
          :null}
        </form>
      </div>
    </>
  );
}

export default CreateNode;
