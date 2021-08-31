import logo from "./img/logo2.png"
const barra = () => {
    return (
        
        <>
        <a href="/">
            <img src={logo} alt="StarRover" class="logo"/>
        </a>
        <ul>
            <li><a href="/menu">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/">Noticias</a></li>
            <li><a href="/menu"><button href="/menu" class="trigger-btn" >Registrar</button></a></li>
            
        </ul>
        
    
     </>
 );
}
 
export default barra ;