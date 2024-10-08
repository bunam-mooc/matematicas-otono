import { NavLink } from "react-router-dom";
import "./CallToRegisterBlock.css";

function CallToRegisterBlock() {
  return (
    <div className="calltoregister-block">
      <h2>Registro abierto</h2>
      <h3>Convocatoria abierta hasta el 22 de septiembre</h3>
      <p className="calltoregister-block__register">
        <NavLink to="/register/speaker/">Registrate aquí</NavLink>
      </p>
      <p className="calltoregister-block__guidelines"><a href={`${import.meta.env.BASE_URL}docs/lineamientos-27082024.pdf`} download="lineamientos-27082024.pdf">Lineamientos para la elaboración de ponencias</a></p>
      <p className="calltoregister-block__problems">* si presenta algún problema en el registro o envío de su ponencia escriba al correo <a href="mailto:integrandofc@ciencias.unam.mx">integrandofc@ciencias.unam.mx</a></p>
    </div>
  );
}

export default CallToRegisterBlock;
