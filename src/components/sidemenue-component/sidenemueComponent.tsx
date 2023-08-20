import { SideMenuComponent } from "../../interfaces/interface";
import "../buttons-component/buttons-component.css"
const showCategories: boolean = true;
const SidemenuComponent = ({ children }: SideMenuComponent) => {
    if (showCategories) {
        return (
            <>'
                <div className='button-container'>
                    {children}
                </div>
            </>
        )
    } else {
        return (
            null
        )
    }
}
export default SidemenuComponent
