import { useRef } from "react"
import "./Course.css"

const Course = ({ title, subtitle, image }) => {

  const myReference = useRef()

  const deactivateImage = () => {
    myReference.current.classList.add("deactivated")
  }

  return (
    <div>
      <img
        ref={myReference}
        src={image}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button onClick={deactivateImage}>Deactivate</button>
    </div>
  )
}

/* 
function Course(props) {
  return (
    <div>
      <img
        src={props.image}
        alt={props.title}
      />
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  )
} 
*/

export default Course