import { useState } from "react";

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
    <h1><span className="span">subject: </span>{subject.substr(0,10)}</h1>
    <p><span className="span">search_snippet: </span>{search_snippet.substr(0,20)}</p>
    <p><span className="span">body:  </span>{body.substr(0,30)}</p>

    
    <button onClick={Eventhandler} className="button">view_more</button>
     
    
       {event && <DialogDemo key={id} list={list}/>}
        
        
  

        


</div>
    )

}
export default List_items