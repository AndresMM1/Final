import { db } from "../firebase";
import './tabla.scss'
import React ,{ useState,useEffect } from "react";
const ArtiTabla = () => {
    
  useEffect(() => {
        var tabla =document.getElementById('tablaz')
    
        db.collection("Artista").onSnapshot((querySnapshot) => {
            tabla.innerHTML=''
            querySnapshot.forEach((doc) => {         
                tabla.innerHTML+=`<tr>
                <td> ${doc.id} </td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().genero}</td>
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
        <th scope="col">Genero</th>
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
 
export default ArtiTabla;