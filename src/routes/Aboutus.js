import Navbar from "./Navbar";
import rikipera from "../img/rikipera.png";
import melonhugo from "../img/melonhugo.png"
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
export default function AboutUs() {
    return (
        <div>
            <Navbar></Navbar>

            <section class="ContainerAv">
                <article>
                    <h1>Hugo Notario</h1>
                    <img src={melonhugo} alt="melonhugo" class="lasFrutis"></img>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae velit impedit natus culpa reprehenderit sequi ea, illo aliquam soluta! Corrupti impedit pariatur nulla omnis labore deleniti sapiente repellendus odio quae!
                    </p>
                </article>
                <hr></hr>
                <article>
                    <h1>Ricardo Villanueva Alhama</h1>
                    <img src={rikipera} alt="rikipera" class="lasFrutis"></img>
                    <p>    
                        ¡Hola a todos! Mi nombre es Ricardo Villanueva Alhama, tengo 20 años y actualmente estoy estudiando un grado superior en Desarrollo de Aplicaciones Web. Anteriormente, trabajé como técnico informático en el sector hospitalario y también en el mundo de la moda. Siendo un apasionado por los trabajos de cara al público o que tengan un trato cercano al cliente, estoy en búsqueda activa de nuevas oportunidades para seguir desarrollándome en estas áreas.
                    </p>
                    <p>
                        Como colaborador en este proyecto sobre catas de cervezas, estoy emocionado de poder compartir mi experiencia y conocimientos con todos ustedes. Mi experiencia en el sector informático me ha brindado habilidades técnicas valiosas que me permiten comprender mejor los desafíos y oportunidades de la industria cervecera, y 0 ha enseñado la importancia del trato cercano y personalizado al cliente.
                    </p>

                    <p>
                        Estoy emocionado por la oportunidad de trabajar junto a un equipo apasionado y comprometido en este proyecto. Espero poder contribuir a crear una experiencia única para los amantes de la cerveza y ayudar a crear conexiones significativas con los clientes a través de este proyecto.
                    </p>

                    <p>
                        ¡Gracias por considerar mi perfil y espero poder conocer a todos ustedes pronto en las catas de cerveza!
                    </p>

                    <section class="socialMedia">
                        <a href="https://github.com/Riki2823"><img src={linkedin} alt="linkedinRiki"></img></a>
                        <a href="https://twitter.com/"><img src={twitter} alt="twitterRiki"></img></a>
                        <a href="https://www.linkedin.com/in/ricardo-villanueva-31900a210/"><img src={github} alt="githubRiki"></img></a>
                    </section>
                </article>
            </section>
        </div>
    )   
}