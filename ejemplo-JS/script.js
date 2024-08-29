import { createElement, render } from "./libreria.js";

const Link = createElement("a", { class: "link", href: "/hola" }, ["Hola"]);
const Header = createElement(
  "header",
  { id: "EDteam", class: "main-header header" },
  [Link]
);
render(Header, "root");

/* Ahora aregaremos HTML en el Header creado */
const Article1 = `
    <article class="container-article">
        <div>
            <img src="/mi-imagen1.png" />
        </div>
        <div>
            <h2>Mi título 1</h2>
            <p>Contenido 1...</p>
        </div>
    </article>
`;

const Article2 = (imgSrc, title, content) => `
    <article class="container-article">
        <div>
            <img src="${imgSrc}" />
        </div>
        <div>
            <h2>${title}</h2>
            <p>${content}</p>
        </div>
    </article>
`;

/* const miElemento = <div><h1>Esto me da un error en JS, pero no en JSX</h1></div> */

const body = document.getElementById("root");
body.innerHTML += Article1;
body.innerHTML += Article2("/mi-imagen2.png", "Mi título 2", "Contenido 2...");
