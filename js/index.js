import personajes from "./personajes.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";

const listaPersonajes = document.querySelector(".personajes");
const pintarPersonajes = (personajes) => {
  for (const personaje of personajes) {
    const personajeDummy = document
      .querySelector(".personaje-dummy")
      .cloneNode(true);
    personajeDummy.classList.remove("personaje-dummy");

    const imagen = personajeDummy.querySelector(".card.personaje-card img");
    imagen.src = `../img/${personaje.nombre.toLowerCase()}.jpg`;
    imagen.alt = `Plano medio de ${personaje.nombre} ${personaje.familia}`;
    const nombreFamilia = personajeDummy.querySelector(
      ".card-body .nombre.card-title"
    );
    const emoji = personajeDummy.querySelector(".emoji");
    nombreFamilia.textContent = `${personaje.nombre} ${personaje.familia}`;
    const edad = personajeDummy.querySelector(".info .metadata li");
    edad.textContent = personaje.edad;
    const estado = personajeDummy.querySelector(".info .metadata li~li");
    if (personaje.vivo) {
      estado.querySelector("i").classList.remove("fa-thumbs-down");
    } else {
      estado.querySelector("i~i").classList.remove("fa-thumbs-up");
      imagen.classList.add("del-reves");
    }

    const info = personajeDummy.querySelector(".personaje-overlay .metadata");
    const anyosReinado = info.querySelector("li:first-child");
    const arma = info.querySelector("li:nth-child(2)");
    const destreza = info.querySelector("li:nth-child(3)");
    const peloteo = info.querySelector("li:nth-child(4)");
    const asesoraA = info.querySelector("li:nth-child(5)");
    const sirveA = info.querySelector("li:nth-child(6)");
    if (personaje instanceof Rey) {
      anyosReinado.textContent += ` ${personaje.anyosReinado}`;
      arma.textContent = "";
      destreza.textContent = "";
      peloteo.textContent = "";
      asesoraA.textContent = "";
      sirveA.textContent = "";
      emoji.textContent = "👑";
    }
    if (personaje instanceof Asesor) {
      asesoraA.textContent += ` ${personaje.asesorado.nombre} ${personaje.asesorado.familia}`;
      anyosReinado.textContent = "";
      arma.textContent = "";
      destreza.textContent = "";
      peloteo.textContent = "";
      sirveA.textContent = "";
      emoji.textContent = "🎓";
    }
    if (personaje instanceof Escudero) {
      peloteo.textContent += ` ${personaje.pelotismo}`;
      sirveA.textContent += ` ${personaje.sirveA.nombre} ${personaje.sirveA.familia}`;
      anyosReinado.textContent = "";
      arma.textContent = "";
      destreza.textContent = "";
      asesoraA.textContent = "";
      emoji.textContent = "🛡";
    }
    if (personaje instanceof Luchador) {
      arma.textContent += ` ${personaje.arma}`;
      destreza.textContent += ` ${personaje.destreza}`;
      anyosReinado.textContent = "";
      peloteo.textContent = "";
      asesoraA.textContent = "";
      sirveA.textContent = "";
      emoji.textContent = "🗡";
    }

    const acciones = personajeDummy.querySelector(
      ".personaje-overlay .acciones"
    );
    // Implementando función comunicar

    const habla = acciones.querySelector("#accion_hablar");
    const comunicaciones = document.querySelector(".comunicaciones");
    console.log(comunicaciones);

    // eslint-disable-next-line no-loop-func

    habla.addEventListener("click", (event) => {
      event.preventDefault();
      comunicaciones.textContent = personaje.comunicar();
      comunicaciones.classList.add("on");
      setTimeout(() => {
        comunicaciones.classList.remove("on");
      }, 2000);

      const imgPersonaje = comunicaciones.querySelector(".imgPersonaje");
      imgPersonaje.src = `img/${personaje.nombre}.jpg`;
      imgPersonaje.alt = `${personaje.nombre} de ${personaje.familia}`;

      console.log(personaje.comunicar());
    });

    const muere = acciones.querySelector("#accion_morir");









    listaPersonajes.append(personajeDummy);
  }
};

pintarPersonajes(personajes);
