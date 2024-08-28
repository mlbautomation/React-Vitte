import { useState, useEffect } from "react"

const Calculator = ({ name }) => {

    const [numbers, setNumbers] = useState({
        number1: 0,
        number2: 0
    })

    const [text, setText] = useState("")

    useEffect(() => {
        console.log("Wellcome")
        console.log(new Date().getTime())
        return () => { }
    }, [text])

    const setNumber1 = (e) => {
        setNumbers({
            ...numbers,
            number1: e.target.value
        })
    }

    const setNumber2 = (e) => {
        setNumbers({
            ...numbers,
            number2: e.target.value
        })
    }

    return (
        <>
            <span> Hello World from a Class</span>
            <h2>{name}</h2>
            <form>
                <input
                    type="number"
                    name="number1"
                    value={numbers.number1}
                    onChange={setNumber1}
                />
                <input
                    type="number"
                    name="number2"
                    value={numbers.number2}
                    onChange={setNumber2}
                />
                <input type="submit" name="send" value="Claculate" />
            </form>
            <span>Result: {Number(numbers.number1) + Number(numbers.number2)} </span>
            <input type="text" onChange={(e) => { setText(e.target.value) }}></input>
            <span>{text}</span>
        </>
    )
}

export default Calculator