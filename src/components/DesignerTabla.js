import { db } from "../firebase";
import './tabla.scss'
import React, { useEffect, useState,useCallback, Component } from "react";
const DesignerTabla = () => {
    
  useEffect(() => {
      
        var tabla =document.getElementById('tablaz')
    
        db.collection("disenador").onSnapshot((querySnapshot) => {
            tabla.innerHTML=''
            querySnapshot.forEach((doc) => {         
                tabla.innerHTML+=`<tr>
                <td> ${doc.id} </td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().pais}</td>
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
        <th scope="col">Pais</th>
      </tr>
    </thead>
    <tbody id='tablaz'>
      
    </tbody>
  </table>  
  <script>

      
  </script>
</>
  );
}
 
export default DesignerTabla;