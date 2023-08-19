import './body-component.css';
import ButtonsComponent from "../buttons-component/ButtonsComponent";
import PostComponent from "../PostComponent/PostComponent";

const BodyComponent = () => {
    return (
        <>
            <div className='container'>
                <div>
                    <PostComponent />
                    <PostComponent />
                    <PostComponent />
                    <PostComponent />
                    <PostComponent />
                    <PostComponent />
                </div>
                <div>
                    <ButtonsComponent />
                </div>
            </div>
        </>
    )
}

export default BodyComponent