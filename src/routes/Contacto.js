import Navbar from "./Navbar";

export default function Contacto() {
    return(
        <div>
            <Navbar></Navbar>

            <section className="ContainerAv">

                <div className="infoContact">
                
                    <h1>¡Contáctanos!</h1>
                    <p>Si estás interesado en tener una correspondencia formal o alquilar alguno de nuestros servicios privados, puedes utilizar este formulario. Te enviaremos un correo con toda la información.</p>
                
                </div>
                <form id="contactoF">
                    <label htmlFor="nombre-alquiler">Nombre:</label>
                    <input type="text" id="nombre" name="nombre-alquiler" required/>

                    <label htmlFor="correo-alquiler">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo-alquiler" required/>

                    <label htmlFor="telefono-alquiler">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono-alquiler" required/>

                    <label htmlFor="asunto-alquiler">Asunto:</label>
                    <input type="text" id="asunto" name="asunto-alquiler" required/>

                    <label htmlFor="mensaje-alquiler">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje-alquiler" required></textarea>

                    <input type="submit" value="Enviar"/>
                </form>
                <div className="infoContact">
                
                    <h1>¡Ven a visitarnos!</h1>
                    <p>Si te interesa venir a una de nuestras catas de cervezas con tus amigos, utiliza este formulario para realizar tu reserva.</p>
            
                </div>

                <form>
                    <label htmlFor="nombre-reserva">Nombre:</label>
                    <input type="text" id="nombre" name="nombre-reserva" required/>
                    
                    <label htmlFor="correo-reserva">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo-reserva" required/>
                    
                    <label htmlFor="telefono-reserva">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono-reserva" required/>
                    
                    <label htmlFor="fecha-reserva">Fecha:</label>
                    <input type="date" id="fecha" name="fecha-reserva" required/>
                    
                    <label htmlFor="hora-reserva">Hora:</label>
                    <input type="time" id="hora" name="hora-reserva" required/>
                    
                    <label htmlFor="num_personas-reserva">Número de Personas:</label>
                    <input type="number" id="num_personas" name="num_personas-reserva" required/>
                    
                    <label htmlFor="observaciones-reserva">Observaciones:</label>
                    <textarea id="observaciones" name="observaciones-reserva"></textarea>
                    
                    <input type="submit" value="Enviar"/>
                </form>

            </section>
        </div>
    );
}
