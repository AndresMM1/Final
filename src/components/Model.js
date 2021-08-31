import './tabla.scss'
import ModelForm from "./ModelForm";
import ModelTabla from "./ModelTabla";
import { db } from "../firebase";
import { toast } from "react-toastify";
import React, { useEffect, useState,useCallback, Component } from "react";
import { version } from "react-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";

 const Model = () => {
  useEffect(() => {
      var tabla =document.getElementById('tablaz')
      db.collection("Modelo").onSnapshot((querySnapshot) => {
          tabla.innerHTML=''
          querySnapshot.forEach((doc) => {         
              tabla.innerHTML+=`<tr>
              <td> ${doc.id} </td>
              <td>${doc.data().nombre}</td>
              <td>${doc.data().pais}</td>
              <td>${doc.data().fecha}</td>
              <td>${doc.data().colorO}</td>
              <td>${doc.data().colorP}</td>
              <td>${doc.data().estatura}</td>
              <td>${doc.data().medidas}</td>
              <td>${doc.data().tallaz}</td>
              <td>${doc.data().peso}</td>
              <td>${doc.data().otros}</td>
              <td>${doc.data().sueldo}</td>
              </tr>`
          });
      });
  
  });
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const notify = (e) => toast(e,{type: "info", background:'#320171'});
    const notify2 = (e) => toast(e,{ type: "error"});
    const createUserInFirestore = (e) => {
      db.collection('Modelo').doc(e.pasaporte).get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
      notify2("Ya se registro este documento")
    }
    else
    {
      notify("Registro Exitoso")
       db.collection("Modelo").doc(e.pasaporte).set(e);
    }
  });
    }
     return(
         <>
         <Modal   show={show} onHide={handleClose}   > 
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body style={{width :"max-content"}}><ModelForm hid={handleClose}  crea={createUserInFirestore}/></Modal.Body>
        
      </Modal>
      <br/>
     <div className="jumbotron jumbotron-fluid">
     <h2 align="center">Modelo </h2>
     </div>
     <br/>
     
         
      <div class="hijo"><button  class="trigger-btn" align="center" onClick={handleShow}>Registrar</button> </div>
       
      <br/>
      <br/>
      
      <table class="responsive-table" >
    <thead>
      <tr>
        <th scope="col"># Pasaporte</th>
        <th scope="col">Nombre</th>
        <th scope="col">Pais</th>
        <th scope="col">Fecha Nacimiento</th>
        <th scope="col">Color Ojos</th>
        <th scope="col">Color Piel</th>
        <th scope="col">Estatura</th>
        <th scope="col">Medidas</th>
        <th scope="col">Talla Zapatos</th>
        <th scope="col">Peso</th>
        <th scope="col">Otros</th>
        <th scope="col">Sueldo</th>

      </tr>
    </thead>
    <tbody id='tablaz'>
      
    </tbody>
  </table>  
         
     
     </>
     );
 }
  
 export default Model;