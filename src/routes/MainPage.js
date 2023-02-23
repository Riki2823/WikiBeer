import '../componentStyles/mainP.css'

export default function MainPage(){
    const gohome = () =>{
        window.location.replace("/home");
    }
    return(
       
        <div id="mainPage">
            <h1>WikiBeer</h1>
            <p>Bienvenido a WikiBeer, una página para la consulta y disfrute de el gran mundo de las cervezas. Una exploración por el amplio catalogo de tipos!!</p>
            <button onClick={gohome}>¡Iniciar!</button>
        </div>
    
    )
}