import { useState } from "react";
import {Dialog} from "@reach/dialog";
import "@reach/dialog/styles.css";
import  "../App.css"

const List_items =(props)=>{
    const {list}=props 
   const {subject,search_snippet,body,author}=list
   const{login,href} =author

const [event,setEvent] =useState(false)
const Eventhandler=()=>{
    setEvent((prev)=>!prev)
}


    return(

<div className="Flex_container">
    <h1>{subject}</h1>
    <p>{search_snippet}</p>
    <p>{body}</p>
    <button onClick={Eventhandler} className="button">view_more</button>
    
        <Dialog isOpen={event} onDismiss={!event} className="dialog_box">
            <div className="box">
            <button onClick={Eventhandler} className="dialog_button">X</button>
            <div className="dialog_content">
            <p className="dialog_chunk">{login}</p><p className="dialog_chunk">{href}</p>
            </div>
           
            </div>
        
        
        </Dialog>
        


</div>
    )

}
export default List_items