import "./buttons-component.css"
import { MyPropsButtonsComponent } from "../../interfaces/interface";

const ButtonsComponent = ({ index, word}: MyPropsButtonsComponent) => {
    return (
        <>
                <button>{index}{word}</button>
        </>
    )
}
export default ButtonsComponent