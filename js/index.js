import personajes from "./personajes.js";

const listaPersonajes = document.querySelector(".personajes");
const pintarPersonajes = (personajes) => {
  for (const { nombre, familia, edad, vivo, serie } of personajes) {
    const personajeDummy = document
      .querySelector(".personaje-dummy")
      .cloneNode(true);
    personajeDummy.classList.remove("personaje-dummy");
    const imagen = personajeDummy.querySelector(".card.personaje-card img");
    const nombreFamilia = personajeDummy.querySelector(
      ".card-body .nombre.card-title"
    );
    nombreFamilia.textContent = `${nombre} ${familia}`;
    const edadPersonaje = personajeDummy.querySelector(".info .metadata li");
    edadPersonaje.textContent = edad;
    const estadoPersonaje = personajeDummy.querySelector(
      ".info .metadata li~li"
    );
    const info = personajeDummy.querySelector(".personaje-overlay .metadata");
    const anyosReinado = info.querySelector("li:first-child");
    const arma = info.querySelector("li:nth-child(2)");
    const destreza = info.querySelector("li:nth-child(3)");
    const peloteo = info.querySelector("li:nth-child(4)");
    const asesoraA = info.querySelector("li:nth-child(5)");
    const sirveA = info.querySelector("li:nth-child(6)");
    const acciones = personajeDummy.querySelector(
      ".personaje-overlay .acciones"
    );
    const habla = acciones.querySelector("button");
    const muere = acciones.querySelector("button~button");
    listaPersonajes.append(personajeDummy);
  }
};
pintarPersonajes(personajes);
