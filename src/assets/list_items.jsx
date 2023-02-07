import { useState } from "react";
import {Dialog} from "@reach/dialog";
import "@reach/dialog/styles.css";
import  "../App.css"
import DialogDemo from "./dialogroot";

const List_items =(props)=>{
    const {list}=props 
   const {subject,search_snippet,body,author,id}=list
   const{login,href} =author

const [event,setEvent] =useState(false)
const Eventhandler=()=>{
    setEvent((prev)=>!prev)
}

    return(

<div className="Flex_container">
    <h1><span className="span">subject: </span>{subject}</h1>
    <p><span className="span">search_snippet: </span>{search_snippet}</p>
    <p><span className="span">body:  </span>{body}</p>

    
    <button onClick={Eventhandler} className="button">view_more</button>
    <DialogDemo key={id} list={list}/>
    
    
        <Dialog isOpen={event} onDismiss={!event} className="dialog_box">
            <div className="box">
            <button onClick={Eventhandler} className="dialog_button">X</button>
            <div className="dialog_content">
            <p className="dialog_chunk"><span className="span">login:  </span >{login}</p>
            <p className="dialog_chunk"><span className="span">href:  </span>{href}
                <span className="span">id :</span>{id}
                </p>
            </div>
           
            </div>
        
        
        </Dialog> 
        
  

        


</div>
    )

}
export default List_items