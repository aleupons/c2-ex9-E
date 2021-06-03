import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const personajes = [joffrey, jaime, tyrion, daenerys, bronn];

const hablanLuchadores = (personajes) =>
  personajes
    .filter((personaje) => personaje instanceof Luchador)
    .map((personaje) => personaje.comunicar());

console.log(`Los personajes pertenecen a la serie "${personajes[0].serie}".`);

const mensajes = hablanLuchadores(personajes);
for (const mensaje of mensajes) {
  console.log(mensaje);
}

tyrion.muere();
jaime.muere();

const resumenPersonajes = (personajes) =>
  personajes
    .map((personaje) => personaje.constructor.name)
    .filter((tipo, i, tipos) => tipos.indexOf(tipo) === i)
    .map((tipo) => ({
      tipo,
      personajes: personajes
        .filter((personaje) => personaje.constructor.name === tipo)
        .map((personaje) => ({
          nombre: `${personaje.nombre} ${personaje.familia}`,
          estado: personaje.vivo ? "vivo" : "muerto",
          edad: personaje.edad,
        }))
        .sort((personajeA, personajeB) => personajeA.edad - personajeB.edad),
    }));

export default personajes;
