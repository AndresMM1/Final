import { db } from "../firebase";
import React, { useEffect, useState,useCallback } from "react";
import './tabla.scss'

const EvenTabla = () => {
  
  useEffect(() => {
        var tabla =document.getElementById('tablaz')
  
        db.collection("Evento").onSnapshot((querySnapshot) => {
            tabla.innerHTML=''
            querySnapshot.forEach((doc) => {         
                tabla.innerHTML+=`<tr>
                <td> ${doc.id} </td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().fechai}</td>
                <td>${doc.data().fechaf}</td>
                </tr>`
                
            
            });
        });
    })
    
    
     
    return (
        <>
        
        
    <table class="responsive-table">
    <thead>
      <tr>
        <th scope="col"># Pasaporte</th>
        <th scope="col">Nombre</th>
        <th scope="col">Fecha Inicio</th>
        <th scope="col">Fecha Final</th>
      </tr>
    </thead>
    <tbody id='tablaz'>
      
    </tbody>
  </table>  
  
</>
  );
}
 
export default EvenTabla;