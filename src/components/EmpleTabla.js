import { db } from "../firebase";
import './tabla.scss'
import React ,{ useState,useEffect } from "react";
const ModelTabla = () => {
    
  useEffect(() => {
        var tabla =document.getElementById('tablaz')
    
        db.collection("Empleados").onSnapshot((querySnapshot) => {
            tabla.innerHTML=''
            querySnapshot.forEach((doc) => {         
                tabla.innerHTML+=`<tr>
                <td> ${doc.id} </td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().tipo}</td>
                <td>${doc.data().universidad}</td>
                <td>${doc.data().celular}</td>
                <td>${doc.data().sueldo}</td>
                
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
        <th scope="col">Tipo</th>
        <th scope="col">Universidad</th>
        <th scope="col">Celular</th>
        <th scope="col">Sueldo</th>
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
 
export default ModelTabla;