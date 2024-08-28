import { useState } from "react"

/* Traduciendo de tipo clase a tipo función 
No nesecitamos: 
1. Importar componentes de React
2. Constructor 
3. No necesito render, this

useState es un hook
*/

const Calculadora2 = ({ nombre }) => {

    const [state, setState] = useState({
        numero1: 0,
        numero2: 0
    })

    const setNumber1 = (e) => {
        setState({
            ...state,
            numero1: e.target.value
        })
    }

    const setNumber2 = (e) => {
        setState({
            ...state,
            numero2: e.target.value
        })
    }

    return (
        <>
            <span>Hola mundo desde una clase</span>
            <h2>{nombre}</h2>
            <form>
                <input
                    type="number"
                    name="numero1"
                    value={state.numero1}
                    onChange={setNumber1}
                />
                <input
                    type="number"
                    name="numero2"
                    value={state.numero2}
                    onChange={setNumber2}
                />
                <input type="submit" name="enviar" value="Calcular" />
            </form>
            <span>Resultado: {Number(state.numero1) + Number(state.numero2)} </span>
        </>
    )
}

export default Calculadora2