import React ,{ useState,useEffect } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";
import Button from 'react-bootstrap/Button';
import imagen from "./img/evento1.png"
const EvenForm = (props) => {
  const valoresIniciales={
    codigo:'',
    nombre:'',
    fechai:'',
    fechaf:''

  }
  var [values,setValues]=useState(valoresIniciales)
  const handleInputChange = e => {
    var { name, value } = e.target;
    setValues({
        ...values,
        [name]: value
    })
}
const submitir = e => {
  e.preventDefault();
  try{
    props.crea(values)
    props.hid()
    
  }
  catch{

  }
  
  setValues({ ...valoresIniciales });

}
    return (
      <>
        
        <section class="signup">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form" autoComplete="off" onSubmit={submitir}>
                    <h2 class="form-title">Registro</h2>
                    <form method="POST" class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="Nombre " name="nombre" value={values.nombre} onChange={handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="text" placeholder="codigo" name="codigo" value={values.codigo} onChange={handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="date" placeholder="fecha inicio" name="fechai" value={values.fechai} onChange={handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="date" placeholder="fecha final" name="fechaf" value={values.fechaf} onChange={handleInputChange}/>
                        </div>
                        
                        
                        <div class="form-group form-button">
                        <input type="submit" value={props.currentId === props.codigo ? "Guardar" : "Update"} className="btn btn-primary btn-block" />
                        </div>
                    </form>
                </div>
                <div class="signup-image">
                    <figure><img src={imagen} alt="sing up image"/></figure>
                    
                </div>
            </div>
        </div>
    </section>
    </>
      );
}
 
export default EvenForm;