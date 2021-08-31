import img1 from "./img/400X400_SPINNING-CHAIR-COMPILED.gif"
import img2 from "./img/excited-dogs.gif"
import img3 from "./img/giphy.gif"
import img4 from "./img/dog-shocked.gif"
import img5 from "./img/descarga.png"
import img6 from "./img/twitter.png"
import img7 from "./img/instagram.png"
import { useEffect } from "react"

const inicio = () => {
    
    
    return (  
        <div>
        <title>StarRover</title>  
          <div className="content">
            <div className="textBox">
              <h2>Nos esforzamos  <br />  por su  <span>Evento</span></h2>
              <p>
                Creamos acción de marca.
                De momentos a movimientos,
                Nuestras ideas revolucionarias permiten
                marcas para aparecer y destacar..</p>
              <a href="#">Conocer mas</a>
            </div>
            <div className="imgBox">
              <img src={img1} alt="" className="imagens" />
            </div>
          </div> 
          <ul className="thumb">
            <li><img src={img2}  alt="" /></li>
            <li><img src={img3} /></li>
            <li><img src={img4}/></li>
          </ul>  
          
        
      </div>
    );
}
 
export default inicio;