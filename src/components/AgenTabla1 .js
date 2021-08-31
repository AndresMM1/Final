import { db } from "../firebase";
import './tabla.scss'
import React ,{ useState,useEffect } from "react";
const AgenTabla = () => {
    
  useEffect(() => {
        var tabla =document.getElementById('tablaz')
    
        db.collection("Agencia").onSnapshot((querySnapshot) => {
            tabla.innerHTML=''
            querySnapshot.forEach((doc) => {         
                tabla.innerHTML+=`<tr>
                <td> ${doc.id} </td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().pais}</td>
                <td>${doc.data().fcreacion}</td>
                <td>${doc.data().dueno}</td>
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
        <th scope="col">Fecha creacion</th>
        <th scope="col">Dueno agencia</th>
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
 
export default AgenTabla;