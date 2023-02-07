import React from 'react';
import "../App.css"
import * as Dialog from '@radix-ui/react-dialog';

// import './styles.css';

const DialogDemo = (props) => {
    const {list}=props ;
    const {author,id} =list

   const{login,href} =author
   return(
   <>
    <Dialog.Root>
    <Dialog.Trigger  asChild>
    <button >radix_view</button>
    </Dialog.Trigger>
     
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay">
      <Dialog.Content className="DialogContent">
      <Dialog.Close asChild><button className='closing_btn'>X</button></Dialog.Close>
        <Dialog.Title className="DialogTitle">Login_details</Dialog.Title>
        <Dialog.Description className="DialogDescription"><span className="span">login: </span>{login}</Dialog.Description>
        <Dialog.Description className="DialogDescription"><span className="span">href: </span>{href}</Dialog.Description>
        <Dialog.Description className="DialogDescription"><span className="span">id: </span>{id}</Dialog.Description>
        
      </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  </Dialog.Root>
  </> )
};

export default DialogDemo;