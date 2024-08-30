import { Component } from "react";

/* Declaración de un componente usando arrow 
function en react */

/* const Calculadora = () => {
    return ()
}
export default Calculadora */

/* Declaración de un componente usando clases
(programación orientada a objetos) en react */

/* Las props son valores estáticos 
¿Cómo trabajar con valores dinámicos?
La respuesta es el estado de los componentes*/

/* Binding de las funciones: hay que declarar en
constructor que métodos voy a utilizar haciendo
un bind, de lo contrario no lo reconoce*/

/* Estados de un componente (tipos: clase y función):
1. Se construye
2. Se renderiza
3. Se renderizó
4. Se desmonta */

/* Los componentes que tiene estado se llaman: Statefull
caso contrario se llama: Stateless

Antes en React solo los componentes del tipo clase
podían tener estado, pero ahora las funciones pueden.
*/

class Calculadora1 extends Component {
  //Primer paso del ciclo de vida
  constructor(props) {
    /* 
        Herencia: envía la información 
        a la clase padre Component, esto
        es de JS.
    */
    super(props);
    this.state = {
      numero1: 0,
      numero2: 0,
    };

    /* En el constructor es necesario hacer bind
    para que un método sea reconocido y utilizado 
    en mi clase, POO de JS */
    this.setNumber1 = this.setNumber1.bind(this);
    this.setNumber2 = this.setNumber2.bind(this);
  }

  //De forma implícita los metodos reciben el evento
  setNumber1(e) {
    return this.setState({
      ...this.state,
      numero1: e.target.value,
    });
  }
  setNumber2(e) {
    return this.setState({
      ...this.state,
      numero2: e.target.value,
    });
  }
  //Segundo paso del ciclo de vida
  render() {
    return (
      <>
        <span>Hola mundo desde una clase</span>
        <h2>{this.props.nombre}</h2>
        <form>
          <input
            type="number"
            name="numero1"
            value={this.state.numero1}
            onChange={this.setNumber1}
          />
          <input
            type="number"
            name="numero2"
            value={this.state.numero2}
            onChange={this.setNumber2}
          />
          <input type="submit" name="enviar" value="Calcular" />
        </form>
        <span>
          Resultado: {Number(this.state.numero1) + Number(this.state.numero2)}{" "}
        </span>
      </>
    );
  }

  /* Tercer paso del ciclo de vida: Una vez que
    el componente hay sido montado en el DOM:
    Debuging de JS
    ¿Qué hace que un componente se renderice nuevamente?
    1. Actualización de estados
    2. Que otro componente le haya pasado una prop diferente*/
  componentDidMount() {
    console.log("El componente se esta renderizando nuevamente, incorrecto");
  }

  /* Cuarto paso del ciclo de vida: Va a dejar
    de existir en el DOM:
    Terminar Lissening, Interval, Timeout de JS*/
  componentWillUnmount() {}
}

export default Calculadora1;
