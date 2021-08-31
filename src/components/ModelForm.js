import React ,{ useState,useEffect } from "react";
import imagen from "./img/model1.png"
import './style.css'
const ModelForm = (props) => {
  const valoresIniciales={
    pasaporte:'',
    nombre:'',
    pais:'',
    fecha:'',
    colorO:'',
    colorP:'',
    estatura:'',
    medidas:'',
    tallaz:'',
    peso:'',
    otros:'',
    sueldo:''    
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
                            <input type="text" placeholder="Pasaporte" name="pasaporte" value={values.pasaporte} onChange={handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-country"></i></label>
                            <input type="text" placeholder="Pais" name="pais" value={values.pais} onChange={handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="date" placeholder="Fecha Nacimiento " name="fecha" value={values.fecha} onChange={handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="colorOjos " name="colorO" value={values.colorO} onChange={handleInputChange}/>
                        </div>
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="color Piel " name="colorP" value={values.colorP} onChange={handleInputChange}/>
                        </div><div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="estatura " name="estatura" value={values.estatura} onChange={handleInputChange}/>
                        </div><div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="medidas " name="medidas" value={values.medidas} onChange={handleInputChange}/>
                        </div><div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="talla zapatos " name="tallaz" value={values.tallaz} onChange={handleInputChange}/>
                        </div><div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="peso " name="peso" value={values.peso} onChange={handleInputChange}/>
                        </div><div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" placeholder="otros " name="otros" value={values.otros} onChange={handleInputChange}/>
                        </div><div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="number" placeholder="sueldo " name="sueldo" value={values.sueldo} onChange={handleInputChange}/>
                        </div>
                        
                        <div class="form-group form-button">
                        <input type="submit" value={props.currentId === props.pasaporte ? "Guardar" : "Update"} className="btn btn-primary btn-block" />
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
 
export default ModelForm;