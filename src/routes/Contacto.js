import Navbar from "./Navbar";

export default function Contacto() {
    return(
        <div>
            <Navbar></Navbar>

            <section className="ContainerAv">

                <div class="infoContact">
                
                    <h1>¡Contactanos!</h1>
                    <p>Si estás interesado en tener una correspondencia formal o alquilar alguno de nuestros servicios privados puedes utilizar este formulario. Obten mas informacion <a href="/servicios/privados">aqui</a> sobre nuestros servicios privaros </p>
                
                </div>
                <form id="contactoF">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required/>

                    <label for="correo">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo" required/>

                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" required/>

                    <label for="asunto">Asunto:</label>
                    <input type="text" id="asunto" name="asunto" required/>

                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>

                    <input type="submit" value="Enviar"/>
                </form>
                <div class="infoContact">
                
                    <h1>¡Ven a vistarnos!</h1>
                    <p>Si te interesa venir a una de nuestras catas de cervezas con tus amigos utiliza este formulario para realizar tu reserva!!! Recuerda que puedes consultar mas informacion sobre las catas <a href="/servicios/privados">aqui</a> </p>
            
                </div>

                <form>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required/>
                    
                    <label for="correo">Correo electrónico:</label>
                    <input type="email" id="correo" name="correo" required/>
                    
                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" required/>
                    
                    <label for="fecha">Fecha:</label>
                    <input type="date" id="fecha" name="fecha" required/>
                    
                    <label for="hora">Hora:</label>
                    <input type="time" id="hora" name="hora" required/>
                    
                    <label for="num_personas">Número de Personas:</label>
                    <input type="number" id="num_personas" name="num_personas" required/>
                    
                    <label for="observaciones">Observaciones:</label>
                    <textarea id="observaciones" name="observaciones"></textarea>
                    
                    <input type="submit" value="Enviar"/>
                </form>

            </section>
        </div>
    );
}