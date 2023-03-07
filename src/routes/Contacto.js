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
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required/>

                    <label htmlFor="correo">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo" required/>

                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" required/>

                    <label htmlFor="asunto">Asunto:</label>
                    <input type="text" id="asunto" name="asunto" required/>

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>

                    <input type="submit" value="Enviar"/>
                </form>
                <div className="infoContact">
                
                    <h1>¡Ven a visitarnos!</h1>
                    <p>Si te interesa venir a una de nuestras catas de cervezas con tus amigos, utiliza este formulario para realizar tu reserva.</p>
            
                </div>

                <form>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required/>
                    
                    <label htmlFor="correo">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo" required/>
                    
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" required/>
                    
                    <label htmlFor="fecha">Fecha:</label>
                    <input type="date" id="fecha" name="fecha" required/>
                    
                    <label htmlFor="hora">Hora:</label>
                    <input type="time" id="hora" name="hora" required/>
                    
                    <label htmlFor="num_personas">Número de Personas:</label>
                    <input type="number" id="num_personas" name="num_personas" required/>
                    
                    <label htmlFor="observaciones">Observaciones:</label>
                    <textarea id="observaciones" name="observaciones"></textarea>
                    
                    <input type="submit" value="Enviar"/>
                </form>

            </section>
        </div>
    );
}
