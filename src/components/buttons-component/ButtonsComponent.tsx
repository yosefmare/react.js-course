import "./buttons-component.css"
import { MyPropsButtonsComponent } from "../../interfaces/interface";

const ButtonsComponent = ({ index }: MyPropsButtonsComponent) => {
    return (
        <>
                <button>{index}</button>
        </>
    )
}
export default ButtonsComponent