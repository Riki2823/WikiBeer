import logo from "../img/wikibeer.jpg";

export default function Navbar(){
    return(
        
        <nav id="navb">
            <a href="/" id="logo"><img src={logo} alt="logo"></img></a>
            <a href="/home">Home</a>
            <a href="/aboutus">Sobre nosotros</a>
            <a href="/cervezas">Cervezas</a>
            <a href="/contactanos">Contactanos</a>
        </nav>
        
    )
}