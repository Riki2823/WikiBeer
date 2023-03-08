import Navbar from "./Navbar"
import artem from "../img/artem.jpg"

export default function Cervezoteca() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="ContainerAv">
                <section id="beers">
                    <article>
                        <img src={artem} alt="artem" />
                        <h1>San Miguel</h1>
                        <p>
                            Lorem ipsum dolor sit amet bla bla bla bla bla bla
                        </p>
                    </article>

                    <article>
                        <img src={artem} alt="artem" />

                        <h1>Cruzcampo</h1>
                        <p>
                            Lorem ipsum dolor sit amet bla bla bla bla bla bla
                        </p>
                    </article>

                    <article>
                        <img src={artem} alt="artem" />

                        <h1>Mahou</h1>
                        <p>
                            Lorem ipsum dolor sit amet bla bla bla bla bla bla
                        </p>
                    </article>

                    <article>
                        <img src={artem} alt="artem" />

                        <h1>*Inserte cerveza mala*</h1>
                        <p>
                            Lorem ipsum dolor sit amet bla bla bla bla bla bla
                        </p>
                    </article>
                </section>

            </div>
        </div>
    )
}