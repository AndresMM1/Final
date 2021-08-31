
import PabeForm from "./PabeForm";
import { db } from "../firebase";
import { toast } from "react-toastify";
import React, { useEffect, useState,useCallback } from "react";
import PabeTabla from "./PabeTabla";
import { version } from "react-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
 const Pabe = () => {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const notify = (e) => toast(e,{type: "info", background:'#320171'});
    const notify2 = (e) => toast(e,{ type: "error"});
    const createUserInFirestore = (e) => {
      db.collection('Pabellon').doc(e.nombre).get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
      notify2("Ya se registro este documento")
    }
    else
    {
      notify("Registro Exitoso")
       db.collection("Pabellon").doc(e.nombre).set(e);
    }
  });
    }
     return(
         <>
         <Modal   show={show} onHide={handleClose}  > 
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body style={{width :"max-content"}}><PabeForm hid={handleClose}  crea={createUserInFirestore}/></Modal.Body>
        
      </Modal>
      <br/>
     <div className="jumbotron jumbotron-fluid">
     <h2 align="center">Pabellon </h2>
     </div>
     <br/>
     
         
      <div class="hijo"><button  class="trigger-btn" align="center" onClick={handleShow}>Registrar</button> </div>
       
      <br/>
      <br/>
            <PabeTabla/>
         
     
     </>
     );
 }
  
 export default Pabe;