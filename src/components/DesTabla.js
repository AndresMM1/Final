import { db } from "../firebase";
import React ,{ useState,useEffect } from "react";
import './tabla.scss'
const DesTabla = () => {
    
  useEffect(() => {
        var tabla =document.getElementById('tablaz')
    
        db.collection("Desfile").onSnapshot((querySnapshot) => {
            tabla.innerHTML=''
            querySnapshot.forEach((doc) => {         
                tabla.innerHTML+=`<tr>
                <td> ${doc.id} </td>
                <td>${doc.data().fecha}</td>
                <td>${doc.data().hora}</td>
                <td>${doc.data().nombrec}</td>
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
        <th scope="col">Fecha</th>
        <th scope="col">Hora</th>
        <th scope="col">Nombre Coleccion</th>
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
 
export default DesTabla;