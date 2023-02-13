import React from 'react';
import "../App.css"
// import * as Dialog from '@radix-ui/react-dialog';
import { useQuery,gql } from "@apollo/client";
import {Dialog} from "@reach/dialog";
import { useState } from 'react';


const MESSAGE_ITEM =gql`
query message_id($id:String!){
  message(id:$id){
    subject
    language
    href
    conversation{
      solved
    }
      
    
    
  }
}`

// import './styles.css';

const DialogDemo = (props) => {
    const {list}=props ;
    
const [event,setEvent] =useState(true)
  
   const {data,loading,error} =useQuery(MESSAGE_ITEM,{variables:{id:list.id},fetchPolicy:"network-only"})
   if(data)  console.log(data.message.conversation.solved)

   return(
   <>
   {data && <Dialog isOpen={event} onDismiss={!event} className="dialog_box">
            <div className="box">
            <button onClick={()=>setEvent(false)} className="dialog_button">X</button>
            <div className="dialog_content">
            <p className="dialog_chunk"><span className="span">subject:  </span >{data.message.subject}</p>
            <p className="dialog_chunk"><span className="span">language:  </span>{data.message.language}
                </p>
                <p className="dialog_chunk"><span className="span">href:  </span >{data.message.href}</p>

            <p className="span"><span className="span">solved:  </span >{data.message.conversation.solved? "true": "false"}</p>
            </div>
           
            </div>
        
        
        </Dialog> }
   {/* {data && 
    <Dialog.Root>
    <Dialog.Trigger  asChild>  
    <button >radix_view</button>
    </Dialog.Trigger>
     
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay">
      <Dialog.Content className="DialogContent">
      <Dialog.Close asChild><button className='closing_btn'>X</button></Dialog.Close>
        <Dialog.Title className="DialogTitle">Login_details</Dialog.Title>
        <Dialog.Description className="DialogDescription"><span className="span">subject: </span>{data.message.subject}</Dialog.Description>
        <Dialog.Description className="DialogDescription"><span className="span">language: </span>{data.message.language}</Dialog.Description>
        <Dialog.Description className="DialogDescription"><span className="span">search_snippet: </span>{data.message.search_snippet}</Dialog.Description>
        
      </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  </Dialog.Root>
} */}
  </> 
   )
};

export default DialogDemo;