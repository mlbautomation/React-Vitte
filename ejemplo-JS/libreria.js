export function createElement(elemento, atributos = {}, hijos = []) {
  const elem = document.createElement(elemento);
  let keys = Object.keys(atributos);
  keys.map((k) => elem.setAttribute(k, atributos[k]));

  hijos.map((h) => {
    if (typeof h === "string") {
      elem.innerHTML += h;
      return;
    }
    elem.appendChild(h);
  });

  return elem;
}

export function render(contenido, elementoRaiz) {
  let elemRaiz = document.getElementById(elementoRaiz);
  elemRaiz.appendChild(contenido);
}
