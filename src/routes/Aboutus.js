import Navbar from "./Navbar";
import rikipera from "../img/rikipera.png"
export default function AboutUs() {
    return (
        <div>
            <Navbar></Navbar>

            <section class="ContainerAv">
                <article>
                    <h1>Hugo Notario</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae velit impedit natus culpa reprehenderit sequi ea, illo aliquam soluta! Corrupti impedit pariatur nulla omnis labore deleniti sapiente repellendus odio quae!
                    </p>
                </article>
                <hr></hr>
                <article>
                    <h1>Ricardo Villanueva Alhama</h1>
                    <img src={rikipera} alt="rikipera" id="rikipera"></img>
                </article>
            </section>
        </div>
    )
}