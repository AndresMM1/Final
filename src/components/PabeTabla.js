import { db } from "../firebase";
import './tabla.scss'
import React ,{ useState,useEffect } from "react";
const PabeTabla = () => {
    
  useEffect(() => {
        var tabla =document.getElementById('tablaz')
    
        db.collection("Pabellon").onSnapshot((querySnapshot) => {
            tabla.innerHTML=''
            querySnapshot.forEach((doc) => {         
                tabla.innerHTML+=`<tr>
                <td> ${doc.id} </td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().Telefono}</td>
                </tr>`
                
            
            });
        });
    })
    
    
     
    return (
        <>
        
        
    <table class="responsive-table">
    <thead>
      <tr>
        
        <th scope="col">Nombre</th>
        <th scope="col">Empleado </th>
        <th scope="col">Telefono</th>
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
 
export default PabeTabla;