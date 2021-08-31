
import DesignerForm from "./DesignerForm";
import { db } from "../firebase";
import { toast } from "react-toastify";
import React, { useEffect, useState,useCallback } from "react";
import DesignerTabla from "./DesignerTabla";
import { version } from "react-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
 const Designer = () => {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const notify = (e) => toast(e,{type: "info", background:'#320171'});
    const notify2 = (e) => toast(e,{ type: "error"});
    const createUserInFirestore = (e) => {
      db.collection('disenador').doc(e.pasaporte).get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
      notify2("Ya se registro este pasaporte")
    }
    else
    {
      notify("Registro Exitoso")
       db.collection("disenador").doc(e.pasaporte).set(e);
    }
  });
    }
     return(
         <>
         <Modal   show={show} onHide={handleClose}  > 
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body style={{width :"max-content"}}><DesignerForm hid={handleClose}  crea={createUserInFirestore}/></Modal.Body>
        
      </Modal>
      <br/>
     <div className="jumbotron jumbotron-fluid">
     <h2 align="center">Disenador </h2>
     </div>
     <br/>
     
         
      <div class="hijo"><button  class="trigger-btn" align="center" onClick={handleShow}>Registrar</button> </div>
       
      <br/>
      <br/>
      
            <DesignerTabla/>
         
     
     </>
     );
 }
  
 export default Designer;