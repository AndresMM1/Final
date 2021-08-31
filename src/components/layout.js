import './style.css'
import'./Even.js'
import { db } from "../firebase";
import React, { useEffect, useState,useCallback, Component } from "react";
const Layout = () => {
    var size1
const traer=(e)=>{
console.log(e)
size1=e
document.getElementById("nose").innerHTML=e;
    }
    const traer1=(e)=>{
        console.log(e)
        size1=e
        document.getElementById("nose1").innerHTML=e;
    }
    const traer2=(e)=>{
        console.log(e)
        size1=e
        document.getElementById("nose2").innerHTML=e;
    }
    const traer3=(e)=>{
        console.log(e)
        size1=e
        document.getElementById("nose3").innerHTML=e;
    }
    const traer4=(e)=>{
        console.log(e)
        size1=e
        document.getElementById("nose4").innerHTML=e;
    }
    const traer5=(e)=>{
        console.log(e)
        size1=e
        document.getElementById("nose5").innerHTML=e;
    }
    const traer6=(e)=>{
        console.log(e)
        size1=e
        document.getElementById("nose6").innerHTML=e;
    }
    const traer7=(e)=>{
        console.log(e)
        size1=e
        document.getElementById("nose7").innerHTML=e;
    }
        

    var sizeE,sizeA,sizeAR,sizeD,sizeEM,sizeM,sizeP,sizeDE
    useEffect(() => {
    db.collection('Artista').get().then(snap => {
        sizeE = snap.size 
        traer(sizeE)
      });
        db.collection('Agencia').get().then(snap => {
        sizeA = snap.size 
        traer1(sizeA)
        
      });
      db.collection('Desfile').get().then(snap => {
        sizeAR = snap.size 
        traer2(sizeAR)
        
      });
      db.collection('Empleados').get().then(snap => {
        sizeD = snap.size 
        traer3(sizeD)

        
      });
      db.collection('Evento').get().then(snap => {
        
        sizeEM = snap.size 
        traer4(sizeEM)
        
      });
      db.collection('Modelo').get().then(snap => {
        sizeM = snap.size 
        traer5(sizeM)
        
      });
      db.collection('Pabellon').get().then(snap => {
        sizeP = snap.size 
        traer6(sizeP)
        
      });
      db.collection('disenador').get().then(snap => {
        sizeDE = snap.size 
        traer7(sizeDE)
        
      });
   
    });
    const handleOnClick = () => 
    console.log("e")
function cambiar(){
    
}
    return (  

        <>
        
        
        <div class="content">
        
        <div class="row"
        >
            <div className="col">
            <a id="link" href="/Arti">
                <div className="card card1">
                <p>Artista</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="nose">{traer}</p>
                </div>
                </a>
                <a id="link" href="/Agen">
                <div onclick="/Agen" className="card card2">
                <p>Agencia</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="nose1">{traer1}</p>
                </div>
                </a>
                
            </div>
            <div href="/Des" className="col">
                <a id="link" href="/Des">
                <div className="card card3">
                <p href="/Des">Desfile</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="nose2">{traer2}</p>
                
                
                
                </div>
                </a>
                <a id="link" href="/Emple">
                <div href="/Emple" className="card card4">
                <p>Empleados</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="nose3">{traer3}</p>
                
                
                </div>
                </a>
            </div>
            <div className="col">
                <a id="link" href="/Eventos">
                <div className="card card5">
                <p>Evento</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="nose4">{traer4}</p>
                </div>
                </a>
                <a id="link"href="/Model" >
                <div className="card card6">
                <p>Modelo</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="nose5">{traer5}</p>
                </div>
                </a>
                
            </div>
            <div className="col">
            <a id="link" href="/Pabe">
                <div href="/Pabe" className="card card7">
  
                <p>Pabellon</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="nose6">{traer6}</p>
                </div>
                </a>
                <a id="link" href="/Disn">
                <div href="/Disn" className="card card8">

                <p>Disenador</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p id="nose7">{traer7}</p>
                </div>
                </a>
            </div>
            
        </div>
        </div>
        </>
    );
}
 
export default Layout;