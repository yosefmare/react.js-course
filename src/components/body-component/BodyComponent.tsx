import './body-component.css';
import "../buttons-component/buttons-component.css"
import ButtonsComponent from "../buttons-component/ButtonsComponent";
import PostComponent from "../PostComponent/PostComponent";

const BodyComponent = () => {
    return (
        <>
            <div className='container'>
                <div>
                    <PostComponent title='the day' content= "is too long this week" />
                    <PostComponent title='the sun' content= "is beautiful" />
                    <PostComponent title='hello world' content= "hayyyyyyyy😄😄😄" />
                    <PostComponent title='me' content= "🫠" />
                    <PostComponent title='and' content= "🅰️" />
                    <PostComponent title='you' content= "🙃" />
                </div>
                <div className='button-container'>
                    <ButtonsComponent index= {1} />
                    <ButtonsComponent index= {2} />
                    <ButtonsComponent index= {3} />
                    <ButtonsComponent index= {4} />
                    <ButtonsComponent index= {5} />
                    <ButtonsComponent index= {6} />
                    <ButtonsComponent index= {7} />
                    <ButtonsComponent index= {8} />
                    <ButtonsComponent index= {9} />
                    <ButtonsComponent index= {10} />
                </div>
            </div>
        </>
    )
}

export default BodyComponent