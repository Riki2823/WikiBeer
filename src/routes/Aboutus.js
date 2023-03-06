import Navbar from "./Navbar";
import rikipera from "../img/rikipera.png"
export default function AboutUs() {
    return(
        <div>
            <Navbar></Navbar>

            <section class="ContainerAv">
                <article>
                    <p>Hugo things</p>
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