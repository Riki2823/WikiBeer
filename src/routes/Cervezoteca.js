import Navbar from "./Navbar"
import judas from "../img/judas-beer.webp"
import delirium from "../img/deliriumN-beer.webp"
import piast from "../img/piast-beer.webp"
import cruzcampo from "../img/cruzcampo-beer.webp"
export default function Cervezoteca() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="ContainerAv">
                <section id="beers">
                    <article>
                        <img src={judas} alt="artem" />
                        <h1>Judas</h1>
                        <p>
                        Judas es una cerveza rubia belga de estilo Strong Ale, elaborada mediante doble fermentación usando métodos tradicionales y con una cuidada selección de ingredientes. Esta cerveza rubia fuerte de alta graduación es muy refrescante y posee un sabor intenso y agradable.</p>
                    </article>

                    <article>
                        <img src={delirium} alt="artem" />

                        <h1>Delirium</h1>
                        <p>Cerveza ale fuerte, de triple fermentación. Con tres tipos de levadura y cinco maltas distintas. Con espuma compacta, estable y cremosa. De color marrón chocolate oscuro. Una espuma compacta, de color blanco-amarillo, estable y cremosa.</p>
                    </article>

                    <article>
                        <img src={piast} alt="artem" />

                        <h1>Piast</h1>
                        <p>Una cerveza estilo Pilsner, con 5.8%, buena capa de espuma blanca que desaparece rápidamente. Suave aroma a cereal, dulce y algo especiado típico de este tipo de cervezas. Sabor suave, con entrada más dulce y algo más amarga al final pero nada fuera de lo normal</p>
                    </article>

                    <article>
                        <img src={cruzcampo} alt="artem" />

                        <h1>Agua</h1>
                        <p>Si en algún momento de tu miserable vida te planteas beber esto suicídate, algo no va bien en tu vida</p>
                    </article>
                </section>

            </div>
        </div>
    )
}