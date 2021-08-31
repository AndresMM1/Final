
import EvenForm from "./EvenForm";
import { db } from "../firebase";
import { toast } from "react-toastify";
import React, { useEffect, useState,useCallback } from "react";
import EvenTabla from "./EvenTabla";


import Modal from 'react-bootstrap/Modal';

 const Even = () => {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const notify = (e) => toast(e,{type: "info", background:'#320171'});
    const notify2 = (e) => toast(e,{ type: "error"});
    const createUserInFirestore = (e) => {
      db.collection('Evento').doc(e.codigo).get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
      notify2("Ya se registro este codigo")
    }
    else
    {
      notify("Registro Exitoso")
       db.collection("Evento").doc(e.codigo).set(e);
    }
  });
    }
     return(
         <>
         <Modal   show={show} onHide={handleClose}  > 
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body ><EvenForm hid={handleClose}  crea={createUserInFirestore}/></Modal.Body>
        
      </Modal>
     <br/>
     <div className="jumbotron jumbotron-fluid">
     <h2 align="center">Evento </h2>
     </div>
     <br/>
     
         
      <div class="hijo"><button  class="trigger-btn" align="center" onClick={handleShow}>Registrar</button> </div>
       
      <br/>
      <br/>
            <EvenTabla/>
         
     
     </>
     );
 }
  
 export default Even;